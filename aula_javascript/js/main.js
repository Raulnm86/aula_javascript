

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log( document.getElementById("Agradecimento"));
    //alert ("Obrigado por clicar");
}

function redirecionar(){
    window.open("http://ww1.globallabs.academy/");
    //window.location.href = "http://ww1.globallabs.academy"
}

function trocar (elemento){
    //document.getElementById ("mousemove").innerHTML = "Obirgado por nos visitar"
    elemento.innerHTML = "Obirgado por nos visitar";
    //alert ("trocar texto");
}

function voltar(elemento){
    //document.getElementById ("mousemove").innerHTML = "passe o mouse aqui"
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}
function validaridade (idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt ("Qual sua idade?");
console.log (validaridade(idade));
*/

//alert(soma (5, 10));

//var d = new Date();
//alert(d.getMinutes());

/*
var count;
for(count = 0; count <= 5; count ++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count ++
};
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert ("maior de idade");
}else {
    alert ("menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva")
//lista.pop()
//console.log (lista);
//console.log (lista.toString())
//console.log (lista.join(" - "))

//var nome = " Raul Machado"
//var n1 = 5
//var n2 = 3
//var frase = "Galo doido é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("galo doido", "Galão da massa"));