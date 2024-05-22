
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name ='Rômulo'
  const newName = name.toUpperCase()

  function sum (a, b){
  return a + b
  }
  return (
    <div className='App'>
      <h1> Olá react</h1>
      <p>Olá {newName}</p>
      <p> soma: {sum(1,2)}</p>
      <p> Meu dededeus</p>
    </div>

  )
}

export default App;
