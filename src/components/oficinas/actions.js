import axios from "axios";
import { CARGANDO, ERROR, LISTAR } from "./constants";

export const listarOficinas = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });
  try {
    const respuesta = await axios.get("http://localhost:8000/oficinas");
    dispatch({
      type: LISTAR,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Error, Intente mas tarde."
    });
  }
};
