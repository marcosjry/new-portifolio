import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer/index'
import Typewriter from 'typewriter-effect';
import Identidade from './images/identity.png'


function WriteLoop() {
  let SetaD = '/>'
  let SetaE = '<'
  return (
    <p className="AlignContainer">
      <span className="Seta">{SetaE}</span>

      <span className="ColorW"><Typewriter
        options={{
          strings: ['JavaScript', 'NodeJs', 'Reactjs', 'Typescript', 'Python'],
          autoStart: true,
          loop: true,
        }}
      /></span>
      <span className="Seta">{SetaD}</span>
    </p>
  )
}




function App() {
  return (
    <>
      <NavBar/>
      <section className="SectionInit">
        <div className="Content">
          <h1>Programador Front-end Jr</h1>
          <h2>Desenvolvedor de Landing pages Freelancer</h2>
          <h2>Entusiasta de Tecnologia</h2>
          <div className="WriteLoop">{WriteLoop()}</div>
        </div>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          className="Borda" viewBox="0 0 1600.000000 155.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,157.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M13775 1355 c-2974 -288 -2854 -276 -7155 -690 -2087 -200 -4427
-425 -5200 -500 -773 -74 -1408 -135 -1412 -135 -5 0 -8 -7 -8 -15 0 -13 896
-15 8000 -15 l8000 0 0 785 c0 622 -3 785 -12 784 -7 -1 -1003 -97 -2213 -214z"/>
          </g>
        </svg>
      </section>
      <section id="Section2" className="Section-2">
        
        <div className="Content-2">
          <img src={Identidade} width="200" height="200"/>
          <div className="TextPosition">
            <h4>
              Meu nome é <span>Marcos</span>, amo jogos e tudo que se refere à tecnologia. Meu primeiro contato com a programação foi ainda quando criança. Fiquei muito curioso pra saber como funcionava o acesso e troca de informações entre um cliente e servidor.<br/>
              Atualmente tenho grande interesse em <span>Criptomoedas</span> e <span>Renda variável</span>. Principalmente com a sua associação em jogos com <span>propósito play-to-earn</span>. Acredito ser uma grande oportunidade para mudar a vida das pessoas de uma forma <span>positiva</span>.<br/>
              <br/>
              Estudo Desenvolvimento Web há 2 anos com foco atualmente no Front-end. Gosto bastante da parte de Design.<br/><br/>
              Possuo conhecimentos em: Javascript, Typescript, ReactJs, Nodejs, Python, HTML5, CSS3.
            </h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
