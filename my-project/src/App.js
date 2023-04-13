import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Home from './components/pages/Home';

function App() {
  return (
  <Router>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/empresa'>Empresa</Link>
      </li>
      <li>
        <Link to='/contato'>Contato</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/empresa' element={<Empresa/>}/>
      <Route path='/contato' element={<Contato/>}/>
    </Routes>
  </Router>
  )

  // const [nome, setNome] = useState()
  // return (
  //   <div className="App">
  //     <SeuNome pegarNome={nome} nome={setNome}/>
  //     <Saudacao nome={nome}/>
  //   </div>
  // );
}

export default App;
