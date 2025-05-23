interface AlertaProps {
  error?: boolean;
  msg?: string;
}

interface AlertaComponentProps {
  alerta: AlertaProps;
  setAlerta: React.Dispatch<React.SetStateAction<AlertaProps>>;
}

const Alerta: React.FC<AlertaComponentProps> = ({ alerta, setAlerta }) => {
  
    setTimeout(() => {
      setAlerta({});
    }, 3000)    

    return (
      <div className={ ` ${ alerta.error ? 'error' : 'correcto'}`}>
        {alerta.msg}
      </div>
    )
}
  
export default Alerta