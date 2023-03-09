import React from 'react'

export const MiLista = () => {
    const nombres = ['Pedro', 'Juan', 'Maria', 'Ana'];

  return (
    <div>
        {
            nombres.map(nombre => (<li key={nombre}>{nombre}</li>))
        }
    </div>
  )
}
