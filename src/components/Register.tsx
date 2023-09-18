import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'

const Register = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col space-y-2">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Sign up
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </CardDescription>
      </CardHeader>
      <div className="grid gap-6">
        <UserAuthForm />
      </div>
      <CardHeader className=" flex flex-col space-y-2">
        <p className="text-sm text-muted-foreground">
          Already a redditor?{'   '}
          <Link
            href="/login"
            className="text-zinc-800 underline underline-offset-4"
          >
            Log In
          </Link>
        </p>
      </CardHeader>
    </Card>
  )
}

export default Register
