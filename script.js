// ===== EFEITO DE DIGITAÇÃO =====
const typingText = document.querySelector('.typing-text');
const frases = [
    'Desenvolvedor Web',
    'Especialista em C#',
    'Crio sites responsivos',
    'Transformo ideias em código'
];

let indiceFrase = 0;
let indiceCaractere = 0;
let estaApagando = false;

function efeitoDigitar() {
    const fraseAtual = frases[indiceFrase];
    
    if (estaApagando) {
        typingText.textContent = fraseAtual.substring(0, indiceCaractere - 1);
        indiceCaractere--;
    } else {
        typingText.textContent = fraseAtual.substring(0, indiceCaractere + 1);
        indiceCaractere++;
    }

    let velocidade = estaApagando ? 50 : 100;

    if (!estaApagando && indiceCaractere === fraseAtual.length) {
        velocidade = 2000; // Pausa antes de apagar
        estaApagando = true;
    } else if (estaApagando && indiceCaractere === 0) {
        estaApagando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        velocidade = 500; // Pausa antes de escrever próxima
    }

    setTimeout(efeitoDigitar, velocidade);
}

// Inicia o efeito quando a página carrega
document.addEventListener('DOMContentLoaded', efeitoDigitar);

// ===== MENU MOBILE =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('ativo');
    const icone = menuBtn.querySelector('i');
    icone.classList.toggle('fa-bars');
    icone.classList.toggle('fa-times');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('ativo');
        const icone = menuBtn.querySelector('i');
        icone.classList.remove('fa-times');
        icone.classList.add('fa-bars');
    });
});