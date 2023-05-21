// funcao para criptografar uma palavra

function criptografar(palavra) {
    let palavraCriptografada = "";
    
    for (let i = 0; i < palavra.length; i++) {
       let letra = palavra[i];
        
        if (letra === "a") {
            palavraCriptografada += "ai";
        } else if (letra === "e") {
            palavraCriptografada += "enter";
        } else if (letra === "i") {
            palavraCriptografada += "ines";
        } else if (letra === "o") {
            palavraCriptografada += "ober";
        } else if (letra === "u") {
            palavraCriptografada += "ufat";
        } else {
            palavraCriptografada += letra;
        }
    }

    return palavraCriptografada;
}

// funcao para decriptografar uma palavra
// fimesnailimeszaidober

// f
function decriptar(palavra) {
    let palavraOriginal = "";
    let contador = 0;

    while (contador < palavra.length) {
        if (palavra[contador] === "a" && palavra[contador + 1] === "i") {
            palavraOriginal += "a";
            contador += 2;
        } else if (palavra[contador] === "e" && palavra[contador + 1] === "n" && palavra[contador + 2] === "t" && palavra[contador + 3] === "e" && palavra[contador + 4] === "r") {
            palavraOriginal += "e";
            contador += 5;
        } else if (palavra[contador] == "i" && palavra[contador + 1] === "m" && palavra[contador + 2] === "e" && palavra[contador + 3] === "s") {
            palavraOriginal += "i";
            contador += 4;
        } else if (palavra[contador] === "o" && palavra[contador + 1] === "b" && palavra[contador + 2] === "e" && palavra[contador + 3] === "r") {
            palavraOriginal += "o";
            contador += 4;
        } else if (palavra[contador] === "u" && palavra[contador + 1] === "f" && palavra[contador + 2] === "a" && palavra[contador + 3] === "t") {
            palavraOriginal += "u";
            contador += 4
        } else {
            palavraOriginal += palavra[contador];
            contador += 1;
        }
    }

    return palavraOriginal;
}

// Escutar eventos de criptografia e descriptografia

function eventoCriptografar() {
    let mensagem = getMensagem();

    if(mensagem === "") {
        mensagemNaoEncontrada();
        return;
    }
    
    mostrarMensagem(criptografar(mensagem));
}

function eventoDecriptar() {
    let mensagem = getMensagem();
    
    if(mensagem === "") {
        mensagemNaoEncontrada();
        return;
    }

    mostrarMensagem(decriptar(mensagem));
}

function mostrarMensagem(mensagem){
    let elemento = document.getElementById("resultado");

    elemento.innerHTML = `
    <div class="msg-result">
        <p id="msgResult">${mensagem}</p>
        <button id="botaoCopiar" class="botao botao-branco">Copiar</button>
    </div>`;

    let botaoCopiarMensagem = document.getElementById("botaoCopiar");
    botaoCopiarMensagem.onclick = copiarMensagem;
}

function mensagemNaoEncontrada(){
    let elemento = document.getElementById("resultado");

    elemento.innerHTML = `
    <div class="mensagem-nao-encontrada">
        <img id="mensagem-vazia" src="imagens/mensagem-vazia.png">
        <h3>Nenhuma mensagem encontrada</h3>
        <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
    </div>`;
}


function copiarMensagem() {
    let elemento = document.getElementById("resultado");
    let altura = elemento.getElementsByClassName("msg-result")[0].clientHeight;
    
    let copia = document.getElementById("msgResult").innerText;
    navigator.clipboard.writeText(copia);

    elemento.innerHTML = `
    <div class="msg-copied" style="min-height: ${altura}px">
        <h3>Mensagem copiada</h3>
    </div>
    `

    setTimeout(function() {
        mostrarMensagem(copia);
    }, 2000);
}

function getMensagem() {
    return document.getElementById("mensagem").value;
}

function eventos() {
    let btnEncriptar = document.getElementById("botao-criptografar");
    let btnDecriptar = document.getElementById("botao-decriptografar");

    btnEncriptar.onclick = eventoCriptografar;
    btnDecriptar.onclick = eventoDecriptar;
}

eventos();