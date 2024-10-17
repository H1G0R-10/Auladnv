import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function App(){
  const [name, setName] = useState("")
  const [theme, setTheme] = useState(true)
  const [count, setCount] = useState(0)
  const [titulo, setTitulo] = useState(true)
  const [senai, setSenai] = useState("") 
  



  return (
    <>

        <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>Adicionar {count}</button>
        </div>
        <div className="card">
        <button onClick={() => setCount((count) => count - 10)}>Remover {count}</button>
        </div>

        <button onClick={() => setTitulo(titulo ? false : true)}>botao</button>
        {titulo ?

        <div>
          <h1>Balacobaco</h1>
        </div>

        : <div></div>
        }
        <button onClick={() => setSenai(senai ? false : true)}>ver</button>
        {senai ?

        <div>
          <input type="text" onChange={(e) => setSenai(e.target.value = "senai")}/>
          <h1>Apareci!</h1>

        </div>

        : <div>
          <input type="text" onChange={(e) => setSenai(e.target.value)}/>

        </div>
        }
        






        {/* <button onClick={() => setTheme(theme ? false : true)}>TROCAR A COR DO FUNDO</button>
        {theme ?

        <div className='fundo-preto'>
          <h1>NOME: {name}</h1>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>

        : <div className='fundo-branco'>
        <h1>NOME: {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        }  */}
        
       
    </>
  )
}
