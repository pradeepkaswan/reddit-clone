'use client'

import { useState } from 'react'
import { Button, buttonVariants } from './ui/Button'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const ContinueWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-6">
      <Button
        className={cn(buttonVariants())}
        onClick={ContinueWithGoogle}
        isLoading={isLoading}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Continue with Google
      </Button>
    </div>
  )
}

export default UserAuthForm
