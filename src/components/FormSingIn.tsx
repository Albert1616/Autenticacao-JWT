import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import AuthActions from '@/lib/auth/actions/utils'

function SingIn() {
  return (
    <form className='bg-slate-300 p-20 rounded-xl flex flex-col gap-5' action={AuthActions.createUser}>
        <div>
            <Label htmlFor='name'>Nome: </Label>
            <Input type='text' name='name' className='bg-slate-200' required/>
        </div>
        <div>
            <Label htmlFor='email'>Email: </Label>
            <Input type='email' name='email' className='bg-slate-200' required={true}/>
        </div>
        <div>
            <Label htmlFor='password'>Senha: </Label>
            <Input type='password' name='password' className='bg-slate-200' required/>
        </div>
        <div>
            <Label>Confirme sua senha: </Label>
            <Input type='password' className='bg-slate-200' required/>
        </div>
        <Button type='submit'>
            Criar conta
        </Button>
    </form>
  )
}

export default SingIn