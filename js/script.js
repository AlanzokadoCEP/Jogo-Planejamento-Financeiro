import { perguntas } from "./perguntas-financeiras.js";
import { aleatorio, nome } from "./aleatorio.js";

const telaInicial = document.querySelector(".tela-inicial");
const formularioInicial = document.querySelector(".formulario-inicial");
const campoNomeJogador = document.querySelector("#nome-jogador");
const identificadorCaminho = document.querySelector(".identificador-caminho");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");
const conteudoJogo = document.querySelector(".conteudo-jogo");

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";
let nomeJogador = nome;

formularioInicial.addEventListener("submit", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);

function iniciaJogo(evento) {
    evento.preventDefault();
    const nomeDigitado = campoNomeJogador.value.trim();
    nomeJogador = nomeDigitado || nome;
    reiniciaJogo();
    faseDaPartida = "jogando";
    telaInicial.hidden = true;
    conteudoJogo.hidden = false;
    mostraPergunta();
}

function reiniciaJogo() {
    atual = 0;
    historiaFinal = "";
    faseDaPartida = "inicio";
    caixaPerguntas.textContent = "";
    identificadorCaminho.textContent = "";
    identificadorCaminho.hidden = true;
    caixaAlternativas.replaceChildren();
    tituloResultado.textContent = "";
    textoResultado.textContent = "";
    telaInicial.hidden = false;
    conteudoJogo.hidden = true;
    caixaPerguntas.hidden = false;
    caixaAlternativas.hidden = false;
    caixaResultado.hidden = true;
    telaCreditos.hidden = true;
    botaoCreditos.hidden = true;
    botaoJogarNovamente.hidden = false;
    botaoJogarNovamente.textContent = "Recomeçar do início";
}

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];

    if (!perguntaAtual) {
        console.error("Pergunta inexistente na posição:", atual);
        return;
    }

    if (perguntaAtual.final === "vitoria") {
        identificadorCaminho.hidden = true;
        mostraVitoria(perguntaAtual.enunciado);
        return;
    }

    identificadorCaminho.textContent = perguntaAtual.caminho === "A"
        ? "Caminho 1 · Organizar o orçamento mensal"
        : perguntaAtual.caminho === "B"
            ? "Caminho 2 · Planejar uma meta financeira"
            : "Escolha entre os dois caminhos";
    identificadorCaminho.hidden = false;
    caixaPerguntas.hidden = false;
    caixaAlternativas.hidden = false;
    caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nomeJogador);
    caixaAlternativas.replaceChildren();

    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = alternativa.texto;
        botao.disabled = alternativa.disponivel === false;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (faseDaPartida !== "jogando" || opcaoSelecionada.disponivel === false) {
        return;
    }

    if (opcaoSelecionada.tipo === "gameover") {
        historiaFinal += aleatorio(opcaoSelecionada.afirmacao) + " ";
        mostraGameOver(opcaoSelecionada.mensagem);
        return;
    }

    const destino = opcaoSelecionada.proxima;
    if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
        console.error("Destino inválido:", destino);
        return;
    }

    const origem = perguntas[atual];
    const chegada = perguntas[destino];
    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
        console.error("Mudança de caminho sem o tipo trocar.");
        return;
    }

    if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
        console.error("A troca deve levar a outro caminho.");
        return;
    }

    historiaFinal += aleatorio(opcaoSelecionada.afirmacao) + " ";
    atual = destino;
    mostraPergunta();
}

function mostraGameOver(mensagem) {
    faseDaPartida = "gameover";
    identificadorCaminho.hidden = true;
    caixaPerguntas.hidden = true;
    caixaAlternativas.replaceChildren();
    caixaAlternativas.hidden = true;
    caixaResultado.hidden = false;
    tituloResultado.textContent = "GAME OVER";
    textoResultado.textContent =
        `${mensagem}\n\nSuas escolhas nesta tentativa:\n${historiaFinal}`;
    botaoJogarNovamente.textContent = "Recomeçar do início";
    botaoJogarNovamente.hidden = false;
    botaoCreditos.hidden = true;
    telaCreditos.hidden = true;
}

function mostraVitoria(mensagem) {
    if (faseDaPartida !== "jogando" || perguntas[atual].final !== "vitoria") {
        return;
    }

    faseDaPartida = "vitoria";
    identificadorCaminho.hidden = true;
    caixaPerguntas.hidden = true;
    caixaAlternativas.replaceChildren();
    caixaAlternativas.hidden = true;
    caixaResultado.hidden = false;
    tituloResultado.textContent = "THE END";
    textoResultado.textContent = `${mensagem}\n\nSeu percurso nesta partida:\n${historiaFinal}`;
    botaoJogarNovamente.hidden = true;
    botaoCreditos.hidden = false;
    telaCreditos.hidden = true;
}

function mostraCreditos() {
    if (faseDaPartida !== "vitoria") {
        return;
    }

    faseDaPartida = "creditos";
    conteudoJogo.hidden = true;
    telaCreditos.hidden = false;
}

reiniciaJogo();