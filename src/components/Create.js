import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Create (){
  return (
    <div className="relative h-screen flex flex-row">
    {/* <!--Columna de presentacion--> */}
    <div className="fixed flex flex-col w-64 h-screen bg-cyan-50">
      <div className="flex h-48 border-b-4 border-teal-500 bg-gray-200 ">
        <h1 className="text-xl font-semibold mx-4 mt-4">Creación de orden</h1>
      </div>
      <div className="justify-center mb-24 w-80">
          <div className="absolute border-t-4 rounded-full -mt-20 mx-12 mb-2">
            <img className="w-40 h-40  rounded-full mr-4" href="/Imagenes/Logo.jpeg"/>
          </div>
          <div className="mx-6 mt-24">
            <h1 className="text-2xl font-semibold">INSTAYA</h1>
            <ul className=" mt-6">
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/Register' className='sidebar'>
                  <span className="icon"><i className="fa-sharp fa-solid fa-pen-to-square"></i></span>
                  <span className="menu-item-label">Registrarse</span>
                </Link>
              </li>
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/Gestion' className='sidebar'>
                  <span className="icon"><i className="fa-sharp fa-solid fa-clipboard"></i></span>
                  <span className="menu-item-label">Listado de ordenes</span>
                </Link>
              </li>
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/Create' className='sidebar'>
                  <span className="icon"><i className="fa-sharp fa-solid fa-truck-fast"></i></span>
                  <span className="menu-item-label">Crear orden</span>
                </Link>
              </li>
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/' className='sidebar'>
                  <span className="icon"><i className="fa-solid fa-xmark"></i></span>
                  <span className="menu-item-label">Salir</span>
                </Link>
              </li>
            </ul>

          </div>

      </div> 
    </div>
    {/* <!-- navbar con botones de guardar y registrar--> */}
    <div className="flex ml-64 max-w-screen-2xl">
      <div className="fixed flex justify-between content-center h-64 w-screen bg-gray-100">
        <div className="mt-14 mx-20">
          <label className="text-lg font-medium" for="grid-first-name">
            <i className=" fa-sharp fa-solid fa-arrow-left"></i>
            <Link to='/Gestion' className='sidebar'> Regresar</Link>
          </label>
        </div>
        <div className="mt-16 mx-0 mr-96">
            <button className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                <Link to='/Gestion' className='sidebar'> Guardar orden</Link>
            </button>
        </div>
      </div> 
           
      <div className="absolute flex h-96 w-9/12 h-5/6 left-80 top-36 mx-0 justify-center place-self-center rounded-lg shadow-2xl bg-white" style={{overflow: 'scroll'}}>
        <form className="w-full w-11/12 mt-6">
          {/* <!--Nombre y apellido--> */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 pb-6 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Dirección recogida
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Calle 14 N° 5A-130" />
                <p className="text-red-500 text-xs italic">La direción de recogida es requerido</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Ciudad de recogida
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Barranquilla" />
                    <p className="text-red-500 text-xs italic">La cuidad de recogida es requerido</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Nombre completo del remitente
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Buelvas Acosta" />
                    <p className="text-red-500 text-xs italic">El nombre es requerido</p>
              </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      N° cédula/Nit del remitente
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1002547880" />
                    <p className="text-red-500 text-xs italic">El número de cédula/Nit es requerido</p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    N° de celular del destinatario
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="3049685274" />
                  <p className="text-red-500 text-xs italic">El número de celuar es requerido</p>
              </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Dirección de entrega
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Calle 14 N° 5A-130" />
                    <p className="text-red-500 text-xs italic">La direción de entrega es requerido</p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Ciudad de entrega
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Medellin" />
                    <p className="text-red-500 text-xs italic">la cuidad de entrega es requerido</p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Nombre completo del destinatario
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Buelvas Acosta" />
                  <p className="text-red-500 text-xs italic">El nombre es requerido</p>
            </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    N° cédula/Nit del destinatario
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1002547880" />
                  <p className="text-red-500 text-xs italic">El número de cédula/Nit es requerido</p>
              </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      N° de celular del remitente
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="3049685274" />
                    <p className="text-red-500 text-xs italic">El número de celuar es requerido</p>
                </div>
                
                <div className="flex pb-6">
                  <div className="flex flex-col px-3 mb-0 md:mb-0">
                    <div className="">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Fecha de recogida
                      </label>
                    </div>
                    <div className="border-b border-teal-500 px-3 mb-4">
                      <input className="appearance-none bg-transparent border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" />
                    </div>
                  </div>
                  <div className="flex flex-col px-3 mb-0 md:mb-0">
                    <div className="">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Hora de recogida
                      </label>
                    </div>
                    <div className="border-b border-teal-500 px-3 mb-4">
                      <input className="appearance-none bg-transparent border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="time" />
                    </div>
                  </div>
                </div>
            </div>
            <div className="flex mx-0 px-4">
                
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Alto 
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="20 cm" />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Ancho
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="20 cm" />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                      Largo
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="20 cm" />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                      Peso
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="24 kg" />
                  </div>
                </div>
            </div>
        </form>
    
      </div>
    </div> 
  </div>

  )
}