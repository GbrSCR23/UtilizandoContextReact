// 1 - criar contexto
import { createContext, useState } from "react"; //O useState , que permite a criação de estado no componente através de função e faz o gerenciamento do estado local do componente retorna um array como resultado. Por isso, é possível fazermos uma desestruturação para receber partes desse retorno.

// O Context é uma ferramenta poderosa dentro do React. Ela é usada para gerenciar os estados dos seus componentes dentro de uma aplicação web sem precisar usar algum pacote para isso.



export const CounterContext = createContext();

// 2 - criar provider
export const CounterContextProvider = ({ children }) => { //Children serve pra encpsular elementos e continuar imprimindo componentes deles em outros componentes 
  const [counter, setCounter] = useState(1); //Counter e setCounter são as variaveis que vao receber essas mudanças 

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

//pegando o counterContext.provider pegando os valores counter e setcounter(variaveis)
