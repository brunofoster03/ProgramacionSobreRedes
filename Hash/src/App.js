import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import { Simulate } from 'react-dom/test-utils';

function App() {
  const [datos, setdatos] = useState([
  {DUI: '0001', Nombre: 'Uno'},
  {DUI: '0002', Nombre: 'Dos'},
  {DUI: '0003', Nombre: 'Tres'},
  {DUI: '0004', Nombre: 'Cuatro'},
  {DUI: '0005', Nombre: 'Cinco'}])
  const [dato, setdato] = useState({});
  const abrir = ({target}) => {
    document.getElementsByClassName('opciones')[0].style.visibility = 'hidden';
    if(target.id == 0){
      document.getElementsByClassName('menuagregardatos')[0].style.visibility = 'visible';
    }else if(target.id == 1){
      document.getElementsByClassName('menuactualizardatos')[0].style.visibility = 'visible';
    }else if(target.id == 2){
      document.getElementsByClassName('menueliminardatos')[0].style.visibility = 'visible';
    }else if(target.id == 3){
      document.getElementsByClassName('menumostrardatos')[0].style.visibility = 'visible';
    }else if(target.id == 4){
      document.getElementsByClassName('menuconsultardatos')[0].style.visibility = 'visible';
    }
  }
  const cerrar = ({target}) => {
    if(target.id == 0){
      document.getElementsByClassName('menuagregardatos')[0].style.visibility = 'hidden';
    }else if(target.id == 1){
      document.getElementsByClassName('menuactualizardatos')[0].style.visibility = 'hidden';
    }else if(target.id == 2){
      document.getElementsByClassName('menueliminardatos')[0].style.visibility = 'hidden';
    }else if(target.id == 3){
      document.getElementsByClassName('menumostrardatos')[0].style.visibility = 'hidden';
    }else if(target.id == 4){
      document.getElementsByClassName('menuconsultardatos')[0].style.visibility = 'hidden';
    }
    document.getElementsByClassName('opciones')[0].style.visibility = 'visible';
  }
  const insertar = (e) => {
    e.preventDefault()
    setdatos(datos.concat({DUI: document.getElementById('in0').value, Nombre: document.getElementById('in1').value}))  
  }
  const buscar = (e) => {
    e.preventDefault()
    if(datos.find(ele => ele.DUI == document.getElementById('i0').value)){
      setdato(datos.find(ele => ele.DUI == document.getElementById('i0').value))
    }else{
      setdato({DUI: '', Nombre: ''})
    }
  }
  return (
    <div className="App">
        <div className='opciones'>
          <button id='0' onClick={abrir} className='agregardatos'>Agregar Datos</button>
          <button id='1' onClick={abrir} className='actualizardatos'>Actualizar Datos</button>
          <button id='2' onClick={abrir} className='eliminardatos'>Eliminar Datos</button>
          <button id='3' onClick={abrir} className='mostrardatos'>Mostrar Datos</button>
          <button id='4' onClick={abrir} className='consultardatos'>Consultar Datos</button>
        </div>
        <div className='menuagregardatos'>
          <button id='0' onClick={cerrar} className='cerrar'>X</button>
          <form onSubmit={insertar}>
            <label>DUI</label>
            <input id='in0' type='text' placeholder='Clave'/>
            <label>Nombre</label>
            <input id='in1' type='text' placeholder='Nombre completo'/>
            <button type='submit'>Enviar</button>
          </form>
        </div>
        <div className='menuactualizardatos'>
          <button id='1' onClick={cerrar} className='cerrar'>X</button>
          <form>
            <label>DUI</label>
            <input id='i0' type='text' placeholder='Buscar DUI'/>
            <label>Cambiar Nombre</label>
            <input type='text' placeholder='Nuevo nombre'/>
            <button type='submit'>Actualizar</button>
          </form>
        </div>
        <div className='menueliminardatos'>
          <button id='2' onClick={cerrar} className='cerrar'>X</button>
          <form>
            <label>DUI</label>
            <input type='text' placeholder='Buscar DUI'/>
            <button type='submit'>Eliminar</button>
          </form>
        </div>
        <div className='menumostrardatos'>
          <button id='3' onClick={cerrar} className='cerrar'>X</button>
          <div className='datos'>
            {datos.map(dat => (
              <>
              <label>DUI: {dat.DUI} - Nombre: {dat.Nombre}</label>
              </>
            ))}
          </div>
        </div>
        <div className='menuconsultardatos'>
          <button id='4' onClick={cerrar} className='cerrar'>X</button>
          <form onSubmit={buscar}>
            <label>DUI</label>
            <input id='i0' type='text' placeholder='Buscar DUI'/>
            <button type='submit'>Buscar</button>
          </form>
          <div className='datosbuscados'>
            <label>DUI: {dato.DUI}</label>
            <label>Nombre: {dato.Nombre}</label>
          </div>
        </div>
    </div>
  );
}

export default App;
