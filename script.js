const caixaPrincipal = document.querySelector(".caixa-principal");
const telaInicial = document.querySelector(".tela-inicial");
const conteudoJogo = document.querySelector(".conteudo-jogo");
const formularioInicial = document.querySelector(".formulario-inicial");
const campoNomeJogador = document.querySelector("#nome-jogador");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        nivel: "Fácil",
        enunciado: "Você recebeu seu pagamento. O que faz primeiro?",
        alternativas: [
            { texto: "Anoto quanto recebi e separo o valor das contas essenciais.", afirmacao: "Conhecer sua renda e seus compromissos é o primeiro passo para organizar o dinheiro." },
            { texto: "Destino parte do pagamento a gastos variáveis e confiro o saldo quando as contas vencem.", afirmacao: "Acompanhar o saldo durante o mês ajuda a evitar surpresas antes do próximo pagamento." },
            { texto: "Parcelo uma compra agora e conto com o próximo pagamento antes de separar as contas essenciais.", afirmacao: "As parcelas comprometeram o dinheiro reservado para os compromissos essenciais. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Fácil",
        enunciado: "Como diferenciar uma necessidade de um desejo na hora de comprar?",
        alternativas: [
            { texto: "Penso se é essencial agora e se cabe no orçamento.", afirmacao: "Avaliar a necessidade e o espaço no orçamento torna a compra mais consciente." },
            { texto: "Compro quando vejo uma promoção, mesmo sem planejar.", afirmacao: "Uma promoção só representa economia quando o item é necessário e cabe no orçamento." },
            { texto: "Divido a compra em parcelas para preservar o saldo, sem conferir as próximas faturas.", afirmacao: "O limite do cartão é crédito disponível, não uma medida da renda que você pode comprometer." }
        ]
    },
    {
        nivel: "Fácil",
        enunciado: "Você quer juntar dinheiro para uma viagem daqui a seis meses. Qual é um bom começo?",
        alternativas: [
            { texto: "Estimo o custo e divido o valor pelo tempo até a viagem.", afirmacao: "Definir valor e prazo transforma o objetivo em uma meta concreta." },
            { texto: "Guardo quando sobra e deixo para decidir o valor final mais perto da viagem.", afirmacao: "Uma mudança de planos altera seu caminho: siga para outra pergunta.", acao: "aleatoria" },
            { texto: "Reservo a viagem contando com a renda dos próximos meses, sem simular o peso das parcelas.", afirmacao: "As parcelas comprometeram as contas essenciais e o plano saiu do controle. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Fácil",
        enunciado: "Qual hábito ajuda a não esquecer o vencimento de uma conta?",
        alternativas: [
            { texto: "Anoto a data em um calendário ou ativo um lembrete.", afirmacao: "Lembretes ajudam a pagar em dia e evitar juros por atraso." },
            { texto: "Confiro as contas quando recebo os avisos e organizo os pagamentos em seguida.", afirmacao: "Acompanhar as datas por conta própria reduz o risco de multas." },
            { texto: "Agrupo os pagamentos em um dia fixo, sem verificar se algum vence antes.", afirmacao: "Conferir cada vencimento ajuda a organizar o saldo disponível." }
        ]
    },
    {
        nivel: "Fácil",
        enunciado: "Como começar uma reserva para imprevistos quando sobra pouco dinheiro?",
        alternativas: [
            { texto: "Escolho um valor pequeno e possível para guardar regularmente.", afirmacao: "A constância importa: começar com pouco pode criar o hábito e ampliar a reserva aos poucos." },
            { texto: "Guardo valores maiores nos meses em que a renda vem acima do esperado.", afirmacao: "Guardar pequenas quantias com frequência também pode ser mais viável do que depender de sobras grandes." },
            { texto: "Uso o rotativo para cobrir um imprevisto e mantenho o valor que costumo guardar.", afirmacao: "Os juros do rotativo transformaram o imprevisto em uma dívida difícil de controlar. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Fácil",
        enunciado: "Você quer descobrir para onde vai o dinheiro durante a semana. O que pode fazer?",
        alternativas: [
            { texto: "Anoto os gastos por alguns dias e separo por categoria.", afirmacao: "Registrar os gastos revela hábitos e ajuda a encontrar ajustes possíveis." },
            { texto: "Decido repensar a forma como estou cuidando da minha reserva.", afirmacao: "Reavaliar seus planos pode ajudar a encontrar um equilíbrio possível.", acao: "voltar" },
            { texto: "Acompanho o saldo pelo aplicativo, mas só reviso os gastos quando a fatura vem acima do esperado.", afirmacao: "Sem revisar os gastos com frequência, o crédito acumulou e comprometeu seu orçamento. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Fácil",
        enunciado: "Uma pessoa da família pediu ajuda financeira. Como decidir se você pode ajudar?",
        alternativas: [
            { texto: "Confiro minhas contas e ofereço apenas um valor que cabe no orçamento.", afirmacao: "Ajudar sem comprometer suas despesas essenciais protege o planejamento de todos." },
            { texto: "Combino um valor e uma data para conversar sobre a devolução.", afirmacao: "Deixar as condições claras evita mal-entendidos e ajuda a organizar as finanças." },
            { texto: "Assumo as parcelas para ajudar agora, contando com o valor combinado de volta.", afirmacao: "A dívida ficou sob sua responsabilidade e comprometeu suas contas. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Sua renda varia de um mês para outro. Como montar um orçamento realista?",
        alternativas: [
            { texto: "Analiso a renda dos últimos meses e faço uma previsão prudente.", afirmacao: "Usar o histórico e uma estimativa conservadora ajuda a não comprometer uma renda incerta." },
            { texto: "Minha renda mudou. Reconsidero a estratégia que escolhi.", afirmacao: "Um ajuste cuidadoso pode deixar o orçamento mais coerente com a realidade.", acao: "voltar" },
            { texto: "Uso a renda média como referência, mas mantenho despesas fixas calculadas pelo melhor mês.", afirmacao: "Revisar o orçamento conforme a renda muda ajuda a manter as despesas sob controle." }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Você tem dívidas com taxas diferentes. O que comparar antes de decidir a ordem de pagamento?",
        alternativas: [
            { texto: "Taxas, custo total e valor mínimo de cada dívida.", afirmacao: "Comparar juros e custos ajuda a priorizar dívidas mais caras sem deixar outras vencerem." },
            { texto: "O valor da parcela e o prazo, usando o custo total como critério secundário.", afirmacao: "Uma parcela baixa pode esconder prazo longo e custo total maior; confira também os juros." },
            { texto: "Prioritizo a dívida mais recente para quitá-la, sem comparar juros e vencimentos.", afirmacao: "Os juros e atrasos das outras dívidas cresceram e comprometeram o orçamento. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Uma loja oferece desconto à vista ou parcelamento. Como comparar as opções?",
        alternativas: [
            { texto: "Comparo preço final, juros e efeito da parcela no orçamento.", afirmacao: "Comparar custo total e orçamento mostra qual opção é mais adequada para sua situação." },
            { texto: "Escolho a parcela menor para preservar o saldo deste mês e reviso o custo depois.", afirmacao: "A decisão de priorizar o mês atual mudou seu caminho: siga para outra pergunta.", acao: "aleatoria" },
            { texto: "Aceito o desconto à vista e planejo cobrir as próximas despesas com o pagamento seguinte.", afirmacao: "O desconto precisa ser equilibrado com a manutenção de dinheiro para despesas e imprevistos." }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Como estimar o tamanho adequado de uma reserva de emergência?",
        alternativas: [
            { texto: "Considero minhas despesas essenciais e a estabilidade da renda.", afirmacao: "Despesas essenciais e previsibilidade da renda ajudam a definir uma meta realista." },
            { texto: "Uso os gastos recentes como referência, sem revisar se minha renda mudou.", afirmacao: "Relacionar a reserva aos gastos essenciais e à renda atual torna a meta mais útil." },
            { texto: "Busco rendimento maior para a reserva em um produto com prazo longo e risco que não avaliei.", afirmacao: "A reserva ficou exposta e indisponível para um imprevisto. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Você gastou mais do que planejou em uma categoria. O que fazer?",
        alternativas: [
            { texto: "Identifico o motivo e ajusto os próximos meses ou outras categorias.", afirmacao: "Entender a causa do desvio permite ajustar o plano sem perder as prioridades." },
            { texto: "Decido analisar com mais calma o que saiu do planejado.", afirmacao: "Revisar suas escolhas pode revelar ajustes úteis para o orçamento.", acao: "voltar" },
            { texto: "Cubro a diferença com crédito enquanto observo se o gasto se repete no próximo mês.", afirmacao: "Usar crédito para cobrir gastos recorrentes pode criar dívidas; revise o orçamento primeiro." }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Você recebeu uma proposta para renegociar uma dívida. O que deve conferir?",
        alternativas: [
            { texto: "Taxa de juros, custo total, prazo e valor de cada parcela.", afirmacao: "Comparar as condições completas ajuda a saber se a renegociação realmente reduz o custo." },
            { texto: "Peço as condições por escrito e comparo com a dívida atual.", afirmacao: "Ter as condições registradas facilita a comparação e evita decidir apenas pela parcela." },
            { texto: "Aceito uma parcela menor, mesmo com prazo maior, para aliviar o orçamento deste mês.", afirmacao: "O prazo maior elevou o custo total e agravou sua situação financeira. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Médio",
        enunciado: "Você planeja comprar um eletrodoméstico caro. Como avaliar o impacto no orçamento?",
        alternativas: [
            { texto: "Pesquiso preços e verifico quanto posso pagar sem comprometer as contas.", afirmacao: "Pesquisar e definir um limite antes da compra ajuda a preservar as prioridades." },
            { texto: "Comparo o custo total à vista e parcelado antes de decidir.", afirmacao: "Comparar o preço final permite escolher com mais clareza entre as formas de pagamento." },
            { texto: "Aproveito parcelas pequenas em compras diferentes sem somar os compromissos futuros.", afirmacao: "As parcelas acumuladas ultrapassaram sua capacidade de pagamento. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Você tem várias dívidas e consegue pagar além do mínimo em apenas uma. Como escolher?",
        alternativas: [
            { texto: "Priorizar a de maior custo, mantendo o mínimo das demais.", afirmacao: "Direcionar o extra à dívida mais cara pode reduzir juros sem deixar as outras em atraso." },
            { texto: "Divido o extra entre as dívidas para reduzir vários saldos ao mesmo tempo.", afirmacao: "Comparar o custo de cada dívida mostra onde o pagamento extra pode reduzir mais juros." },
            { texto: "Aceito consolidar as dívidas por uma parcela menor sem comparar o custo total.", afirmacao: "O novo contrato aumentou os custos e desorganizou o plano. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Você planeja investir para uma meta de longo prazo. O que avaliar antes de escolher?",
        alternativas: [
            { texto: "Prazo, liquidez, riscos, custos e diversificação.", afirmacao: "Alinhar prazo, acesso ao dinheiro, riscos e custos ajuda a escolher investimentos coerentes com a meta." },
            { texto: "Escolho pelo rendimento passado e mudo de rumo sem planejar.", afirmacao: "Essa escolha mudou seu caminho: siga para uma pergunta aleatória.", acao: "aleatoria" },
            { texto: "Concentro o valor em um produto que teve bom retorno, esperando que a tendência continue.", afirmacao: "Entender o produto e avaliar a diversificação ajuda a evitar riscos que você não planejou." }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Um investimento rendeu menos que a inflação. O que isso pode significar?",
        alternativas: [
            { texto: "O poder de compra pode ter diminuído, mesmo com rendimento positivo.", afirmacao: "Comparar o retorno com a inflação ajuda a avaliar o ganho real e o poder de compra." },
            { texto: "Meu saldo aumentou, então considero o rendimento suficiente sem comparar a variação dos preços.", afirmacao: "Um saldo maior não garante ganho real; considere o efeito da inflação." },
            { texto: "Aumento o risco da carteira para tentar recuperar a diferença no curto prazo.", afirmacao: "Considere objetivo, prazo e tolerância a risco antes de mudar a estratégia." }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Sua renda caiu e o orçamento não fecha. Qual sequência ajuda a reorganizar o plano?",
        alternativas: [
            { texto: "Rever despesas, priorizar necessidades, negociar compromissos e avaliar a reserva.", afirmacao: "Reavaliar prioridades e negociar compromissos ajuda a adaptar o plano à nova renda." },
            { texto: "Uso o limite do rotativo por alguns meses enquanto avalio onde reduzir despesas.", afirmacao: "O crédito rotativo pode ter custo elevado; reveja gastos e alternativas antes de recorrer a ele." },
            { texto: "Prioritizo as contas com cobrança mais próxima e deixo as demais para renegociar depois.", afirmacao: "Negociar os outros compromissos antes do atraso pode ajudar a evitar custos adicionais." }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Como avaliar se seu planejamento financeiro está avançando?",
        alternativas: [
            { texto: "Acompanho metas, dívidas, reserva e orçamento em revisões periódicas.", afirmacao: "Acompanhar indicadores mostra avanços e ajuda a corrigir o plano quando necessário." },
            { texto: "Comparo saldo e renda com os meses anteriores, mas não reviso dívidas e metas.", afirmacao: "O saldo sozinho não mostra se metas, dívidas e despesas estão evoluindo bem." },
            { texto: "Ajusto as metas sempre que a renda varia, sem revisar os prazos definidos.", afirmacao: "Medir resultados e revisar os objetivos antes de mudar ajuda a tomar decisões consistentes." }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Você está escolhendo um investimento para uma meta com prazo definido. Como alinhar a escolha?",
        alternativas: [
            { texto: "Comparo o prazo do investimento com a data em que precisarei do dinheiro.", afirmacao: "Alinhar vencimento e objetivo reduz o risco de precisar resgatar o dinheiro em uma hora ruim." },
            { texto: "Avalio liquidez e riscos antes de aplicar o valor destinado à meta.", afirmacao: "Considerar acesso ao dinheiro e riscos ajuda a escolher algo compatível com seu plano." },
            { texto: "Escolho pela taxa oferecida e deixo para conferir liquidez e prazo depois.", afirmacao: "O dinheiro ficou indisponível quando você precisava cumprir o objetivo. Game over.", acao: "gameover" }
        ]
    },
    {
        nivel: "Difícil",
        enunciado: "Uma mudança importante pode reduzir sua renda nos próximos meses. Como se preparar?",
        alternativas: [
            { texto: "Faço cenários de orçamento e identifico despesas que posso ajustar.", afirmacao: "Planejar cenários permite antecipar decisões e adaptar o orçamento antes da mudança." },
            { texto: "Reviso a reserva e converso com as pessoas envolvidas nas despesas da casa.", afirmacao: "Rever a reserva e alinhar as decisões ajuda a preparar o orçamento familiar." },
            { texto: "Mantenho os gastos atuais e uso crédito para cobrir a diferença enquanto aguardo a mudança.", afirmacao: "A renda caiu e as novas dívidas comprometeram o plano. Game over.", acao: "gameover" }
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";
let nomeJogador = "";
let perguntasDaPartida = [];

function embaralha(lista) {
    const listaEmbaralhada = [...lista];

    for (let indice = listaEmbaralhada.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [listaEmbaralhada[indice], listaEmbaralhada[indiceAleatorio]] =
            [listaEmbaralhada[indiceAleatorio], listaEmbaralhada[indice]];
    }

    return listaEmbaralhada;
}

function selecionaPerguntasDaPartida() {
    const niveis = ["Fácil", "Médio", "Difícil"];
    const perguntasSelecionadas = niveis.flatMap((nivel) => {
        const perguntasDoNivel = perguntas.filter((pergunta) => pergunta.nivel === nivel);
        return embaralha(perguntasDoNivel).slice(0, 5);
    });

    return embaralha(perguntasSelecionadas);
}

function mostraPergunta() {
    if(atual >= perguntasDaPartida.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntasDaPartida[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    const alternativasEmbaralhadas = embaralha(perguntaAtual.alternativas);

    for(const alternativa of alternativasEmbaralhadas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";

    if (opcaoSelecionada.acao === "gameover") {
        mostraGameOver();
        return;
    }

    if (opcaoSelecionada.acao === "voltar") {
        const distanciaVolta = Math.floor(Math.random() * 3) + 1;
        atual = (atual - distanciaVolta + perguntasDaPartida.length) % perguntasDaPartida.length;
    } else if (opcaoSelecionada.acao === "aleatoria") {
        const distanciaAvanco = Math.floor(Math.random() * 2) + 1;
        atual += distanciaAvanco;
    } else {
        atual++;
    }

    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `${nomeJogador}, você concluiu o planejamento financeiro!`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

    const botaoContinuar = document.createElement("button");
    botaoContinuar.textContent = "Continuar";
    botaoContinuar.addEventListener("click", mostraCreditos);
    caixaAlternativas.appendChild(botaoContinuar);
}

function mostraCreditos(){
    caixaPerguntas.textContent = `Parabéns, ${nomeJogador}! Obrigado por jogar!`;
    textoResultado.textContent = "Créditos";

    const creditos = [
        "Pesquisa: Pietro",
        "Montagem do código: Alan",
        "Contribuição com os códigos: Professor Fábio Cezar",
        "Diretores do jogo: Alan e Pietro"
    ];

    for (const credito of creditos) {
        const linhaCredito = document.createElement("p");
        linhaCredito.textContent = credito;
        caixaResultado.appendChild(linhaCredito);
    }

    caixaAlternativas.textContent = "";
}

function mostraGameOver(){
    caixaPerguntas.textContent = `Game over, ${nomeJogador}!`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

    const botaoJogarNovamente = document.createElement("button");
    botaoJogarNovamente.textContent = "Jogar novamente";
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
    caixaAlternativas.appendChild(botaoJogarNovamente);
}

function jogarNovamente(){
    atual = 0;
    historiaFinal = "";
    nomeJogador = "";
    perguntasDaPartida = [];
    campoNomeJogador.value = "";
    campoNomeJogador.setCustomValidity("");
    textoResultado.textContent = "";
    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "";
    conteudoJogo.hidden = true;
    telaInicial.hidden = false;
    campoNomeJogador.focus();
}

formularioInicial.addEventListener("submit", (evento) => {
    evento.preventDefault();
    nomeJogador = campoNomeJogador.value.trim();

    if (!nomeJogador) {
        campoNomeJogador.setCustomValidity("Digite seu nome para começar.");
        campoNomeJogador.reportValidity();
        return;
    }

    perguntasDaPartida = selecionaPerguntasDaPartida();
    telaInicial.hidden = true;
    conteudoJogo.hidden = false;
    mostraPergunta();
});

campoNomeJogador.addEventListener("input", () => {
    campoNomeJogador.setCustomValidity("");
});