// Para capturar o formulario do HMTL
const form = document.querySelector('#form');
//Para parar o formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Capturou os dados do input
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    // Alterando para number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //validando se o peso é valido e se não for setando ele como invalido e enviando a mensagem de invalido
    if (!peso){
        setResultado ('Peso inválido!', false);
        return; 
    }
       //validando se a altura é valida e se não for setando ela como invalida e enviando a mensagem de invalido
    if (!altura){
        setResultado ('Altura inválida!', false);
        return;
    }
    // Chamando a função de calcular o IMC
     const imc = getImc(peso, altura);

    // Chamando a função que diz o nível do IMC 
     const nivelImc = getNivelImc(imc);

    // Mensagem que será apresentada para o usuário
     const msg = `Seu IMC é ${imc} (${nivelImc})`;

    // Setou o valor como verdadeiro
     setResultado (msg, true );
});
//função que calcula o IMC
function getImc (peso, altura){
 const imc = peso / altura ** 2;
 return imc.toFixed(2);
}

function criaP (){ //função repsonsavel por criar paragrafo
    const p = document.createElement('p');
    return p;
}

// Para enviar o resultado para o HTML
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    // Verifica se o valor digitado pelo usuário é verdadeiro, se for ele apresenta o paragráfo azul e se não for, apresenta como vermelho
    if (isValid) {
        p.classList.add('.paragrafo-resultado')
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}


function getNivelImc (imc){
    // Criado o array para verificar o nível
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau l', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >=39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}


