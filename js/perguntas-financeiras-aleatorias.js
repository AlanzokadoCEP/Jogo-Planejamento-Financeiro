function criaPergunta(id, caminho, enunciado, avanco, retorno, distratora) {
    return {
        id,
        caminho,
        enunciado,
        alternativas: [
            {
                texto: avanco.texto,
                afirmacao: [avanco.afirmacao],
                tipo: "avancar"
            },
            {
                texto: retorno.texto,
                afirmacao: [retorno.afirmacao],
                tipo: retorno.tipo
            },
            {
                texto: distratora.texto,
                afirmacao: [distratora.afirmacao],
                tipo: "gameover",
                disponivel: true,
                mensagem: distratora.mensagem
            }
        ]
    };
}

export const perguntas = [
    {
        id: "inicio",
        caminho: "inicio",
        enunciado: "Você participa de um projeto sobre como cuidar melhor do dinheiro. Por onde prefere começar?",
        alternativas: [
            {
                texto: "Caminho 1 — Organizar meu orçamento mensal.",
                afirmacao: ["Escolheu organizar o orçamento mensal."],
                tipo: "entrada",
                caminhoDestino: "A"
            },
            {
                texto: "Caminho 2 — Planejar uma meta financeira.",
                afirmacao: ["Escolheu planejar uma meta financeira."],
                tipo: "entrada",
                caminhoDestino: "B"
            }
        ]
    },
    criaPergunta(
        "A1", "A",
        "Para organizar seu orçamento mensal, por onde começa?",
        { texto: "Anotar toda a renda e as despesas essenciais do mês.", afirmacao: "Anotou a renda e as despesas essenciais." },
        { tipo: "salto", texto: "Voltar à escolha inicial e repensar por onde começar.", afirmacao: "Voltou à escolha inicial para repensar o planejamento." },
        { texto: "Planejar os gastos contando com dinheiro que talvez não receba.", afirmacao: "Montou o orçamento contando com uma renda incerta.", mensagem: "A renda esperada não chegou e faltou dinheiro para as despesas planejadas. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A2", "A",
        "Você listou as despesas. Como identificar o que é prioridade?",
        { texto: "Separar moradia, alimentação, transporte e outras contas essenciais.", afirmacao: "Separou as despesas essenciais para definir prioridades." },
        { tipo: "salto", texto: "Rever a lista de renda e despesas do orçamento.", afirmacao: "Voltou à lista de renda e despesas para revisar o orçamento." },
        { texto: "Usar o limite do cartão como se fosse parte da renda.", afirmacao: "Comprometeu o orçamento ao confundir crédito com renda.", mensagem: "As compras no crédito ultrapassaram o que cabia no orçamento e comprometeram as despesas essenciais. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A3", "A",
        "Como decidir quanto pode guardar durante o mês?",
        { texto: "Subtrair as despesas da renda e definir um valor que caiba no saldo.", afirmacao: "Comparou renda e despesas e definiu um valor possível para guardar." },
        { tipo: "trocar", texto: "Usar esse orçamento para planejar uma meta de compra.", afirmacao: "Usou o orçamento para começar a planejar uma meta de compra." },
        { texto: "Contar com uma renda extra que ainda não foi confirmada.", afirmacao: "Planejou os gastos contando com uma renda extra incerta.", mensagem: "A renda extra não chegou e o valor reservado para o mês não foi suficiente. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A4", "A",
        "Surge uma despesa inesperada. Como proteger seu planejamento?",
        { texto: "Rever gastos não essenciais sem atrasar as contas prioritárias.", afirmacao: "Ajustou o orçamento para lidar com o imprevisto e proteger prioridades." },
        { tipo: "salto", texto: "Voltar às despesas listadas para procurar um ajuste possível.", afirmacao: "Revisou as despesas para encontrar ajustes no orçamento." },
        { texto: "Pagar o imprevisto com crédito caro sem avaliar os juros.", afirmacao: "Assumiu uma dívida sem avaliar os juros e o custo total.", mensagem: "Os juros da dívida comprometeram o orçamento dos próximos meses. Você precisa recomeçar o planejamento." }
    ),
    criaPergunta(
        "A5", "A",
        "Como evitar atrasos nas contas ao longo do mês?",
        { texto: "Anotar os vencimentos e programar os pagamentos conforme as entradas.", afirmacao: "Organizou os vencimentos para pagar as contas dentro do prazo." },
        { tipo: "trocar", texto: "Planejar uma meta de poupança com o que cabe no orçamento.", afirmacao: "Decidiu planejar uma meta de poupança dentro do orçamento." },
        { texto: "Ignorar as datas de vencimento e pagar só quando sobrar dinheiro.", afirmacao: "Deixou contas vencerem por não acompanhar as datas de pagamento.", mensagem: "Os atrasos geraram encargos e desorganizaram o orçamento. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A6", "A",
        "Qual é uma forma realista de começar uma reserva para imprevistos?",
        { texto: "Guardar regularmente uma quantia pequena que caiba no orçamento.", afirmacao: "Começou uma reserva com um valor compatível com sua realidade." },
        { tipo: "salto", texto: "Retornar à lista de contas e rever os valores planejados.", afirmacao: "Reviu as contas e os valores previstos no orçamento." },
        { texto: "Aplicar todo o dinheiro das contas essenciais em uma opção arriscada.", afirmacao: "Arriscou o dinheiro das despesas essenciais em uma aplicação inadequada.", mensagem: "O dinheiro das contas ficou indisponível e o orçamento perdeu o equilíbrio. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A7", "A",
        "Você está pensando em fazer uma compra parcelada. O que deve conferir?",
        { texto: "Comparar o preço total e o impacto das parcelas nos próximos meses.", afirmacao: "Comparou o custo total e o impacto das parcelas no orçamento." },
        { tipo: "salto", texto: "Voltar ao orçamento para conferir o dinheiro livre no mês.", afirmacao: "Conferiu novamente o valor disponível no orçamento." },
        { texto: "Aceitar várias parcelas pequenas sem somar os compromissos.", afirmacao: "Assumiu parcelas sem avaliar o total comprometido nos próximos meses.", mensagem: "As parcelas acumuladas ultrapassaram o valor disponível. Você precisa recomeçar o planejamento." }
    ),
    criaPergunta(
        "A8", "A",
        "Sua renda muda de um mês para outro. Como planejar as despesas?",
        { texto: "Usar uma previsão prudente e ajustar os gastos quando a renda variar.", afirmacao: "Planejou as despesas com uma previsão prudente da renda." },
        { tipo: "trocar", texto: "Usar o orçamento para calcular uma meta financeira possível.", afirmacao: "Transformou o orçamento em um plano para uma meta financeira." },
        { texto: "Fixar os gastos pelo melhor mês de renda e ignorar os meses menores.", afirmacao: "Planejou despesas fixas contando com uma renda que varia.", mensagem: "A renda menor não cobriu as despesas planejadas. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A9", "A",
        "No fim do mês, como avaliar se o orçamento funcionou?",
        { texto: "Comparar o planejado com os gastos reais e ajustar o próximo mês.", afirmacao: "Comparou o orçamento com os gastos reais e ajustou o plano." },
        { tipo: "salto", texto: "Voltar à lista inicial e conferir as despesas essenciais.", afirmacao: "Revisou novamente as despesas essenciais do orçamento." },
        { texto: "Esconder os gastos que passaram do limite para manter o plano igual.", afirmacao: "Escondeu gastos que ultrapassaram o orçamento planejado.", mensagem: "Sem registrar os gastos reais, o orçamento não cobriu as despesas. Você precisa recomeçar." }
    ),
    criaPergunta(
        "A10", "A",
        "Como fechar o mês com um plano mais preparado para o próximo?",
        { texto: "Rever prioridades, pagamentos e uma reserva possível para imprevistos.", afirmacao: "Revisou prioridades, pagamentos e a reserva do orçamento mensal." },
        { tipo: "salto", texto: "Retornar à revisão dos gastos e ajustar o orçamento.", afirmacao: "Voltou à revisão dos gastos para ajustar o orçamento." },
        { texto: "Assumir novas parcelas sem conferir os compromissos já existentes.", afirmacao: "Assumiu novas parcelas sem verificar se cabiam no orçamento.", mensagem: "As parcelas ultrapassaram o valor disponível e comprometeram seu planejamento mensal. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B1", "B",
        "Você escolheu planejar uma meta financeira. Qual é o primeiro passo?",
        { texto: "Definir o que quer alcançar e quando precisa do dinheiro.", afirmacao: "Definiu uma meta e um prazo para alcançá-la." },
        { tipo: "trocar", texto: "Começar organizando o orçamento mensal antes de escolher a meta.", afirmacao: "Decidiu organizar primeiro o orçamento mensal." },
        { texto: "Escolher uma meta sem conferir o preço nem definir um prazo.", afirmacao: "Escolheu uma meta sem pesquisar o custo ou definir um prazo.", mensagem: "Sem saber o custo e o prazo, o plano ficou inviável. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B2", "B",
        "Você já sabe o que quer alcançar. Como estimar o valor necessário?",
        { texto: "Pesquisar preços e calcular quanto custa a meta escolhida.", afirmacao: "Pesquisou o custo da meta e estimou o valor necessário." },
        { tipo: "salto", texto: "Voltar à definição da meta e conferir o prazo escolhido.", afirmacao: "Reviu a meta e o prazo antes de continuar o plano." },
        { texto: "Comprar parcelado sem verificar se as prestações cabem no mês.", afirmacao: "Assumiu parcelas sem avaliar o impacto no orçamento.", mensagem: "As parcelas comprometeram as despesas essenciais. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B3", "B",
        "Como transformar o valor da meta em um plano mensal?",
        { texto: "Dividir o valor necessário pelo número de meses disponíveis.", afirmacao: "Dividiu o valor da meta pelo tempo disponível." },
        { tipo: "trocar", texto: "Organizar o orçamento mensal para ajustar quanto pode guardar.", afirmacao: "Revisou o orçamento mensal para ajustar quanto pode guardar." },
        { texto: "Guardar para a meta sem reservar o valor das contas do mês.", afirmacao: "Deixou de reservar dinheiro para as contas ao poupar para a meta.", mensagem: "As contas venceram sem saldo reservado e o planejamento saiu do controle. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B4", "B",
        "Onde encontrar espaço para guardar dinheiro sem prejudicar as contas?",
        { texto: "Revisar despesas variáveis e escolher um valor que caiba no mês.", afirmacao: "Definiu uma quantia de poupança compatível com o orçamento." },
        { tipo: "salto", texto: "Voltar ao cálculo da meta e rever o valor mensal necessário.", afirmacao: "Recalculou o valor mensal necessário para alcançar a meta." },
        { texto: "Ignorar gastos pequenos e guardar mais do que o orçamento permite.", afirmacao: "Ignorou despesas que também comprometiam o orçamento.", mensagem: "Os gastos ignorados se acumularam e faltou dinheiro para despesas planejadas. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B5", "B",
        "Como acompanhar o progresso da sua meta financeira?",
        { texto: "Registrar os valores guardados e comparar com o prazo planejado.", afirmacao: "Acompanhou o valor guardado em relação ao prazo da meta." },
        { tipo: "trocar", texto: "Rever o orçamento mensal antes de decidir quanto guardar.", afirmacao: "Revisou o orçamento mensal para apoiar o plano de poupança." },
        { texto: "Deixar de acompanhar os depósitos e presumir que a meta está perto.", afirmacao: "Deixou de acompanhar o progresso e perdeu o controle da meta.", mensagem: "Sem acompanhar os valores, o prazo chegou antes da meta. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B6", "B",
        "Sua renda diminuiu durante o planejamento. Como manter a meta realista?",
        { texto: "Rever o valor mensal ou o prazo sem comprometer as despesas essenciais.", afirmacao: "Ajustou o plano para manter a meta compatível com a renda." },
        { tipo: "salto", texto: "Voltar ao cálculo e conferir se o valor mensal ainda cabe.", afirmacao: "Reavaliou se o valor mensal da meta continuava viável." },
        { texto: "Recorrer ao cheque especial para manter o valor guardado.", afirmacao: "Usou crédito caro para manter a meta sem rever o orçamento.", mensagem: "O custo do crédito superou o benefício de manter o prazo original. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B7", "B",
        "Você está perto de alcançar sua meta. O que conferir antes de concluir?",
        { texto: "Conferir o valor acumulado, o prazo e se o objetivo continua adequado.", afirmacao: "Conferiu o valor acumulado e confirmou o plano para alcançar a meta." },
        { tipo: "trocar", texto: "Revisar o orçamento mensal considerando o valor guardado.", afirmacao: "Revisou o orçamento mensal considerando o valor reservado para a meta." },
        { texto: "Pedir um empréstimo sem comparar juros e custo total.", afirmacao: "Contratou um empréstimo sem comparar seus custos.", mensagem: "O empréstimo aumentou o custo da meta e comprometeu o orçamento. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B8", "B",
        "Uma opção promete rendimento alto para o dinheiro da meta. Como avaliar?",
        { texto: "Pesquisar riscos, taxas, prazo e possibilidade de resgate antes de decidir.", afirmacao: "Conferiu riscos, taxas e prazo antes de escolher onde guardar o dinheiro." },
        { tipo: "salto", texto: "Voltar ao valor e ao prazo definidos para a meta.", afirmacao: "Reviu o valor e o prazo da meta antes de decidir." },
        { texto: "Aplicar tudo em uma oferta que promete retorno alto e garantido.", afirmacao: "Arriscou o dinheiro da meta em uma oferta de retorno duvidosa.", mensagem: "A oferta não era confiável e o valor reservado foi perdido. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B9", "B",
        "Uma mudança nos planos altera o que você quer comprar ou realizar. O que fazer?",
        { texto: "Recalcular custo e prazo e decidir se a meta continua fazendo sentido.", afirmacao: "Reavaliou o custo e o prazo depois da mudança nos planos." },
        { tipo: "salto", texto: "Voltar à pesquisa de preços e conferir o custo da meta.", afirmacao: "Revisou os preços para atualizar o custo da meta." },
        { texto: "Continuar guardando o mesmo valor sem conferir se as prioridades mudaram.", afirmacao: "Manteve o plano sem reavaliar as prioridades financeiras.", mensagem: "O plano deixou de corresponder às prioridades e comprometeu outras despesas. Você precisa recomeçar." }
    ),
    criaPergunta(
        "B10", "B",
        "Como concluir o planejamento depois de alcançar o valor necessário?",
        { texto: "Conferir o valor, cumprir a meta e reorganizar o plano para os próximos objetivos.", afirmacao: "Alcançou a meta e preparou o orçamento para os próximos objetivos." },
        { tipo: "salto", texto: "Retornar ao acompanhamento e revisar o progresso antes de concluir.", afirmacao: "Revisou o progresso da meta antes de concluir o plano." },
        { texto: "Fazer uma nova dívida para comemorar sem avaliar o orçamento.", afirmacao: "Assumiu uma dívida sem considerar seu planejamento financeiro." , mensagem: "A nova dívida comprometeu o orçamento e o objetivo alcançado. Você precisa recomeçar." }
    ),
    {
        id: "A-final",
        caminho: "A",
        final: "vitoria",
        enunciado: "Você organizou a renda, priorizou despesas, acompanhou o orçamento e preparou uma reserva compatível com sua realidade. Seu planejamento mensal está pronto!",
        alternativas: []
    },
    {
        id: "B-final",
        caminho: "B",
        final: "vitoria",
        enunciado: "Você definiu uma meta, calculou o valor necessário, ajustou o plano à sua renda e acompanhou o progresso. Sua meta financeira foi alcançada!",
        alternativas: []
    }
];
