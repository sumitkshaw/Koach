import { account, oauthProviders } from './appwrite';
import { ID } from 'appwrite';

// Add delay to prevent rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create account with email/password
export const createAccount = async (email, password, name) => {
  try {
    await delay(1000);

    // Create user account
    const user = await account.create(ID.unique(), email, password, name);

    // Try to send verification email (do not block signup on failure)
    try {
      // Appwrite will append userId & secret automatically to this redirect URL
      await account.createVerification(`${window.location.origin}/login`);
      return { user, message: 'Account created! Verification email sent. Please check your inbox (and spam).' };
    } catch (verr) {
      console.warn('[Signup] Verification send failed:', { message: verr?.message, code: verr?.code, type: verr?.type });
      // Still consider signup successful; user can resend from Login page
      return { user, message: 'Account created! If you did not receive a verification email, use "Resend Verification" on the login page.' };
    }
  } catch (error) {
    // Log raw error for debugging (UI will still show a friendly message)
    console.error('[Signup] createAccount error:', {
      message: error?.message,
      code: error?.code,
      type: error?.type,
    });
    if (error.message?.includes('rate limit') || error.code === 429) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }
    if (error.type === 'user_already_exists') {
      throw new Error('An account with this email already exists. Please try logging in or use "Forgot Password" if you forgot your password.');
    }
    // Generic fallback to avoid exposing platform/internal messages
    throw new Error('Sign up failed. Please try again.');
  }
};

// Login with email/password
export const login = async (email, password) => {
  try {
    await delay(1000);
    const normalizedEmail = String(email || '').trim().toLowerCase();
    // Do not trim password; users may have intentional leading/trailing spaces
    const session = await account.createEmailPasswordSession(normalizedEmail, String(password ?? ''));
    const user = await account.get();

    if (!user.emailVerification) {
      await account.deleteSession('current');
      throw new Error('Please verify your email before logging in. Check your inbox for verification link.');
    }

    return { session, user };
  } catch (error) {
    if (error.message?.includes('rate limit') || error.code === 429) {
      throw new Error('Too many login attempts. Please wait before trying again.');
    } else if (error.type === 'user_invalid_credentials' || error.code === 401) {
      throw new Error('Invalid email or password. Please check Caps Lock and try again, or use "Forgot Password".');
    } else if (error.message?.includes('verify your email')) {
      throw error;
    }
    throw new Error(`Login failed. ${error?.message || 'Please try again.'}`);
  }
};

// OAuth login
export const loginWithOAuth = async (provider, successUrl, failureUrl) => {
  try {
    // Redirect to welcome-step after successful OAuth login
    const successUrl = `${window.location.origin}/welcome-step`;
    await account.createOAuth2Session(
      provider,
      successUrl,  // Redirect to /welcome-step after successful OAuth
      failureUrl || `${window.location.origin}/login`
    );
  } catch (error) {
    console.error('OAuth login error:', error);
    throw new Error(`OAuth login failed: ${error.message}`);
  }
};

// Verify email using magic URL parameters
export const verifyEmail = async (userId, secret) => {
  try {
    await delay(500);
    const result = await account.updateVerification(userId, secret);
    return result;
  } catch (error) {
    throw new Error('Invalid or expired verification link.');
  }
};

// Resend verification email
export const resendVerification = async (email, password) => {
  try {
    await delay(1000);
    // Try to use an existing session first (if any)
    let existingUser = null;
    try {
      existingUser = await account.get();
    } catch (_) {
      existingUser = null;
    }

    let createdTempSession = false;

    // If no session, create a temporary session using credentials
    if (!existingUser) {
      const normalizedEmail = String(email || '').trim().toLowerCase();
      // Do not trim password
      await account.createEmailPasswordSession(normalizedEmail, String(password ?? ''));
      createdTempSession = true;
    }

    // Send verification email (Appwrite adds userId & secret)
    await account.createVerification(`${window.location.origin}/login`);

    // Clean up temporary session if we created one just for sending email
    if (createdTempSession) {
      await account.deleteSession('current');
    }

    return { success: true };
  } catch (error) {
    if (error.message?.includes('rate limit') || error.code === 429) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }
    if (error.type === 'user_invalid_credentials' || error.code === 401) {
      throw new Error('Invalid email or password. Please check your credentials. If you signed up with Google/LinkedIn, use that to log in.');
    }
    if (error.message?.includes('More factors are required')) {
      throw new Error('Account exists but verification email failed to send. Please try again later.');
    }
    throw new Error(`Failed to send verification email. ${error?.message || 'Please try again.'}`);
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    return null;
  }
};

// Logout
export const logout = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    throw error;
  }
};

// Check URL for verification parameters
export const checkVerificationInUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');
  
  return { userId, secret };
};

// Password reset functionality
export const createPasswordRecovery = async (email, redirectUrl) => {
  try {
    await delay(1000);
    const normalizedEmail = String(email || '').trim().toLowerCase();
    await account.createRecovery(
      normalizedEmail,
      redirectUrl || `${window.location.origin}/reset-password`
    );
    return { success: true };
  } catch (error) {
    if (error.message?.includes('rate limit') || error.code === 429) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }
    if (error.type === 'user_not_found') {
      throw new Error('No account found with this email address.');
    }
    throw new Error(`Failed to send password reset email. ${error?.message || 'Please try again.'}`);
  }
};

// Update password using recovery token
export const updatePassword = async (userId, secret, password) => {
  try {
    await delay(1000);
    await account.updateRecovery(userId, secret, password);
    return { success: true };
  } catch (error) {
    throw new Error('Invalid or expired reset link. Please request a new one.');
  }
};

// Check URL for password reset parameters
export const checkPasswordResetInUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');
  
  return { userId, secret };
};