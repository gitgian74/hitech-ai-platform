import { redirect } from 'next/navigation'
import { getLoggedInUser } from '@/lib/appwrite/session'
import { signOut } from '@/lib/appwrite/actions'

export default async function DashboardPage() {
  const user = await getLoggedInUser()
  if (!user) redirect('/auth/sign-in')

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">HiTech AI Platform</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name || user.email}</h1>
        <p className="mt-2 text-gray-500">Your AI platform dashboard.</p>
      </div>
    </main>
  )
}
