import React from 'react';

export default function FormularioContacto() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-5">

        <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-gray-800 focus-within:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-gray-500">account_circle</span>
          <input
            type="text"
            placeholder="Nombre"
            className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-gray-800 focus-within:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-gray-500">call</span>
          <input
            type="tel"
            placeholder="Teléfono"
            className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-gray-800 focus-within:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-gray-500">mail</span>
          <input
            type="email"
            placeholder="Correo"
            className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div>
          <p className="text-gray-400 text-xs mb-2">Proporciona contexto de tu proyecto</p>
          <textarea
            className="w-full h-32 bg-[#2a2a2a] rounded-lg border border-gray-700 text-white p-3 focus:outline-none focus:border-gray-500 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white py-2 px-6 rounded-full text-sm border border-gray-700 transition-colors">
            Enviar Informacion
          </button>
        </div>

      </form>
    </div>
  );
}