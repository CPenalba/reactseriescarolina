import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { Navigate, NavLink } from "react-router-dom";

export default class CrearPersonaje extends Component {
  cajaIdPersonaje = React.createRef();
  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  selectSerie = React.createRef();

  state = {
    status: false,
    series: [],
  };

  loadSeries = () => {
    let request = "api/series";
    let url = Global.apiSeriesPersonajes + request;
    axios.get(url).then((response) => {
      console.log("Leyendo series");
      this.setState({
        series: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadSeries();
  };

  insertarPersonaje = (e) => {
    e.preventDefault();
    let request = "api/Personajes";
    let url = Global.apiSeriesPersonajes + request;

    let nombre = this.cajaNombre.current.value;
    let imagen = this.cajaImagen.current.value;
    let idSerie = parseInt(this.selectSerie.current.value);

    let personaje = {
      idPersonaje: 0,
      nombre: nombre,
      imagen: imagen,
      idSerie: idSerie,
    };
    axios.post(url, personaje).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Crear personaje</h1>
        <hr />
        <form>
          <label>Id personaje: </label>
          <input
            type="text"
            ref={this.cajaIdPersonaje}
            className="form-control"
            disabled
            placeholder="Se autogenera"
          />
          <label>Nombre: </label>
          <input type="text" ref={this.cajaNombre} className="form-control" />
          <label>Imagen: </label>
          <input type="text" ref={this.cajaImagen} className="form-control" />
          <label>Serie: </label>
          <br />
          <select className="select form-select" ref={this.selectSerie}>
            {this.state.series.map((serie, index) => {
              return (
                <option key={index} value={serie.idSerie}>
                  {serie.nombre}
                </option>
              );
            })}
          </select>
          <br />

          <button onClick={this.insertarPersonaje} className="btn btn-danger">
            Insertar personaje
          </button>
        </form>
      </div>
    );
  }
}
