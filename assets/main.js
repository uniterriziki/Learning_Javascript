function fetchName() {
  const div = document.getElementById("greeting")
  const name =  document.getElementById("name").value
  const p = document.createElement("p")
  const greeting = document.createTextNode("Hello " + name + " welcome to the bootcamp");
  p.appendChild(greeting)
  div.appendChild(p)
}