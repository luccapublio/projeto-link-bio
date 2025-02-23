function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img corretamente
  const img = document.querySelector("#profile img")

  console.log(img)
  // Substituir a imagem
  if (img) {
    if (html.classList.contains("light")) {
      // Se estiver no modo light, trocar para a imagem clara
      img.src = "./assets/avatar-light.png"
    } else {
      // Caso contrário, manter a imagem normal
      img.src = "./assets/avatar.png"
    }
  }
}
