import { Client, Account, Users } from 'node-appwrite'

function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!)

  return { account: new Account(client), users: new Users(client) }
}

function createSessionClient(sessionToken: string) {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setSession(sessionToken)

  return { account: new Account(client) }
}

export { createAdminClient, createSessionClient }
