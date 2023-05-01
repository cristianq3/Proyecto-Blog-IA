const Formu = document.querySelector("form");

Formu.addEventListener("submit", function (e) {
  e.preventDefault();
  const Input = document.querySelector(".formBuscar").value;

  buscarArticulos(Input);
});

function buscarArticulos(texto) {
  //traer el texto completo de cada elemento

  const textoTitulo = document.querySelector("h1.fw-bold").textContent;
  const textoDescripcion = document.querySelector("p.fs-5").textContent;
  // traer los contenedores del texto como objeto
  let tituloArticulo = document.querySelector("h1.fw-bold");
  let descripcionArticulo = document.querySelector("p.fs-5");
  let contenedorArticulo = document.querySelector("section.pb-sm-1");

  console.log("Texto y descripcion OK" + tituloArticulo + descripcionArticulo);
  // Si no es vacio
  if (texto !== "") {
    console.log("isnotNULL");

    let span = `<span class="resultadoBusqueda">${texto}</span>`;

    if (textoTitulo.includes(texto) || textoDescripcion.includes(texto)) {
      let cambiosTitulo = textoTitulo.replace(texto, span);

      let cambiosDescripcion = textoDescripcion.replace(texto, span);

      tituloArticulo.innerHTML = cambiosTitulo;
      descripcionArticulo.innerHTML = cambiosDescripcion;
    }
  } else {
    alert("Por favor ingrese un texto para poder buscar...");
    console.log("es vacio");
  }
}



