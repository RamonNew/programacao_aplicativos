import React from 'react'
import "./estilo.css"
import imagensArray from '../../Imagens'
import senai from "./senai.png"
function Home() {
  return (
    <div className='vermelho'>
      {/*asdasdasd */}
        <img src={senai} />
        <img src={imagensArray.abobora} alt="" />
        <img src={imagensArray.abacaxi} alt="" />
        <h1>Bem Vindo a página inicial</h1>
    </div>
  )
}

export default Home