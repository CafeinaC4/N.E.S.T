import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <header className="header">
         <img className='logotipo' src="logotipo_VF_2.png" alt="" />
        <div className='espacomaneiro'></div>
        <a href="#cadastro" className="btn-header" onClick >Cadastre-se</a>
         <a href="#cadastro" className="btn-header-2" onClick >Logar</a>
      </header>

      <div className="hero">
        <div className='hero-img'>
            <div className="hero-content">
              <h1>.</h1>
              <p>.</p>
              <a href="#cadastro" className="btn-main" onClick >Comece Agora</a>
            </div>
        </div>
      </div>
<div className='sobre-M'>
  <div className="sobre-1">
    <div className="sobre-propósito">
      <h1>Qual é o propósito do projeto?</h1>
      <p></p>
    </div>
    <div className="sobre-contribui">
      <h1>De que forma o projeto contribui?</h1>
      <p></p>
    </div>
  </div>


  <div className='sobre-2'>
    <div className="sobre-relevante">
      <h1>Por que esse projeto é relevante?</h1>
      <p></p>
    </div>
    <div className="sobre-diferencia2">
      <h1>Como o projeto se diferencia?</h1>
      <p></p>
    </div>
  </div>


  <div className='sobre-3'>
    <div className="sobre-diferencia">
      <h1>Quem são os responsáveis pelo projeto?</h1>
       <p></p>
    </div>
    <div className="sobre-futuros">
    <h1>Quais são os planos futuros?</h1>
    <p></p>
    </div>
  </div>
</div>
  



      <div id="equipe" className="section">
        <h2>Nossa Equipe</h2>
        <ul className="team">
          <li onClick={() => window.location.href = "https://github.com/GuilhermeZamboni32"} style={{ cursor: "pointer" }}>
            Guilherme Zamboni Menegacio - Treinos e Dietas
          </li>

          <li onClick={() => window.location.href = "https://github.com/CafeinaC4"} style={{ cursor: "pointer" }}>
            Vitor Danielli de Oliveira - Cadastro
          </li>

          <li onClick={() => window.location.href = "https://github.com/Jow-Sky"} style={{ cursor: "pointer" }}>
            Jonathan Stulp Zoz - Contatos
          </li>

          <li onClick={() => window.location.href = "https://github.com/thpixel-dev"} style={{ cursor: "pointer" }}>
            Thiago Quadra Arnold - Avaliações
          </li>
        </ul>
      </div>

      

      <footer className="footer">
      <h2>NEST</h2>
      <p>construindo juntos com voçe </p>
      </footer>
    </div>
  )
}

export default Home