let totalMatches = 0;


const botaoMatch = document.querySelector('#botao-match');
const placarMatches = document.querySelector('#placar-matches');


botaoMatch.addEventListener('click', () => {
    totalMatches++;
    placarMatches.textContent = totalMatches;
});


console.log("Sobrevivente conectado ao DOM");


const cabecalho = document.querySelector('header');
console.log(cabecalho);


const htmlRoot = document.documentElement;
const btnTema = document.querySelector('#btn-tema');
btnTema.addEventListener('click', () => {
    if (htmlRoot.getAttribute('data-theme') === 'light') {
        htmlRoot.removeAttribute('data-theme');
        btnTema.textContent = 'Modo Sobrevivência';
    } else {
        htmlRoot.setAttribute('data-theme', 'light');
        btnTema.textContent = 'Modo Sombrio';
    }
});


const boasVindas = document.querySelector('#boas-vindas');


const tituloSite = document.querySelector ('header h1');
tituloSite.textContent = 'The walking Date';


const listaBeneficios = document.querySelectorAll('ol li');

const campoNome = document.querySelector('input[type="text"]');
const previewCracha = document.querySelector('#preview-cracha');
campoNome.addEventListener('input', () => {
  previewCracha.textContent = "Crachá de Sobrevivente: " + campoNome.value;
});

const campoEmail = document.querySelector('inupt[type="email"]');


const imagem = document.querySelector('img');
console.log(imagem.getAttribute('alt'));


imagem.setAttribute('alt', 'Casal de Zumbis apaixonados caminhando ao pôr do sol');
campoNome.value = "Sobrevivente Anônimo";


const primeiraLinha = document.querySelector('tbody tr');
primeiraLinha.classList.add('destaque-infectado');


const aviso = document.createElement('p');


const aviso = document.getElementById("aviso");
aviso.textContent = "ALERTA DE HORDA; Encontros hoje apenas em zonas seguras!";


const novoBeneficio = document.createElement('li');
novoBeneficio.textContent = "Seguro contra perda de membros durante o primeiro encontro";


const novoBeneficio = document.createElement('li');
novoBeneficio.textContent = "Seguro contra perda de membros durante o primeiro encontro";


const lista = document.querySelector("#beneficios ol");
lista.appendChild(novoBeneficio);


const fecharAlerta = document.querySelector('#fechar-alerta');


fecharAlerta.addEventListener('click', () => {
    document.querySelector('#barra-alerta').remove();
});


const botaoMatch = document.querySelector('#botao-match');
botaoMatch.addEventListener('click', function (event) {
    event.target.textContent = 'Match Confirmado';
    event.target.disabled = true;
});

document.querySelector("#btn-calcular").addEventListener("click", () => {
    const input1 = Number(document.querySelector("#input1").value);
    const input2 = Number(document.querySelector("#input2").value);
    console.log(input1, input2)

})
document.querySelector("#btn-calcular").addEventListener("click", () => {
    let v1 = document.querySelector("#input1").value;
    let v2 = document.querySelector("#input2").value;
    let soma = Number(v1) + Number(v2);
    document.querySelector("#resultado-quimica").textContent =
        v1 === "" || v2 === "" || soma < 0 || Number(v1) < 0 || Number(v2) < 0
        ? "Erro: Digite um número válido de dias,humano!"
        : "Nível de podridãocombinada : " + soma + " dias! compatibilidade alta!";
});

const imagemPrincipal = document.querySelector('img'); 

imagemPrincipal.addEventListener('mouseover', () => {
  console.log("Cuidado! Não chegue muito perto da tela ...");
});

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 
  console.log("Formulário enviado!");
});

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Cadastro concluído, " + campoNome.value + "! Prepare sua melhor mordida.");
        campoNome.value = "";
        campoEmail.value = "";
    document.querySelector('#preview-cracha')
    .textContent = "";
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const barra = document.querySelector('#barra-alerta');
        if (barra) {
            barra.remove();
        }
    }
});