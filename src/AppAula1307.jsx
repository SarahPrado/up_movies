import { useState } from "react";
import { InputForm } from "./components/InputForm";

//use state é a variavel, metodo q atualiza a variavel e o valor inical

function App() {
  // const [titulo, setTitulo] = useState('O iluminado')
  // const [sinopse, setSinopse] = useState()

  // //EVENTOS INPUT TITULO
  // const adicionar = event => {
  //   //Evita que a pagina seja recarregada
  //   event.preventDefault();
  //   console.log('add', titulo);
  // }
  //   //Foi criado o event de onChange para poder destravar o evento onclick
  // const atualizaInput = event => {
  //   console.log('teste: ', event.target.value)
  //   setTitulo(event.target.value)
  // }

  // //EVENTOS INPUT SINOPSE
  // const adicionarSin = event => {
  //   event.preventDefault();
  //   console.log('add', sinopse);
  // }
  // const atualizarSin = event => {
  //   console.log('add', sinopse);
  //   setSinopse(event.target.value)
  // }
  //para evitar esse babado aqui acima, o States tem que ser um OBJETO!!

  //Aqui é o State como objeto
  const [fields, setFields] = useState({
    titulo: "o titulo do filme",
    sinopse: "sinopse do filme",
    votos: "0000",
  });
  const adicionar = (event) => {
    //Evita que a pagina seja recarregada
    event.preventDefault();
    console.log("Filme adicionado", fields);
  };
  const atualizaInput = (event) => {
    console.log("teste: ", event.target.id);
    // setFields({titulo: event.target.value})  ASSIM NAO DA CERTO pq ele atualiza um por um
    //usar o spreed operator para desestruturar
    setFields({ ...fields, [event.target.id]: event.target.value });
    //os colchetes é para realmente acessar chave de objeto dinamicamente
  };

  return (
    <>
      <div className="container">
        {/* TÍTULO */}
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>

        {/* TÍTULO DO FILME */}
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              // value = {titulo}
              value={fields.titulo}
              onChange={atualizaInput}
            />
            {/* para usar a variavel titulo precisa de um hook useState, tudo isso sobre forms-controlado */}
          </div>

          <InputForm nome='Gênero'/>
          <InputForm nome='Diretor'/>

          {/* SINOPSE */}
          <div className="col-md-12">
            <label htmlFor="sinopse" className="form-label">
              Sinopse
            </label>
            <input
              id="sinopse"
              type="text"
              className="form-control"
              value={fields.sinopse}
              onChange={atualizaInput}
              // onClick={adicionarSin}
              // onChange={atualizarSin}
            />
          </div>

          {/* VOTOS */}
          <div className="col-md-12">
            <label htmlFor="" className="form-label">
              Votos
            </label>
            <input
              id="votos"
              type="text"
              className="form-control"
              value={fields.votos}
              onChange={atualizaInput}
            />
          </div>

          {/* BOTAO ADICIONAR */}
          <div className="col-md">
            <button type="button" className="btn btn-dark" onClick={adicionar}>
              Adicionar
            </button>
            {/* Antes eu tinha escrito adicionar() com parenteses, e ai tava executando antes de clicar */}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
