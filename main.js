const canvas = document.getElementById("canvasDibujo");
const ctx = canvas.getContext("2d");
const borrarBtn = document.getElementById("borrar");
const colorPicker = document.getElementById("colorPicker");
const lapizNormalBtn = document.getElementById("lapizNormal");

// Configuración inicial
let dibujando = false;
let colorLapiz = "black";
let grosorLapiz = 1;

// Función para empezar a dibujar
const startDibujo = (event) => {
  dibujando = true;
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
};

// Función para terminar de dibujar
const stopDibujo = () => {
  dibujando = false;
  ctx.closePath();
};

// Función para dibujar
const draw = (event) => {
  if (!dibujando) return;

  ctx.lineWidth = grosorLapiz;
  ctx.strokeStyle = colorLapiz;
  ctx.lineCap = "round";

  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};

// Función para borrar (cambiar a lápiz blanco con grosor 30px)
const borrar = () => {
  colorLapiz = "white";
  grosorLapiz = 30;
};

// Función para cambiar el color del lápiz
const cambiarColor = (event) => {
  colorLapiz = event.target.value;
  grosorLapiz = 1; // Restaurar grosor normal
};

// Función para restaurar el lápiz normal
const lapizNormal = () => {
  colorLapiz = colorPicker.value;
  grosorLapiz = 1;
};

// Eventos del canvas
canvas.addEventListener("mousedown", startDibujo);
canvas.addEventListener("mouseup", stopDibujo);
canvas.addEventListener("mousemove", draw);

// Eventos de los controles
borrarBtn.addEventListener("click", borrar);
colorPicker.addEventListener("input", cambiarColor);
lapizNormalBtn.addEventListener("click", lapizNormal);
