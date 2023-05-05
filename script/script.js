
var numero = parseInt(document.querySelector(".resultado").innerHTML);

function aumentar(){
    numero += 1;
    document.querySelector(".resultado").innerHTML=numero;
};
function diminuir(){
    numero -= 1;
    document.querySelector(".resultado").innerHTML=numero;
};
function zerar(){
    numero = 0;
    document.querySelector(".resultado").innerHTML=numero;
}