// contexto mais complexo
import { createContext, useReducer, useState } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "BLACK":
      return { ...state, color: "black" };
    case "BLUE":
      return { ...state, color: "blue" };
      case "RED":
      return {...state, color: "red"}
    default:
      return state;
  }
};

//default: quando nao acontece nada, ai retorna o state a cor roxa normal que já está 

//
//A instrução switch avalia uma expressão, comparando o valor da expressão com uma série de cláusulas case e executa instruções após a primeira cláusula case com um valor correspondente, até que uma instrução break seja encontrada.

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "purple",
  });

  //Entregando pra ele quem altera o estado e quem é o estado inicial 

  //O reducer vai entregar uma maneira de entregar o estado e ele ja vai inciar o estado 

  console.log("Title Color Context:", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};

//passasndo o state como objeto, esse state e o que vai ser consumido na aplicao 