
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
return(
  <div className='App'> 
  <HelloWorld/>
  <HelloWorld/>
    <SayMyName nome='João'/>
    <SayMyName nome= 'Maria'/>
  </div>

)
}


export default App;
