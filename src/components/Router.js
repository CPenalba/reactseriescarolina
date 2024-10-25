import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuSeries from "./MenuSeries";
import DetallesSeries from "./DetallesSeries";
import HomeSeries from "./HomeSeries";
import BuscarPersonajes from "./BuscarPersonajes";
import CrearPersonaje from "./CrearPersonaje";
import UpdatePersonaje from "./UpdatePersonaje";

export default class Router extends Component {
  render() {
    function DetallesSeriesElement() {
      let { idserie } = useParams();
      return <DetallesSeries id={idserie} />;
    }

    function BuscarPersonajesElement() {
      let { idserie } = useParams();
      return <BuscarPersonajes id={idserie} />;
    }

    return (
      <BrowserRouter>
        <MenuSeries />
        <Routes>
          <Route path="/" element={<HomeSeries />} />
          <Route path="/create" element={<CrearPersonaje />} />
          <Route path="/update" element={<UpdatePersonaje />} />
          <Route path="/detalle/:idserie" element={<DetallesSeriesElement />} />
          <Route
            path="/buscar/:idserie"
            element={<BuscarPersonajesElement />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
