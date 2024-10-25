import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { NavLink } from "react-router-dom";

export default class DetallesSeries extends Component {
  state = {
    serie: null,
    status: false,
  };

  findSerie = () => {
    let id = this.props.id;
    let request = "api/series/" + id;
    var url = Global.apiSeriesPersonajes + request;
    axios.get(url).then((response) => {
      this.setState({
        serie: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.findSerie();
  };

  componentDidUpdate = (valorAntiguo) => {
    if (valorAntiguo.idSerie != this.props.id) {
      this.findSerie();
    }
  };

  render() {
    return (
      <div>
        <h1>Detalles serie con id: {this.props.id}</h1>
        {this.state.serie && (
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={this.state.serie.imagen}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.serie.nombre}</h5>
              <p className="card-text">IMDB: {this.state.serie.puntuacion}</p>
              <NavLink
                className="btn btn-primary"
                to={"/buscar/" + this.state.serie.idSerie}
              >
                Personajes
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}
