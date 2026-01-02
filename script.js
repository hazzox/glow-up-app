function verProgreso() {
  const checks = document.querySelectorAll("input[type='checkbox']");
  let completados = 0;

  checks.forEach(c => {
    if (c.checked) completados++;
  });

  document.getElementById("resultado").innerText =
    "Completaste " + completados + " hábitos hoy ✨";
}
