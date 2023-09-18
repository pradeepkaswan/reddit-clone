import Register from '@/components/Register'
import { FC } from 'react'

const page: FC = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Register />
      </div>
    </div>
  )
}

export default page
