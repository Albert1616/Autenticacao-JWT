import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

function SingIn() {
  return (
    <form className='bg-slate-300 p-20 rounded-xl flex flex-col gap-5'>
        <div>
            <Label>Nome: </Label>
            <Input type='text' className='bg-slate-200' required/>
        </div>
        <div>
            <Label>Email: </Label>
            <Input type='email' className='bg-slate-200' required={true}/>
        </div>
        <div>
            <Label>Senha: </Label>
            <Input type='password' className='bg-slate-200' required/>
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