import {Fingerprint} from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'


function NavBar() {
  return (
    <header className='flex items-center justify-between p-3'>
        <Link href='/'>
            <Fingerprint size={30}/>
        </Link>
        <Button className='transition-all duration-600 hover:scale-110 p-5'>
            <Link href='/login'>Login</Link>
        </Button>
    </header>
  )
}

export default NavBar