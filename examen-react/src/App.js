
import './App.css';
import { useState } from 'react';
import Table from './Table';


function App() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const isButtonDisabled = !nombre || !apellidos || !correo || !telefono;
  const [mostrarTabla, setMostrarTabla] = useState(false); 

  const datos = [
    {
    id:1,
    name: 'Joel Elias',
    lastName: 'Peñaloza',
    phone: '6122380504'
  },
  {
    id:2,
    name: 'annakary',
    lastName: 'vega',
    phone: '6122189437'
  },
];


  const NombreChange = (e) => {
      const nombre = e.target.value;
      const soloLetrasyEspacios = nombre.replace(/[^a-zA-Z\s]+/g, '');
      setNombre(soloLetrasyEspacios);
  };

  const ApellidosChange = (e) => {
      const apellidos = e.target.value;
      const soloLetrasyEspacios = apellidos.replace(/[^a-zA-Z\s]+/g, '');
      setApellidos(soloLetrasyEspacios);
  };

  const CorreoChange = (e) => {
      setCorreo(e.target.value);
  };

  const TelefonoChange = (e) => {
      setTelefono(e.target.value);
  };
  const limpiarFormulario = () => {
    setNombre('');
    setApellidos('');
    setCorreo('');
    setTelefono('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción cuando se envíe el formulario.
    // Por ahora, simplemente mostraremos la tabla.
    setMostrarTabla(true);
  };

  return (
   <div className='App'>
    {mostrarTabla && <Table  datos={datos} />} 
    
 <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Registrar Información en Tabla
                        </h1>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                value={nombre}
                                onChange={NombreChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Apellidos</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                value={apellidos}
                                onChange={ApellidosChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name@company.com"
                                value={correo}
                                onChange={CorreoChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Teléfono</label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                value={telefono}
                                onChange={TelefonoChange}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={limpiarFormulario}
                            className={`w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-500 text-white`}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className={`w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isButtonDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-black'
                                }`}
                            disabled={isButtonDisabled}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
   </div>
   
);
}

export default App;
