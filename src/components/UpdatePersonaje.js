import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class UpdatePersonaje extends Component {
  selectSeries = React.createRef();
  selectPersonajes = React.createRef();

  state = {
    series: [],
    serie: [],
    personaje:[],
    personajes: [],
    serieSeleccionada: "",
    personajeSeleccionado: "",
  };

   findSerie = (e) => {
    e.preventDefault();
    let idSerie = this.selectSeries.current.value;
    console.log("Id de la serie seleccioanda: " + idSerie)
    let request = "api/series/" + idSerie;
    var url = Global.apiSeriesPersonajes + request;
    axios.get(url).then((response) => {
      this.setState({
        serie: response.data,
      });
    });
   };

   findPersonajes = (e) => {
    e.preventDefault();
    let idPeronaje = this.selectPersonajes.current.value;
    console.log("Id de la personaje seleccioanda: " + idPeronaje)
    let request = "api/Personajes/" + idPeronaje;
    var url = Global.apiSeriesPersonajes + request;
    axios.get(url).then((response) => {
      this.setState({
        personaje: response.data,
      });
    });
  };

  loadPersonajes = () => {
    let request = "api/personajes";
    let url = Global.apiSeriesPersonajes + request;
    axios.get(url).then((response) => {
      console.log("Leyendo personajes");
      this.setState({
        personajes: response.data,
      });
    });
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

  modificarPersonaje = () => {};

  componentDidMount = () => {
    this.loadSeries();
    this.loadPersonajes();
  };

  render() {
    return (
      <div>
        <h1>Modificar personaje</h1>
        <hr />
        <form>
          <label>Serie</label>
          <br />
          <select className="select form-select" ref={this.selectSeries}>
            {this.state.series.map((serie, index) => {
              return (
                <option key={index} value={serie.idSerie}>
                  {serie.nombre}
                </option>
              );
            })}
          </select>
           <button onClick={this.findSerie}>Buscar serie seleccionada</button>
           
          <br />
          <label>Personaje</label>
          <br />
          <select className="select form-select" ref={this.selectPersonajes}>
            {this.state.personajes.map((per, index) => {
              return (
                <option key={index} value={per.idPersonaje}>
                  {per.nombre}
                </option>
              );
            })}
          </select>
          <button onClick={this.findPersonajes}>Buscar personaje seleccionado</button>
          <br/>
          <button onClick={this.modificarPersonaje} className="btn btn-danger">
            Modificar personaje
          </button>
          <ul>
            <li>{this.state.serie.nombre}</li>
            <li><img src={this.state.serie.imagen}style={{width:"150px", height:"150px"}}></img></li>
           </ul>
        </form>
      </div>
    );
  }
}
