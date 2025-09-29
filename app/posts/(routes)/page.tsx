import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

import { PostsView } from '@/modules/posts/ui/views/posts-view'

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/sign-in')

  return (
    <>
      <PostsView name={session.user.name} />
    </>
  )
}
