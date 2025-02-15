function toggleMode() {
  /* Button */
 const html = document.documentElement
  html.classList.toggle("light")
 /* if(html.classList.contains("light")) {
  html.classList.remove("light")
 } else {
  html.classList.add("light")
 } */

  /* imagem */
  const img = document.querySelector("#profile img")
    if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light2.png")
  } else {
   img.setAttribute("src", "./assets/Avatar.png")
  }
}