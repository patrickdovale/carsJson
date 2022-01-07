import React from 'react';
import { Link } from 'react-router-dom';
import NotFould from '../../Assents/notfould.gif';
import "./styles.css";


export default function PageNotFould(){
    return(
       <div className='pageNotFould'>
           <img src={NotFould} alt="Imagem 404"/>
           <div className='textNotFould'>
                <h1>404</h1>
                <h3>Página não encontrada</h3>
                <Link to="/">Voltar a tela inicial</Link>
           </div>
       </div>
    )
}