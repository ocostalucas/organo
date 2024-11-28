import { useState } from "react";

import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from "./components/Time";

function App() {

  const [colaboradores, setColaboradores] = useState([])
  return (
  
    <div className="App">
      <Banner/>
      <Formulario aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador]) }/>
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
