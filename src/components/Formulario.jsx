import { useState } from "react"
import "./Formulario.css"

const validarNombre = (valor) => {
    if (!valor.trim()) return "El nombre es obligatorio"
    if (valor.length < 5 || valor.length > 50) return "Longitud el nombre incorrecta"
    return null;
}

const validarEdad = (valor) => {
    const edad = Number(valor);
    if (isNaN(edad)) return "La edad debe ser un número";
    if (edad > 5 || edad < 3) return "La edad no es correcta"
    return null;
}

const validarDireccion = (valor) => {
    if (!valor.trim()) return "La direccion es obligatorio"
    if (valor.length > 50) return "La direccion es demasiado larga"
    return null;
}

const validarTelefono = (valor) => {
    const regex = /^[6789]\d{8}$/
    if (!valor) return "El teléfono es obligatorio"
    if (!regex.test(valor)) return "El número no es valido"
    return null;
}

const validarClase = (valor) => {
    if (!valor.trim()) return "La clase es obligatorio"
    if (valor != "rosas" && valor != "girasoles" && valor != "cerezos") return "Clase invalida"
    return null;
}





export default function Formulario() {
    const [datosFormualario, setDatosFormulario] = useState({
        nombre: "",
        edad: 3,
        direccion: "",
        telefono: "",
        clase: "",
        alergenos: []
    })

    const [errores, setErrores] = useState({
        nombre: null,
        edad: null,
        direccion: null,
        telefono: null,
        clase: null,
    })

    // const manejaCambio = (e) => {
    //     // Sacamos del evento el name y el value del input que ha cambiado
    //     // e.target es el input que el usuario ha tocado
    //     const { name, value } = e.target;

    //     // Actualizamos el estado del formulario
    //     setDatosFormulario((prev) => ({
    //         // Copiamos todo lo que ya había en el estado
    //         ...prev,

    //         // Sobrescribimos SOLO el campo que ha cambiado
    //         // name es el nombre del input (ej: "nombre", "edad", etc.)
    //         // value es lo que el usuario ha escrito
    //         [name]: value,
    //     }))
    // }

    const manejaCambio = (e) => {
        const { name, value } = e.target;

        setDatosFormulario((prev) => ({
            ...prev,
            [name]: value,
        }));

        let error = null;

        if (name === "nombre") error = validarNombre(value);
        if (name === "edad") error = validarEdad(value);
        if (name === "direccion") error = validarDireccion(value);
        if (name === "telefono") error = validarTelefono(value);
        if (name === "clase") error = validarClase(value);

        setErrores((prev) => ({
            ...prev,
            [name]: error,
        }));
    };


    const manejaEnvio = (e) => {
        e.preventDefault();
        console.log(datosFormualario);

        const nuevosErrores = {
            nombre: validarNombre(datosFormualario.nombre),
            edad: validarEdad(datosFormualario.edad),
            direccion: validarDireccion(datosFormualario.direccion),
            telefono: validarTelefono(datosFormualario.telefono),
            clase: validarClase(datosFormualario.clase)
        }

        // Convertimos el objeto de errores en un array de pares [clave, valor]
        // Ejemplo: { nombre: null, edad: "Error" }
        // pasa a: [ ["nombre", null], ["edad", "Error"] ]
        const erroresFiltrados = Object.fromEntries(

            // Object.entries devuelve un array con [clave, valor] por cada propiedad
            Object.entries(nuevosErrores)
                // Filtramos solo las entradas cuyo valor NO sea null
                // Es decir, nos quedamos únicamente con los campos que tienen error
                .filter(([_, el]) => el !== null),
        );

        // Comprobamos si el objeto resultante tiene alguna clave
        // Si tiene claves, significa que hay errores en el formulario
        if (Object.keys(erroresFiltrados).length > 0) {

            // Guardamos todos los errores en el estado
            // (los null indican campos sin error)
            setErrores(nuevosErrores);

            // Cortamos la ejecución para que NO se envíe el formulario
            return;
        }
        // Si no hay errores (el objeto está vacío),
        // el formulario se considera válido y se envía
        alert("Formulario Enviado");


    }

    const obtenerClasesInputs = (nombreCampo) => {
        const claseBase =
            "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition";

        // Si aún no se ha validado, no pintamos nada
        if (errores[nombreCampo] === null) {
            return claseBase;
        }

        // Si hay error → rojo
        if (errores[nombreCampo]) {
            return `${claseBase} border-red-500 focus:ring-red-500`;
        }

        // Si no hay error → verde
        return `${claseBase} border-green-500 focus:ring-green-500`;
    };






    return (
        <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Formulario Final
            </h2>
            <form onSubmit={manejaEnvio} noValidate >

                <label htmlFor="nombre">Nombre Completo</label>
                <input
                    className={obtenerClasesInputs("nombre")}
                    name="nombre"
                    id="nombre"
                    value={datosFormualario.nombre}
                    onChange={manejaCambio}
                    placeholder="Introduce tu nombre:"
                />
                {errores.nombre && <p className="errores">{errores.nombre}</p>}
                <label htmlFor="edad">Edad</label>
                <input
                    className={obtenerClasesInputs("edad")}
                    name="edad"
                    id="edad"
                    value={datosFormualario.edad}
                    onChange={manejaCambio}
                    placeholder="Introduce tu edad"
                />
                {errores.edad && <p className="errores">{errores.edad}</p>}
                <label htmlFor="direccion">Dirección:</label>
                <input
                    className={obtenerClasesInputs("direccion")}
                    name="direccion"
                    id="direccion"
                    value={datosFormualario.direccion}
                    onChange={manejaCambio}
                    placeholder="Introduce tu dirección:"
                />
                {errores.direccion && <p className="errores">{errores.direccion}</p>}
                <label htmlFor="telefono">Teléfono</label>
                <input
                    className={obtenerClasesInputs("telefono")}
                    name="telefono"
                    id="telefono"
                    type="tel"
                    value={datosFormualario.telefono}
                    onChange={manejaCambio}
                    placeholder="Introduce tu teléfono:"
                />
                {errores.telefono && <p className="errores">{errores.telefono}</p>}
                <label htmlFor="clase">Clase:</label>

                <label htmlFor="clase">Rosas:</label>
                <input

                    type="radio"
                    name="clase"
                    value="rosas"
                    onChange={manejaCambio}
                />

                <label htmlFor="clase">Girasoles:</label>
                <input

                    type="radio"
                    name="clase"
                    value="girasoles"
                    onChange={manejaCambio}
                />
                <label htmlFor="clase">Cerezos:</label>
                <input

                    type="radio"
                    name="clase"
                    value="cerezos"
                    onChange={manejaCambio}
                />
                {errores.clase && <p className="errores">{errores.clase}</p>}
                <label htmlFor="alergenos">Alérgenos</label>
                <input

                    type="checkbox"
                    name="alergenos"
                    value={datosFormualario.alergenos}
                    onChange={manejaCambio}
                />

                <button type="submit">ENVIAR</button>


            </form>

        </>
    )
}


