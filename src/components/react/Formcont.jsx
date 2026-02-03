import React, { useState } from 'react';

export default function FormularioContacto() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mojlopnn", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full h-full min-h-[400px] bg-[#1a1a1a] p-8 rounded-lg flex flex-col items-center justify-center text-center border border-gray-800 animate-fade-in">
        <span className="material-symbols-outlined text-green-500 text-6xl mb-4">check_circle</span>
        <h3 className="text-2xl text-white font-bold mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-400 mb-6">Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
        <button
          onClick={() => setStatus("")}
          className="text-sm text-gray-500 hover:text-white transition-colors underline decoration-solid cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-gray-800 focus-within:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-gray-500">account_circle</span>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Nombre"
            className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-gray-800 focus-within:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-gray-500">call</span>
          <input
            type="tel"
            name="telefono"
            required
            placeholder="Teléfono"
            className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-center gap-3 border border-gray-800 focus-within:border-gray-500 transition-colors">
          <span className="material-symbols-outlined text-gray-500">mail</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Correo"
            className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div>
          <p className="text-gray-400 text-xs mb-2">Proporciona contexto de tu proyecto</p>
          <textarea
            name="mensaje"
            required
            className="w-full h-32 bg-[#2a2a2a] rounded-lg border border-gray-700 text-white p-3 focus:outline-none focus:border-gray-500 resize-none"
          ></textarea>
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#1a1a1a] hover:bg-[#252525] disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 px-6 rounded-full text-sm border border-gray-700 transition-colors"
          >
            {status === "sending" ? "Enviando..." : "Enviar Informacion"}
          </button>
        </div>

      </form>
    </div>
  );
}