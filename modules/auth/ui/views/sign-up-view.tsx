'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { EyeIcon, EyeOffIcon, OctagonAlertIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { authClient } from '@/lib/auth-client'
import { cn } from '@/lib/utils'

import { SignUpData, signUpSchema } from '@/modules/schemas'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Input } from '@/components/ui/input'

const SignUpView = () => {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: SignUpData) => {
    setIsPending(true)
    setErrorMessage(null)

    authClient.signUp.email(
      {
        name: data.username,
        email: data.email,
        password: data.password
      },
      {
        onSuccess: () => {
          setIsPending(false)
          router.push('/posts')
          toast.success('Successfully signed up!')
        },
        onError: ({ error }) => {
          setIsPending(false)
          setErrorMessage(error.message)
          toast.error('Failed to sign up.')
        }
      }
    )
  }

  const onSocial = async (provider: 'google' | 'github') => {
    setIsPending(true)
    setErrorMessage(null)

    authClient.signIn.social(
      {
        provider,
        callbackURL: '/posts'
      },
      {
        onSuccess: () => {
          setIsPending(false)
          toast.success('Successfully signed in!')
        },
        onError: ({ error }) => {
          setIsPending(false)
          setErrorMessage(error.message)
          toast.error('Failed to sign in.')
        }
      }
    )
  }

  return (
    <div className='flex flex-col gap-y-6'>
      <Card className='bg-background overflow-hidden p-0'>
        <CardContent className='grid p-0 lg:grid-cols-2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='max-w-md p-6 lg:p-8'
            >
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-y-2'>
                  <h1 className='text-3xl font-bold'>Crea tu cuenta</h1>
                  <p className='text-muted-foreground text-sm font-medium text-balance'>
                    Únete a la comunidad salaverrina y comparte tus posts.
                  </p>
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de usuario</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            type='text'
                            placeholder='vegetta777'
                            className='text-sm'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='m@example.com'
                            className='text-sm'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              placeholder='********'
                              className='pr-10 text-sm'
                              {...field}
                            />
                            <Button
                              type='button'
                              variant='ghost'
                              size='sm'
                              className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label={
                                showPassword ? 'Hide password' : 'Show password'
                              }
                            >
                              {showPassword ? (
                                <EyeOffIcon className='h-4 w-4' />
                              ) : (
                                <EyeIcon className='h-4 w-4' />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormDescription className='text-xs'>
                          Mínimo 8 caracteres, debe contener al menos una letra
                          mayúscula, una letra minúscula y un número
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {!!errorMessage && (
                  <Alert
                    variant='destructive'
                    className='bg-destructive/10 border-none text-sm'
                  >
                    <OctagonAlertIcon className='h-4 w-4' />
                    <AlertTitle>{errorMessage}</AlertTitle>
                  </Alert>
                )}

                <HoverBorderGradient
                  containerClassName='rounded-full w-full'
                  as='div'
                  className='flex w-full items-center px-0 py-0'
                >
                  <Button
                    type='submit'
                    variant='ghost'
                    className='w-full rounded-full bg-black/80! font-semibold hover:bg-transparent!'
                    disabled={isPending}
                  >
                    {isPending ? 'Creando cuenta...' : 'Crear cuenta'}
                  </Button>
                </HoverBorderGradient>

                <div className='after:border-border relative text-center text-xs after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                  <span className='bg-background text-muted-foreground relative z-10 px-2'>
                    O continuar con
                  </span>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <Button
                    variant='outline'
                    type='button'
                    disabled={isPending}
                    onClick={() => {
                      onSocial('google')
                    }}
                  >
                    <Image
                      src='/google.svg'
                      alt='Google Logo'
                      width={16}
                      height={16}
                    />
                    <span className='font-semibold'>Google</span>
                  </Button>
                  <Button
                    type='button'
                    disabled={isPending}
                    onClick={() => {
                      onSocial('github')
                    }}
                  >
                    <Image
                      src='/github.svg'
                      alt='GitHub Logo'
                      width={16}
                      height={16}
                    />
                    <span className='font-semibold'>GitHub</span>
                  </Button>
                </div>

                <div className='text-center text-sm'>
                  <p className='text-muted-foreground'>
                    ¿Ya tienes una cuenta?{' '}
                    <Link
                      href='/sign-in'
                      className={cn(
                        'font-medium text-rose-500',
                        isPending && 'pointer-events-none'
                      )}
                    >
                      Inicia sesión
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </Form>

          <BackgroundGradientAnimation containerClassName='max-w-md h-auto hidden lg:block'>
            <div className='pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center gap-y-2 px-4 text-center font-bold text-white md:text-6xl'>
              <Image
                src='/logo.svg'
                alt='VerrySala Logo'
                width={64}
                height={64}
              />
              <p className='bg-gradient-to-b from-white to-white/50 bg-clip-text pb-2 text-transparent drop-shadow-2xl'>
                VerrySala
              </p>
            </div>
          </BackgroundGradientAnimation>
        </CardContent>
      </Card>

      <div className='text-muted-foreground [&_a]:hover:text-primary text-center text-xs font-medium text-balance'>
        <p>Al hacer clic en &quot;Crear cuenta&quot;, aceptas nuestros</p>
        <p>
          <a href='/terms' target='_blank' rel='noreferrer'>
            Términos de Servicio
          </a>{' '}
          y{' '}
          <a href='/privacy' target='_blank' rel='noreferrer'>
            Política de Privacidad
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export { SignUpView }
