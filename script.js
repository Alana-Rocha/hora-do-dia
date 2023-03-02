function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} hora(s) e ${minutos} minuto(s).`
if (hora >= 0 && hora < 12){
//Bom dia!
img.src='imagens/manha.png' 
document.body.style.background = '#d6c5b2'
} else if (hora >= 12 && hora <= 18 ) {
// Boa tarde!
img.scr='imagens/tarde.png'
document.body.style.background = '#658699' 
} else {
//Boa tarde!
img.src='imagens/noite.png'
document.body.style.background = '#001043' 
}

}
