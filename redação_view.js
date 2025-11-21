// redacao_view.js - Script de visualização para redacao.html

// Lógica de prefixo para garantir que o link de voltar funcione corretamente
const prefix = window.location.hostname.includes("github.io") ? "minhas redações" : "";

// 1. Ajustar botão/link "Voltar"
const backLink = document.getElementById("voltar");
if (backLink) {
    backLink.href = `${prefix}index.html`;
}

// 2. Pegar ID da redação da URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 3. Recuperar lista do localStorage
const redacoes = JSON.parse(localStorage.getItem("redacoes"));

const t = document.getElementById("titulo");
const p = document.getElementById("texto");

// 4. Exibir ou mensagem de erro (Lógica de verificação mais robusta)
if (!redacoes || redacoes.length === 0 || isNaN(id) || id < 0 || id >= redacoes.length) {
    if (t) t.textContent = "Redação não encontrada (Erro 404)";
    if (p) p.textContent = "Verifique o link ou se a página inicial foi carregada corretamente.";
} else {
    // Exibe o título e texto da redação correta
    if (t) t.textContent = redacoes[id].titulo;
    if (p) p.textContent = redacoes[id].texto; 

}


