export const Button = (props) => {
    
  return (
    <div className="col-md-3 mt-4">
        <button 
          type = {props.tipo} 
          className={`btn btn-dark col-md-${props.width}`} /*  onClick={props.click} os botoes nao precisam de evento */>
            {props.nome}
          
        </button>
    </div>
  )
}
