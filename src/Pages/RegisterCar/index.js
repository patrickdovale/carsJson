import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./styles.css";

export default function RegisterCar() {
  const navigate = useNavigate();
  const [carsPersist] = useState(
    JSON.parse(localStorage.getItem("CARS")) || []
  );

  const [car, setCar] = useState({
    id: 0,
    marca_nome: "default",
    nome_modelo: "",
    ano: 0,
    combustivel: "default",
    num_portas: 0,
    valor_fipe: 0,
    cor: ""
    // timestamp_cadastro: Date.now()
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      car.id !== 0 &&
      car.marca_nome !== "default" &&
      car.nome_modelo !== "" &&
      car.ano !== 0 &&
      car.ano <= 2022 &&
      car.combustivel !== "default" &&
      car.num_portas !== 0 &&
      car.valor_fipe !== 0
    ) {
      if (JSON.parse(localStorage.getItem("CARS") !== null)) {
        localStorage.setItem("CARS", JSON.stringify([...carsPersist, car]));
      } else {
        localStorage.setItem("CARS", JSON.stringify([...carsPersist, car]));
      }

      window.alert("Carro Registrado com Sucesso!!!");
      navigate("/");
      console.log(JSON.parse(localStorage.getItem("CARS")));
    } else {
      window.alert("Verifique o preenchimento dos campos!!!");
    }
  }

  function changeInput(e) {
    const { name, value } = e.target;

    setCar({ ...car, [name]: value });
  }

  function handleReset() {
    setCar({
      id: 0,
      marca_nome: "default",
      nome_modelo: "",
      ano: 0,
      combustivel: "default",
      num_portas: 0,
      valor_fipe: 0,
      cor: ""
    });
  }

  console.log(car);

  return (
    <div className="page">
      <header>
        <h1>
          Cars <strong>Json</strong>
        </h1>

        <AiOutlineArrowLeft className="btnBack" onClick={() => navigate("/")} />
      </header>

      <h2>Cadastrar novo carro</h2>

      <form onSubmit={handleSubmit}>
        <div className="groupInput">
          <label>id</label>
          <input type="number" name="id" value={car.id} onInput={changeInput} />
        </div>

        <div className="groupInput">
          <label>Modelo</label>
          <input
            type="text"
            name="nome_modelo"
            value={car.nome_modelo}
            onInput={changeInput}
          ></input>
        </div>

        <div className="groupInput">
          <label>Marca</label>
          <select
            type="text"
            name="marca_nome"
            value={car.marca_nome}
            onChange={changeInput}
          >
            <option value="default">Informe o modelo</option>
            <option value="TOYOTA">Toyota</option>
            <option value="FORD">Ford</option>
            <option value="VW">Vw</option>
            <option value="FIAT">Fiat</option>
          </select>
        </div>

        <div className="groupInput">
          <label>Cor</label>
          <input
            type="text"
            name="cor"
            value={car.cor}
            onChange={changeInput}
          ></input>
        </div>

        <div className="groupInput">
          <label>Combustivel</label>
          <select
            type="text"
            name="combustivel"
            value={car.combustivel}
            onChange={changeInput}
          >
            <option value="default">Informe o Combustivel</option>
            <option value="Alcool">Alcool</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Flex">Flex</option>
            <option value="GNV">GNV</option>
          </select>
        </div>

        <div className="groupInput">
          <label>Ano</label>
          <input
            type="number"
            name="ano"
            value={car.ano}
            onChange={changeInput}
          ></input>
        </div>

        <div className="groupInput">
          <label>Portas</label>
          <input
            type="number"
            name="num_portas"
            value={car.num_portas}
            onChange={changeInput}
          ></input>
        </div>

        <div className="groupInput">
          <label>Preço</label>
          <input
            type="number"
            name="valor_fipe"
            value={car.valor_fipe}
            onChange={changeInput}
            placeholder="15 = 15 mil"
          ></input>
        </div>

        <div className="btnsControl">
          <button className="btnCancelar" type="reset" onClick={() => handleReset()}>Cancelar</button>
          <button className="btnRegister" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
