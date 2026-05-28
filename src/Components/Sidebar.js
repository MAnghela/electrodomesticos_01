import React, { useState } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  ShoppingCart,
} from "lucide-react";


import Ventas from "./ventas";

function Sidebar({ setIsLogged }) {
  const [vista, setVista] = useState("inicio");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-violet-700 text-white p-5">
        <h1 className="text-3xl font-bold mb-10">Panel</h1>
        <ul className="space-y-6">
          <li
            onClick={() => setVista("inicio")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-200"
          >
            <Home size={22} /> Inicio
          </li>
          <li
            onClick={() => setVista("usuarios")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-200"
          >
            <User size={22} /> Usuarios
          </li>
          <li
            onClick={() => setVista("ventas")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-200"
          >
            <ShoppingCart size={22} /> Ventas
          </li>
          <li
            onClick={() => setVista("configuracion")}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-200"
          >
            <Settings size={22} /> Configuración
          </li>
          <li
            onClick={() => setIsLogged(false)}
            className="flex items-center gap-3 cursor-pointer hover:text-gray-200 mt-20"
          >
            <LogOut size={22} /> Cerrar sesión
          </li>
        </ul>
      </div>

      {/* Área de contenido dinámico */}
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        {vista === "inicio" && (
          <h1 className="text-4xl font-bold">Bienvenido al Dashboard</h1>
        )}
        {vista === "usuarios" && (
          <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
        )}
        {vista === "ventas" && <Ventas />}
        {vista === "configuracion" && (
          <h1 className="text-2xl font-bold">Configuración del sistema</h1>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
