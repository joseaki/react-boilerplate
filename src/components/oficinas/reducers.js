import { CARGANDO, ERROR, LISTAR } from "./constants";

const INITIAL_STATE = {
  oficinas: [],
  cargando: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR:
      return { ...state, oficinas: action.payload, cargando: false, error: "" };
    case CARGANDO:
      return { ...state, cargando: true, error: "" };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};
