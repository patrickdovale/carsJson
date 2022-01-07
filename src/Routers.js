import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitPage from './Pages/Index/index';
import PageNotFould from './Pages/PageNotFould';
import RegisterCar from './Pages/RegisterCar';


export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< InitPage />}/>
                <Route path="/lista-de-carros" element={< InitPage />}/>
                <Route path="/cadastrar-carro" element={< RegisterCar />}/>
                <Route path="*" element={< PageNotFould />}/>
            </Routes>
        </BrowserRouter>
    )
}