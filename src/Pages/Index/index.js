import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListCars from "../../Components/ListCars";
import "./styles.css";

export default function InitPage() {
  // const [marcas, setMarcas] = useState([])
  const [marcas, setMarcas] = useState([]);
  const [marcaSelected, setMarcaSelected] = useState("Todos");

  return (
    <div className="page">

      <header>
        <h1>Cars <strong>Json</strong></h1>

        <Link to="cadastrar-carro">
          Adicionar Carro
        </Link>
      </header>

      <ListCars setMarcas={setMarcas} marcas={marcas} marcaSelected={marcaSelected} setMarcaSelected={setMarcaSelected}/>
    </div>
  );
}
