'use client'

import { useRouter } from 'next/navigation'

import { authClient } from '@/lib/auth-client'

import { Button } from '@/components/ui/button'

interface PostsViewProps {
  name: string
}

const PostsView = ({ name }: PostsViewProps) => {
  const router = useRouter()
  return (
    <>
      <div>PostsView for {name}</div>

      <Button
        onClick={() => {
          authClient.signOut()
          router.push('/sign-in')
        }}
      >
        Sign Out
      </Button>
    </>
  )
}

export { PostsView }
