import { CARGANDO } from "./constants";

const INITIAL_STATE = {
  oficinas: [],
  cargando: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARGANDO:
      return { ...state, cargando: true };
    default:
      return state;
  }
};
