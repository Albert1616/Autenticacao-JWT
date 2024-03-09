import React from 'react'

function PageLock() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1>Página acessível apenas para usuários logados</h1>
        <p>É necessário estar logado para acessá-la</p>
    </div>
  )
}

export default PageLock