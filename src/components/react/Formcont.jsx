import React from 'react';

export default function FormularioContacto() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="p-2 rounded border" />
        <input type="email" placeholder="Correo" className="p-2 rounded border" />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}