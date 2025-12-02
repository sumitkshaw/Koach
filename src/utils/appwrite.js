import { Client, Account } from 'appwrite';

const client = new Client();

// Get environment variables with safe fallbacks to avoid runtime crashes
let endpoint = import.meta.env?.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
let projectId = import.meta.env?.VITE_APPWRITE_PROJECT_ID || '68d6e7520021a096d289';

if (!import.meta.env?.VITE_APPWRITE_ENDPOINT || !import.meta.env?.VITE_APPWRITE_PROJECT_ID) {
  console.warn('[Appwrite] Vite env vars missing. Using fallback endpoint/project. Ensure .env is loaded and restart Vite.');
}

client
  .setEndpoint(endpoint)
  .setProject(projectId);

export const account = new Account(client); // This should be exported
export const oauthProviders = { google: 'google', linkedin: 'linkedin' };
export default client;