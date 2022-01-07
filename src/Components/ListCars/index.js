import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import api from "../../Services/Api";
import "./styles.css";
import defaultCar from "../../Assents/default-car.jpg";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { GiGasPump, GiCarDoor } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import Loading from "../Loading";

export default function ListCars() {

  const [marcas, setMarcas] = useState([]);
  const [marcaSelected, setMarcaSelected] = useState("Todos");


  const [cars, setCars] = useState([]);
  const [carsPersist] = useState(
    JSON.parse(localStorage.getItem("CARS")) || []
  );

  useEffect(() => {
    api.get().then((response) => {
      let totalCars = carsPersist.concat(response.data.cars);
      setCars(totalCars);
    });
  }, [carsPersist]);

  useEffect(() => {
    if (marcas.length === 0 && cars.length !== 0) {
      let Todasmarcas = cars.map((car) => {
        return car.marca_nome;
      });
      let categoriasReducers = Todasmarcas.filter(
        (marca, i) => Todasmarcas.indexOf(marca) === i
      );
      setMarcas(categoriasReducers);
    }
  }, [cars, marcas, setMarcas]);

  function filter() {
    if (marcaSelected === "Todos") {
      return (
        <>
          {marcas.map((marca) => {
            return (
              <>
                <div className="titleCategoryList">
                  <h2>{marca.toLowerCase()}</h2>
                </div>

                <div className="rowList">
                  {cars.map((car) => {
                    if (car.marca_nome === marca) {
                      return (
                        <div className="itemList" key={car.id}>
                          <img src={defaultCar} alt="imagem carro"></img>
                          <div className="bodyItemList">
                            <h4>{car.nome_modelo}</h4>
                            <div className="infosCars">
                              <div className="infoCar">
                                <div className="infoIcone">
                                  <IoDiamondOutline />
                                </div>
                                <div className="infoInformation">
                                  <h5>Marca</h5>
                                  <p>{car.marca_nome}</p>
                                </div>
                              </div>

                              <div className="infoCar">
                                <div className="infoIcone">
                                  <AiOutlineFormatPainter />
                                </div>
                                <div className="infoInformation">
                                  <h5>Cor</h5>
                                  <p>{car.cor}</p>
                                </div>
                              </div>

                              <div className="infoCar">
                                <div className="infoIcone">
                                  <GiGasPump />
                                </div>
                                <div className="infoInformation">
                                  <h5>Combustivel</h5>
                                  <p>{car.combustivel}</p>
                                </div>
                              </div>

                              <div className="infoCar">
                                <div className="infoIcone">
                                  <MdDateRange />
                                </div>
                                <div className="infoInformation">
                                  <h5>Ano</h5>
                                  <p>{car.ano}</p>
                                </div>
                              </div>

                              <div className="infoCar">
                                <div className="infoIcone">
                                  <GiCarDoor />
                                </div>
                                <div className="infoInformation">
                                  <h5>Portas</h5>
                                  <p>{car.num_portas}</p>
                                </div>
                              </div>
                            </div>
                            <div className="infoValue">
                              <p className="price">valor</p>
                              <p>
                                <strong>R$ {car.valor_fipe} Mil</strong>
                              </p>
                            </div>
                          </div>

                          <div className="buttonDetais">
                            <button>Ver Detalhes</button>
                          </div>
                        </div>
                      );
                    } else return null;
                  })}
                </div>
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <div className="rowList">
          {cars.map((car) => {
            if (car.marca_nome.toLowerCase() === marcaSelected) {
              return (
                <div className="itemList" key={car.id}>
                  <img src={defaultCar} alt="imagem carro"></img>
                  <div className="bodyItemList">
                    <h4>{car.nome_modelo}</h4>
                    <div className="infosCars">
                      <div className="infoCar">
                        <div className="infoIcone">
                          <IoDiamondOutline />
                        </div>
                        <div className="infoInformation">
                          <h5>Marca</h5>
                          <p>{car.marca_nome}</p>
                        </div>
                      </div>

                      <div className="infoCar">
                        <div className="infoIcone">
                          <AiOutlineFormatPainter />
                        </div>
                        <div className="infoInformation">
                          <h5>Cor</h5>
                          <p>{car.cor}</p>
                        </div>
                      </div>

                      <div className="infoCar">
                        <div className="infoIcone">
                          <GiGasPump />
                        </div>
                        <div className="infoInformation">
                          <h5>Combustivel</h5>
                          <p>{car.combustivel}</p>
                        </div>
                      </div>

                      <div className="infoCar">
                        <div className="infoIcone">
                          <MdDateRange />
                        </div>
                        <div className="infoInformation">
                          <h5>Ano</h5>
                          <p>{car.ano}</p>
                        </div>
                      </div>

                      <div className="infoCar">
                        <div className="infoIcone">
                          <GiCarDoor />
                        </div>
                        <div className="infoInformation">
                          <h5>Portas</h5>
                          <p>{car.num_portas}</p>
                        </div>
                      </div>
                    </div>
                    <div className="infoValue">
                      <p className="price">valor</p>
                      <p>
                        <strong>R$ {car.valor_fipe} Mil</strong>
                      </p>
                    </div>
                  </div>

                  <div className="buttonDetais">
                    <button>Ver Detalhes</button>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>
      );
    }
  }

  return (
    <>
       {marcas.length !== 0 ? (
        <div className="listCars">
          <div className="container-filter">
            <div className="options">
              <div
                className={`option ${
                  marcaSelected === "Todos" ? "optionSelected" : ""
                }`}
                onClick={() => setMarcaSelected("Todos")}
              >
                <p>Todas</p>
              </div>
              {marcas.map((marca) => {
                return (
                  <div
                    className={`option ${
                      marcaSelected === marca.toLowerCase()
                        ? "optionSelected"
                        : ""
                    }`}
                    onClick={() => setMarcaSelected(marca.toLowerCase())}
                  >
                    <p>{marca.toLowerCase()}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {filter()}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
