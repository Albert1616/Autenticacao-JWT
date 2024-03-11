import AuthService from "@/services/auth-services";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt'
import { ObjectId, UUID } from "mongodb";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const createUser = async (formData: FormData) =>{
    'use server'
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    const hashPassoword = await bcrypt.hash(password, 10);
    
    await prisma.user.create({
        data:{
            id:new ObjectId().toHexString(),
            name,
            email,
            password:hashPassoword
        }
    })
    
    redirect('/login') 
}

const login = async (formData: FormData) =>{
    'use server'

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const user = await prisma.user.findFirst({
        where:{
            email
        }
    })

    if(!user){
        redirect('/signin')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch){
        await AuthService.createSessionToken({name:user.name, email: user.email})
        redirect('/');
    }else{
        console.log('Usuário ou senhas invalidos!');
    }
}

const AuthActions = {
    createUser,
    login
}

export default AuthActions;