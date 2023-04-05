import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <Frase/>
      <Frase/>
      <SayMyName nome="Jao"/>
      <SayMyName nome="Julio"/>
      <SayMyName nome="Gabriel"/>
      <Pessoa foto="https://via.placeholder.com/150" nome="Jaozada" idade="30" profissao="Programador"/>
    </div>
  );
}

export default App;
