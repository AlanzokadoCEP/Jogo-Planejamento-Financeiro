export const perguntas = [
    {
        caminho: "inicio",
        enunciado: "No Colégio CEP 3J, você participa de um projeto sobre como cuidar melhor do dinheiro. Por onde prefere começar?",
        alternativas: [
            {
                texto: "Caminho 1 — Organizar meu orçamento mensal.",
                afirmacao: ["Escolheu organizar o orçamento mensal."],
                tipo: "entrada",
                proxima: 1
            },
            {
                texto: "Caminho 2 — Planejar uma meta financeira.",
                afirmacao: ["Escolheu planejar uma meta financeira."],
                tipo: "entrada",
                proxima: 2
            }
        ]
    },
    {
        caminho: "A",
        enunciado: "Você começa a organizar seu orçamento mensal para uma atividade do Colégio CEP 3J. Como descobrir quanto pode planejar?",
        alternativas: [
            {
                texto: "Anotar a renda e as despesas essenciais do mês.",
                afirmacao: ["Anotou a renda e as despesas essenciais."],
                tipo: "avancar",
                proxima: 3
            },
            {
                texto: "Definir uma meta de compra e planejar quanto guardar.",
                afirmacao: ["Decidiu planejar uma meta de compra."],
                tipo: "trocar",
                proxima: 2,
                disponivel: true
            },
            {
                texto: "Planejar o mês contando com dinheiro que talvez não receba.",
                afirmacao: ["Montou o orçamento contando com uma renda incerta."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A renda esperada não chegou e faltou dinheiro para as despesas planejadas. Você precisa recomeçar."
            }
        ]
    },
    {
        caminho: "B",
        enunciado: "No projeto do Colégio CEP 3J, você escolheu planejar uma meta financeira. Qual é o primeiro passo?",
        alternativas: [
            {
                texto: "Definir o que quer alcançar e quando precisa do dinheiro.",
                afirmacao: ["Definiu uma meta e um prazo para alcançá-la."],
                tipo: "avancar",
                proxima: 7
            },
            {
                texto: "Começar pelo orçamento mensal antes de escolher uma meta.",
                afirmacao: ["Decidiu organizar primeiro o orçamento mensal."],
                tipo: "trocar",
                proxima: 1,
                disponivel: true
            },
            {
                texto: "Escolher uma meta sem conferir o preço nem definir um prazo.",
                afirmacao: ["Escolheu uma meta sem pesquisar o custo ou definir um prazo."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Sem saber o custo e o prazo, o plano ficou inviável e comprometeu o orçamento. Você precisa recomeçar."
            }
        ]
    },
    {
        caminho: "A",
        enunciado: "Você listou as despesas. Como separar o que é prioridade no orçamento?",
        alternativas: [
            {
                texto: "Separar moradia, alimentação, transporte e outras contas essenciais.",
                afirmacao: ["Separou as despesas essenciais para definir prioridades."],
                tipo: "avancar",
                proxima: 4
            },
            {
                texto: "Voltar ao orçamento inicial e revisar a lista de despesas.",
                afirmacao: ["Voltou ao orçamento inicial para revisar as despesas."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A revisão revelou que o orçamento foi montado sem considerar corretamente as despesas. Você precisa recomeçar."
            },
            {
                texto: "Usar o limite do cartão como se fosse parte da renda.",
                afirmacao: ["Comprometeu o orçamento ao confundir crédito com renda."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "As compras no crédito ultrapassaram o que cabia no orçamento e comprometeram as despesas essenciais. Você precisa recomeçar o planejamento."
            }
        ]
    },
    {
        caminho: "A",
        enunciado: "Com as prioridades definidas, você vai montar um plano para o mês. O que fazer?",
        alternativas: [
            {
                texto: "Comparar a renda com as despesas e reservar um valor possível para guardar.",
                afirmacao: ["Comparou renda e despesas e planejou uma quantia possível para guardar."],
                tipo: "avancar",
                proxima: 5
            },
            {
                texto: "Usar o orçamento para calcular quanto guardar para uma meta.",
                afirmacao: ["Usou o orçamento para planejar uma meta financeira."],
                tipo: "trocar",
                proxima: 8,
                disponivel: true
            },
            {
                texto: "Contar com uma renda extra que ainda não foi confirmada.",
                afirmacao: ["Planejou os gastos contando com uma renda extra incerta."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "A renda extra não chegou e o valor reservado para o mês não foi suficiente. Você precisa recomeçar."
            }
        ]
    },
    {
        caminho: "A",
        enunciado: "Surge uma despesa inesperada. Como proteger seu planejamento?",
        alternativas: [
            {
                texto: "Rever gastos não essenciais e ajustar o plano sem atrasar contas prioritárias.",
                afirmacao: ["Ajustou o orçamento para lidar com o imprevisto e proteger prioridades."],
                tipo: "avancar",
                proxima: 6
            },
            {
                texto: "Voltar ao planejamento das despesas e revisar as prioridades do mês.",
                afirmacao: ["Voltou ao planejamento das despesas para rever as prioridades."],
                tipo: "salto",
                proxima: 4
            },
            {
                texto: "Pagar o imprevisto com crédito caro sem avaliar o custo.",
                afirmacao: ["Assumiu uma dívida sem avaliar os juros e o custo total."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Os juros da dívida comprometeram o orçamento dos próximos meses. Você precisa recomeçar o planejamento."
            }
        ]
    },
    {
        caminho: "A",
        enunciado: "Ao fechar o mês, você revisa o orçamento. Como concluir seu plano?",
        alternativas: [
            {
                texto: "Conferir o que foi gasto, ajustar prioridades e manter uma reserva possível.",
                afirmacao: ["Revisou os gastos, ajustou prioridades e organizou uma reserva."],
                tipo: "avancar",
                proxima: 11
            },
            {
                texto: "Levar o orçamento organizado para calcular uma meta de poupança.",
                afirmacao: ["Usou o orçamento organizado para planejar uma meta de poupança."],
                tipo: "trocar",
                proxima: 10,
                disponivel: true
            },
            {
                texto: "Ignorar os gastos do mês e assumir novas parcelas sem conferir o orçamento.",
                afirmacao: ["Assumiu novas parcelas sem verificar se cabiam no orçamento."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "As parcelas ultrapassaram o valor disponível e comprometeram seu planejamento mensal. Você precisa recomeçar."
            }
        ]
    },
    {
        caminho: "B",
        enunciado: "Você definiu sua meta e o prazo. Como calcular quanto precisa guardar?",
        alternativas: [
            {
                texto: "Dividir o valor necessário pelo número de meses até o prazo.",
                afirmacao: ["Dividiu o valor da meta pelo tempo disponível."],
                tipo: "avancar",
                proxima: 8
            },
            {
                texto: "Comprar agora parcelado sem verificar o impacto das parcelas.",
                afirmacao: ["Assumiu parcelas sem avaliar o impacto no orçamento."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "As parcelas comprometeram as despesas essenciais antes de a meta ser planejada. Você precisa recomeçar."
            },
            {
                texto: "Guardar dinheiro para a meta sem reservar o valor das contas que vencem no mês.",
                afirmacao: ["Deixou de reservar dinheiro para as contas do mês ao poupar para a meta."],
                tipo: "gameover",
                disponivel: true,
            }
        ]
    },
    {
        caminho: "B",
        enunciado: "Você já sabe quanto precisa guardar. Onde procurar espaço para essa quantia?",
        alternativas: [
            {
                texto: "Revisar despesas variáveis e programar um valor que caiba no mês.",
                afirmacao: ["Revisou despesas variáveis e definiu um valor de poupança possível."],
                tipo: "avancar",
                proxima: 9
            },
            {
                texto: "Levar o plano de poupança para revisar o orçamento mensal.",
                afirmacao: ["Decidiu revisar o orçamento mensal para apoiar a meta."],
                tipo: "trocar",
                proxima: 4,
                disponivel: true
            },
            {
                texto: "Ignorar os gastos pequenos e guardar mais do que cabe no mês.",
                afirmacao: ["Ignorou despesas menores que também comprometiam o orçamento."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Os gastos ignorados se acumularam e faltou dinheiro para despesas planejadas. Você precisa recomeçar."
            }
        ]
    },
    {
        caminho: "B",
        enunciado: "No meio do caminho, sua renda varia. Como manter a meta realista?",
        alternativas: [
            {
                texto: "Rever o prazo ou o valor mensal sem comprometer as contas essenciais.",
                afirmacao: ["Ajustou prazo ou valor para manter a meta compatível com a renda."],
                tipo: "avancar",
                proxima: 10
            },
            {
                texto: "Reorganizar o orçamento mensal antes de ajustar o valor da meta.",
                afirmacao: ["Decidiu reorganizar o orçamento mensal para ajustar a meta."],
                tipo: "salto",
                proxima: 7
            },
            {
                texto: "Recorrer ao cheque especial para manter o valor guardado.",
                afirmacao: ["Usou crédito caro para manter uma meta sem rever o orçamento."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "O custo do crédito superou o benefício de manter a meta no prazo original. Você precisa recomeçar."
            }
        ]
    },
    {
        caminho: "B",
        enunciado: "Você está perto de alcançar sua meta. O que fazer antes de concluir o plano?",
        alternativas: [
            {
                texto: "Conferir o valor acumulado, o prazo e se a meta continua adequada.",
                afirmacao: ["Conferiu o valor acumulado e confirmou o plano para alcançar a meta."],
                tipo: "avancar",
                proxima: 12
            },
            {
                texto: "Revisar o orçamento mensal considerando o valor guardado para a meta.",
                afirmacao: ["Revisou o orçamento mensal considerando o valor reservado para a meta."],
                tipo: "trocar",
                proxima: 6,
                disponivel: true
            },
            {
                texto: "Pedir um empréstimo sem comparar juros e custo total.",
                afirmacao: ["Contratou um empréstimo sem comparar seus custos."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "O empréstimo aumentou o custo da meta e comprometeu seu orçamento. Você precisa recomeçar o planejamento."
            }
        ]
    },
    {
        caminho: "A",
        final: "vitoria",
        enunciado: "Você organizou sua renda, priorizou despesas, revisou o orçamento e preparou uma reserva compatível com sua realidade. Seu planejamento mensal está pronto!",
        alternativas: []
    },
    {
        caminho: "B",
        final: "vitoria",
        enunciado: "Você definiu uma meta, calculou o valor necessário, ajustou o plano à sua renda e acompanhou seu progresso. Sua meta financeira foi alcançada!",
        alternativas: []
    }
];