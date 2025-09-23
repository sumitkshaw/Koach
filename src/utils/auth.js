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
    
    // Create session to get proper permissions
    await account.createEmailPasswordSession(email, password);
    
    // Send verification email with magic link
    await account.createVerification(`${window.location.origin}/`);
    
    return user;
  } catch (error) {
    if (error.message?.includes('rate limit') || error.code === 429) {
      throw new Error('Too many attempts. Please wait before trying again.');
    }
    if (error.type === 'user_already_exists') {
      throw new Error('An account with this email already exists.');
    }
    throw error;
  }
};

// Login with email/password
export const login = async (email, password) => {
  try {
    await delay(1000);
    const session = await account.createEmailPasswordSession(email, password);
    
    // Check if user is verified
    const user = await account.get();
    if (!user.emailVerification) {
      throw new Error('Please verify your email before logging in.');
    }
    
    return session;
  } catch (error) {
    if (error.message?.includes('rate limit') || error.code === 429) {
      throw new Error('Too many login attempts. Please wait before trying again.');
    } else if (error.type === 'user_invalid_credentials') {
      throw new Error('Invalid email or password.');
    }
    throw error;
  }
};

// OAuth login
export const loginWithOAuth = async (provider, successUrl, failureUrl) => {
  try {
    await account.createOAuth2Session(
      provider,
      successUrl || `${window.location.origin}/dashboard`,
      failureUrl || `${window.location.origin}/login`
    );
  } catch (error) {
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
export const resendVerification = async () => {
  try {
    await delay(1000);
    await account.createVerification(`${window.location.origin}/`);
    return { success: true };
  } catch (error) {
    throw error;
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