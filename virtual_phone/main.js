const display = document.querySelector ('input[type=tel]');
 
const teclas = document.querySelectorAll ('input[type=button]');
 
const limpar = document.querySelector('.icon');
 
limpar.onclick = () => {
    const opcao = confirm('Deseja mesmo limpar?')
    if(opcao) {
        display.value = "";
    }
   
}
 
function valorTeclaToDisplay (i) {
    display.value += teclas[i].value;
}
 
//Criar uma condição para travar mais 14 digitos
for(let i = 0; i < teclas.length; i++){
    teclas[i].onclick = () => {
        valorTeclaToDisplay(i);
    }
}
 