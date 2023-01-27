import * as React from 'react';
import { Link, useNavigate} from "react-router-dom"
import { useState} from 'react'
import axios from "axios";

export default function App() {
    const navigate = useNavigate();

  const [redirectInfo,setRedirect] = useState(null);

  const [userInfo,setInfo] = useState({
    email : "",
    Password : "",
  });

  function handleSubmit(evt){

    const url = "http://localhost:9000/login";

    

    axios.get(url)
      .then((res) =>{
        if (res.data.statusCode === 200) {
            localStorage.setItem("accessToken", res.data.token);
            alert("Sesión Iniciada...")
            navigate("/Gestion");
        }else{
            setRedirect(res.data.message);
        }
    })
    .catch((error)=> console.log(error));
    
    evt.preventDefault();
  }

  function handleChange(evt){
    
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...userInfo,
      [name]: value, 
    };

    setInfo(newValues);

  }

console.log(redirectInfo);
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className='bg-white px-20 py-6 rounded-3xl border-2 border-gray-100'>
              <h1 className='text-5xl font-semibold'>Bienvenido</h1>
              <p className='font-medium text-lg text-gray-500 mt-4'>Hola! Ingresa tus datos.</p>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className='mt-8' >
                    <div>
                        <label className='text-lg font-medium'>Correo</label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu correo' name='email' type="text" value={userInfo.email} onChange={handleChange} required
                            />
                    </div>
                    <div>
                        <label className='text-lg font-medium'>Contraseña</label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Ingresa tu contraseña' name='Password'
                            type="password" value={userInfo.Password} onChange={handleChange} required
                            />
                    </div>
                    <div className='mt-6 flex justify-between items-center'>
                        <div>
                            <input 
                                type='checkbox'
                                id='recordar'
                            />
                            <label className='ml-2 font-medium text-base' for='recordar'>Recordar mi contraseña</label>
                        </div>
                        <button className='ml-3 font-medium text-base text-blue-500'> Olvide mi contraseña</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'type='submit'>Ingresar</button>
                        <button className='flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all' value="Send" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
                            Ingresa con Google
                        </button>
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <p className='font-medium text-base'>No tienes una cuenta?</p>
                        <button className='text-blue-500 text-base font-medium ml-2'>
                            <Link to="/Register" className='sidebar'>
                                Registrate
                            </Link>
                        </button>
                    </div>
                
                </div>
                {redirectInfo !== null &&
                <span>Error: {redirectInfo}</span>
              }
              </form>
          </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-green-500 rounded-full animate-spin"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
      </div>
    </div>
  );
}


