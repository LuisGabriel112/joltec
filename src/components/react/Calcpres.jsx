import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const opciones = {
  tipos: [
    { label: "Sitio Web Corporativo / Landing Page", precio: 7500, id: "web" },
    { label: "Plataforma Web (SaaS / Dashboard)", precio: 28000, id: "platform" },
    { label: "E-Commerce / Tienda en Línea", precio: 18500, id: "ecommerce" },
    { label: "Aplicación Móvil", precio: 35000, id: "app" },
    { label: "Desarrollo a Medida / API", precio: 25000, id: "custom" },
  ],
  alcance: [
    { label: "Solo es una idea", precio: 4500, id: "idea" },
    { label: "Tengo el diseño listo", precio: -2000, id: "design" },
    { label: "Tengo los requerimientos", precio: 0, id: "requirements" },
    { label: "Proyecto existente", precio: 6000, id: "existing" },
  ],
  nivelDiseno: [
    { label: "Funcional / Flexible", precio: 0, id: "functional" },
    { label: "Premium", precio: 6500, id: "premium" },
    { label: "Personalizado", precio: 10000, id: "custom_design" },
  ],
  funcionalidades: [
    { label: "Sistema de Usuarios", precio: 6500, id: "users" },
    { label: "Pagos en Línea", precio: 8500, id: "payments" },
    { label: "Panel de Administración (CMS)", precio: 7500, id: "cms" },
    { label: "Integración con APIs Externas", precio: 7000, id: "api" },
    { label: "Base de Datos Compleja", precio: 9500, id: "db" },
    { label: "Chatbot", precio: 12000, id: "chat" },
    { label: "Multilenguaje", precio: 4000, id: "multi" },
  ],
};

export default function CalculadoraPresupuesto() {
  const [seleccion, setSeleccion] = useState({
    tipo: null,
    alcance: null,
    nivelDiseno: null,
    funcionalidades: [],
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;

    // Base Price
    if (seleccion.tipo) subtotal += seleccion.tipo.precio;

    // Add functionalities
    const funcsPrecio = seleccion.funcionalidades.reduce((acc, curr) => acc + curr.precio, 0);
    subtotal += funcsPrecio;

    // Add Scope Price
    if (seleccion.alcance) subtotal += seleccion.alcance.precio;

    // Add Design Price
    if (seleccion.nivelDiseno) subtotal += seleccion.nivelDiseno.precio;

    // Ensure total is not negative
    setTotal(Math.max(0, subtotal));
  }, [seleccion]);

  const handleFuncionalidadChange = (func) => {
    setSeleccion((prev) => {
      const exists = prev.funcionalidades.find((f) => f.id === func.id);
      if (exists) {
        return { ...prev, funcionalidades: prev.funcionalidades.filter((f) => f.id !== func.id) };
      }
      return { ...prev, funcionalidades: [...prev.funcionalidades, func] };
    });
  };

  return (
    <div className="text-white space-y-6">

      {/* Tipo de Proyecto */}
      <div>
        <h4 className="text-orange-500 font-semibold mb-3">Qué Necesitas?</h4>
        <div className="flex flex-wrap gap-3">
          {opciones.tipos.map((op) => (
            <button
              key={op.id}
              onClick={() => setSeleccion({ ...seleccion, tipo: op })}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${seleccion.tipo?.id === op.id
                ? "bg-orange-600 border-orange-600 text-white"
                : "bg-transparent border-gray-600 text-gray-400 hover:border-gray-400"
                }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${seleccion.tipo?.id === op.id ? 'bg-white' : 'bg-orange-500'}`}></span>
                {op.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Alcance */}
      <div>
        <h4 className="text-orange-500 font-semibold mb-3">Estado del Proyecto</h4>
        <div className="flex flex-wrap gap-3">
          {opciones.alcance.map((op) => (
            <button
              key={op.id}
              onClick={() => setSeleccion({ ...seleccion, alcance: op })}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${seleccion.alcance?.id === op.id
                ? "bg-orange-600 border-orange-600 text-white"
                : "bg-transparent border-gray-600 text-gray-400 hover:border-gray-400"
                }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${seleccion.alcance?.id === op.id ? 'bg-white' : 'bg-orange-500'}`}></span>
                {op.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Nivel de Diseño */}
      <div>
        <h4 className="text-gray-400 font-semibold mb-3">Nivel de Diseño Visual requerido</h4>
        <div className="flex flex-wrap gap-3">
          {opciones.nivelDiseno.map((op) => (
            <button
              key={op.id}
              onClick={() => setSeleccion({ ...seleccion, nivelDiseno: op })}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${seleccion.nivelDiseno?.id === op.id
                ? "bg-gray-600 border-gray-500 text-white"
                : "bg-transparent border-gray-700 text-gray-500 hover:border-gray-500"
                }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${seleccion.nivelDiseno?.id === op.id ? 'bg-gray-400' : 'bg-[#1a1a1a] border border-gray-600'}`}></span>
                {op.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Funcionalidades */}
      <div>
        <h4 className="text-gray-400 font-semibold mb-3">Funcionalidades Clave</h4>
        <div className="grid grid-cols-2 gap-3">
          {opciones.funcionalidades.map((op) => {
            const isSelected = seleccion.funcionalidades.find(f => f.id === op.id);
            return (
              <button
                key={op.id}
                onClick={() => handleFuncionalidadChange(op)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs border transition-colors text-left ${isSelected
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-transparent border-transparent text-gray-500 hover:bg-gray-900"
                  }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-orange-500 border-orange-500' : 'border-gray-600 bg-[#1a1a1a]'}`}>
                  {isSelected && <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>}
                </div>
                {op.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Barra de Progreso / Total */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
          <motion.div
            className="absolute top-0 left-0 h-full bg-linear-to-r from-green-500 to-green-400"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((total / 100000) * 100, 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-white font-medium">
          Tu inversión para este proyecto: <span className="text-white font-bold">${total.toLocaleString()}</span>
        </p>
      </div>

    </div>
  );
}