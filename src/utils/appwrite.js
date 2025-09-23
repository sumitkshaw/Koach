import { Client, Account, OAuthProvider } from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export default client;

// OAuth providers
export const oauthProviders = {
  google: OAuthProvider.Google,
  linkedin: 'linkedin' // Note: LinkedIn might need custom setup in Appwrite
};