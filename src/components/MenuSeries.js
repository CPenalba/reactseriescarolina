import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./Global";

export default class MenuSeries extends Component {
  state = {
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

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-primary"
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Series
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">
                    Nuevo personaje
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/update">Modificar personajes</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Series
                  </a>
                  <ul className="dropdown-menu">
                    {this.state.series.map((serie, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item"
                            to={"/detalle/" + serie.idSerie}
                          >
                            {serie.nombre}
                          </NavLink>
                        </li>
                      );

                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
