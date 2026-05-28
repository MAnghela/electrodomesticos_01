import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function Clase() {
  const [form, setForm] = useState({
    tipoDoc: "DNI",
    dni: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  // Simulación de búsqueda DNI falta conectar con el api
  const buscarDNI = () => {
    if (form.dni === "12345678") {
      setForm({form, nombres: "Juan Carlos",apellidos: "Pérez Ramírez",});

    } else {
      alert("DNI no encontrado");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Registro de Cliente</h1>

      <table className="w-full border border-gray-300">
        <tbody>

         {/* Tipo documento + DNI */}
          <tr className="border">
            <td className="p-3 font-semibold">Documento</td>
            <td className="p-3 flex gap-2 items-center">
              
              <select name="tipoDoc" value={form.tipoDoc} onChange={handleChange} className="border p-2 rounded">
                <option>DNI</option>   
              </select>
              <div className="flex border rounded overflow-hidden">
                <input type="text" name="dni" value={form.dni} onChange={handleChange} placeholder="Ingrese DNI" className="p-2 outline-none"/>
                <button onClick={buscarDNI} className="bg-pink-500 text-white px-3 flex items-center justify-center">
                  <FaSearch />
                </button>
              </div>
            </td>
          </tr>

          {/* Nombres */}
          <tr className="border">
            <td className="p-3 font-semibold">Nombres</td>
            <td className="p-3">
              <input name="nombres" value={form.nombres} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Nombres"/>
            </td>
          </tr>

          {/* Apellidos */}
          <tr className="border">
            <td className="p-3 font-semibold">Apellidos</td>
            <td className="p-3">
              <input name="apellidos" value={form.apellidos} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Apellidos" />
            </td>
          </tr>

          {/* Teléfono */}
          <tr className="border">
            <td className="p-3 font-semibold">Teléfono</td>
            <td className="p-3">
              <input name="telefono" value={form.telefono} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Teléfono" />
            </td>
          </tr>

          {/* Correo */}
          <tr className="border">
            <td className="p-3 font-semibold">Correo</td>
            <td className="p-3">
              <input name="correo" value={form.correo} className="w-full border p-2 rounded" placeholder="Correo electrónico"/>
            </td>
          </tr>

          {/* Dirección */}
          <tr className="border">
            <td className="p-3 font-semibold">Dirección</td>
            <td className="p-3">
              <input name="direccion" value={form.direccion} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Dirección" />
            </td>
          </tr>

        </tbody>
      </table>

      {/* Botón guardar */}
      <div className="mt-6">
        <button className="bg-pink-500 text-white px-6 py-2 rounded">
          Guardar Cliente
        </button>
      </div>
    </div>
  );
}

export default Clase;