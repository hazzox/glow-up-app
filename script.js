const frases = [
  "Tú puedes con todo 💪",
  "Hoy es un gran día 🌞",
  "Confía en ti ✨",
  "Eres increíble 🔥",
  "Sigue brillando 💖"
];

document.getElementById("boton").addEventListener("click", () => {
  const random = Math.floor(Math.random() * frases.length);
  document.getElementById("resultado").textContent = frases[random];
});
