'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { useState } from 'react'
import { Separator } from '@/components/ui/Separator'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { CreateSubredditPayload } from '@/lib/validators/subreddit'
import { toast } from '@/hooks/use-toast'
import { useCustomToasts } from '@/hooks/use-custom-toasts'

const Page = () => {
  const [input, setInput] = useState<string>('')
  const router = useRouter()
  const { loginToast } = useCustomToasts()

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      }

      const { data } = await axios.post('/api/subreddit', payload)
      return data as string
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: ` Sorry, r/${input} is taken.`,
            description: 'Try another.',
            variant: 'destructive',
          })
        }

        if (err.response?.status === 422) {
          return toast({
            title: 'Invalid subreddit name.',
            description:
              'Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.',
            variant: 'destructive',
          })
        }

        if (err.response?.status === 401) {
          return loginToast()
        }
      }

      toast({
        title: 'There was an error.',
        description: 'Could not create subreddit.',
        variant: 'destructive',
      })
    },
    onSuccess: (data) => {
      router.push(`/r/${data}`)
    },
  })

  return (
    <Card className=" mx-auto h-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-xl">Create a community</CardTitle>
      </CardHeader>
      <Separator className="mb-6" />

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <CardDescription className=" pb-4">
                Community names including capitalization cannot be changed.{' '}
              </CardDescription>
              <div className="relative">
                <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400">
                  r/
                </p>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="pl-6"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button
                type="button"
                isLoading={isLoading}
                disabled={input.length === 0}
                onClick={() => createCommunity()}
              >
                Create Community
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default Page
