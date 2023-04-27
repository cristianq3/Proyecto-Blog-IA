// Formulario

let descripcionObjeto, tituloObjeto;

const Formulario = document.querySelector("form");
Formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const Input = document.querySelector("input").value;
  console.log(Input);
  buscarArticulos(Input);
});

function buscarArticulos(texto) {
  const articles = document.querySelectorAll(".card-body")    
  articles.forEach(function (article){
    const title = article.querySelector(".card-title").textContent;      
    const description = article.querySelector(".card-text").textContent;
    tituloObjeto = article.querySelector(".card-title");
    descripcionObjeto = article.querySelector(".card-text");   
    if (texto !== ""){

      console.log("isnotNULL");
      span = `<span class="resultadoBusqueda">${texto}</span>`
      if (title.includes(texto) || description.includes(texto)){
        let cambiosTitulo = title.replace(texto,span);
        let cambiosDescripcion = description.replace(texto,span);
        console.log(cambiosTitulo);
        tituloObjeto.innerHTML = cambiosTitulo;
        descripcionObjeto.innerHTML = cambiosDescripcion;
        
      }     
      // tituloObjeto.remove("span");
      
    }else{
  
        
  
    }  
    });
}

setTimeout(() => {
  let myModal = new bootstrap.Modal(
    document.getElementById("modalPublicidad"),
    {}
  );
  myModal.show();
}, 4000);
