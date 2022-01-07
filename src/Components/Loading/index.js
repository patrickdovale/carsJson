import React  from "react";
import load from '../../Assents/loading.gif';


export default function Loading(){
    return(
        <div style={{display: 'flex', justifyContent:"center"}}>
            <img src={load} alt="Imagem de loading"/>
        </div>
    )
}