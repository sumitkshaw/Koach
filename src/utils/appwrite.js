import { Client, Account } from 'appwrite';

const client = new Client();

// Get environment variables with safe fallbacks to avoid runtime crashes
// Note: Keep these fallbacks in sync with your actual Appwrite project values
let endpoint = import.meta.env?.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
let projectId = import.meta.env?.VITE_APPWRITE_PROJECT_ID || '68d6e7520021a096d289';

// Validate environment variables
if (!import.meta.env?.VITE_APPWRITE_ENDPOINT || !import.meta.env?.VITE_APPWRITE_PROJECT_ID) {
  console.warn('[Appwrite] Vite env vars missing. Using fallback endpoint/project. Ensure .env is loaded and restart Vite.');
}
client
  .setEndpoint(endpoint)
  .setProject(projectId);

// Debug: print effective config at runtime (safe to keep; remove if noisy)
if (typeof window !== 'undefined') {
  console.info('[Appwrite] Using endpoint:', endpoint, 'project:', projectId, 'origin:', window.location.origin);
  window.__APPWRITE_DEBUG__ = { endpoint, projectId, origin: window.location.origin };
}

export const account = new Account(client);
export default client;

// OAuth providers
export const oauthProviders = { google: 'google', linkedin: 'linkedin' };