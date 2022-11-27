const contenedor = document.querySelector(".flex-container")

const boton = document.querySelector(".send-button")
let valorAntiguo = boton.value;
 boton.value = valorAntiguo.toUpperCase()
let contador = 0
function crearLlave(nombre,modelo,precio){
  contador++
  img="<img src='llave.png' class=llave.img>";
  nombre=`<h2>${nombre}</h2>`;
  modelo=`<h3>${modelo}</h3>`;
  precio= `<p>precio: <b>$ ${precio}</b></p>`;
	return[img,nombre,modelo,precio]

}

const changeHidden = (number)=>{
	document.querySelector(".key-data").value =number
}

let documentFragment = document.createDocumentFragment();

for (var i = 0; i <= 20 ; i++) {
	let modeloRamdom =Math.round (Math.random()*10000);
	let precioRamdom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRamdom}`, precioRamdom)
     let div= document.createElement("DIV");
      div.addEventListener("click",()=>{changeHidden(modeloRamdom)})
     div.tabIndex = i;
div.classList.add('flex-item' ,`item-${i}`);   
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);