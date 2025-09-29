interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center p-4 md:p-10'>
      {children}
    </main>
  )
}
