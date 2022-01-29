import React from 'react';
import './Comentario.css';
import imagemUsuario from './login.png'
import formatRelative from 'date-fns/formatRelative';
import {ptBR} from 'date-fns/locale'

const Comentario = props => {
                        /*{data.getDate() + '/' + valor + '/' + data.getFullYear() + " " + hora}*/
        //componente J jSX: 
        
 return(       <div className="Comentario">
                
                     <img src={imagemUsuario} alt={props.nome}></img>
                     <div className="itens_">

                        <div className="nome">{props.name}</div>
                        <div className="email"><a href="#inicio">{props.email}</a></div>
                        <div className="comentario">{props.children}</div>
                        <div className="data">{ formatRelative(props.data, new Date(), { locale:ptBR } ) }</div>
                       
                        </div>
                        <div class="x_">
                                <button  className="x" onClick={props.onRemove}>&times;</button>
                        </div>
                </div>
        )
};

export default Comentario;