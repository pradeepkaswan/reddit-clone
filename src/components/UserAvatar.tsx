import { User } from 'next-auth'
import { FC } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { Icons } from './Icons'
import { AvatarImage, AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
