const caixaPrincipal = document.querySelector(".caixa-principal");
const telaInicial = document.querySelector(".tela-inicial");
const conteudoJogo = document.querySelector(".conteudo-jogo");
const botaoIniciar = document.querySelector(".botao-iniciar");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebeu seu pagamento. O que faz primeiro?",
        alternativas: [
            {
                texto: "Organizo as contas e separo uma parte para meus objetivos.",
                afirmacao: "Você começou dando um destino ao seu dinheiro e priorizando o que é importante."
            },
            {
                texto: "Vou usando e vejo o que sobra no fim do mês.",
                afirmacao: "Anotar seus gastos pode ajudar a perceber para onde o dinheiro está indo."
            }           
            
        ]
    },
    {
        enunciado: "Apareceu um gasto inesperado. Qual é seu próximo passo?",
        alternativas: [
            {
                texto:"Uso minha reserva de emergência, se tenho uma.",
                afirmacao:"Uma reserva pode evitar que imprevistos virem dívidas."
            },
            {
                texto: "Pago no crédito e resolvo isso depois.",
                afirmacao:"Comparar as opções de pagamento antes de parcelar ajuda a proteger seu orçamento."
            }
        ]
    },
    {
        enunciado: "Você quer realizar um objetivo, como viajar ou comprar algo importante. Como se prepara?",
        alternativas: [
            {
                texto:"Defino quanto custa e quanto posso guardar por mês.",
                afirmacao:"Transformar um objetivo em valor e prazo deixa o plano mais concreto."
            },
            {
                texto:"Compro agora e depois penso em como pagar.",
                afirmacao:"Planejar antes de comprar ajuda a evitar parcelas que pesem no mês."
            }
            
        ]
    },
    {
        enunciado: "As contas do mês ficaram apertadas. Como você decide o que pagar primeiro?",
        alternativas: [
            {
                texto:"Priorizo despesas essenciais e dívidas com juros maiores.",
                afirmacao:"Priorizar o essencial e as dívidas mais caras pode reduzir o impacto dos juros."
            },
            {
                texto:"Pago sem conferir valores, vencimentos ou juros.",
                afirmacao:"Conferir vencimentos e juros dá mais clareza para escolher o que fazer primeiro."
            }
            
        ]
    },
    {
        enunciado: "Com que frequência você revisa seu planejamento financeiro?",
        alternativas: [
            {
                texto: "Todo mês, para ajustar o plano à minha realidade.",
                afirmacao:"Revisar o orçamento regularmente ajuda a manter seus planos possíveis e atualizados."
            },
            {
                texto: "Só quando percebo que o dinheiro não vai dar.",
                afirmacao:"Acompanhar pequenas mudanças no mês pode ajudar a evitar surpresas no orçamento."
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seu caminho para o equilíbrio financeiro";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

botaoIniciar.addEventListener("click", () => {
    telaInicial.hidden = true;
    conteudoJogo.hidden = false;
    mostraPergunta();
});