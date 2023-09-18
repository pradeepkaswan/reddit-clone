import UserAuthForm from './UserAuthForm'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'

const Login = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col space-y-2">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Log In
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
      </CardHeader>
      <div className="grid gap-6">
        <UserAuthForm />
      </div>
      <CardHeader className="flex flex-col space-y-2">
        <p className="text-sm text-muted-foreground">
          New to Reddit?{'   '}{' '}
          <Link
            href="/register"
            className="text-zinc-800 underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </CardHeader>
    </Card>
  )
}

export default Login
