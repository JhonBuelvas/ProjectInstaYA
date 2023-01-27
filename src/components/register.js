import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Register (){
  return (
    <div className="relative h-screen flex flex-row " >
    {/* <!--Columna de presentacion--> */}
    <div className="fixed flex flex-col w-64 h-screen bg-cyan-50">
      <div className="flex h-48 border-b-4 border-teal-500 bg-gray-200 ">
        <h1 className="text-xl font-semibold mx-4 mt-4">Registro de usuario</h1>
      </div>
      <div className="justify-center mb-24 w-80">
          <div className="absolute border-t-4 rounded-full -mt-20 mx-12 mb-2">
            <img className="w-40 h-40  rounded-full mr-4" src={process.env.PUBLIC_URL + '/assets/img/Logo.png'} alt="" />
          </div>
          <div className="mx-6 mt-24">
            <h1 className="text-2xl font-semibold">INSTA YA!</h1>
            <ul className=" mt-6">
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/Register' className='sidebar'>
                  <span className="icon mr-2"><i className="fa-sharp fa-solid fa-pen-to-square"></i></span>
                  <span className="menu-item-label">Registrarse</span>
                </Link>
              </li>
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/Gestion' className='sidebar'>
                  <span className="icon mr-2"><i className="fa-sharp fa-solid fa-clipboard"></i></span>
                  <span className="menu-item-label">Listado de ordenes</span>
                </Link>
              </li>
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/Create' className='sidebar'>
                  <span className="icon mr-2"><i className="fa-sharp fa-solid fa-truck-fast"></i></span>
                  <span className="menu-item-label">Crear orden</span>
                </Link>
              </li>
              <li className="mt-4 w-56 bg-cyan-50 hover:bg-teal-200 hover:rounded-full hover:w-56 hover:mx-2">
                <Link to='/' className='sidebar'>
                  <span className="icon mr-2"><i className="fa-solid fa-xmark"></i></span>
                  <span className="menu-item-label">Salir</span>
                </Link>
              </li>
            </ul>

          </div>

      </div> 
    </div>
    
    <div className="flex ml-64 max-w-screen-2xl bg-white">
      {/* <!-- navbar con botones de guardar y registrar--> */}
      <div className="fixed flex justify-between content-center h-64 w-screen bg-gray-400">
        <div className="mt-14 mx-20">
          <label className="text-lg font-medium" for="grid-first-name">
            <i className=" fa-sharp fa-solid fa-arrow-left mr-2"></i>
            <Link to='/' className='sidebar'>Salir</Link>
          </label>
        </div>
        <div className="mt-12  mr-80">
            <button className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
              <Link to='/' className='sidebar'> Guardar usuario</Link>
            </button>
        </div>
      </div> 
      {/* <!--Formulario de registro--> */}      
      <div className="absolute flex w-9/12 h-5/6 left-80 top-28 mx-0 justify-center place-self-center rounded-b-3xl rounded-t-3xl shadow-2xl bg-white" style={{overflowY: 'scroll'}}>
        <form className="w-full w-11/12 mt-6">
          {/* <!--Nombre y apellido--> */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 pb-6 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Primer Nombre
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                <p className="text-red-500 text-xs italic">El primer nombre es requerido</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Segundo Nombre
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    <p className="text-red-500 text-xs italic">El segundo nombre es requerido</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Primer Apellido
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    <p className="text-red-500 text-xs italic">El primer apellido es requerido</p>
              </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Segundo apellido
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    <p className="text-red-500 text-xs italic">El segundo apellido es requerido</p>
                </div>
            </div>
            {/* <!--Informacion personal--> */}
            <div className="flex pb-6 ">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      Tipo de Documento
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Número de pasaporte</option>
                      <option>Tarjeta de indentidad</option>
                      <option>Cédula ciudadanía</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    N° Documento
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1024578200" />
                  <p className="text-red-500 text-xs italic">El documento es requerido</p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Genero
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otros</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Fecha de nacimiento y celular--> */}
            <div className="flex pb-6">
                <div className="flex flex-col px-3 mb-0 md:mb-0">
                  <div className="">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                      Fecha de nacimiento
                    </label>
                  </div>
                  <div className="border-b border-teal-500 px-3 mb-4">
                    <input className="appearance-none bg-transparent border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" />
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-10" for="grid-state">
                        Número Telefonico
                    </label>
                    <div className="relative w-28 ml-10">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>  +57</option>
                            <option>+58</option>
                            <option>+18</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-2 mt-6 mr-4">
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1024578200" />
                </div>  
            </div>
            {/* <!--Creacion de usuario--> */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 pb-6 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Correo
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="*******@hotmail.com" />
                <p className="text-red-500 text-xs italic">El correo es requerido</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      confirme el correo
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="*******@hotmail.com" />
                    <p className="text-red-500 text-xs italic">La confirmacion del correo es requerido</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      Contraseña
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="password" placeholder="************" />
                    <p className="text-red-500 text-xs italic">La contraseña es requerido</p>
              </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      confirme contraseña
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="************" />
                    <p className="text-red-500 text-xs italic">La confirmacion de la contraseña es requerido</p>
                </div>
            </div>
            {/* <!--Informacion de ubicacion--> */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Departamento
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Atlántico" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Ciudad
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Barranquilla" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  Código Postal
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
              </div>
            </div>
            {/* <!--Informacion de residencia --> */}
            <div className="flex">
                
                <div className="relative self-center">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Dirección
                    </label>
                    <select className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Calle</option>
                        <option>Carrera</option>
                        <option>Diagonal</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0 self-center">
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="14" />
                </div>
                <div className="relative self-center mt-6">
                    <select className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="Letra">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mt-2 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    N°
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="14" />
                </div>
                <div className="relative self-center mt-6">
                    <select className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="Letra">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mt-2 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Barrio
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Buena vista" />
                </div>
            </div>
            {/* <!--Terminos y condiciones--> */}
            <div className="flex px-3 pb-6 mb-4 mt-2 md:mb-0">
                <input type="checkbox" className="w-4 h-4 shadow-2xl mt-2" />
                <div className="mx-2">
                  <p className="text-gray-600 text-xl italic">He leído y aceptado los terminos y condiciones</p>
               </div>
            </div>
        </form>
    
      </div>
    </div> 
  </div>
  )
}
