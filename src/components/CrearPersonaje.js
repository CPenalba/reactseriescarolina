import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CrearPersonaje extends Component {
  cajaIdPersonaje = React.createRef();
  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  cajaIdSerie = React.createRef();

  state = {
    status: false,
  };

  insertarPersonaje = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Crear personaje</h1>
      </div>
    );
  }
}
