const FormComentarios = document.querySelector("#formComentarios");

FormComentarios.addEventListener("submit", function (e) {
  e.preventDefault();
  agregarComentario();
});

function agregarComentario() {
  const nombre = document.getElementById("nombre").value;
  const mail = document.getElementById("mail").value;
  const comentario = document.getElementById("comentario").value;
  const cajaComentarios = document.querySelector(".comentarios");

  console.log(nombre + mail + comentario);

  let comentarioCompleto = document.createElement("article");
  const fecha = new Date().toLocaleDateString();

  comentarioCompleto.innerHTML = ` 
  <div class=" fs-5 pb-3 vidrio p-4">
    <ul class="list-unstyled container">
      <li class="my-2"><b>Nombre: </b> ${nombre}</li>
      <li class="my-2"><b>E-mail:</b> ${mail}</li>
      <li class="cajaComentarios my-2">
        <b>Comentario:</b> <br />
        ${comentario}
      </li>
      <li class="text-secondary fw-light fst-italic">
        Comentario realizado el:
        <span class="text-white">${fecha}</span>
      </li>
    </ul>
  </div>
  `;

  console.log(comentarioCompleto);

  cajaComentarios.appendChild(comentarioCompleto);
}
