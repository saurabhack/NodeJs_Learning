import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes]=useState([])
  useEffect(()=>{
    axios.get('/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(erorr)
    })
})
  return (
    <>
      <div>
        <h3>FULL STACK DEVELOPMENT</h3>
        <p>Jokes:{jokes.length}</p>
        {
          jokes.map((joke,i)=>(
            <div key={joke.id}>
              <h3>{joke.name}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
       </div>
    </>
  )
}

export default App
