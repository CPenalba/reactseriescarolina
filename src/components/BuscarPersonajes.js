import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { NavLink } from "react-router-dom";

export default class BuscarPersonajes extends Component {
  state = {
    personajes: [],
  };

  findPersonajes = () => {
    let id = this.props.id;
    let request = "api/Series/PersonajesSerie/" + id;
    var url = Global.apiSeriesPersonajes + request;
    axios.get(url).then((response) => {
      this.setState({
        personajes: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.findPersonajes();
  };

  componentDidUpdate = (valorAntiguo) => {
    if (valorAntiguo.idSerie != this.props.id) {
      this.findPersonajes();
    }
  };

  render() {
    return (
      <div>
        <h1>Buscador de personajes con id serie: {this.props.id}</h1>
        <hr />
        <NavLink className="btn btn-primary" to={"/detalle/" + this.props.id}>
          Volver a serie
        </NavLink>
        {this.state.personajes.length > 0 && (
          <table className="table table-primary">
            <thead>
              <tr>
                <th>Id personaje</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Id serie</th>
              </tr>
            </thead>
            <tbody>
              {this.state.personajes.map((per, index) => {
                return (
                  <tr key={index}>
                    <td>{per.idPersonaje}</td>
                    <td>{per.nombre}</td>
                    <td>
                      <img
                        src={per.imagen}
                        style={{ width: "150px", height: "150px" }}
                      ></img>
                    </td>
                    <td>{per.idSerie}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
