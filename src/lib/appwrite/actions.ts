'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { ID } from 'node-appwrite'
import { createAdminClient, createSessionClient } from './server'
import { SESSION_COOKIE } from './session'

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string

  const { account } = createAdminClient()

  await account.create(ID.unique(), email, password, name)
  const session = await account.createEmailPasswordSession(email, password)

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, session.secret, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })

  redirect('/dashboard')
}

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { account } = createAdminClient()
  const session = await account.createEmailPasswordSession(email, password)

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, session.secret, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })

  redirect('/dashboard')
}

export async function signOut() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value
  if (sessionToken) {
    const { account } = createSessionClient(sessionToken)
    await account.deleteSession('current')
    cookieStore.delete(SESSION_COOKIE)
  }
  redirect('/auth/sign-in')
}
