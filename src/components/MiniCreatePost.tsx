'use client'

import { Session } from 'next-auth'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import UserAvatar from './UserAvatar'
import { Card } from './ui/Card'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { ImageIcon, Link } from 'lucide-react'

interface MiniCreatePostProps {
  session: Session | null
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Card className="overflow-hidden rounded-md bg-white shadow ">
      <div className="h-full ps-6 py-4 flex justify-between gap-1">
        <div className="relative mr-2 -ml-2">
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
            }}
          />

          <span className="absolute bottom-0 right-0 rounded-full w-2.5 h-2.5 bg-green-500 outline outline-2 outline-white" />
        </div>

        <Input
          readOnly
          onClick={() => router.push(pathname + '/submit')}
          placeholder="Create Post"
        />

        <Button
          variant="ghost"
          onClick={() => router.push(pathname + '/submit')}
        >
          <ImageIcon className="text-zinc-600" />
        </Button>
        <Button
          className="-ml-4"
          variant="ghost"
          onClick={() => router.push(pathname + '/submit')}
        >
          <Link className="text-zinc-600" />
        </Button>
      </div>
    </Card>
  )
}

export default MiniCreatePost
