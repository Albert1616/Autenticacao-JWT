import FormSingIn from '@/components/FormSingIn'

function SignIn() {
  return (
    <div className='p-4 h-screen flex flex-col items-center justify-center'>
        <h1 className='text-blue-400'>Sign In</h1>
        <FormSingIn />
    </div>
  )
}

export default SignIn