// 3 - alterando valor do contador
import { useContext } from "react"; //Importando hook useContext //useContext() O hooks useContext() aceita um objeto de contexto, ou seja, o valor retornado React. createContexte, em seguida, retorna o valor atual do contexto para esse contexto. Esse hooks fornece aos componentes funcionais acesso fácil ao contexto da aplicação React.

import { CounterContext } from "../context/CounterContext"; //Importando a página
import { useCounterContext } from "../hooks/useCounterContext"; //Importando a página 

const ChangeCounter = () => {
  // const { counter, setCounter } = useContext(CounterContext);
  // 4 - refatorando para hook
  const { counter, setCounter } = useCounterContext(); //PEGANDO O VALOR ATUAL DO COUNTER E SETCOUNTER

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter + 1
      
      </button>
      <button onClick={() => setCounter(counter + 10)}>
        Add value to counter +10
      
      </button>

     
      <button onClick={() => setCounter(counter - 1)}>
        Add value to counter -1
      
      </button>

      <button onClick={() => setCounter(counter - 10)}>
        Add value to counter -10
      
      </button>

  <button onClick={() => setCounter(counter * 2)}>
        Add value to counter x2


        </button>

  <button onClick={() => setCounter(counter * 5)}>
        Add value to counter x5


        </button>
        <button onClick={() => setCounter(counter / 2)}>
        Add value to counter /2


        </button>

        <button onClick={() => setCounter(counter / 2)}>
        Add value to counter /5


        </button>
    </div>

    
  );
};

export default ChangeCounter;

//nesse código estamos alterando o valor dele 
