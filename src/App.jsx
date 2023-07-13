function App() {

  return (
    <>
      <div className="container">
      {/* TÍTULO */}
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
      {/* TÍTULO DO FILME */}
        <form className="row g-3">
          <div className="col-md-12">
            <lab htmlFor="" className="form-label">Título</lab>
            <input type="text" className="form-control" />
          </div>
      {/* SINOPSE */}
          <div className="col-md-12">
            <lab htmlFor="" className="form-label">Sinopse</lab>
            <input type="text" className="form-control" />
          </div>
      {/* VOTOS */}
          <div className="col-md-12">
            <lab htmlFor="" className="form-label">Votos</lab>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md">
            <button type="button" class="btn btn-dark">Adicionar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
