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
  const [like, setLike] = useState(true) 

  if(senai == "SENAI" || senai == "senai" || senai == "Senai") {
    var sim='Apareci'
}
  
  return (
    <>

        
        <button onClick={() => setLike(like ? false : true)}>❤</button>
        {like ?
        <div>
          1
        </div>

        : <div>   
          0
        </div>
        }

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
        <div className='sumir'>
      <input type="text" onChange={(e) => setSenai(e.target.value)} />
      <h1>{senai}{sim}</h1>
      </div>
        

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
