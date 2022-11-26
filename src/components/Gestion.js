import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Gestion (){
  return (
    <div className="relative h-screen flex flex-row ">
    {/* <!--Columna de presentacion--> */}
    <div className="fixed flex flex-col w-64 h-screen bg-cyan-50">
      <div className="flex h-48 border-b-4 border-teal-500 bg-gray-200 ">
        <h1 className="text-xl font-semibold mx-4 mt-4">Listado de ordenes</h1>
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
                <Link to='/' className='sidebar'> Salir</Link>
              </label>
            </div>
            <div className="mt-16 mx-0 mr-96">
                <button className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                <Link to='/Create' className='sidebar'>Crear orden</Link>
                </button>
            </div>
        </div> 
      {/* <!--Tabla del listado de las ordenes--> */}      
        <div className="absolute flex h-96 w-9/12 h-5/6 left-80 top-36 mx-0 justify-center place-self-center rounded-t-2xl shadow-2xl bg-white" style={{overflow: 'scroll'}}>
            <table className="w-screen h-10 rounded-t-2xl text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 rounded-t-2xl uppercase bg-cyan-100">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            N° servicio
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Fecha
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Cuidad de enrega
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Dirección de entrega
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Estado
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Editar</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b  hover:bg-gray-50 hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6">
                            
                        </td>
                        <td className="py-4 px-6 text-right">
                        </td>
                        <td className="py-4 px-6 text-right">
                            <Link to='/Actualizar' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">editar</Link>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div> 
  </div>

  )
  }

