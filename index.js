// index.js

// Lógica de prefixo para garantir que os links funcionem localmente e no GitHub Pages
const prefix = window.location.hostname.includes("github.io") ? "/NomeDoSeuRepositorio/" : "";

// Lista de redações (18 exemplos de textos mais longos)
const redacoes = [
    { titulo: "Redação 1 - O Desafio da IA", texto: "A inteligência artificial apresenta dilemas éticos profundos que exigem regulamentação imediata..." },
    { titulo: "Redação 2 - Meio Ambiente e Consumo", texto: "A pegada de carbono do consumo moderno ameaça a sustentabilidade global e exige mudanças urgentes nos hábitos de vida..." },
    { titulo: "Redação 3 - Saúde Mental na Pandemia", texto: "O isolamento social decorrente da pandemia evidenciou a crise de saúde mental, demandando maior investimento público..." },
    { titulo: "Redação 4 - Fake News e Democracia", texto: "A disseminação de informações falsas corrói a confiança nas instituições e é um risco direto à estabilidade democrática..." },
    { titulo: "Redação 5 - Educação Digital", texto: "A inclusão digital nas escolas não é apenas sobre tecnologia, mas sobre preparar os alunos para o mercado de trabalho do futuro..." },
    { titulo: "Redação 6 - O Futuro do Trabalho", texto: "A automação está redefinindo as carreiras, e a requalificação profissional torna-se essencial para a empregabilidade..." },
    { titulo: "Redação 7 - Crise Hídrica Global", texto: "A gestão inadequada dos recursos hídricos, aliada às mudanças climáticas, coloca em xeque a segurança alimentar e social..." },
    { titulo: "Redação 8 - Direitos Humanos e Redes Sociais", texto: "As plataformas digitais devem ser responsabilizadas pelo discurso de ódio e pela violação dos direitos humanos em seus espaços..." },
    { titulo: "Redação 9 - O Legado da História", texto: "Compreender o passado é fundamental para evitar a repetição de erros e construir uma sociedade mais justa e equitativa..." },
    { titulo: "Redação 10 - Mobilidade Urbana", texto: "A priorização do transporte individual motorizado nas grandes cidades gera poluição e caos, necessitando de alternativas sustentáveis..." },
    { titulo: "Redação 11 - A Influência da Mídia", texto: "O poder da mídia na formação da opinião pública exige transparência e pluralidade de vozes para um debate saudável..." },
    { titulo: "Redação 12 - Diversidade e Inclusão", texto: "Garantir a inclusão plena de grupos minoritários é um imperativo ético e um fator de enriquecimento social e econômico..." },
    { titulo: "Redação 13 - Energia Renovável", texto: "O investimento em fontes de energia limpa é a chave para a transição energética e a mitigação dos impactos climáticos..." },
    { titulo: "Redação 14 - A Ciência e o Ceticismo", texto: "O crescente ceticismo em relação à ciência representa um retrocesso civilizatório que deve ser combatido pela educação..." },
    { titulo: "Redação 15 - Turismo Sustentável", texto: "O setor de turismo precisa de práticas que respeitem o meio ambiente e a cultura local, garantindo benefícios a longo prazo..." },
    { titulo: "Redação 16 - Segurança Alimentar", texto: "A má distribuição de alimentos e o desperdício são os principais entraves para garantir a segurança alimentar global..." },
    { titulo: "Redação 17 - Cidades Inteligentes", texto: "O uso de tecnologia para otimizar serviços urbanos pode melhorar a qualidade de vida, mas levanta questões sobre privacidade..." },
    { titulo: "Redação 18 - Arte e Cultura", texto: "O fomento à arte e à cultura é vital para a identidade nacional e deve ser visto como um investimento, não como um gasto..." }
];

const container = document.getElementById("redacoes");
const fragment = document.createDocumentFragment(); 

// Gerar os cartões
redacoes.forEach((r, index) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'card';
    cardLink.href = `${prefix}redacao.html?id=${index}`;
    
    // Conteúdo do card
    cardLink.innerHTML = `
        <h3>${r.titulo}</h3>
        <p>Clique para acessar o texto completo.</p>
    `;
    
    fragment.appendChild(cardLink);
});

container.appendChild(fragment); // Renderiza todos os cartões de forma eficiente

// SALVAR DADOS NO LOCAL STORAGE: essencial para a redacao.html carregar o conteúdo
localStorage.setItem("redacoes", JSON.stringify(redacoes));