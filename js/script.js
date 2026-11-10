import { perguntas } from "./perguntas-financeiras-aleatorias.js";
import { aleatorio } from "./aleatorio.js";

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
const perguntasPorId = new Map(perguntas.map((pergunta) => [pergunta.id, pergunta]));

let atual = "inicio";
let historiaFinal = "";
let faseDaPartida = "inicio";
let nomeJogador = "";
let ordemPorCaminho = { A: [], B: [] };
let indicePorCaminho = { A: -1, B: -1 };

formularioInicial.addEventListener("submit", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);

function iniciaJogo(evento) {
    evento.preventDefault();
    const nomeEscolhido = campoNomeJogador.value.trim();
    if (!nomeEscolhido) {
        campoNomeJogador.reportValidity();
        return;
    }
    reiniciaJogo();
    nomeJogador = nomeEscolhido;
    preparaOrdemAleatoria();
    faseDaPartida = "jogando";
    telaInicial.hidden = true;
    conteudoJogo.hidden = false;
    mostraPergunta();
}

function reiniciaJogo() {
    atual = "inicio";
    historiaFinal = "";
    faseDaPartida = "inicio";
    campoNomeJogador.value = "";
    ordemPorCaminho = { A: [], B: [] };
    indicePorCaminho = { A: -1, B: -1 };
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

function embaralha(lista) {
    const resultado = [...lista];

    for (let indice = resultado.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [resultado[indice], resultado[indiceAleatorio]] =
            [resultado[indiceAleatorio], resultado[indice]];
    }

    return resultado;
}

function preparaOrdemAleatoria() {
    for (const caminho of ["A", "B"]) {
        ordemPorCaminho[caminho] = embaralha(
            perguntas
                .filter((pergunta) => pergunta.caminho === caminho && !pergunta.final)
                .map((pergunta) => pergunta.id)
        );
        indicePorCaminho[caminho] = -1;
    }
}

function mostraPergunta() {
    const perguntaAtual = perguntasPorId.get(atual);

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

    const origem = perguntasPorId.get(atual);
    let destino;

    if (opcaoSelecionada.tipo === "entrada") {
        const caminhoDestino = opcaoSelecionada.caminhoDestino;
        destino = ordemPorCaminho[caminhoDestino]?.[0];
        indicePorCaminho[caminhoDestino] = 0;
    } else if (opcaoSelecionada.tipo === "avancar") {
        const caminho = origem.caminho;
        const proximoIndice = indicePorCaminho[caminho] + 1;
        if (proximoIndice >= ordemPorCaminho[caminho].length) {
            destino = `${caminho}-final`;
        } else {
            indicePorCaminho[caminho] = proximoIndice;
            destino = ordemPorCaminho[caminho][proximoIndice];
        }
    } else if (opcaoSelecionada.tipo === "salto") {
        const caminho = origem.caminho;
        const indiceAnterior = indicePorCaminho[caminho] - 1;
        if (indiceAnterior < 0) {
            destino = "inicio";
        } else {
            indicePorCaminho[caminho] = indiceAnterior;
            destino = ordemPorCaminho[caminho][indiceAnterior];
        }
    } else if (opcaoSelecionada.tipo === "trocar") {
        const outroCaminho = origem.caminho === "A" ? "B" : "A";
        const proximoIndice = (indicePorCaminho[outroCaminho] + 1) % ordemPorCaminho[outroCaminho].length;
        indicePorCaminho[outroCaminho] = proximoIndice;
        destino = ordemPorCaminho[outroCaminho][proximoIndice];
    }

    const chegada = perguntasPorId.get(destino);
    if (!chegada) {
        console.error("Destino inválido:", destino);
        return;
    }

    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    if (atual !== "inicio" && chegada.id !== "inicio" && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
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
    if (faseDaPartida !== "jogando" || perguntasPorId.get(atual)?.final !== "vitoria") {
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