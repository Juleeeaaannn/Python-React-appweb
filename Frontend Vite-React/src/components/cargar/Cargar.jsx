import React from 'react'
import './Cargar.css'
function Cargar() {
  return (
    <div className='bg-fondo'>
      <form className='container-fluid px-5'>
        <div className="row pt-3 text-center">
          <label className="col-4 round-r bg-grey text-white fs-2 p-4" htmlFor="nombre">Nombre Frontal</label>
          <input className="col-8 round-l fs-2" type="text" name="nombre" id="nombre" placeholder='COCA COLA' />
        </div>
        <div className="row pt-3 text-center">
          <label className="col-4 round-r bg-grey text-white fs-2 p-4" htmlFor="nombre">Info adicional</label>
          <input className="col-8 round-l fs-2" type="text" name="nombre" id="nombre" placeholder='2,25L...' />
        </div>
        <div className="row pt-3 text-center">
          <label className="col-4 round-r bg-grey text-white fs-2 p-4" htmlFor="nombre">Precio</label>
          <input className="col-8 round-l fs-2" type="text" name="nombre" id="nombre" placeholder='$$$$' />
        </div>
        <div className='row pt-3 text-center fs-1 py-5'>
          <input className="col-12 buttonsubmit" type="submit" value="CARGAR PRODUCTO" />      
        </div>
      </form>
    </div>
  )
}

export default Cargar