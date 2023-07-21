export const InputForm = (props) => {

  let nomeLabel = props.nome.normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase();

  let tamLabel = props.width
          
  let atualizaInput = props.change


  console.log(props);
  
  return (
    <div className={`col-md-${props.width}`}>
      <label htmlFor="genero" className="form-label">
        {props.nome}
      </label>
      <input
        id="genero"
        type="text"
        className="form-control"
        // value={fields.genero}
        onChange={atualizaInput}
      />
    </div>
  );
};

