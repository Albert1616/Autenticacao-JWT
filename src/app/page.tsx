import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="p-4 flex h-screen flex-col justify-center items-center mt-4">
        <h1>Autenticação JWT</h1>
        <p>Sistema de login funcional, feito ultilizando token JWT</p>
        <div className="flex gap-3 mt-6 text-blue-500">
          <Link href='pagFree' className="hover:text-blue-700">Página sem autenticação necessária</Link>
          <Link href='pagLock' className="hover:text-blue-700">Página com autenticação necessária</Link>
        </div>
      </div>
    </div>
  )
}
