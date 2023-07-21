import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { Button } from "./components/Button";

function App() {

  const [fields, setFields] = useState({
    titulo: '',
    sinopse: "sinopse do filme",
    votos: "0000",
  });

  const adicionar = (event) => {
    event.preventDefault();
    console.log("Filme adicionado", fields);
  };

  const atualizaInput = (event) => {
    console.log("teste: ", event.target.id);

    setFields({ ...fields, [event.target.id]: event.target.value });
  };

  const enviar = event => {
    event.preventDefault();
    console.log('enviar');
  }
  
  const limpar = event => {
    event.preventDefault();
    console.log('limpou');
  }

  return (
    <>
      <div className="container">
        {/* TÍTULO */}
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>

        {/* TÍTULO DO FILME */}
        <form className="row g-3">
          <InputForm nome='Título' 
                      widh={10} 
                      change={atualizaInput} 
                      value = {fields.titulo}/>
          <InputForm nome='Gênero' widh={2}/>
          <InputForm nome='Diretor' widh={6}/>
          <InputForm nome='Sinopse' widh={2}/>
          <InputForm nome='Votos' widh={1}/>
        
          {/* BOTAO ADICIONAR */}
          <div className = "row "> 
          <Button 
            tipo = {'submit'}
            nome = 'Enviar' 
            width = {6}
            click = {enviar}
            />
          <Button 
            tipo = {'reset'}
            nome = 'Limpar'   
            width = {4}
            click = {limpar}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
