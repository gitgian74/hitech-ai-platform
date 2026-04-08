import { cookies } from 'next/headers'
import { createSessionClient } from './server'

const SESSION_COOKIE = 'appwrite-session'

export async function getLoggedInUser() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value
  if (!sessionToken) return null

  try {
    const { account } = createSessionClient(sessionToken)
    return await account.get()
  } catch {
    return null
  }
}

export { SESSION_COOKIE }
