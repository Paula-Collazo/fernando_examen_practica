const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const registros = [];

// Lista pública de girasoles
const girasoles = [
  { nombre: "Boochan", img: "../../webp/boo.webp" },
  { nombre: "Masao", img: "../../webp/masao.webp" },
  { nombre: "Kazama", img: "../../webp/kaza.webp" },
  { nombre: "Nene", img: "../../webp/nene.webp" },
  { nombre: "Shinchan", img: "../../webp/shin.webp" },
];

function crearRegistro(req, res) {
  const { nombre, edad, direccion, telefono, clase, alergenos } =
    req.body || {};

  // Validación básica
  if (!nombre || !edad || !direccion || !telefono || !clase) {
    return res
      .status(400)
      .json({ success: false, error: "Faltan campos requeridos" });
  }

  const nuevoRegistro = {
    id: registros.length + 1,
    nombre,
    edad: Number(edad),
    direccion,
    telefono,
    clase,
    alergenos: Array.isArray(alergenos)
      ? alergenos
      : alergenos
      ? [alergenos]
      : [],
    fechaRegistro: new Date().toLocaleString("es-ES"),
  };

  registros.push(nuevoRegistro);

  // Si viene desde un formulario tradicional, redirigimos a una página mínima
  return res.redirect(303, "/registro-exito");
}

app.post("/api/registro", crearRegistro);

app.get("/api/registros", (req, res) => {
  res.json({
    success: true,
    total: registros.length,
    data: registros,
  });
});

app.get("/api/girasoles", (req, res) => {
  res.json(girasoles);
});

app.get("/registro-exito", (req, res) => {
  res.send(
    `<!doctype html><html><head><meta charset="utf-8"><title>Éxito</title></head><body style="font-family:Segoe UI,Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f6f8fb;margin:0"><div style="background:#fff;padding:24px;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.08);text-align:center"><h2 style="color:#2b6cb0;margin-bottom:8px">¡Registro guardado!</h2><p style="color:#4a5568;margin-bottom:16px">Gracias — el registro se ha guardado correctamente.</p><a href="javascript:history.back()" style="color:#fff;background:#667eea;padding:10px 16px;border-radius:6px;text-decoration:none">Volver</a></div></body></html>`
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});