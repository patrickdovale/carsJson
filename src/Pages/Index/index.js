import React from "react";
import { Link } from "react-router-dom";
import ListCars from "../../Components/ListCars";
import "./styles.css";

export default function InitPage() {


  return (
    <div className="page">

      <header>
        <h1>Cars <strong>Json</strong></h1>

        <Link to="cadastrar-carro">
          Adicionar Carro
        </Link>
      </header>

      <ListCars />
    </div>
  );
}
