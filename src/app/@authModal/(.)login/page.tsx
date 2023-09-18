import CloseModal from '@/components/CloseModal'
import Login from '@/components/Login'

const page = () => {
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full max-w-xl">
        <div className="relative rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default page
