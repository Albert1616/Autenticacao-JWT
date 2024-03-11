import {Input} from './ui/input'
import { Label } from  './ui/label'
import { Button } from './ui/button'
import {CircleUserIcon,Mail,LockKeyhole} from 'lucide-react'
import Link from 'next/link'
import AuthActions from '@/lib/auth/actions/utils'

function FormLogin() {
  return (
    <div className='bg-slate-300 p-16 rounded-xl flex flex-col items-center gap-6'>
        <CircleUserIcon size={80} color='#292727'/>
        <form className='flex flex-col gap-4' action={AuthActions.login}>
            <div className='flex items-center'>
                <Label htmlFor='email' className='h-full pr-3 pl-3 flex items-center text-slate-200 bg-blue-800'><Mail /></Label>
                <Input type='text' name='email' className='rounded-none bg-blue-400 text-white border-none text-md'/>
            </div>
            <div className='flex items-center'>
                <Label htmlFor='password' className='h-full pr-3 pl-3 flex items-center text-slate-200 bg-blue-800'><LockKeyhole /></Label>
                <Input type='password' name='password' className='rounded-none bg-blue-400 text-white text-md border-none'/>
            </div>
            <Button className='mt-5'>
                <Link href='/'>
                    Login
                </Link>
            </Button>
        </form>
        <p>Ainda não possui conta? <Link href='signin' className='text-blue-700 underline'>Faça seu registro</Link></p>
    </div>
  )
}

export default FormLogin