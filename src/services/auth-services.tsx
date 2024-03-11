import * as jose from 'jose'
import { cookies } from 'next/headers';

//open session token
const openSessionToken = async (token:string) =>{
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const {payload} = await jose.jwtVerify(token,secret);

    return payload;
}

const createSessionToken = async (payload={}) =>{
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const session = await new jose.SignJWT(payload).setProtectedHeader({
        alg:'HS256'
    }).setExpirationTime('1d').sign(secret);

    const {exp, role} = await openSessionToken(session);
    cookies().set('session', session, {
        expires:(exp as number)*1000,
        path:'/',
        httpOnly:true

    })
}

const AuthService = {
    createSessionToken,
    openSessionToken
}

export default AuthService;