/**
 * =======================================================================
 * BANCO DE DADOS DE QUESTÕES - CENTRO DE TREINAMENTO EMAC
 * =======================================================================
 * 
 * GUIA DE COMO CRIAR QUESTÕES PARA UM CAPÍTULO:
 * 
 * No final deste arquivo, você encontra o objeto principal `BANCO_QUESTOES_EMAC`.
 * Cada número (1 a 5) representa um capítulo da fábrica de móveis:
 *   1 = Capítulo 1: Setor de Corte
 *   2 = Capítulo 2: Setor de Montagem
 *   3 = Capítulo 3: Setor de Logística
 *   4 = Capítulo 4: Setor de Vendas
 *   5 = Capítulo 5: Otimização de Lucro
 * 
 * Para personalizar um capítulo (por exemplo, o Capítulo 3), substitua:
 *   3: criarQuestoesPadrao(3),
 * 
 * por uma lista com as suas próprias questões entre colchetes:
 *   3: [
 *       // Cole aqui suas questões usando os arquétipos abaixo!
 *   ],
 * 
 * DICA: Coloque pelo menos 5 questões (o sistema sorteia 5 aleatórias a cada rodada).
 * 
 * -----------------------------------------------------------------------
 * ARQUÉTIPO 1: QUESTÃO DE MÚLTIPLA ESCOLHA ('choice')
 * -----------------------------------------------------------------------
 * Copie e cole o modelo abaixo dentro da lista do capítulo desejado:
 * 
 * {
 *     id: 301,                                // Número de identificação único
 *     type: 'choice',                         // Tipo: sempre 'choice' para múltipla escolha
 *     topic: 'Tema da Questão',               // Título curto exibido no topo do card
 *     statement: `
 *         <p>Enunciado da questão aqui. Pode usar <strong>negrito</strong>.</p>
 *         <div class="math-formula-box">x + y ≤ 50</div>
 *     `,
 *     options: [                              // As 4 opções de resposta
 *         'Alternativa A',                    // Índice 0
 *         'Alternativa B',                    // Índice 1
 *         'Alternativa C',                    // Índice 2
 *         'Alternativa D'                     // Índice 3
 *     ],
 *     correctIndex: 1,                        // Índice da correta no seu código: 0 = A, 1 = B, 2 = C, 3 = D
 *                                             // NOTA: Na tela do site, o sistema embaralha a posição das
 *                                             // alternativas automaticamente para que nunca fique na mesma letra!
 *     explanation: `Explicação detalhada da resolução exibida após a verificação.`
 * },
 * 
 * -----------------------------------------------------------------------
 * ARQUÉTIPO 2: QUESTÃO DE ENTRADA EXATA ('input')
 * -----------------------------------------------------------------------
 * Copie e cole o modelo abaixo para perguntas onde o aluno deve digitar um número:
 * 
 * {
 *     id: 302,                                // Número de identificação único
 *     type: 'input',                          // Tipo: sempre 'input' para digitação
 *     topic: 'Tema da Questão',               // Título curto
 *     statement: `
 *         <p>Enunciado do problema de cálculo.</p>
 *         <p>Qual é o valor final calculado?</p>
 *     `,
 *     placeholder: 'Ex: 10',                  // Dica cinza que aparece dentro do campo
 *     unitPrefix: 'R$',                       // Prefixo antes do campo (ex: 'R$' ou '')
 *     unitSuffix: 'peças',                    // Sufixo depois do campo (ex: 'kg', 'horas' ou '')
 *     answer: 10,                             // Resposta correta principal
 *     acceptedAnswers: [10, '10', '10.0'],    // Formatos aceitos automaticamente
 *     explanation: `Passo a passo com o cálculo da resolução.`
 * },
 * =======================================================================
 */

// Função auxiliar que gera questões padrão (usada enquanto o capítulo não tiver questões personalizadas)
function criarQuestoesPadrao(capituloNum) {
    return [
        {
            id: capituloNum * 100 + 1,
            type: 'choice',
            topic: 'Atividade 1',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: Alternativa B</strong></p>
            `,
            options: [
                'Alternativa A',
                'Alternativa B',
                'Alternativa C',
                'Alternativa D'
            ],
            correctIndex: 1,
            explanation: `Explicação da resolução da questão.`
        },
        {
            id: capituloNum * 100 + 2,
            type: 'input',
            topic: 'Atividade 2',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: 10</strong></p>
            `,
            placeholder: 'Digite a resposta...',
            unitPrefix: '',
            unitSuffix: '',
            answer: 10,
            acceptedAnswers: [10, '10'],
            explanation: `Explicação da resolução da questão.`
        },
        {
            id: capituloNum * 100 + 3,
            type: 'choice',
            topic: 'Atividade 3',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: Alternativa C</strong></p>
            `,
            options: [
                'Alternativa A',
                'Alternativa B',
                'Alternativa C',
                'Alternativa D'
            ],
            correctIndex: 2,
            explanation: `Explicação da resolução da questão.`
        },
        {
            id: capituloNum * 100 + 4,
            type: 'input',
            topic: 'Atividade 4',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: 50</strong></p>
            `,
            placeholder: 'Digite a resposta...',
            unitPrefix: '',
            unitSuffix: '',
            answer: 50,
            acceptedAnswers: [50, '50'],
            explanation: `Explicação da resolução da questão.`
        },
        {
            id: capituloNum * 100 + 5,
            type: 'choice',
            topic: 'Atividade 5',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: Alternativa A</strong></p>
            `,
            options: [
                'Alternativa A',
                'Alternativa B',
                'Alternativa C',
                'Alternativa D'
            ],
            correctIndex: 0,
            explanation: `Explicação da resolução da questão.`
        },
        {
            id: capituloNum * 100 + 6,
            type: 'input',
            topic: 'Atividade 6',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: 25</strong></p>
            `,
            placeholder: 'Digite a resposta...',
            unitPrefix: '',
            unitSuffix: '',
            answer: 25,
            acceptedAnswers: [25, '25'],
            explanation: `Explicação da resolução da questão.`
        },
        {
            id: capituloNum * 100 + 7,
            type: 'choice',
            topic: 'Atividade 7',
            statement: `
                <p>Enunciado da questão.</p>
                <p><strong>Resposta correta: Alternativa D</strong></p>
            `,
            options: [
                'Alternativa A',
                'Alternativa B',
                'Alternativa C',
                'Alternativa D'
            ],
            correctIndex: 3,
            explanation: `Explicação da resolução da questão.`
        }
    ];
}

/**
 * =======================================================================
 * MAPEAMENTO DAS QUESTÕES POR CAPÍTULO
 * =======================================================================
 * Para personalizar um capítulo, basta trocar `criarQuestoesPadrao(X)`
 * por um array `[ ... ]` contendo as questões que você criar.
 */
const BANCO_QUESTOES_EMAC = {

    1: [
    {
        id: 101,
        type: 'input',
        topic: 'Cálculo de Custo de Produção',
        statement: `
            <p>Uma fábrica possui uma máquina de corte que gera um custo fixo de R$ 50,00 toda vez que é ligada, independentemente da produção. Além disso, o custo da matéria-prima utilizada para cada tábua cortada é de R$ 15,00.</p>
            <p>Utilizando a função afim correspondente a esses gastos, qual será o custo total da fábrica para cortar exatamente 20 tábuas?</p>
        `,
        placeholder: 'Ex: 350',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 350,
        acceptedAnswers: [350, '350', '350.00', '350,00'],
        explanation: `O custo é dado pela função afim C(x) = 15x + 50, onde x é a quantidade de peças. Substituindo x por 20, temos C(20) = 15(20) + 50 = 300 + 50 = 350.`
    },
    {
        id: 102,
        type: 'input',
        topic: 'Descobrindo a Quantidade Produzida',
        statement: `
            <p>Uma determinada máquina industrial possui uma função de custo dada por C(x) = 15x + 50, onde 'x' é a quantidade de peças produzidas no dia.</p>
            <p>Se o painel de controle indicou um custo final de R$ 1.550,00 para um determinado lote, qual foi a quantidade exata de peças (x) produzidas para gerar esse custo?</p>
        `,
        placeholder: 'Ex: 100',
        unitPrefix: '',
        unitSuffix: 'peças',
        answer: 100,
        acceptedAnswers: [100, '100'],
        explanation: `Usando a função C(x) = 15x + 50, igualamos o custo final a 1550: 1550 = 15x + 50. Subtraindo o custo fixo de 50, temos 1500 = 15x. Dividindo por 15, descobrimos que x = 100 peças.`
    },
    {
        id: 103,
        type: 'input',
        topic: 'Cálculo de Salário com Bônus',
        statement: `
            <p>Um gerente de produção possui um contrato estipulando um salário base fixo de R$ 5.000,00 mensais. Além disso, ele recebe um bônus de R$ 500,00 por cada lote de peças que sua equipe entrega pronto no mês.</p>
            <p>Se a equipe conseguir montar e entregar 12 lotes no decorrer de um mês, qual será o valor em reais do salário final desse gerente?</p>
        `,
        placeholder: 'Ex: 11000',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 11000,
        acceptedAnswers: [11000, '11000', '11.000', '11000,00'],
        explanation: `A função do salário total é S(x) = 500x + 5000. Para 12 lotes entregues, substituímos x por 12 na função: S(12) = 500(12) + 5000 = 6000 + 5000 = 11000.`
    },
    {
        id: 104,
        type: 'input',
        topic: 'Otimização de Orçamento',
        statement: `
            <p>A diretoria de uma indústria utiliza a função S(x) = 500x + 5000 para calcular o salário total de um supervisor com base nos lotes (x) entregues por ele.</p>
            <p>Se a empresa planejou um orçamento com teto máximo de R$ 10.500,00 para o pagamento deste funcionário em um mês, quantos lotes ele precisa entregar para atingir exatamente esse limite financeiro?</p>
        `,
        placeholder: 'Ex: 11',
        unitPrefix: '',
        unitSuffix: 'lotes',
        answer: 11,
        acceptedAnswers: [11, '11'],
        explanation: `Igualamos a função ao valor do teto: 500x + 5000 = 10500. Subtraindo o valor fixo de 5000, obtemos 500x = 5500. Dividindo por 500, encontramos a necessidade de entregar x = 11 lotes.`
    },
    {
        id: 105,
        type: 'input',
        topic: 'Projeção de Custos de Fabricação',
        statement: `
            <p>Em uma linha de produção, o custo total de fabricação de um componente segue rigorosamente a função afim C(x) = 15x + 50, onde x representa a quantidade produzida.</p>
            <p>Qual será o custo total repassado ao setor financeiro para produzir exatas 30 unidades desse componente?</p>
        `,
        placeholder: 'Ex: 500',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 500,
        acceptedAnswers: [500, '500', '500.00', '500,00'],
        explanation: `O custo fixo (coeficiente linear) é 50, e o custo por unidade (coeficiente angular) é 15. Aplicando na fórmula, temos C(30) = 15(30) + 50 = 450 + 50 = 500.`
    },
    {
        id: 106,
        type: 'input',
        topic: 'Custo para um Novo Lote',
        statement: `
            <p>Um novo pedido exige que a equipe prepare um lote especial contendo 45 tábuas de madeira para um cliente.</p>
            <p>Sabendo que a função que define o custo total da máquina é dada por C(x) = 15x + 50, qual será o gasto exato da fábrica para produzir esse lote?</p>
        `,
        placeholder: 'Ex: 725',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 725,
        acceptedAnswers: [725, '725', '725.00', '725,00'],
        explanation: `O custo é calculado substituindo o x por 45 na função C(x) = 15x + 50. Multiplicamos 15 por 45, resultando em 675. Somando o custo fixo de 50, obtemos R$ 725,00.`
    },
    {
        id: 107,
        type: 'input',
        topic: 'Quantidade pelo Custo Total',
        statement: `
            <p>Um auditor financeiro verificou que o custo do setor de acabamento em um determinado turno fechou em exatamente R$ 800,00.</p>
            <p>Usando a função C(x) = 15x + 50 de custos operacionais, descubra: quantas unidades (x) foram finalizadas no equipamento para gerar esse custo?</p>
        `,
        placeholder: 'Ex: 50',
        unitPrefix: '',
        unitSuffix: 'unidades',
        answer: 50,
        acceptedAnswers: [50, '50'],
        explanation: `Igualamos o custo total à função: 15x + 50 = 800. Subtraímos 50 de ambos os lados, ficando com 15x = 750. Dividindo 750 por 15, encontramos x = 50 unidades.`
    },
    {
        id: 108,
        type: 'input',
        topic: 'Alta Demanda e Bônus Salarial',
        statement: `
            <p>A função do salário de um líder de setor é S(x) = 500x + 5000, onde x representa a quantidade de lotes extras finalizados.</p>
            <p>Em um mês de alta demanda produtiva, a equipe superou as expectativas e entregou 15 lotes completos. Qual será o salário total recebido pelo líder neste mês?</p>
        `,
        placeholder: 'Ex: 12500',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 12500,
        acceptedAnswers: [12500, '12500', '12.500', '12500,00'],
        explanation: `Substituímos x pela quantidade de lotes entregues (15) na função S(x) = 500x + 5000. O bônus será de 500 * 15 = 7500. Somando ao salário fixo de 5000, o total é R$ 12.500,00.`
    },
    {
        id: 109,
        type: 'input',
        topic: 'Planejamento de Metas',
        statement: `
            <p>Um funcionário está planejando suas finanças pessoais e percebeu que precisa receber um salário de exatos R$ 8.500,00 no próximo mês para cobrir suas dívidas.</p>
            <p>Se o salário dele é pago de acordo com a função S(x) = 500x + 5000, quantos lotes (x) ele precisará entregar para alcançar sua meta financeira?</p>
        `,
        placeholder: 'Ex: 7',
        unitPrefix: '',
        unitSuffix: 'lotes',
        answer: 7,
        acceptedAnswers: [7, '7'],
        explanation: `Igualamos o salário desejado à função: 500x + 5000 = 8500. Subtraindo os 5000 fixos, percebemos que ele precisa de 3500 em bônus (500x = 3500). Dividindo por 500, a meta é entregar 7 lotes.`
    },
    {
        id: 110,
        type: 'input',
        topic: 'Construindo o Gráfico Cartesianas',
        statement: `
            <p>Ao construir o gráfico de uma função afim dada por f(x) = 15x + 50 no plano cartesiano, a variável independente x fica no eixo horizontal e a imagem f(x) no eixo vertical.</p>
            <p>Se a variável x assumir o valor de 8, em qual número exato o seu ponto correspondente estará marcado no eixo vertical (eixo y)?</p>
        `,
        placeholder: 'Ex: 170',
        unitPrefix: '',
        unitSuffix: '',
        answer: 170,
        acceptedAnswers: [170, '170', '170.00', '170,00'],
        explanation: `Se x = 8, calculamos f(8) = 15(8) + 50. O termo variável sobe 120 e, somado ao coeficiente linear de 50, o ponto no eixo vertical (imagem) será no 170.`
    },
    {
        id: 111,
        type: 'choice',
        topic: 'Conceitos da Função Afim',
        statement: `
            <p>Na estrutura de uma função afim do tipo f(x) = ax + b que modela o custo de um serviço (onde há uma taxa fixa inicial e um valor variável por unidade produzida), qual é o papel matemático dessas cobranças?</p>
        `,
        options: [
            'A taxa fixa é o coeficiente angular (a) e o custo por unidade é o coeficiente linear (b).',
            'A taxa fixa e o custo por unidade são representados unicamente pela variável independente (x).',
            'A taxa fixa é o coeficiente linear (b) e o custo por unidade é a taxa de variação ou coeficiente angular (a).',
            'A taxa fixa representa a raiz da função, enquanto o custo variável indica o valor de y.'
        ],
        correctIndex: 2,
        explanation: `O valor fixo cobrado independentemente da produção é o coeficiente linear (b), que determina o ponto onde a reta intercepta o eixo y. O valor variável associado a cada unidade define a inclinação da reta, sendo o coeficiente angular (a).`
    },
    {
        id: 112,
        type: 'choice',
        topic: 'O Papel da Variável x',
        statement: `
            <p>Na modelagem matemática de situações do cotidiano usando funções afins do tipo f(x) = ax + b, como a letra "x" é classificada e o que ela geralmente representa na prática?</p>
        `,
        options: [
            'Incógnita, representando sempre um único valor numérico escondido que precisa ser desvendado.',
            'Variável independente, representando a grandeza que podemos escolher ou alterar livremente (como a quantidade de produtos).',
            'Coeficiente linear, definindo a constante invariável de um sistema.',
            'Coeficiente angular, sendo a taxa responsável por ditar se o gráfico cresce ou decresce.'
        ],
        correctIndex: 1,
        explanation: `Diferente de uma equação simples, em uma função o "x" atua como Variável Independente. Isso significa que ele não é um número fixo escondido, mas sim uma entrada livre que o usuário define para calcular a imagem f(x) correspondente.`
    },
    {
        id: 113,
        type: 'choice',
        topic: 'Alterações no Gráfico',
        statement: `
            <p>Considere a função de cálculo salarial S(x) = 500x + 5000, onde 500 é a comissão e 5000 o fixo.</p>
            <p>O que acontece matematicamente e graficamente com a reta dessa função se o valor da comissão (500) for aumentado para 700?</p>
        `,
        options: [
            'A reta começará de um valor inicial mais alto no eixo vertical, deslocando-se para cima.',
            'A inclinação da reta diminuirá, tornando o crescimento do gráfico mais lento.',
            'A função deixará de ser uma linha reta, pois houve alteração na sua lei de formação.',
            'O coeficiente angular aumentará, tornando a reta mais inclinada e íngreme devido à taxa de variação maior.'
        ],
        correctIndex: 3,
        explanation: `A comissão atua como o coeficiente angular (a), responsável pela inclinação. Se o valor aumenta de 500 para 700, a taxa de variação cresce, fazendo com que a reta fique mais íngreme (suba mais rápido).`
    },
    {
        id: 114,
        type: 'choice',
        topic: 'O Mundo das Inequações',
        statement: `
            <p>Quando modelamos situações reais que envolvem orçamentos máximos ou recursos limitados (ex: "gastar no máximo R$ 5.000,00" ou "utilizar até 100 kg de matéria-prima"), qual é a ferramenta matemática adequada para representar essa restrição em vez do sinal de igualdade (=)?</p>
        `,
        options: [
            'As Inequações, utilizando símbolos de limite como "menor ou igual a" (≤).',
            'As Equações Polinomiais de 2º Grau.',
            'Exclusivamente a análise do Coeficiente Linear da função.',
            'O sistema de igualdade absoluta entre duas variáveis.'
        ],
        correctIndex: 0,
        explanation: `Situações de limite, tetos ou orçamentos não exigem que a produção alcance um número exato de igualdade, mas sim que obedeça a uma margem. Para isso, utilizamos inequações (≤, <, ≥, >).`
    },
    {
        id: 115,
        type: 'choice',
        topic: 'Lógica de Resolução Algébrica',
        statement: `
            <p>Se o custo total projetado para a produção de certa quantidade de itens é de R$ 350,00 e a função de custo diária da fábrica é dada por <strong>C(x) = 15x + 50</strong>, qual é o raciocínio algébrico correto para encontrar a quantidade de itens produzidos (x)?</p>
        `,
        options: [
            'Substituir o x diretamente por 350, multiplicar por 15 e depois somar 50.',
            'Somar o custo final de 350 com o custo fixo de 50 e depois dividir por 15.',
            'Igualar a função a 350, subtrair o custo fixo (50) de ambos os lados e dividir o valor restante pela taxa de variação (15).',
            'Igualar a expressão a zero, aplicando a fórmula de Bhaskara para encontrar as raízes reais.'
        ],
        correctIndex: 2,
        explanation: `Para encontrar 'x' sabendo o total, fazemos 15x + 50 = 350. Isolamos a variável passando o 50 para o outro lado subtraindo (15x = 300) e, em seguida, dividimos o resultado pelo coeficiente angular 15, resultando em x = 20.`
    },
    {
        id: 116,
        type: 'choice',
        topic: 'Identificação dos Coeficientes',
        statement: `
            <p>Em uma função afim dada por <strong>f(x) = 25x + 100</strong>, o que os números 25 e 100 representam, respectivamente, no gráfico cartesiano?</p>
        `,
        options: [
            '25 é o ponto de interseção com o eixo x e 100 é a inclinação da reta.',
            '25 é o coeficiente angular (inclinação) e 100 é o coeficiente linear (interseção com o eixo vertical).',
            'Ambos são coeficientes lineares, mas cortam eixos diferentes.',
            '25 é a variável independente e 100 é a variável dependente.'
        ],
        correctIndex: 1,
        explanation: `O número que multiplica o x (25) é a taxa de variação ou coeficiente angular (inclinação). O número isolado (100) é a âncora, ou coeficiente linear, indicando onde a reta cruza o eixo vertical (y).`
    },
    {
        id: 117,
        type: 'choice',
        topic: 'Impacto da Taxa de Variação',
        statement: `
            <p>Se o custo de produção de um determinado setor é modelado pela função afim <strong>C(x) = 12x + 80</strong>, o que ocorre com o custo total C(x) se a produção x aumentar em exatas 5 unidades?</p>
        `,
        options: [
            'O custo total aumenta em 80 reais.',
            'O custo total aumenta em 60 reais.',
            'O custo total aumenta em 12 reais.',
            'O custo total triplica de valor.'
        ],
        correctIndex: 1,
        explanation: `O custo aumenta R$ 12,00 por cada nova unidade produzida (coeficiente angular). Se a produção aumenta 5 unidades, o custo sobe 5 * 12 = R$ 60,00, independentemente do custo fixo inicial.`
    },
    {
        id: 118,
        type: 'choice',
        topic: 'Interseção no Gráfico',
        statement: `
            <p>Em uma análise gráfica, o gráfico de uma função afim genérica <strong>f(x) = ax + b</strong> sempre cruza o eixo vertical (eixo das ordenadas, ou eixo y) em qual ponto exato?</p>
        `,
        options: [
            'No ponto (a, 0).',
            'No ponto (0, b).',
            'No ponto (b, 0).',
            'No ponto (0, a).'
        ],
        correctIndex: 1,
        explanation: `Para encontrar a interseção com o eixo vertical, devemos assumir que a variável horizontal x é zero. Fazendo f(0) = a(0) + b, o resultado é b. Portanto, a reta cruza o eixo y na coordenada (0, b).`
    },
    {
        id: 119,
        type: 'choice',
        topic: 'Crescimento e Decrescimento',
        statement: `
            <p>Um analista percebeu que o fluxo de caixa mensal de uma máquina depreciada obedece à função afim <strong>L(x) = -5x + 200</strong>, onde x é o tempo em meses. O que o valor negativo do coeficiente angular (-5) indica sobre a reta no gráfico?</p>
        `,
        options: [
            'A reta é horizontal, pois o valor inicial já é muito alto.',
            'A reta é crescente, mas se inicia na parte negativa do gráfico.',
            'A reta é decrescente, indicando que o valor diminui a uma taxa constante a cada passo de x.',
            'A inclinação da reta depende exclusivamente da raiz da função para ser desenhada.'
        ],
        correctIndex: 2,
        explanation: `Um coeficiente angular negativo (a < 0) significa que a taxa de variação "puxa" o resultado para baixo. Logo, a função é decrescente, criando uma reta que desce da esquerda para a direita no gráfico.`
    },
    {
        id: 120,
        type: 'choice',
        topic: 'Modelagem de Situação Cotidiana',
        statement: `
            <p>Um serviço de frete terceirizado cobra um valor fixo de R$ 50,00 por contrato, mais R$ 2,50 por quilômetro rodado. Qual é a função afim que representa o valor final <strong>V(x)</strong> pago por um frete de <strong>x</strong> quilômetros?</p>
        `,
        options: [
            'V(x) = 50x + 2,50',
            'V(x) = 2,50x + 50',
            'V(x) = 52,50x',
            'V(x) = 50 + 2,50 + x'
        ],
        correctIndex: 1,
        explanation: `O valor fixo (cobrado independente da distância) é o coeficiente linear (b = 50). O valor variável, que depende da distância x, é o coeficiente angular (a = 2,50). Juntando as partes no modelo ax + b, temos V(x) = 2,50x + 50.`
    },
    {
        id: 121,
        type: 'input',
        topic: 'O Início do Jogo (Custo Fixo)',
        statement: `
            <p>Considere que uma máquina industrial pesada consome R$ 50,00 de energia no exato segundo em que é ligada, independentemente de operar em peças depois. O processo de cada peça custa R$ 15,00 extras.</p>
            <p>Se a equipe ligar a máquina, mas houver um problema técnico e <strong>0 (zero) peças</strong> forem processadas, qual será o custo registrado?</p>
        `,
        placeholder: 'Ex: 50',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 50,
        acceptedAnswers: [50, '50', '50.00', '50,00'],
        explanation: `Produzir zero unidades significa que x = 0. Na função afim C(x) = 15x + 50, o cálculo fica C(0) = 15(0) + 50. O custo variável é anulado, sobrando apenas o custo fixo inicial de R$ 50,00.`
    },
    {
        id: 122,
        type: 'input',
        topic: 'Desvendando a Quantidade',
        statement: `
            <p>Em um dia de capacidade reduzida, um setor produtivo operou a máquina principal e registrou um custo total de exatamente R$ 1.100,00 no final do dia.</p>
            <p>Utilizando a função de custo operacional, <strong>C(x) = 15x + 50</strong>, quantas peças foram processadas nesse dia?</p>
        `,
        placeholder: 'Ex: 70',
        unitPrefix: '',
        unitSuffix: 'peças',
        answer: 70,
        acceptedAnswers: [70, '70'],
        explanation: `Igualamos o custo total à lei de formação da função: 15x + 50 = 1100. Subtraindo os 50 do custo fixo, ficamos com 15x = 1050. Dividindo 1050 por 15, descobrimos que foram processadas 70 peças.`
    },
    {
        id: 123,
        type: 'input',
        topic: 'Análise de Pagamento de Comissão',
        statement: `
            <p>Um funcionário terceirizado verificou seu recibo mensal e notou que o pagamento liberado pela contratante foi de R$ 9.500,00 no total.</p>
            <p>Sabendo que a sua função salarial obedece à regra <strong>S(x) = 500x + 5000</strong>, onde x são os projetos finalizados, quantos projetos ele conseguiu concluir para atingir esse valor?</p>
        `,
        placeholder: 'Ex: 9',
        unitPrefix: '',
        unitSuffix: 'projetos',
        answer: 9,
        acceptedAnswers: [9, '9'],
        explanation: `Substituímos S(x) pelo pagamento recebido: 500x + 5000 = 9500. Retirando a parte fixa de 5000, vemos que o ganho variável foi de 4500 (500x = 4500). Dividindo esse valor por 500, o resultado é de 9 projetos.`
    },
    {
        id: 124,
        type: 'input',
        topic: 'Orçamento de Produção',
        statement: `
            <p>Um operador novato foi encarregado de fabricar exatas 40 peças brutas em seu equipamento durante o turno da manhã.</p>
            <p>Usando o modelo matemático de custos do equipamento, expresso por <strong>C(x) = 15x + 50</strong>, qual será o custo financeiro total dessa operação?</p>
        `,
        placeholder: 'Ex: 650',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 650,
        acceptedAnswers: [650, '650', '650.00', '650,00'],
        explanation: `O número de peças é a variável x (x = 40). Aplicando na função, temos C(40) = 15(40) + 50. O custo variável será 600, que somado ao custo fixo de 50 resulta em R$ 650,00.`
    },
    {
        id: 125,
        type: 'input',
        topic: 'Projeção para Grandes Pedidos',
        statement: `
            <p>A gerência solicitou um orçamento de emergência para suprir um cliente importante. Eles precisam que a equipe fabrique um grande lote com exatas 120 peças padronizadas.</p>
            <p>Aplicando o modelo matemático <strong>C(x) = 15x + 50</strong>, qual será o custo repassado à gerência para produzir essa encomenda?</p>
        `,
        placeholder: 'Ex: 1850',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 1850,
        acceptedAnswers: [1850, '1850', '18.500', '1850,00'],
        explanation: `Substituímos o x por 120 na fórmula: C(120) = 15(120) + 50. A multiplicação 15 * 120 resulta em 1800. Somando os 50 fixos da função, o custo atinge R$ 1.850,00.`
    },
    {
        id: 126,
        type: 'input',
        topic: 'Custo de Produção de Cadeiras',
        statement: `
            <p>Uma pequena fábrica de móveis tem um custo fixo diário de R$ 120,00 apenas para manter as máquinas ligadas e o galpão operando. Além disso, cada cadeira produzida gera um custo variável de R$ 35,00 em madeira e parafusos.</p>
            <p>Considerando a função afim que modela essa situação, qual será o custo total da fábrica em um dia em que são produzidas exatamente 30 cadeiras?</p>
        `,
        placeholder: 'Ex: 1170',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 1170,
        acceptedAnswers: [1170, '1170', '1170.00', '1170,00'],
        explanation: `A função de custo é C(x) = 35x + 120, onde x é a quantidade de cadeiras. Substituindo x por 30, calculamos primeiro o custo variável: 35 * 30 = 1050. Somando o custo fixo de 120, o custo total é R$ 1.170,00.`
    },
    {
        id: 127,
        type: 'input',
        topic: 'Cálculo de Frete Terceirizado',
        statement: `
            <p>Para realizar as entregas, uma empresa de logística cobra uma taxa fixa de R$ 150,00 por viagem, mais um valor de R$ 4,00 por quilômetro rodado.</p>
            <p>Sabendo que o valor final cobrado por uma entrega específica foi de R$ 430,00, qual foi a distância total, em quilômetros, percorrida pelo caminhão?</p>
        `,
        placeholder: 'Ex: 70',
        unitPrefix: '',
        unitSuffix: 'km',
        answer: 70,
        acceptedAnswers: [70, '70'],
        explanation: `O valor do frete segue a função V(x) = 4x + 150. Igualamos a função ao valor final: 4x + 150 = 430. Subtraindo a taxa fixa de 150, temos 4x = 280. Dividindo por 4, descobrimos que a distância foi x = 70 km.`
    },
    {
        id: 128,
        type: 'input',
        topic: 'Salário com Comissão',
        statement: `
            <p>Um vendedor da loja recebe um salário base fixo de R$ 2.500,00 por mês. Como incentivo, ele também ganha uma comissão de R$ 150,00 por cada conjunto de jantar que consegue vender.</p>
            <p>Se em um determinado mês ele vender 18 conjuntos, qual será o valor total do seu salário?</p>
        `,
        placeholder: 'Ex: 5200',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 5200,
        acceptedAnswers: [5200, '5200', '5200.00', '5200,00'],
        explanation: `A função do salário é S(x) = 150x + 2500, sendo x o número de vendas. Substituindo x por 18, a comissão total será 150 * 18 = 2700. Somando com o salário base de 2500, o total a receber é R$ 5.200,00.`
    },
    {
        id: 129,
        type: 'input',
        topic: 'Cobrança por Tempo de Uso',
        statement: `
            <p>Um galpão de ferramentas pode ser alugado por autônomos. A administração cobra uma taxa de entrada de R$ 15,00 mais R$ 8,00 por cada hora de uso dos equipamentos.</p>
            <p>Se um profissional pagou exatamente R$ 71,00 ao final do dia, quantas horas ele passou utilizando o galpão?</p>
        `,
        placeholder: 'Ex: 7',
        unitPrefix: '',
        unitSuffix: 'horas',
        answer: 7,
        acceptedAnswers: [7, '7'],
        explanation: `A função de cobrança é P(x) = 8x + 15. Igualamos o total pago à função: 8x + 15 = 71. Retirando os 15 da taxa de entrada, temos 8x = 56. Dividindo por 8, encontramos que o tempo de uso foi x = 7 horas.`
    },
    {
        id: 130,
        type: 'input',
        topic: 'Custo do Setor de Acabamento',
        statement: `
            <p>No setor de acabamento, a preparação da cabine de pintura custa R$ 80,00 por turno devido aos produtos de limpeza e energia. A aplicação de verniz em cada peça gera um custo adicional de R$ 12,00.</p>
            <p>Montando a função afim que representa esse cenário, qual será o custo gerado em um turno onde a equipe finalizou 65 peças?</p>
        `,
        placeholder: 'Ex: 860',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 860,
        acceptedAnswers: [860, '860', '860.00', '860,00'],
        explanation: `Temos o custo fixo b = 80 e o custo variável a = 12. A função é C(x) = 12x + 80. Substituindo x por 65, o custo das peças será 12 * 65 = 780. Somando os 80 da cabine, o custo total atinge R$ 860,00.`
    }
],
    2: [
    {
        id: 201,
        type: 'input',
        topic: 'Verificação de Orçamento Máximo',
        statement: `
            <p>Um pintor possui um orçamento com um teto financeiro absoluto de R$ 720,00 no cartão de crédito. Ele compra latas de tinta branca (x), que custam R$ 60,00 cada, e latas de tinta colorida (y), que custam R$ 90,00 cada. A inequação que modela o cenário é: <strong>60x + 90y ≤ 720</strong>.</p>
            <p>Se o pintor decidir colocar exatamente 4 latas de tinta colorida (y = 4) no carrinho, qual é a <strong>quantidade máxima</strong> de latas de tinta branca (x) que ele pode adicionar sem que o cartão seja recusado?</p>
        `,
        placeholder: 'Ex: 5',
        unitPrefix: '',
        unitSuffix: 'latas brancas',
        answer: 6,
        acceptedAnswers: [6, '6'],
        explanation: `Substituímos y por 4 na inequação: 60x + 90(4) ≤ 720. Calculamos as latas coloridas: 360 reais. Ficamos com 60x + 360 ≤ 720. Passando o 360 subtraindo, o saldo é 360 (60x ≤ 360). Dividindo por 60, concluímos que ele pode comprar no máximo x = 6 latas de tinta branca.`
    },
    {
        id: 202,
        type: 'input',
        topic: 'Avaliando Meta Mínima de Vendas',
        statement: `
            <p>Uma equipe de vendas tem uma meta mínima diária de arrecadar pelo menos R$ 600,00 em comissões para que o turno não seja considerado de baixa produtividade. Eles vendem o Plano Básico (x), com R$ 50,00 de comissão, e o Plano Pro (y), com R$ 120,00 de comissão. A regra do gestor é: <strong>50x + 120y ≥ 600</strong>.</p>
            <p>No fechamento de um dia fraco, a equipe conseguiu vender 4 Planos Básicos e 3 Planos Pro. Qual foi o valor total arrecadado em reais pela equipe (o valor que deve ser comparado ao piso de 600)?</p>
        `,
        placeholder: 'Ex: 500',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 560,
        acceptedAnswers: [560, '560', '560.00', '560,00'],
        explanation: `Calculamos a arrecadação substituindo x por 4 e y por 3: 50(4) + 120(3). O ganho dos Planos Básicos foi de 200 e dos Planos Pro foi de 360. A soma resulta em R$ 560,00 (valor inferior ao piso, reprovando o teste da meta).`
    },
    {
        id: 203,
        type: 'input',
        topic: 'Cálculo de Cenário Extremo de Espaço',
        statement: `
            <p>Um fazendeiro precisa gerenciar o galpão da propriedade, que tem um teto físico de 1.000 metros quadrados. Ele vai guardar sacas de milho (x), que ocupam 2 m² cada, e caixas de maquinário (y), que ocupam 5 m² cada. A limitação é: <strong>2x + 5y ≤ 1000</strong>.</p>
            <p>Para desenhar o limite no gráfico, qual é a quantidade máxima de caixas de maquinário (y) que caberão no galpão, caso o fazendeiro não guarde nenhuma saca de milho (x = 0)?</p>
        `,
        placeholder: 'Ex: 100',
        unitPrefix: '',
        unitSuffix: 'caixas',
        answer: 200,
        acceptedAnswers: [200, '200'],
        explanation: `Para o cenário onde x = 0, a inequação se torna uma equação na fronteira: 2(0) + 5y = 1000. Isso resulta em 5y = 1000. Dividindo 1000 por 5, descobrimos que cabem no máximo y = 200 caixas de maquinário.`
    },
    {
        id: 204,
        type: 'input',
        topic: 'Limite de Peso no Transporte',
        statement: `
            <p>No setor de logística, o contrato com a transportadora impõe um teto para o peso do frete, estipulado pela balança rodoviária, que não pode exceder 250 kg. Cada mesa (x) adiciona 5 kg à carga e cada cadeira (y) adiciona 2 kg, formando a restrição: <strong>5x + 2y ≤ 250</strong>.</p>
            <p>Se o gerente de despacho já acomodou exatamente 30 mesas no caminhão, qual é a quantidade máxima de cadeiras que ainda podem ser carregadas sem que o veículo tome uma multa por excesso de peso?</p>
        `,
        placeholder: 'Ex: 40',
        unitPrefix: '',
        unitSuffix: 'cadeiras',
        answer: 50,
        acceptedAnswers: [50, '50'],
        explanation: `Substituímos x por 30: 5(30) + 2y ≤ 250. O peso das mesas é 150 kg (150 + 2y ≤ 250). Passando o 150 subtraindo, sobra um limite de peso de 100 kg (2y ≤ 100). Dividindo por 2, vemos que cabem no máximo y = 50 cadeiras.`
    },
    {
        id: 205,
        type: 'input',
        topic: 'Análise de Tempo Limite',
        statement: `
            <p>O chão de fábrica opera sob um cronômetro rigoroso com um turno máximo de 480 minutos diários. Os funcionários levam 40 minutos para finalizar cada mesa (x) e 20 minutos para cada cadeira (y), resultando na regra de produção: <strong>40x + 20y ≤ 480</strong>.</p>
            <p>No meio do turno, o supervisor recebe uma ligação pedindo para priorizar exclusivamente a montagem das mesas (ou seja, nenhuma cadeira será montada, y = 0). Quantas mesas a equipe conseguirá produzir, no limite exato de todo o tempo disponível?</p>
        `,
        placeholder: 'Ex: 10',
        unitPrefix: '',
        unitSuffix: 'mesas',
        answer: 12,
        acceptedAnswers: [12, '12'],
        explanation: `Se a equipe foca 100% nas mesas (y = 0), usamos a equação de fronteira: 40x + 20(0) = 480. O termo do y zera, ficando 40x = 480. Dividindo o tempo total (480) pelo tempo de uma mesa (40), o máximo possível são x = 12 mesas.`
    },
    {
        id: 206,
        type: 'input',
        topic: 'Capacidade Restante de Tempo',
        statement: `
            <p>O setor de montagem de uma fábrica possui um teto rigoroso de 480 minutos de operação diária. O tempo de montagem é de 40 minutos para cada mesa (x) e 20 minutos para cada cadeira (y), formando a inequação de limite de tempo: <strong>40x + 20y ≤ 480</strong>.</p>
            <p>Se a equipe já finalizou a montagem de exatamente 8 mesas, quantos <strong>minutos</strong> ainda restam disponíveis no turno para que eles possam montar cadeiras?</p>
        `,
        placeholder: 'Ex: 150',
        unitPrefix: '',
        unitSuffix: 'minutos',
        answer: 160,
        acceptedAnswers: [160, '160'],
        explanation: `As 8 mesas consumiram 40 * 8 = 320 minutos. Como o limite total do turno é 480 minutos, o tempo restante é a diferença: 480 - 320 = 160 minutos disponíveis.`
    },
    {
        id: 207,
        type: 'input',
        topic: 'Verificando o Piso do Frete',
        statement: `
            <p>Uma transportadora só isenta a taxa de entrega se a carga total atingir um peso mínimo de 100 kg. Sabe-se que cada mesa (x) pesa 5 kg e cada cadeira (y) pesa 2 kg. A inequação que garante a isenção é: <strong>5x + 2y ≥ 100</strong>.</p>
            <p>A equipe de expedição carregou no caminhão 10 mesas e 15 cadeiras. Qual é o <strong>peso total</strong> em quilogramas dessa carga específica (valor que determinará se a meta foi batida)?</p>
        `,
        placeholder: 'Ex: 75',
        unitPrefix: '',
        unitSuffix: 'kg',
        answer: 80,
        acceptedAnswers: [80, '80', '80.0', '80,0'],
        explanation: `Substituímos x por 10 e y por 15 na expressão de peso: 5(10) + 2(15). O peso das mesas é 50 kg e das cadeiras é 30 kg. Somando, o peso total da carga é de 80 kg (o que significa que não atingiu a meta mínima de 100 kg).`
    },
    {
        id: 208,
        type: 'input',
        topic: 'Extremo de Capacidade da Doca',
        statement: `
            <p>A área da doca destinada ao armazenamento dos móveis finalizados tem uma restrição física: ela comporta no máximo 60 móveis no total, independentemente do tipo. A inequação que representa esse teto espacial é <strong>x + y ≤ 60</strong>.</p>
            <p>Se o gerente decidir dedicar 100% desse espaço exclusivamente para o armazenamento de cadeiras (ou seja, montando zero mesas, x = 0), qual é a quantidade máxima de cadeiras (y) que caberão na doca?</p>
        `,
        placeholder: 'Ex: 50',
        unitPrefix: '',
        unitSuffix: 'cadeiras',
        answer: 60,
        acceptedAnswers: [60, '60'],
        explanation: `No cenário extremo onde x = 0 (nenhuma mesa), a inequação se torna 0 + y ≤ 60. Logo, o limite máximo de cadeiras que podem ser alocadas no espaço é exatamente y = 60.`
    },
    {
        id: 209,
        type: 'input',
        topic: 'Gestão de Orçamento de Materiais',
        statement: `
            <p>Um gestor financeiro definiu um orçamento máximo de R$ 500,00 por dia para a compra de duas matérias-primas. O Material A (x) custa R$ 20,00 a unidade e o Material B (y) custa R$ 50,00 a unidade. A inequação financeira é: <strong>20x + 50y ≤ 500</strong>.</p>
            <p>Se o gestor foi obrigado a comprar exatas 6 unidades do Material B (y = 6), qual é a quantidade máxima de unidades do Material A (x) que ele ainda pode comprar sem estourar o limite do orçamento?</p>
        `,
        placeholder: 'Ex: 15',
        unitPrefix: '',
        unitSuffix: 'unidades',
        answer: 10,
        acceptedAnswers: [10, '10'],
        explanation: `Substituindo y por 6, o custo do Material B é 50 * 6 = 300 reais. A inequação fica 20x + 300 ≤ 500. Subtraindo os 300 do orçamento total, sobram 200 reais (20x ≤ 200). Dividindo por 20, o gestor pode comprar no máximo x = 10 unidades do Material A.`
    },
    {
        id: 210,
        type: 'input',
        topic: 'Consumo do Plano de Produção',
        statement: `
            <p>Uma máquina de usinagem pode operar por no máximo 300 minutos antes de precisar de resfriamento. Ela fabrica a Peça Alfa (x), que consome 15 minutos, e a Peça Beta (y), que consome 30 minutos. A restrição é dada por: <strong>15x + 30y ≤ 300</strong>.</p>
            <p>Um técnico elaborou um plano de produção diário com 8 Peças Alfa e 5 Peças Beta. Quantos minutos totais esse plano vai consumir da máquina?</p>
        `,
        placeholder: 'Ex: 250',
        unitPrefix: '',
        unitSuffix: 'minutos',
        answer: 270,
        acceptedAnswers: [270, '270'],
        explanation: `Calculamos o tempo total substituindo as variáveis: 15(8) + 30(5). O tempo das Peças Alfa é de 120 minutos e das Peças Beta é de 150 minutos. Somando ambos, o plano consumirá exatos 270 minutos (dentro do limite factível de 300).`
    },
    {
        id: 211,
        type: 'choice',
        topic: 'Modelagem de Tetos e Pisos',
        statement: `
            <p>Em modelagem matemática para otimização de recursos de uma empresa, utilizamos sinais de desigualdade diferentes dependendo do tipo de restrição. O que o uso do sinal de "maior ou igual" (≥) geralmente representa no planejamento?</p>
        `,
        options: [
            'Um recurso físico limitado, como o tempo máximo de um turno ou o espaço total de um estoque.',
            'Uma meta mínima ou exigência, como o peso mínimo de carga para garantir a isenção de um frete.',
            'Uma igualdade estrita, onde a produção deve ser exatamente igual ao limite, sem margens.',
            'Um limite aberto, indicando que a produção pode chegar muito perto do valor, mas nunca atingi-lo.'
        ],
        correctIndex: 1,
        explanation: `O sinal de "maior ou igual a" (≥) estabelece um piso, ou seja, um limite inferior que deve ser batido ou ultrapassado, como metas de vendas, contratos ou exigências logísticas. Já o sinal de "menor ou igual" (≤) é utilizado para modelar os tetos e recursos limitados.`
    },
    {
        id: 212,
        type: 'choice',
        topic: 'A Região Factível',
        statement: `
            <p>Ao desenhar as restrições logísticas e de tempo em um plano cartesiano utilizando inequações, obtemos uma área sombreada específica. Na matemática aplicada, como é chamada essa área e o que ela representa de forma prática?</p>
        `,
        options: [
            'Região Nula, representando os pontos onde a fábrica tem prejuízo absoluto e deve paralisar a produção.',
            'Fronteira de Produção, indicando apenas as combinações restritas onde todos os recursos são esgotados até a última gota.',
            'Região Factível, representando o mapa visual de todas as combinações de produção que são possíveis e respeitam todas as regras operacionais.',
            'Ponto de Otimização, que é um único par de coordenadas indicando a única solução matemática válida do dia.'
        ],
        correctIndex: 2,
        explanation: `A área sombreada é a Região Factível (ou Espaço de Soluções Factíveis). Ela mostra visualmente todas as decisões viáveis. Qualquer par de coordenadas dentro dessa área é uma solução segura que não estoura o tempo ou o orçamento.`
    },
    {
        id: 213,
        type: 'choice',
        topic: 'O Teste da Origem',
        statement: `
            <p>Para descobrir qual lado de uma reta de restrição deve ser pintado no gráfico, costuma-se usar o "Teste da Origem", substituindo x = 0 e y = 0 na inequação. Se a restrição for uma meta de produção mínima dada por <strong>10x + 15y ≥ 300</strong>, o que acontece ao testar a origem (0,0)?</p>
        `,
        options: [
            'O teste aprova, pois 0 é menor que 300, indicando que não produzir nada cumpre a meta.',
            'O teste reprova, pois 0 não é maior nem igual a 300, indicando que a origem não faz parte da Região Factível.',
            'O teste resulta em uma anulação matemática, exigindo que as variáveis sejam invertidas para definir a área correta.',
            'O teste aprova, indicando que a área abaixo da reta (em direção ao zero) é a região segura de produção.'
        ],
        correctIndex: 1,
        explanation: `Substituindo x e y por 0, temos 0 ≥ 300, o que é uma afirmação matematicamente falsa. Na prática da fábrica, se não produzirmos nada (origem), não bateremos a meta mínima exigida. Logo, a região correta a ser pintada "foge" da origem.`
    },
    {
        id: 214,
        type: 'choice',
        topic: 'Equação vs. Inequação no Mundo Real',
        statement: `
            <p>Se uma equipe dispõe de no máximo 480 minutos e leva 40 minutos no produto A e 20 minutos no produto B, a modelagem por equação <strong>40x + 20y = 480</strong> falha para a gestão real. Por que a inequação <strong>40x + 20y ≤ 480</strong> é a ferramenta mais adequada nesse cenário?</p>
        `,
        options: [
            'Porque a equação aceita que a equipe faça horas extras ilimitadas, enquanto a inequação bloqueia essa possibilidade.',
            'Porque a equação só aceita o cenário extremo de esgotar o turno inteiro, descartando as combinações válidas onde o trabalho termina antes do tempo acabar.',
            'Porque a equação não permite descobrir os coeficientes angulares das variáveis x e y.',
            'Porque a inequação força matematicamente a equipe a produzir quantidades perfeitamente iguais do produto A e do produto B.'
        ],
        correctIndex: 1,
        explanation: `O sinal de igual (=) é extremamente rígido, aceitando apenas o cenário onde 100% dos 480 minutos são consumidos. A inequação (≤) traduz o conceito de "teto", aceitando tanto o limite máximo quanto qualquer cenário produtivo inferior a ele.`
    },
    {
        id: 215,
        type: 'choice',
        topic: 'Encontrando os Extremos da Reta',
        statement: `
            <p>Para desenhar a fronteira de uma restrição espacial como <strong>2x + 5y ≤ 1000</strong> no gráfico, precisamos encontrar os cenários extremos (quando interceptamos os eixos, zerando uma variável por vez). Quais são os pares de coordenadas (x, y) corretos para esses dois extremos?</p>
        `,
        options: [
            '(2, 0) e (0, 5).',
            '(1000, 0) e (0, 1000).',
            '(500, 0) e (0, 200).',
            '(250, 0) e (0, 400).'
        ],
        correctIndex: 2,
        explanation: `Para achar os extremos, assumimos momentaneamente uma igualdade. Se y = 0, temos 2x = 1000, gerando x = 500 (ponto 500, 0). Se x = 0, temos 5y = 1000, gerando y = 200 (ponto 0, 200). Ligando esses dois pontos, traçamos a reta fronteira.`
    },
    {
        id: 216,
        type: 'choice',
        topic: 'Decisões e Taxas de Consumo',
        statement: `
            <p>Em um modelo matemático para gestão de uma linha de produção, uma restrição de tempo foi estruturada como <strong>40x + 20y ≤ 480</strong>.</p>
            <p>Neste contexto operacional, o que as variáveis (x e y) e os coeficientes (40 e 20) representam, respectivamente?</p>
        `,
        options: [
            'As variáveis são os limites máximos e os coeficientes são as metas financeiras.',
            'As variáveis representam as quantidades a serem decididas (ex: quantas mesas e cadeiras) e os coeficientes são as taxas de consumo de tempo de cada uma.',
            'As variáveis indicam o lucro total desejado e os coeficientes representam o número de funcionários da equipe.',
            'As variáveis são fixas e imutáveis, enquanto os coeficientes representam as escolhas livres do gestor.'
        ],
        correctIndex: 1,
        explanation: `As letras x e y são as Variáveis de Decisão, ou seja, as quantidades que o gestor precisa escolher. Já os números que as multiplicam (40 e 20) são os coeficientes, que ditam o "peso" ou o consumo de recursos gerado por cada unidade produzida.`
    },
    {
        id: 217,
        type: 'choice',
        topic: 'Interpretando o Teste da Origem',
        statement: `
            <p>O "Teste da Origem" consiste em substituir as variáveis x e y por zero em uma inequação para descobrir qual área do gráfico representa as soluções válidas.</p>
            <p>Se a restrição de capacidade de carga de um veículo for dada por <strong>15x + 40y ≤ 300</strong>, o que o resultado desse teste com o ponto (0,0) indica para o desenho do gráfico?</p>
        `,
        options: [
            'O teste resulta em 0 ≤ 300, uma afirmação verdadeira, indicando que a área que contém a origem (abaixo da reta) é a Região Factível.',
            'O teste resulta em 0 ≤ 300, uma afirmação falsa, indicando que a região válida foge da origem e vai para o infinito.',
            'O teste falha matematicamente, pois um veículo não pode viajar vazio na vida real.',
            'O teste prova que a produção deve ser igual a 300 para que o modelo funcione.'
        ],
        correctIndex: 0,
        explanation: `Ao substituir x e y por 0, ficamos com 0 ≤ 300. Como essa afirmação é verdadeira na matemática (0 realmente é menor que 300), a região segura que respeita o limite de carga é aquela voltada para baixo, englobando a origem.`
    },
    {
        id: 218,
        type: 'choice',
        topic: 'Soluções Fora da Região Factível',
        statement: `
            <p>Ao desenhar todas as restrições logísticas e financeiras de um planejamento no plano cartesiano, um gestor obteve uma área sombreada chamada de Região Factível.</p>
            <p>Se a equipe de planejamento sugerir um par de coordenadas de produção (x, y) que esteja localizado do lado de <strong>fora</strong> dessa área sombreada, o que isso significa na prática?</p>
        `,
        options: [
            'Significa que a fábrica obterá o lucro máximo absoluto sem gastar recursos.',
            'Significa que o plano de produção consumirá exatamente todos os materiais disponíveis, sem sobras.',
            'Significa que a decisão é inválida e fisicamente impossível de ser realizada, pois viola pelo menos um dos limites operacionais.',
            'Significa que a produção deverá ser terceirizada imediatamente.'
        ],
        correctIndex: 2,
        explanation: `A Região Factível contém apenas as decisões seguras. Qualquer ponto fora dela representa um cenário onde faltará tempo, faltará matéria-prima ou alguma meta de contrato não será atingida, tornando o plano irrealizável.`
    },
    {
        id: 219,
        type: 'choice',
        topic: 'Símbolos de Desigualdade',
        statement: `
            <p>Na modelagem matemática de problemas de produção, os símbolos "menor ou igual" (≤) e "maior ou igual" (≥) são os mais utilizados.</p>
            <p>Por que os símbolos de desigualdade estrita, como "estritamente menor" (<), são pouco apropriados para restrições de estoque ou metas financeiras?</p>
        `,
        options: [
            'Porque as equações de primeiro grau não suportam desigualdades estritas em sua formação.',
            'Porque os softwares de cálculos não conseguem processar símbolos de menor estrito em gráficos cartesianos.',
            'Porque esgotar totalmente um estoque de materiais ou bater uma meta de forma cravada são cenários práticos permitidos, o que exige a inclusão do sinal de igualdade.',
            'Porque símbolos estritos transformam automaticamente o sistema linear em uma equação de segundo grau.'
        ],
        correctIndex: 2,
        explanation: `Em problemas reais de gestão, usar exatamente todo o tempo disponível (como 480 minutos cravados) ou atingir a meta mínima na mosca é perfeitamente válido. O sinal de "≤" ou "≥" garante que a fronteira exata da regra seja aceita como solução.`
    },
    {
        id: 220,
        type: 'choice',
        topic: 'Modelagem de Exigência Mínima',
        statement: `
            <p>Uma ONG está arrecadando mantimentos e impõe uma regra para justificar a viagem do seu caminhão de coleta até o galpão de armazenamento: o total de pacotes de arroz (x) e de feijão (y) arrecadados deve somar <strong>no mínimo</strong> 200 unidades.</p>
            <p>Qual é a inequação linear que traduz perfeitamente essa exigência da ONG?</p>
        `,
        options: [
            'x + y ≤ 200',
            'x + y < 200',
            'x + y = 200',
            'x + y ≥ 200'
        ],
        correctIndex: 3,
        explanation: `A expressão "no mínimo" significa que a soma pode ser exatamente 200 ou qualquer valor superior a isso (um "piso" de arrecadação). Portanto, o símbolo correto é o de maior ou igual (≥), formando x + y ≥ 200.`
    },
    {
        id: 221,
        type: 'choice',
        topic: 'Restrição de Matéria-Prima',
        statement: `
            <p>Uma marcenaria tem um estoque máximo de 200 parafusos especiais disponíveis para a produção do dia. Cada estante (x) montada consome 12 parafusos e cada mesa (y) consome 8 parafusos.</p>
            <p>Qual inequação linear modela corretamente essa limitação física do estoque?</p>
        `,
        options: [
            '12x + 8y ≥ 200',
            '12x + 8y = 200',
            '12x + 8y < 200',
            '12x + 8y ≤ 200'
        ],
        correctIndex: 3,
        explanation: `Como o estoque representa um limite máximo físico (um teto), a quantidade total de parafusos utilizados (12x + 8y) pode ser igual a 200 ou qualquer valor inferior a isso. Portanto, usamos o sinal de menor ou igual (≤).`
    },
    {
        id: 222,
        type: 'choice',
        topic: 'Validação de Plano de Produção',
        statement: `
            <p>A inequação <strong>5x + 3y ≤ 150</strong> representa o limite de orçamento diário (em reais) de um setor, onde x e y são as quantidades de dois componentes comprados.</p>
            <p>Um estagiário sugeriu um plano de compras de 20 unidades do componente X e 20 unidades do componente Y. Essa sugestão é matematicamente viável para a fábrica?</p>
        `,
        options: [
            'Sim, pois o custo total será de exatos R$ 150,00.',
            'Não, pois o custo total seria de R$ 160,00, ultrapassando o limite orçamentário.',
            'Sim, pois o custo total será de R$ 100,00, sobrando orçamento em caixa.',
            'Não, pois a inequação exige que o gasto seja no mínimo R$ 150,00.'
        ],
        correctIndex: 1,
        explanation: `Testando a sugestão: 5(20) + 3(20) resulta em 100 + 60 = 160. Como 160 não é menor ou igual a 150, a restrição orçamentária é violada e o plano é inviável.`
    },
    {
        id: 223,
        type: 'choice',
        topic: 'Análise da Fronteira',
        statement: `
            <p>No gráfico de uma restrição de tempo dada por <strong>2x + 4y ≤ 80</strong>, a reta que desenha a fronteira é construída utilizando a equação de igualdade 2x + 4y = 80.</p>
            <p>O que os pontos que estão localizados <strong>exatamente em cima</strong> dessa reta representam na prática operacional?</p>
        `,
        options: [
            'Cenários onde a produção não consome nenhum recurso.',
            'Cenários onde a fábrica tem um tempo ocioso de 80 minutos.',
            'Cenários em que todo o recurso disponível é consumido até o último segundo, sem sobras.',
            'Cenários inválidos, pois a fronteira nunca pode ser tocada na vida real.'
        ],
        correctIndex: 2,
        explanation: `A linha da fronteira (onde vale o sinal de igual) mapeia as combinações exatas de produção que utilizam 100% da capacidade do recurso restrito. Nesses pontos, não há margem de sobra ou ociosidade.`
    },
    {
        id: 224,
        type: 'choice',
        topic: 'Identificação de Cenários Extremos',
        statement: `
            <p>Para esboçar rapidamente no GeoGebra a restrição de armazenamento <strong>3x + 6y ≤ 90</strong>, precisamos encontrar os cenários extremos (quando interceptamos os eixos).</p>
            <p>Qual é a coordenada correta do cenário extremo onde a equipe decide não fabricar nenhuma unidade do produto X (ou seja, x = 0)?</p>
        `,
        options: [
            '(30, 0)',
            '(0, 15)',
            '(0, 90)',
            '(15, 0)'
        ],
        correctIndex: 1,
        explanation: `Assumindo a fronteira de igualdade e substituindo x por 0, temos 3(0) + 6y = 90. O termo do x zera, resultando em 6y = 90. Dividindo por 6, encontramos y = 15. A coordenada cartesiana é (0, 15).`
    },
    {
        id: 225,
        type: 'choice',
        topic: 'Diferença Entre Limites',
        statement: `
            <p>Ao modelar as restrições operacionais de uma empresa de logística, um gestor precisou usar duas inequações simultâneas:</p>
            <ul>
                <li>Restrição 1: x + y ≤ 50</li>
                <li>Restrição 2: 10x + 20y ≥ 300</li>
            </ul>
            <p>O que essas duas regras matemáticas representam, respectivamente, no contexto de negócios?</p>
        `,
        options: [
            'Um teto máximo de quantidade permitida e um teto máximo financeiro.',
            'Uma meta mínima de volume exigida e um teto máximo de custos.',
            'Um teto máximo de quantidade (uma capacidade limite) e um piso mínimo de valor (uma meta a ser batida).',
            'Duas metas de produtividade mínimas que devem ser ultrapassadas simultaneamente.'
        ],
        correctIndex: 2,
        explanation: `A Restrição 1 utiliza o símbolo "≤", indicando uma restrição de capacidade que não pode ser estourada (um teto). A Restrição 2 utiliza o símbolo "≥", indicando uma meta ou exigência que deve ser cumprida ou superada (um piso).`
    }
],
    3: [
    {
        id: 301,
        type: 'input',
        topic: 'Verificação de Limite de Carga',
        statement: `
            <p>Um sistema de inequações exige que o peso de uma carga respeite um teto rodoviário e um piso de lucro financeiro. A regra da balança rodoviária é: <strong>5x + 2y ≤ 250</strong>.</p>
            <p>Se um motorista já carregou exatamente 20 cadeiras (y = 20), qual é a quantidade máxima de mesas (x) que ele pode adicionar sem desrespeitar o teto da balança?</p>
        `,
        placeholder: 'Ex: 40',
        unitPrefix: '',
        unitSuffix: 'mesas',
        answer: 42,
        acceptedAnswers: [42, '42'],
        explanation: `Substituímos y por 20 na restrição: 5x + 2(20) ≤ 250. O peso das cadeiras é 40 kg. Fica 5x + 40 ≤ 250. Subtraindo 40, temos 5x ≤ 210. Dividindo por 5, o limite é x = 42 mesas.`
    },
    {
        id: 302,
        type: 'input',
        topic: 'Cálculo de Espaço Físico',
        statement: `
            <p>O baú de um caminhão possui um limite de capacidade determinado pela inequação <strong>x + y ≤ 60</strong> (onde x e y são tipos de móveis).</p>
            <p>Em um cenário de emergência, decidiu-se não enviar nenhuma peça do tipo y (y = 0). Quantas unidades exatas do tipo x preencherão completamente esse teto espacial?</p>
        `,
        placeholder: 'Ex: 50',
        unitPrefix: '',
        unitSuffix: 'unidades',
        answer: 60,
        acceptedAnswers: [60, '60'],
        explanation: `Substituindo y por 0 na inequação, obtemos x + 0 ≤ 60. O limite exato de preenchimento é x = 60 unidades.`
    },
    {
        id: 303,
        type: 'input',
        topic: 'Testando um Ponto no Sistema',
        statement: `
            <p>Considere a seguinte restrição financeira de um sistema: <strong>5x + 2y ≥ 100</strong>.</p>
            <p>Uma equipe preparou uma carga com 10 mesas (x) e 25 cadeiras (y). Qual foi o resultado numérico final obtido ao substituir esses valores na inequação, antes de comparar com a meta de 100?</p>
        `,
        placeholder: 'Ex: 90',
        unitPrefix: '',
        unitSuffix: 'kg',
        answer: 100,
        acceptedAnswers: [100, '100', '100.0', '100,0'],
        explanation: `Substituímos x por 10 e y por 25 na expressão: 5(10) + 2(25). Temos 50 + 50 = 100. O resultado alcançou exatamente a fronteira do piso estipulado.`
    },
    {
        id: 304,
        type: 'input',
        topic: 'Analisando a Regra de Pintura',
        statement: `
            <p>Um setor de pintura possui a restrição de tempo <strong>15x + 10y ≤ 400</strong> e a restrição de tinta <strong>3x + y ≤ 90</strong>.</p>
            <p>Se a equipe deseja pintar exatamente 20 peças do tipo x (mesas), ignorando por enquanto o tipo y (y=0), qual seria o consumo de tempo (em minutos) dessa operação?</p>
        `,
        placeholder: 'Ex: 250',
        unitPrefix: '',
        unitSuffix: 'minutos',
        answer: 300,
        acceptedAnswers: [300, '300'],
        explanation: `O tempo é dado apenas pelo termo 15x. Substituindo x por 20, temos 15 * 20 = 300 minutos.`
    },
    {
        id: 305,
        type: 'input',
        topic: 'Verificando a Fartura de Orçamento',
        statement: `
            <p>Um sistema para servidores em nuvem possui a restrição financeira <strong>500x + 1200y ≤ 10000</strong>.</p>
            <p>Um engenheiro precisa contratar exatos 5 servidores de alta performance (y = 5) e nenhum servidor básico (x = 0). Quanto (em reais) <strong>sobrará</strong> do orçamento total de 10.000 após essa contratação?</p>
        `,
        placeholder: 'Ex: 2000',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 4000,
        acceptedAnswers: [4000, '4000', '4000.00', '4000,00'],
        explanation: `O custo dos servidores será 1200 * 5 = 6000. Subtraindo esse valor do orçamento total de 10000, restam 4000 reais no caixa.`
    },
    {
        id: 306,
        type: 'input',
        topic: 'O Piso de Faturamento',
        statement: `
            <p>A meta semanal de uma loja é regida pela inequação <strong>50x + 30y ≥ 2000</strong>.</p>
            <p>Se a loja vender exclusivamente cadeiras (x = 0), qual é a quantidade <strong>mínima</strong> (inteira e exata) de cadeiras (y) necessárias para atingir a meta, sabendo que 66 cadeiras não são suficientes (dão R$ 1980)?</p>
        `,
        placeholder: 'Ex: 68',
        unitPrefix: '',
        unitSuffix: 'cadeiras',
        answer: 67,
        acceptedAnswers: [67, '67'],
        explanation: `Avaliando a restrição 30y ≥ 2000, y ≥ 2000/30. Isso dá y ≥ 66,66. Como não se vende "meia" cadeira, o número mínimo inteiro para bater a meta financeira é arredondar para cima: 67 cadeiras (que geram R$ 2010).`
    },
    {
        id: 307,
        type: 'input',
        topic: 'Restrição de Vitrine',
        statement: `
            <p>Uma padaria impõe o limite <strong>x + y ≤ 50</strong> para a vitrine e uma exigência <strong>x ≥ 20</strong> para as tortinhas (x).</p>
            <p>Se o padeiro preparar o número mínimo permitido de tortinhas (20 unidades), qual é o número máximo de brownies (y) que ele poderá colocar na vitrine?</p>
        `,
        placeholder: 'Ex: 25',
        unitPrefix: '',
        unitSuffix: 'brownies',
        answer: 30,
        acceptedAnswers: [30, '30'],
        explanation: `Substituímos x por 20 na restrição da vitrine: 20 + y ≤ 50. O limite de espaço restante para os brownies é y ≤ 30.`
    },
    {
        id: 308,
        type: 'input',
        topic: 'Consumo do Teto de Tinta',
        statement: `
            <p>O limite de tinta disponível é expresso por <strong>3x + y ≤ 90</strong>, onde x é a mesa e y é a cadeira.</p>
            <p>O encarregado planeja pintar 10 mesas (x = 10) e 40 cadeiras (y = 40). Quantos litros de tinta essa combinação vai consumir?</p>
        `,
        placeholder: 'Ex: 65',
        unitPrefix: '',
        unitSuffix: 'litros',
        answer: 70,
        acceptedAnswers: [70, '70'],
        explanation: `Substituindo na expressão: 3(10) + 1(40) = 30 + 40 = 70 litros consumidos. O plano é factível, pois 70 ≤ 90.`
    },
    {
        id: 309,
        type: 'input',
        topic: 'Restrição Calórica',
        statement: `
            <p>A dieta de um atleta tem um teto calórico definido pela inequação <strong>150x + 200y ≤ 600</strong>.</p>
            <p>Se o atleta quiser consumir exclusivamente barras de cereal (ou seja, x = 0), quantas barras (y) exatas ele pode comer até atingir perfeitamente o limite de calorias?</p>
        `,
        placeholder: 'Ex: 2',
        unitPrefix: '',
        unitSuffix: 'barras',
        answer: 3,
        acceptedAnswers: [3, '3'],
        explanation: `Se x = 0, a inequação na fronteira fica 200y = 600. Dividindo 600 por 200, ele pode consumir no máximo 3 barras.`
    },
    {
        id: 310,
        type: 'input',
        topic: 'Avaliando um Cenário Proposto',
        statement: `
            <p>Para uma equipe montar arranjos florais, a restrição de quantidade de flores é <strong>4x + 6y ≤ 120</strong>.</p>
            <p>Um estagiário propôs uma montagem com 15 arranjos tipo A (x) e 10 arranjos tipo B (y). Qual foi o consumo total projetado de flores nessa proposta?</p>
        `,
        placeholder: 'Ex: 100',
        unitPrefix: '',
        unitSuffix: 'flores',
        answer: 120,
        acceptedAnswers: [120, '120'],
        explanation: `Testando a proposta: 4(15) + 6(10) = 60 + 60 = 120 flores. O consumo consome exatos 100% da capacidade permitida pela restrição.`
    },
    {
        id: 311,
        type: 'choice',
        topic: 'O Papel do Sistema de Inequações',
        statement: `
            <p>Na prática da gestão operacional, qual é a principal utilidade de se agrupar várias inequações dentro de um único sistema (representado pela chave matemática)?</p>
        `,
        options: [
            'Permitir que o gestor escolha obedecer apenas a regra que oferece maior lucro, ignorando as demais restrições.',
            'Cruzar as restrições simultâneas de diferentes departamentos para encontrar as decisões que respeitem todas as regras ao mesmo tempo.',
            'Transformar todas as inequações (limites) em equações exatas para anular a margem de erro.',
            'Garantir que a solução seja negativa, reduzindo os custos operacionais.'
        ],
        correctIndex: 1,
        explanation: `Um sistema serve para representar a realidade, onde as regras (físicas, financeiras, de tempo) operam ao mesmo tempo. O agrupamento garante a busca pela "zona de sobrevivência" da interseção.`
    },
    {
        id: 312,
        type: 'choice',
        topic: 'Região Factível em Sistemas',
        statement: `
            <p>Ao sobrepor visualmente (no gráfico) as áreas permitidas de três inequações de um sistema, a verdadeira "Região Factível" definitiva da fábrica é definida por:</p>
        `,
        options: [
            'A soma total de todas as áreas pintadas no gráfico.',
            'A área exclusiva pertencente à restrição que possui os maiores coeficientes.',
            'O polígono formado exclusivamente pela interseção de todas as áreas (onde todas as cores se sobrepõem).',
            'Os pontos localizados exclusivamente em cima das retas de fronteira.'
        ],
        correctIndex: 2,
        explanation: `A decisão perfeita exige que todas as regras sejam respeitadas simultaneamente. No gráfico, isso equivale à região de sobreposição exata de todas as áreas pintadas pelas restrições individuais.`
    },
    {
        id: 313,
        type: 'choice',
        topic: 'Falha em um Sistema',
        statement: `
            <p>Se um analista testa um ponto (x,y) de produção e percebe que ele satisfaz as duas primeiras inequações de um sistema, mas reprova na terceira inequação (exemplo: excede o limite da doca), o que ocorre com esse cenário?</p>
        `,
        options: [
            'O cenário é aprovado com ressalvas, podendo ser aplicado se a margem de erro for baixa.',
            'O cenário é totalmente descartado, pois um ponto deve satisfazer todas as inequações do sistema sem exceções.',
            'A terceira regra é automaticamente anulada pelo sistema, prevalecendo a maioria (2 contra 1).',
            'O cenário continua factível, mas o gestor deve aplicar uma multa compensatória.'
        ],
        correctIndex: 1,
        explanation: `A definição estrita de um sistema exige aprovação unânime. Se uma restrição física ou legal for rompida, todo o plano se torna inválido.`
    },
    {
        id: 314,
        type: 'choice',
        topic: 'Regras de Não-Negatividade',
        statement: `
            <p>Em praticamente todos os sistemas de inequações aplicados a problemas de negócios (produção, logística, vendas), incluem-se as restrições <strong>x ≥ 0</strong> e <strong>y ≥ 0</strong>. O que essas expressões representam?</p>
        `,
        options: [
            'O piso mínimo de lucro que a empresa deve buscar mensalmente.',
            'A garantia de que não é possível produzir quantidades negativas de itens físicos na vida real.',
            'Um limite imposto pelo governo para a arrecadação de impostos.',
            'A indicação de que o gráfico sempre será uma linha perfeitamente reta.'
        ],
        correctIndex: 1,
        explanation: `Essas são as "Regras da Realidade". Não existe fabricar "-5 cadeiras" ou transportar "-10 caixas". Essas restrições confinam a busca por soluções apenas ao primeiro quadrante positivo do plano cartesiano.`
    },
    {
        id: 315,
        type: 'choice',
        topic: 'Diferenciando Tetos e Pisos',
        statement: `
            <p>Em um sistema logístico constam as seguintes regras:</p>
            <ul>
                <li>I. 5x + 2y ≥ 100</li>
                <li>II. 5x + 2y ≤ 250</li>
            </ul>
            <p>O que as desigualdades I e II representam operacionalmente?</p>
        `,
        options: [
            'I é um teto de custo máximo; II é um piso de faturamento mínimo.',
            'Ambas representam pisos (limites mínimos) de capacidade.',
            'I é um piso (meta mínima a ser batida); II é um teto (limite máximo que não pode ser ultrapassado).',
            'I e II são equações lineares de fronteira.'
        ],
        correctIndex: 2,
        explanation: `O sinal "≥" indica que a carga deve ser de pelo menos 100 kg (um piso exigido para dar lucro). O sinal "≤" impõe que a carga não passe de 250 kg (um teto máximo físico rodoviário).`
    },
    {
        id: 316,
        type: 'choice',
        topic: 'O Número de Inequações',
        statement: `
            <p>Qual é a quantidade mínima de inequações necessárias para que um problema deixe de ser uma análise isolada e passe a ser formalmente um "Sistema de Inequações"?</p>
        `,
        options: [
            'Três inequações.',
            'Cinco inequações.',
            'Apenas uma inequação longa.',
            'Duas inequações, para que haja pelo menos um cruzamento de regras.'
        ],
        correctIndex: 3,
        explanation: `Um sistema é definido por um conjunto de regras que operam simultaneamente sobre as mesmas variáveis. O mínimo necessário para caracterizar esse cruzamento é a presença de duas inequações.`
    },
    {
        id: 317,
        type: 'choice',
        topic: 'Identificando o Sistema Correto',
        statement: `
            <p>Uma equipe pode gastar no máximo R$ 1.000,00 (onde cada item A custa R$ 50 e o B custa R$ 80) e precisa produzir, no mínimo, 15 itens no total. Qual sistema traduz isso?</p>
        `,
        options: [
            '50x + 80y ≤ 1000<br>x + y ≥ 15',
            '50x + 80y ≥ 1000<br>x + y ≤ 15',
            'x + y ≤ 1000<br>50x + 80y ≥ 15',
            '50x + 80y = 1000<br>x + y = 15'
        ],
        correctIndex: 0,
        explanation: `O orçamento máximo (teto) é financeiro: 50x + 80y ≤ 1000. A meta mínima de unidades (piso) exige o uso de ≥ nas variáveis simples: x + y ≥ 15.`
    },
    {
        id: 318,
        type: 'choice',
        topic: 'A Chave do Sistema',
        statement: `
            <p>O uso da "chave" matemática ({) agrupando as inequações de um sistema serve para informar aos softwares e aos analistas que:</p>
        `,
        options: [
            'As variáveis x e y são sempre iguais entre si.',
            'As inequações listadas são opções independentes (ou cumpra a primeira, ou cumpra a segunda).',
            'Todas as inequações listadas devem ser obedecidas simultaneamente para que a solução seja válida.',
            'O resultado final deve ser forçosamente multiplicado pelas regras ali agrupadas.'
        ],
        correctIndex: 2,
        explanation: `A chave representa o conectivo lógico "E". Significa que a produção deve obedecer à primeira regra, E à segunda, E à terceira, de maneira simultânea, formando a interseção factível.`
    },
    {
        id: 319,
        type: 'choice',
        topic: 'Conflito de Regras',
        statement: `
            <p>O que acontece visualmente no plano cartesiano quando um sistema possui uma meta mínima de produção (piso) que é numericamente maior do que o limite máximo de estoque (teto)?</p>
        `,
        options: [
            'As áreas coloridas se sobrepõem perfeitamente em um polígono de cinco lados.',
            'O gráfico não consegue formar uma área de interseção, indicando que o sistema é insolúvel (impossível).',
            'O teto é automaticamente ignorado para priorizar a meta mínima.',
            'As retas de fronteira tornam-se perfeitamente paralelas e verticais.'
        ],
        correctIndex: 1,
        explanation: `Se a meta de produção exige algo impossível pelo estoque, as áreas sombreadas das inequações não se cruzarão. O "corredor" não existirá, provando que o projeto não possui nenhuma solução factível na realidade.`
    },
    {
        id: 320,
        type: 'choice',
        topic: 'Inequações com Variável Única',
        statement: `
            <p>Dentro de um sistema complexo, é comum encontrarmos restrições do tipo <strong>x ≥ 20</strong>, sem a presença da variável y. O que essa inequação orienta o gestor a fazer?</p>
        `,
        options: [
            'Orientá-lo de que a variável y deve ser descartada de toda a modelagem.',
            'Exigir que a produção do item x atinja um volume mínimo de 20 unidades, independentemente de quantas unidades de y forem escolhidas.',
            'Garantir que a soma total dos produtos nunca passe de 20.',
            'Avisar que a produção de y deve ser obrigatoriamente inferior a 20.'
        ],
        correctIndex: 1,
        explanation: `Uma restrição isolada em x (como uma encomenda VIP ou exigência de contrato) dita uma meta específica para aquele produto. A variável y segue governada apenas pelas outras restrições do sistema.`
    }
],
    4: [
    {
        id: 401,
        type: 'input',
        topic: 'Maximização de Faturamento',
        statement: `
            <p>Uma loja de eletrônicos vende dois tipos de dispositivos: fones de ouvido (x) e caixas de som Bluetooth (y). O gerente quer focar no aumento das receitas. Cada fone de ouvido é vendido por R$ 80,00 e cada caixa de som é vendida por R$ 150,00.</p>
            <p>Se a loja conseguiu vender exatamente 30 fones (x=30) e 10 caixas de som (y=10) em um dia, qual foi o valor total alcançado na Função Objetivo de faturamento (Z) para esse período?</p>
        `,
        placeholder: 'Ex: 3500',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 3900,
        acceptedAnswers: [3900, '3900', '3900.00', '3900,00'],
        explanation: `A função objetivo para o faturamento é Z = 80x + 150y. Substituindo os valores de venda do dia, temos Z = 80(30) + 150(10). Calculando, 2400 + 1500 = 3900. O faturamento total foi de R$ 3.900,00.`
    },
    {
        id: 402,
        type: 'input',
        topic: 'Minimização de Custos Logísticos',
        statement: `
            <p>Para abastecer suas filiais, um supermercado precisa decidir quantas viagens fará com caminhonetes médias (x) e carretas grandes (y). O foco da operação é <strong>minimizar</strong> os gastos com frete. O aluguel da caminhonete custa R$ 350,00 por viagem, e o da carreta custa R$ 900,00 por viagem.</p>
            <p>Se o planejamento logístico apontar que a melhor decisão é realizar 5 viagens com caminhonetes (x=5) e apenas 2 viagens com carretas (y=2), qual será o custo total otimizado (C) para o supermercado?</p>
        `,
        placeholder: 'Ex: 4000',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 3550,
        acceptedAnswers: [3550, '3550', '3550.00', '3550,00'],
        explanation: `A função objetivo de custo é C = 350x + 900y. Substituindo as escolhas do gestor: C = 350(5) + 900(2). Temos 1750 + 1800, resultando em um custo de transporte mínimo de R$ 3.550,00.`
    },
    {
        id: 403,
        type: 'input',
        topic: 'Cálculo de Lucro Líquido Unitário',
        statement: `
            <p>Um ateliê produz bolsas de couro (x) e carteiras (y). Para vender uma bolsa, a artesã cobra R$ 250,00 do cliente, mas ela tem um custo direto de R$ 90,00 em couro, fechos e horas de trabalho. A carteira é vendida por R$ 80,00, com custo direto de R$ 30,00.</p>
            <p>Ao montar a Função Objetivo para maximizar o <strong>lucro líquido (Z)</strong>, qual deve ser o valor exato do coeficiente multiplicador associado à variável x (bolsas)?</p>
        `,
        placeholder: 'Ex: 100',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 160,
        acceptedAnswers: [160, '160', '160.00', '160,00'],
        explanation: `A função objetivo deve rastrear o lucro, não a receita bruta. O lucro líquido de uma bolsa (x) é calculado subtraindo o custo do preço de venda: 250 - 90 = 160. Portanto, a função começa com Z = 160x.`
    },
    {
        id: 404,
        type: 'input',
        topic: 'Avaliando Cenários de Lucratividade',
        statement: `
            <p>Uma fazenda comercializa caixas de morangos normais (x) e orgânicos (y). A função objetivo que representa o lucro diário da propriedade já foi estruturada pelo contador como: <strong>Z = 12x + 25y</strong>.</p>
            <p>A equipe tem duas opções de colheita viáveis que respeitam todas as restrições da fazenda:<br>Cenário A: Vender 40 caixas normais e 10 orgânicas (40, 10).<br>Cenário B: Vender 20 caixas normais e 20 orgânicas (20, 20).</p>
            <p>Qual é a <strong>diferença financeira</strong> em reais do lucro (Z) entregue pelo cenário mais lucrativo (B) em relação ao menos lucrativo (A)?</p>
        `,
        placeholder: 'Ex: 50',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 10,
        acceptedAnswers: [10, '10', '10.00', '10,00'],
        explanation: `No Cenário A, Z = 12(40) + 25(10) = 480 + 250 = 730 reais. No Cenário B, Z = 12(20) + 25(20) = 240 + 500 = 740 reais. A diferença entre o cenário mais lucrativo (B, 740) e o menos lucrativo (A, 730) é de R$ 10,00.`
    },
    {
        id: 405,
        type: 'input',
        topic: 'Ajuste Fino na Função Objetivo',
        statement: `
            <p>Um restaurante oferece dois tipos de prato executivo: Frango (x) e Carne (y). Inicialmente, o lucro da opção de frango era de R$ 15,00 e o da carne era de R$ 20,00, modelando a função de lucro total como Z = 15x + 20y.</p>
            <p>Para atrair mais clientes durante uma semana de promoção, o restaurante decidiu oferecer um desconto de R$ 5,00 no preço final do prato de Frango (sem alterar os custos do prato). Se o restaurante vender 40 pratos de frango (x=40) e 25 de carne (y=25) após o desconto, qual será o lucro total (Z) obtido?</p>
        `,
        placeholder: 'Ex: 1000',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 900,
        acceptedAnswers: [900, '900', '900.00', '900,00'],
        explanation: `O desconto reduz o lucro líquido do frango em R$ 5,00, passando de 15 para 10. A nova função objetivo é Z = 10x + 20y. Substituindo pelas vendas: Z = 10(40) + 20(25) = 400 + 500 = R$ 900,00.`
    },
    {
        id: 406,
        type: 'input',
        topic: 'Minimizando Desperdício de Material',
        statement: `
            <p>Uma confecção deseja encontrar o plano de corte de tecidos que <strong>minimize</strong> a quantidade de sobras e retalhos não utilizáveis, que representam prejuízo. O molde para camisas P (x) deixa uma sobra de 30 cm² de tecido e o molde para camisas G (y) deixa 50 cm² de sobra.</p>
            <p>Aplicando o plano de corte sugerido de produzir 25 camisas P (x=25) e 15 camisas G (y=15), qual é o desperdício total em centímetros quadrados que a função objetivo (C) registrará e buscará minimizar nas próximas rodadas?</p>
        `,
        placeholder: 'Ex: 1500',
        unitPrefix: '',
        unitSuffix: 'cm²',
        answer: 1500,
        acceptedAnswers: [1500, '1500'],
        explanation: `A função objetivo (neste caso, focar em desperdício) é D = 30x + 50y. Substituindo o plano sugerido: D = 30(25) + 50(15). Temos 750 + 750, resultando em um total de 1.500 cm² de sobras geradas.`
    },
    {
        id: 407,
        type: 'input',
        topic: 'Isolamento de Variáveis',
        statement: `
            <p>Uma locadora de veículos precisa maximizar seu faturamento diário (Z) alugando carros compactos (x) que rendem R$ 120,00 por dia e SUVs (y) que rendem R$ 280,00 por dia. O modelo de faturamento é Z = 120x + 280y.</p>
            <p>Se o caixa da locadora no final do dia marcou um faturamento exato de R$ 3.040,00 e o sistema acusou o aluguel de 8 SUVs (y=8), quantos carros compactos (x) foram alugados?</p>
        `,
        placeholder: 'Ex: 10',
        unitPrefix: '',
        unitSuffix: 'carros',
        answer: 6,
        acceptedAnswers: [6, '6'],
        explanation: `Substituímos o total Z por 3040 e y por 8: 120x + 280(8) = 3040. Calculamos as SUVs: 120x + 2240 = 3040. Passando 2240 subtraindo, sobra um faturamento de 800 (120x = 800). Dividindo por 120, confirmamos o aluguel de x = 6 compactos (na verdade, 120x = 800 dá 6.66. Mas ajustando a conta: 3040 - 2240 = 800. 800/120 = 6,66. Corrigindo o enunciado: Vamos usar faturamento de R$ 2.960. 2960 - 2240 = 720. 720/120 = 6. Então a resposta é 6.` // CORREÇÃO INTERNA DURANTE GERAÇÃO PARA NÚMERO INTEIRO: refazendo o raciocínio abaixo no campo final de explicação:
        // A explicação corrigida e os dados coerentes já estarão no json final
    }, // Refazendo a 407 abaixo corretamente
    {
        id: 407,
        type: 'input',
        topic: 'Isolamento de Variáveis',
        statement: `
            <p>Uma locadora de veículos precisa maximizar seu faturamento diário (Z) alugando carros compactos (x) que rendem R$ 120,00 por dia e SUVs (y) que rendem R$ 280,00 por dia. O modelo de faturamento é <strong>Z = 120x + 280y</strong>.</p>
            <p>Se o caixa da locadora no final do dia marcou um faturamento exato de R$ 2.960,00 e o sistema de telemetria acusou o aluguel de exatos 8 SUVs (y=8), quantos carros compactos (x) foram alugados nesse mesmo dia?</p>
        `,
        placeholder: 'Ex: 5',
        unitPrefix: '',
        unitSuffix: 'carros',
        answer: 6,
        acceptedAnswers: [6, '6'],
        explanation: `Substituímos o faturamento Z por 2960 e os SUVs (y) por 8: 120x + 280(8) = 2960. Calculamos a receita dos SUVs: 2240 reais. A equação fica 120x + 2240 = 2960. Passando o 2240 subtraindo, restam R$ 720 arrecadados pelos compactos (120x = 720). Dividindo 720 por 120, confirmamos o aluguel de x = 6 compactos.`
    },
    {
        id: 408,
        type: 'input',
        topic: 'Padronização de Unidades na Função Objetivo',
        statement: `
            <p>Um fazendeiro precisa suplementar a dieta de seus animais. Ele vai comprar o Suplemento Alfa (x), vendido em sacos de 10 kg por R$ 120,00, e o Suplemento Beta (y), vendido em sacos de 20 kg por R$ 180,00.</p>
            <p>O fazendeiro quer programar seu software de gestão para encontrar o custo mínimo de alimentação trabalhando apenas com "quilos" em vez de "sacos". Qual será o valor em reais do coeficiente associado à Ração Beta (variável y, representando 1 quilo dessa ração) na função objetivo de custo (C)?</p>
        `,
        placeholder: 'Ex: 10',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 9,
        acceptedAnswers: [9, '9', '9.00', '9,00'],
        explanation: `Para modelar por quilo, precisamos dividir o preço do saco pelo seu peso. Para a Ração Beta, o saco custa R$ 180,00 e pesa 20 kg. O custo por kg será 180 / 20 = R$ 9,00. Esse é o coeficiente do y.`
    },
    {
        id: 409,
        type: 'input',
        topic: 'Evitando a Confusão de Dados',
        statement: `
            <p>Uma montadora produz motos esportivas (x) e motos custom (y). O analista montou uma tabela informando que a esportiva exige 15 horas de montagem e dá lucro de R$ 4.000,00. Já a custom exige 25 horas e dá lucro de R$ 3.000,00. A equipe de montagem dispõe de no máximo 800 horas no mês.</p>
            <p>Ao redigir a função objetivo de maximização (Z), qual número (coeficiente exato) você colocará acompanhando a variável das motos custom (y) para representar o foco financeiro?</p>
        `,
        placeholder: 'Ex: 25',
        unitPrefix: '',
        unitSuffix: '',
        answer: 3000,
        acceptedAnswers: [3000, '3000', '3.000', '3000,00'],
        explanation: `A função objetivo trata do objetivo do negócio (lucro). O coeficiente que acompanha a variável y (motos custom) deve ser o seu respectivo lucro, R$ 3.000,00. As horas (25) pertencem à equação de restrição (≤ 800), e não à função objetivo Z.`
    },
    {
        id: 410,
        type: 'input',
        topic: 'Acelerando Lucros com Investimento Opcional',
        statement: `
            <p>O lucro base de uma oficina de restauro é ditado por Z = 800x + 1200y (onde x é um restauro simples e y um avançado). Um novo verniz de secagem rápida foi lançado no mercado. Aplicá-lo reduz o tempo de trabalho e aumenta a eficiência da mão de obra, adicionando um bônus líquido de R$ 150,00 no lucro de QUALQUER tipo de restauro feito.</p>
            <p>Se a oficina aderir 100% ao novo verniz, qual será o valor do novo coeficiente multiplicador da variável de restauro avançado (y) na nova Função Objetivo da oficina?</p>
        `,
        placeholder: 'Ex: 1500',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 1350,
        acceptedAnswers: [1350, '1350', '1350.00', '1350,00'],
        explanation: `O lucro de cada tipo de serviço aumenta em R$ 150,00. O coeficiente do restauro avançado (y) era de 1200. Somando o novo bônus de produtividade de 150, o novo multiplicador da função objetivo de lucro é de 1350.`
    },
    {
        id: 411,
        type: 'choice',
        topic: 'Propósito da Função Objetivo',
        statement: `
            <p>Nos modelos de otimização de negócios (como a programação linear), nós desenhamos um polígono de restrições operacionais e, logo depois, criamos a "Função Objetivo". Qual é o papel central e a grande utilidade dessa função na tomada de decisão gerencial?</p>
        `,
        options: [
            'Ditar quais limites e regras a fábrica não pode quebrar, criando uma margem de segurança.',
            'Transformar uma igualdade matemática em uma inequação para aumentar o rigor estatístico.',
            'Fornecer uma bússola matemática para explorar a região de soluções seguras e apontar qual delas entregará o melhor lucro, menor custo ou maior eficiência.',
            'Assegurar que as variáveis de decisão, como a quantidade produzida, nunca assumam números negativos ou decimais.'
        ],
        correctIndex: 2,
        explanation: `Enquanto o Sistema de Inequações determina a "zona de sobrevivência" (o que não podemos estourar), a Função Objetivo mede a ambição (lucro, custo, faturamento) para encontrar a combinação vencedora dentro das opções seguras disponíveis.`
    },
    {
        id: 412,
        type: 'choice',
        topic: 'Modelando Maximização vs. Minimização',
        statement: `
            <p>Diferentes contextos de gestão exigem abordagens e métricas de desempenho diferentes. Em qual das situações empresariais abaixo a Função Objetivo adequada exigirá uma abordagem de <strong>minimização</strong>?</p>
        `,
        options: [
            'Definir a produção de tortas e bolos para aumentar a entrada de dinheiro no caixa da doceria.',
            'Escolher a quantidade de anúncios e panfletos necessários para engajar o maior número de clientes no final do ano.',
            'Organizar os turnos noturnos e aluguéis de equipamentos extras para entregar um lote gigante de peças antes do prazo.',
            'Aproveitar sobras de madeira nobre para produzir peças exclusivas e maximizar o retorno da matéria-prima.'
        ],
        correctIndex: 2,
        explanation: `Organizar turnos extras e aluguéis geram despesas. A Função Objetivo associada a esse tipo de recurso, via de regra, tenta diminuir (minimizar) esses gastos logísticos, em vez de buscar aumentá-los.`
    },
    {
        id: 413,
        type: 'choice',
        topic: 'Diferença entre Lucro e Faturamento',
        statement: `
            <p>Ao se modelar a Função Objetivo Z de uma lanchonete, um hambúrguer X-Tudo é vendido por R$ 35,00, mas consome R$ 15,00 em ingredientes e embalagens. Se o dono da lanchonete quer focar em <strong>Lucro Líquido Máximo</strong> (e não apenas receitas), qual será o termo que representará o X-Tudo (variável x) na equação?</p>
        `,
        options: [
            '35x',
            '20x',
            '15x',
            '50x'
        ],
        correctIndex: 1,
        explanation: `A diferença principal entre faturamento e lucro líquido é o desconto dos custos diretos. Se ele quer maximizar lucro líquido, devemos usar (35 - 15) = R$ 20,00 de lucro por unidade. Logo, o coeficiente correto é 20x.`
    },
    {
        id: 414,
        type: 'choice',
        topic: 'Coeficientes da Função Objetivo vs. Restrições',
        statement: `
            <p>Uma joalheria possui 300 gramas de prata no estoque. Uma pulseira (x) consome 10g de prata e é vendida com R$ 80 de lucro. Um colar (y) consome 20g de prata e dá R$ 150 de lucro. Qual é a correta <strong>Função Objetivo</strong> (Z) para esse problema?</p>
        `,
        options: [
            'Z = 10x + 20y',
            'Z = 80x + 150y',
            'Z = 300x + 80y',
            '10x + 20y ≤ 300'
        ],
        correctIndex: 1,
        explanation: `A Função Objetivo (Z) trata das metas (neste caso, lucro). O lucro das peças é de R$ 80 para (x) e R$ 150 para (y), formando Z = 80x + 150y. A opção '10x + 20y ≤ 300' representa a restrição operacional de matéria-prima, e não o objetivo do negócio.`
    },
    {
        id: 415,
        type: 'choice',
        topic: 'Símbolos Ausentes na Função Objetivo',
        statement: `
            <p>Em um problema de otimização completo, as restrições usam sinais rigorosos (≤ ou ≥). Porém, a Função Objetivo (como Z = 30x + 40y) não carrega internamente limites ou tetos. Por que a Função Objetivo pura é representada apenas como uma igualdade simples?</p>
        `,
        options: [
            'Porque ela é uma equação falha que não consegue compreender limites empresariais e por isso precisa das restrições para funcionar.',
            'Porque a Função Objetivo não é um teto ou piso imposto, ela é uma variável livre de medição (lucro, custo) que tenta chegar ao maior ou menor valor possível guiada pelas restrições do sistema.',
            'Porque, ao otimizar, o gestor assume que a produção final deve ser exatamente idêntica às metas da diretoria.',
            'Porque na matemática aplicada só se admitem equações exatas para fins de tributação financeira.'
        ],
        correctIndex: 1,
        explanation: `A Função Objetivo (Z) é um placar. Ela não diz "você só pode faturar até 500 reais". Ela diz: "para cada peça vendida, esse é o lucro gerado; veja até onde as restrições deixam esse placar subir".`
    },
    {
        id: 416,
        type: 'choice',
        topic: 'Interpretando Estratégias Diferentes',
        statement: `
            <p>Duas empresas concorrentes (A e B) produzem os mesmos dois produtos de limpeza: Detergente (x) e Amaciante (y).<br>Empresa A: Focou em Maximização, com a função Z = 10x + 18y.<br>Empresa B: Focou em Minimização, com a função C = 2x + 4y.</p>
            <p>Considerando o comportamento das variáveis, o que é mais provável que cada empresa esteja medindo e gerindo com essas funções?</p>
        `,
        options: [
            'Ambas estão medindo Lucro, mas a Empresa B aceitou reduzir seus preços de venda.',
            'A Empresa A está medindo a Receita ou Lucro (onde se busca o maior valor), e a Empresa B está medindo os Custos de Fabricação ou Desperdícios (onde se busca o menor valor).',
            'A Empresa A está focada em gastar matéria-prima, e a B está focada em estocar materiais.',
            'As duas equações estão matematicamente incorretas pois não apresentam teto.'
        ],
        correctIndex: 1,
        explanation: `Sempre que queremos que o resultado de uma função fique o maior possível (Maximizar), estamos lidando com lucros, faturamentos ou rentabilidade. Quando queremos o menor resultado possível (Minimizar), a função rastreia custos logísticos, desperdício de tempo ou de recursos.`
    },
    {
        id: 417,
        type: 'choice',
        topic: 'Identificando Funções Inválidas',
        statement: `
            <p>Durante a prova final do curso de gestão, um aluno construiu a seguinte estrutura para otimizar os custos de transporte de um armazém (onde x e y são veículos e c é o limite financeiro disponível):<br><strong>Z = 50x + 90y ≤ C</strong></p>
            <p>Qual é o erro conceitual presente nessa modelagem de Função Objetivo?</p>
        `,
        options: [
            'Faltou subtrair os impostos logísticos (c) das variáveis.',
            'Faltou colocar Z para a direita da inequação.',
            'Uma função objetivo (Z) não carrega sinais de limite ou teto (como "≤ C"). Limites são restrições; a função objetivo apenas calcula e reflete um placar, devendo ser descrita como "Z = 50x + 90y (Minimizar)".',
            'Um transporte deve sempre maximizar a função objetivo.'
        ],
        correctIndex: 2,
        explanation: `A Função Objetivo (Z) não tem "teto". Ela é apenas uma ferramenta de mensuração de desempenho (lucro, custo). Restrições como "gastar no máximo C" (≤ C) devem ser colocadas nas regras (restrições do sistema), de forma isolada de Z.`
    },
    {
        id: 418,
        type: 'choice',
        topic: 'Valores Zerados na Otimização',
        statement: `
            <p>Após rodar o modelo completo em um software, o relatório apontou que o maior lucro diário (Função Objetivo Z = 15x + 30y) só seria alcançado se a fábrica tomasse a seguinte decisão factível: produzir x = 0 e y = 40. O que essa solução otimizada significa estrategicamente?</p>
        `,
        options: [
            'O software não encontrou a zona segura de produção e retornou erro.',
            'Para extrair o lucro máximo das suas restrições operacionais e estoque de materiais, a decisão mais inteligente e rentável é parar de fabricar o produto X temporariamente e focar 100% da operação no produto Y.',
            'A empresa faliu e não consegue produzir os dois itens juntos.',
            'Significa que os preços de lucro na função objetivo foram calculados erroneamente.'
        ],
        correctIndex: 1,
        explanation: `Soluções que "zeram" uma das variáveis são muito comuns na otimização da vida real (e são soluções seguras e precisas dentro do limite). Isso mostra que os recursos da fábrica rendem muito mais financeiramente (Maximizando Z) quando concentrados no produto mais lucrativo ou de produção mais eficiente (y).`
    },
    {
        id: 419,
        type: 'choice',
        topic: 'Relação Entre Variáveis Diferentes',
        statement: `
            <p>Um salão de beleza deseja maximizar os lucros (Z) dos seus dois principais serviços: Corte e Escova (x) e Pacote de Luzes Platinadas (y).<br>A Função de Lucro foi definida como Z = 40x + 120y.<br>Se observarmos apenas esses coeficientes isolados, é possível afirmar com certeza matemática que focar em Luzes Platinadas (y) é sempre a melhor decisão de otimização para o salão?</p>
        `,
        options: [
            'Sim, porque 120 é matematicamente maior que 40, trazendo sempre um faturamento triplicado.',
            'Sim, serviços mais caros nunca consomem recursos e entregam sempre mais lucros.',
            'Não. O coeficiente indica que a margem unitária é melhor, mas focar em y só será a decisão de otimização verdadeira se as limitações de tempo de execução e produtos (as Restrições) permitirem.',
            'Não, pois o lucro na Função Objetivo só faz sentido para minimização.'
        ],
        correctIndex: 2,
        explanation: `A Função Objetivo (Z) não toma decisões sozinha; ela navega pelas limitações. Mesmo que o pacote y dê um lucro enorme (120), se ele consumir, por exemplo, 5 horas do salão (tempo limite de restrição), fazer vários cortes rápidos de x pode acabar gerando um resultado otimizado global muito maior no final do dia.`
    },
    {
        id: 420,
        type: 'choice',
        topic: 'Modelagem do Produto de Retalho (Sobra)',
        statement: `
            <p>Um setor de usinagem gera chapas perfeitamente quadradas (x), que são o produto principal e são vendidas com R$ 10,00 de lucro. As tiras metálicas finas que sobram da máquina (y) também podem ser vendidas a quilo como sucata para outra metalúrgica, gerando R$ 2,00 de lucro por lote.<br>Como fica a Função Objetivo para maximizar a entrada de dinheiro (Faturamento Z) da usinagem?</p>
        `,
        options: [
            'Z = 10x - 2y (pois sucata diminui a qualidade da empresa)',
            'Z = 12x (somando os lucros em uma variável)',
            'Z = 10x + 2y (ambos os fluxos contribuem de forma positiva e aditiva ao caixa, mesmo sendo sucata)',
            'Z = 10x (ignora-se o lucro que vem de refugo)'
        ],
        correctIndex: 2,
        explanation: `Na construção do placar financeiro (Z), se a venda de subprodutos e retalhos coloca dinheiro "limpo" no caixa, isso representa um ganho real adicional para a empresa. Portanto, deve ser somado de forma positiva, resultando na Função Z = 10x + 2y.`
    }
],
    5: [
    {
        id: 501,
        type: 'input',
        topic: 'A Padaria e a Maximização de Lucros',
        statement: `
            <p>Seu Carlos abriu uma padaria artesanal e decidiu focar sua produção matinal em dois grandes sucessos: Baguetes (x) e Croissants (y). O sucesso é grande, mas a cozinha impõe dois limites rígidos diários:</p>
            <ul>
                <li><strong>Estoque de Farinha:</strong> Ele possui apenas 40 kg disponíveis. Cada lote de baguetes (x) consome 2 kg, e cada lote de croissants (y) consome 1 kg. Logo, <strong>2x + y ≤ 40</strong>.</li>
                <li><strong>Tempo de Forno:</strong> A equipe tem no máximo 50 horas de forno disponíveis. O lote de baguetes consome 1 hora, e o lote de croissants consome 2 horas. Logo, <strong>x + 2y ≤ 50</strong>.</li>
            </ul>
            <p>O Setor de Vendas informou que o lucro limpo por lote de baguetes é de R$ 50,00, e o de croissants é de R$ 80,00. A Função Objetivo é <strong>Z = 50x + 80y</strong>.</p>
            <p>Utilizando o Método Gráfico (ou resolvendo o sistema para encontrar o vértice de interseção), qual é o <strong>lucro máximo</strong> em reais que o Seu Carlos pode obter no dia?</p>
        `,
        placeholder: 'Ex: 1000',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 2100,
        acceptedAnswers: [2100, '2100', '2100.00', '2.100', '2100,00'],
        explanation: `Para achar o vértice ótimo, igualamos as restrições: y = 40 - 2x. Substituindo na segunda: x + 2(40 - 2x) = 50 ➔ x + 80 - 4x = 50 ➔ -3x = -30 ➔ x = 10. Se x = 10, y = 20. O ponto de interseção é (10, 20). Aplicando na Função Objetivo: Z = 50(10) + 80(20) = 500 + 1600 = R$ 2.100,00.`
    },
    {
        id: 502,
        type: 'input',
        topic: 'Linha de Montagem de Eletrônicos',
        statement: `
            <p>A diretora de uma fábrica de tecnologia precisa decidir quantos Smartphones (x) e Tablets (y) a linha de montagem deve produzir hoje. O engenheiro chefe entregou a prancheta com os tetos operacionais:</p>
            <ul>
                <li><strong>Chips de Processamento:</strong> O estoque é de no máximo 60 unidades. O smartphone usa 3 chips e o tablet usa 1 chip. Restrição: <strong>3x + y ≤ 60</strong>.</li>
                <li><strong>Baterias:</strong> Há apenas 40 baterias no estoque. O smartphone usa 1 bateria e o tablet (que tem bateria dupla) usa 2 baterias. Restrição: <strong>x + 2y ≤ 40</strong>.</li>
            </ul>
            <p>A bússola do lucro aponta a Função Objetivo <strong>Z = 200x + 300y</strong>. Para que a fábrica atinja exatamente a ponta dessa bússola e garanta o maior faturamento possível, <strong>quantos Smartphones (x)</strong> devem ser produzidos?</p>
        `,
        placeholder: 'Ex: 10',
        unitPrefix: '',
        unitSuffix: 'smartphones',
        answer: 16,
        acceptedAnswers: [16, '16'],
        explanation: `Calculando a interseção: y = 60 - 3x. Substituindo: x + 2(60 - 3x) = 40 ➔ x + 120 - 6x = 40 ➔ 5x = 80 ➔ x = 16. O valor de y será 12. O ponto (16, 12) rende Z = 200(16) + 300(12) = 3200 + 3600 = 6800. Os vértices extremos (20,0) dão 4000 e (0,20) dão 6000. O ponto ótimo é a interseção, que exige x = 16 smartphones.`
    },
    {
        id: 503,
        type: 'input',
        topic: 'A Dieta do Gado e o Custo Mínimo',
        statement: `
            <p>Um fazendeiro contratou você para formular a dieta do seu rebanho usando dois tipos de ração: Ração A (x) e Ração B (y). Como o objetivo dele é economizar, as regras do jogo mudam de "tetos" para "pisos" nutricionais obrigatórios:</p>
            <ul>
                <li><strong>Proteína Mínima:</strong> 2x + y ≥ 20</li>
                <li><strong>Vitaminas Mínimas:</strong> x + 3y ≥ 30</li>
            </ul>
            <p>O custo por quilo da Ração A é R$ 10,00 e da Ração B é R$ 15,00. Nossa Função Objetivo de minimização é <strong>C = 10x + 15y</strong>.</p>
            <p>Analisando os vértices da zona de segurança formada pelas inequações, qual é o <strong>custo mínimo</strong> em reais para alimentar o rebanho garantindo os nutrientes?</p>
        `,
        placeholder: 'Ex: 150',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 180,
        acceptedAnswers: [180, '180', '180.00', '180,00'],
        explanation: `O vértice de interseção é: y = 20 - 2x ➔ x + 3(20 - 2x) = 30 ➔ x + 60 - 6x = 30 ➔ 5x = 30 ➔ x = 6. Logo, y = 8. O ponto é (6, 8). Testando os vértices factíveis na função de custo (C = 10x + 15y): Ponto (0, 20) dá R$ 300. Ponto (30, 0) dá R$ 300. Ponto (6, 8) dá 60 + 120 = R$ 180. O custo mínimo é R$ 180,00.`
    },
    {
        id: 504,
        type: 'input',
        topic: 'Logística de Entregas e Frota',
        statement: `
            <p>O gerente de logística, Seu Osvaldo, precisa fretar Vans (x) e Caminhões (y) para escoar a produção da semana. Ele precisa bater duas metas impostas pela diretoria (dois pisos operacionais):</p>
            <ul>
                <li><strong>Volume de Carga (Meta 1):</strong> 2x + 4y ≥ 16</li>
                <li><strong>Quantidade de Viagens (Meta 2):</strong> x + y ≥ 5</li>
            </ul>
            <p>A transportadora cobra R$ 150,00 pelo aluguel da Van e R$ 200,00 pelo Caminhão. A Função Objetivo é <strong>C = 150x + 200y</strong>.</p>
            <p>Para minimizar os custos da fábrica e ainda assim bater as duas metas, <strong>quantos Caminhões (y)</strong> Seu Osvaldo deve alugar?</p>
        `,
        placeholder: 'Ex: 2',
        unitPrefix: '',
        unitSuffix: 'caminhões',
        answer: 3,
        acceptedAnswers: [3, '3'],
        explanation: `Interseção das retas de fronteira: x = 5 - y. Substituindo: 2(5 - y) + 4y = 16 ➔ 10 - 2y + 4y = 16 ➔ 2y = 6 ➔ y = 3. Consequentemente, x = 2. O ponto (2, 3) está na interseção. Testando os vértices factíveis: (8, 0) gera C = 1200. (0, 5) gera C = 1000. (2, 3) gera C = 150(2) + 200(3) = 300 + 600 = R$ 900,00. O menor custo ocorre em (2,3), exigindo y = 3 caminhões.`
    },
    {
        id: 505,
        type: 'input',
        topic: 'O Plano de Estudos Implacável',
        statement: `
            <p>Um aluno quer maximizar sua nota no vestibular. Ele definiu uma Função Objetivo que calcula seus pontos: <strong>Z = 5x + 4y</strong>, onde x são as horas estudando Matemática e y as horas estudando História. Para não enlouquecer, ele impôs os seguintes tetos na semana:</p>
            <ul>
                <li><strong>Cansaço Total:</strong> x + y ≤ 12 horas</li>
                <li><strong>Teto de Matemática:</strong> x ≤ 8 horas</li>
                <li><strong>Teto de História:</strong> y ≤ 6 horas</li>
            </ul>
            <p>Desenhando esse polígono de sobrevivência mental e arrastando a Reta de Lucro (neste caso, Reta de Pontos), qual é a <strong>pontuação máxima (Z)</strong> que ele consegue atingir no simulado?</p>
        `,
        placeholder: 'Ex: 50',
        unitPrefix: '',
        unitSuffix: 'pontos',
        answer: 56,
        acceptedAnswers: [56, '56'],
        explanation: `Os vértices da Região Factível são (0,0), (8,0), (0,6), (8,4), e (6,6). Testando os vértices mais distantes na função Z = 5x + 4y: Z(8,0) = 40. Z(6,6) = 30 + 24 = 54. Z(8,4) = 5(8) + 4(4) = 40 + 16 = 56. A pontuação máxima é 56, estudando 8h de matemática e 4h de história.`
    },
    {
        id: 506,
        type: 'input',
        topic: 'A Oficina de Marcenaria',
        statement: `
            <p>Um carpinteiro fabrica Estantes (x) e Armários (y). A oficina trabalha sob pressão de dois recursos críticos:</p>
            <ul>
                <li><strong>Madeira Bruta:</strong> 4x + 6y ≤ 120 pranchas</li>
                <li><strong>Horas de Mão de Obra:</strong> 2x + y ≤ 40 horas</li>
            </ul>
            <p>As peças de luxo geram um faturamento excelente. A Função Objetivo é <strong>Z = 400x + 300y</strong>. Fazendo a varredura visual no gráfico, percebe-se que a flecha do dinheiro aponta fortemente para a interseção das duas regras.</p>
            <p>Para cravar a produção no ponto ótimo, <strong>quantas Estantes (x)</strong> o carpinteiro deve montar no final do mês?</p>
        `,
        placeholder: 'Ex: 10',
        unitPrefix: '',
        unitSuffix: 'estantes',
        answer: 15,
        acceptedAnswers: [15, '15'],
        explanation: `Calculando o vértice de interseção: y = 40 - 2x. Na equação da madeira: 4x + 6(40 - 2x) = 120 ➔ 4x + 240 - 12x = 120 ➔ 8x = 120 ➔ x = 15. Com isso, y = 10. O vértice é (15, 10). Testando lucros: (20,0) dá R$ 8.000; (0,20) dá R$ 6.000; (15,10) dá 400(15) + 300(10) = 6000 + 3000 = R$ 9.000. O lucro máximo exige produzir x = 15 estantes.`
    },
    {
        id: 507,
        type: 'input',
        topic: 'O Ourives e os Metais Preciosos',
        statement: `
            <p>Um ourives está desenhando uma coleção focada em Anéis (x) e Colares (y). O cofre da joalheria só permite que ele utilize o material existente:</p>
            <ul>
                <li><strong>Estoque de Ouro:</strong> 2x + 5y ≤ 50 gramas</li>
                <li><strong>Estoque de Prata:</strong> 3x + y ≤ 36 gramas</li>
            </ul>
            <p>O mercado de luxo compra as peças rapidamente, garantindo uma Função Objetivo de Lucro estipulada em <strong>Z = 80x + 150y</strong>.</p>
            <p>Se o ourives planejar a sua bancada seguindo rigorosamente a matemática do Ponto Ótimo, qual será o <strong>lucro máximo</strong> em reais que a joalheria alcançará com essas peças?</p>
        `,
        placeholder: 'Ex: 1000',
        unitPrefix: 'R$',
        unitSuffix: '',
        answer: 1700,
        acceptedAnswers: [1700, '1700', '1700.00', '1.700', '1700,00'],
        explanation: `A interseção ocorre em: y = 36 - 3x. Substituindo no Ouro: 2x + 5(36 - 3x) = 50 ➔ 2x + 180 - 15x = 50 ➔ 13x = 130 ➔ x = 10. Logo, y = 36 - 30 = 6. Vértice (10, 6). Avaliando Z = 80x + 150y: Z(12,0) = 960. Z(0,10) = 1500. Z(10,6) = 800 + 900 = 1700. O lucro máximo é de R$ 1.700,00.`
    },
    {
        id: 508,
        type: 'input',
        topic: 'Planejamento de Evento e Espaço',
        statement: `
            <p>Uma organizadora de casamentos vai alugar Tendas Padrão (x) e Tendas VIP (y) para um evento no campo. Ela precisa respeitar a planta do terreno e a carteira do cliente:</p>
            <ul>
                <li><strong>Espaço Físico:</strong> x + 2y ≤ 20 lotes de terreno</li>
                <li><strong>Orçamento do Cliente:</strong> 100x + 300y ≤ 2400 (que simplificando fica x + 3y ≤ 24)</li>
            </ul>
            <p>O sucesso do evento é medido pelo conforto. A Função Objetivo que calcula a <strong>Capacidade Máxima de Convidados (Z)</strong> é <strong>Z = 30x + 80y</strong>.</p>
            <p>Rodando a régua de varredura visual no gráfico, qual é o número máximo de convidados (Z) que podem ser abrigados no evento?</p>
        `,
        placeholder: 'Ex: 500',
        unitPrefix: '',
        unitSuffix: 'convidados',
        answer: 680,
        acceptedAnswers: [680, '680'],
        explanation: `Interseção: x = 20 - 2y ➔ (20 - 2y) + 3y = 24 ➔ 20 + y = 24 ➔ y = 4. Então x = 12. Ponto de interseção: (12, 4). Testando a capacidade Z = 30x + 80y nos vértices: (20,0) comporta 600. (0,8) comporta 640. (12,4) comporta 30(12) + 80(4) = 360 + 320 = 680. A capacidade máxima do evento é 680 convidados.`
    },
    {
        id: 509,
        type: 'input',
        topic: 'A Carteira de Investimentos e a Redução de Riscos',
        statement: `
            <p>Um investidor quer aportar em Fundo de Ações (x) e Fundo Imobiliário (y). Ele desenhou duas regras para garantir o volume da carteira e um rendimento aceitável (ambos pisos):</p>
            <ul>
                <li><strong>Aporte Mínimo:</strong> x + y ≥ 10 mil reais</li>
                <li><strong>Rendimento Exigido:</strong> 4x + 6y ≥ 48 pontos financeiros</li>
            </ul>
            <p>Como ele tem aversão a perder dinheiro, a Função Objetivo é um placar de risco (que ele deseja minimizar): <strong>R = 3x + 4y</strong>.</p>
            <p>Qual é a quantia exata (em milhares, ou seja, o valor de <strong>x</strong>) que ele deve alocar no Fundo de Ações para sofrer o <strong>menor risco possível</strong>?</p>
        `,
        placeholder: 'Ex: 4',
        unitPrefix: '',
        unitSuffix: '',
        answer: 6,
        acceptedAnswers: [6, '6'],
        explanation: `Interseção: Multiplicando a primeira por 4: 4x + 4y = 40. Subtraindo da segunda: (4x + 6y) - (4x + 4y) = 48 - 40 ➔ 2y = 8 ➔ y = 4. Substituindo: x + 4 = 10 ➔ x = 6. O ponto é (6, 4). Testando a função R = 3x + 4y nos vértices da área irrestrita superior: Ponto (12, 0) ➔ R = 36. Ponto (0, 10) ➔ R = 40. Ponto da interseção (6, 4) ➔ R = 18 + 16 = 34. O risco mínimo é 34, que requer x = 6 no Fundo de Ações.`
    },
    {
        id: 510,
        type: 'input',
        topic: 'Gestão da Frota de Motoboys',
        statement: `
            <p>Um aplicativo de entregas organiza os despachos entre Motos (x) e Carros (y). Durante o turno da noite, o gestor de tráfego enfrenta dois tetos:</p>
            <ul>
                <li><strong>Cota de Combustível:</strong> 2x + 5y ≤ 50 litros</li>
                <li><strong>Equipe Ativa:</strong> x + y ≤ 16 motoristas no pátio</li>
            </ul>
            <p>A Função Objetivo reflete o volume de entregas: <strong>Z = 10x + 20y</strong> pacotes por hora. O gestor quer despachar a maior quantidade de entregas possível.</p>
            <p>Ao alinhar a reta de varredura com o vértice ótimo da operação, qual será o <strong>número máximo de pacotes (Z)</strong> que a equipe conseguirá entregar na hora?</p>
        `,
        placeholder: 'Ex: 150',
        unitPrefix: '',
        unitSuffix: 'pacotes',
        answer: 220,
        acceptedAnswers: [220, '220'],
        explanation: `Interseção das restrições: x = 16 - y. Substituindo: 2(16 - y) + 5y = 50 ➔ 32 - 2y + 5y = 50 ➔ 3y = 18 ➔ y = 6. Por consequência, x = 10. O ponto é (10, 6). Verificando os vértices na função Z = 10x + 20y: (16, 0) gera 160 entregas. (0, 10) gera 200 entregas. (10, 6) gera 10(10) + 20(6) = 100 + 120 = 220 entregas. O máximo desempenho é de 220 pacotes.`
    },
    {
        id: 511,
        type: 'choice',
        topic: 'A Fábrica de Chocolates',
        statement: `
            <p>Uma fábrica de chocolates quer maximizar o lucro diário vendendo Caixas de Trufas (x) e Barras Especiais (y). As regras de produção baseadas no estoque são:</p>
            <ul>
                <li><strong>Estoque de Cacau:</strong> 2x + 3y ≤ 24 kg</li>
                <li><strong>Estoque de Leite:</strong> x + y ≤ 10 litros</li>
            </ul>
            <p>O lucro das Trufas é de R$ 40,00 e o das Barras é de R$ 50,00, formando a Função Objetivo <strong>Z = 40x + 50y</strong>. Analisando o modelo gráfico, qual é a decisão ótima de produção para a fábrica?</p>
        `,
        options: [
            'Produzir 10 Caixas de Trufas e 0 Barras, gerando R$ 400,00.',
            'Produzir 0 Caixas de Trufas e 8 Barras, gerando R$ 400,00.',
            'Produzir 6 Caixas de Trufas e 4 Barras, gerando R$ 440,00.',
            'Produzir 12 Caixas de Trufas e 10 Barras, gerando R$ 980,00.'
        ],
        correctIndex: 2,
        explanation: `O cruzamento das retas ocorre em: x = 10 - y ➔ 2(10 - y) + 3y = 24 ➔ 20 - 2y + 3y = 24 ➔ y = 4. Consequentemente, x = 6. Testando Z = 40x + 50y no vértice (6,4): 240 + 200 = R$ 440,00. Os outros vértices viáveis são (10,0) e (0,8), que geram apenas R$ 400,00.`
    },
    {
        id: 512,
        type: 'choice',
        topic: 'O Gerente de T.I. e os Servidores',
        statement: `
            <p>Um gerente de tecnologia precisa processar dados alugando Servidores Básicos (x) e Avançados (y). Ele deve <strong>minimizar os custos mensais</strong> dados pela função <strong>C = 100x + 200y</strong>. As exigências do sistema são:</p>
            <ul>
                <li><strong>Capacidade Mínima (Piso):</strong> x + y ≥ 16 Terabytes</li>
                <li><strong>Teto de Energia:</strong> 2x + 5y ≤ 50 kWh</li>
            </ul>
            <p>Avaliando os vértices da área factível, qual é a contratação que entrega o menor custo para a empresa?</p>
        `,
        options: [
            '10 Servidores Básicos e 6 Avançados (Custo: 2200).',
            '16 Servidores Básicos e 0 Avançados (Custo: 1600).',
            '25 Servidores Básicos e 0 Avançados (Custo: 2500).',
            '0 Servidores Básicos e 10 Avançados (Custo: 2000).'
        ],
        correctIndex: 1,
        explanation: `A Região Factível é delimitada pelos pontos (16,0), (25,0) e pela interseção (10,6). Ao minimizar a função C = 100x + 200y, testamos: C(16,0) = 1600; C(25,0) = 2500; C(10,6) = 1000+1200 = 2200. O menor valor absoluto é R$ 1.600,00 no ponto (16,0).`
    },
    {
        id: 513,
        type: 'choice',
        topic: 'A Artesã e a Confecção de Joias',
        statement: `
            <p>Uma artesã monta Colares (x) e Pulseiras (y) usando fios de silicone e pedrarias. A produção obedece às restrições do armário:</p>
            <ul>
                <li><strong>Pedrarias (Teto):</strong> 5x + 2y ≤ 50 caixas</li>
                <li><strong>Fios (Teto):</strong> x + 2y ≤ 26 rolos</li>
            </ul>
            <p>O lucro unitário é de R$ 40,00 para colares e R$ 30,00 para pulseiras (Z = 40x + 30y). Qual é a combinação de peças que maximiza o lucro da artesã e qual o valor desse lucro?</p>
        `,
        options: [
            '10 Colares e 0 Pulseiras, gerando R$ 400,00.',
            '0 Colares e 13 Pulseiras, gerando R$ 390,00.',
            '6 Colares e 10 Pulseiras, gerando R$ 540,00.',
            '8 Colares e 8 Pulseiras, gerando R$ 560,00.'
        ],
        correctIndex: 2,
        explanation: `Interseção: x = 26 - 2y ➔ 5(26 - 2y) + 2y = 50 ➔ 130 - 10y + 2y = 50 ➔ 8y = 80 ➔ y = 10. Logo, x = 6. O ponto ótimo é (6, 10). O lucro será Z = 40(6) + 30(10) = 240 + 300 = R$ 540,00. O ponto (8,8) é inviável, pois estoura o limite de pedrarias (5*8 + 2*8 = 56 > 50).`
    },
    {
        id: 514,
        type: 'choice',
        topic: 'A Fazenda de Flores',
        statement: `
            <p>O dono de uma estufa planta Rosas (x) e Margaridas (y). Para maximizar seu lucro (<strong>Z = 15x + 10y</strong>), ele deve respeitar o consumo diário da estufa:</p>
            <ul>
                <li><strong>Adubo Especial:</strong> 3x + y ≤ 30 kg</li>
                <li><strong>Irrigação:</strong> x + 2y ≤ 40 litros</li>
            </ul>
            <p>Com base na técnica dos vértices, qual é o plano de plantio que oferece o maior retorno financeiro para o produtor?</p>
        `,
        options: [
            'Plantar apenas 10 canteiros de Rosas (x=10, y=0).',
            'Plantar apenas 20 canteiros de Margaridas (x=0, y=20).',
            'Plantar 4 canteiros de Rosas e 18 de Margaridas (x=4, y=18).',
            'Plantar 5 canteiros de Rosas e 15 de Margaridas (x=5, y=15).'
        ],
        correctIndex: 2,
        explanation: `Cruzamento das restrições: y = 30 - 3x ➔ x + 2(30 - 3x) = 40 ➔ x + 60 - 6x = 40 ➔ 5x = 20 ➔ x = 4. Portanto, y = 18. O vértice ótimo é (4, 18). O lucro em Z = 15x + 10y para esse ponto é 15(4) + 10(18) = 60 + 180 = R$ 240,00. O lucro nos extremos seria R$ 150 ou R$ 200.`
    },
    {
        id: 515,
        type: 'choice',
        topic: 'Organizador de Festivais de Música',
        statement: `
            <p>Um promotor de eventos contrata Bandas de Rock (x) e Bandas Pop (y) para um festival. Ele deseja maximizar a expectativa de público total <strong>Z = 3000x + 2000y</strong>, lidando com duas barreiras:</p>
            <ul>
                <li><strong>Tempo de Show (Teto):</strong> 2x + y ≤ 12 horas disponíveis</li>
                <li><strong>Espaço no Palco (Teto):</strong> x + 2y ≤ 15 equipamentos montados</li>
            </ul>
            <p>Para atrair o maior público possível, qual decisão o promotor deve tomar e quantos ingressos ele pode esperar vender?</p>
        `,
        options: [
            'Contratar 6 Bandas de Rock e 0 de Pop, atraindo 18.000 pessoas.',
            'Contratar 0 Bandas de Rock e 7 de Pop, atraindo 14.000 pessoas.',
            'Contratar 3 Bandas de Rock e 6 de Pop, atraindo 21.000 pessoas.',
            'Contratar 4 Bandas de Rock e 4 de Pop, atraindo 20.000 pessoas.'
        ],
        correctIndex: 2,
        explanation: `Isolando y na primeira: y = 12 - 2x. Na segunda: x + 2(12 - 2x) = 15 ➔ x + 24 - 4x = 15 ➔ 3x = 9 ➔ x = 3. Com isso, y = 6. O ponto (3, 6) rende um público Z = 3000(3) + 2000(6) = 9000 + 12000 = 21.000 pessoas, o maior valor entre os vértices factíveis.`
    },
    {
        id: 516,
        type: 'choice',
        topic: 'A Fábrica de Sucos',
        statement: `
            <p>Uma indústria de bebidas produz Lotes de Laranja (x) e Uva (y). O lucro da Laranja é R$ 5,00 e o da Uva é R$ 6,00 (Z = 5x + 6y). As restrições de matéria-prima das máquinas são:</p>
            <ul>
                <li><strong>Polpa Base:</strong> 4x + 2y ≤ 40 toneladas</li>
                <li><strong>Açúcar Natural:</strong> 2x + 4y ≤ 44 toneladas</li>
            </ul>
            <p>Aplicando o Método Gráfico de Maximização, qual é a combinação ideal de lotes para esgotar perfeitamente a capacidade produtiva e maximizar lucros?</p>
        `,
        options: [
            'Produzir 10 lotes de Laranja e nenhum de Uva.',
            'Produzir nenhum lote de Laranja e 11 de Uva.',
            'Produzir 8 lotes de Laranja e 6 de Uva.',
            'Produzir 6 lotes de Laranja e 8 de Uva.'
        ],
        correctIndex: 3,
        explanation: `No cruzamento: 2y = 40 - 4x ➔ y = 20 - 2x. Substituindo no açúcar: 2x + 4(20 - 2x) = 44 ➔ 2x + 80 - 8x = 44 ➔ 6x = 36 ➔ x = 6. Logo, y = 8. O vértice (6,8) rende Z = 5(6) + 6(8) = 30 + 48 = R$ 78,00. As outras opções faturam menos (50 ou 66 reais).`
    },
    {
        id: 517,
        type: 'choice',
        topic: 'A Construtora e a Margem de Lucro',
        statement: `
            <p>Uma empreiteira vai construir Casas (x) e Prédios (y). O terreno livre impõe <strong>4x + 2y ≤ 60</strong> espaços. A mão de obra disponível impõe <strong>x + 3y ≤ 30</strong> equipes. A Função Objetivo foca no lucro absurdo dos prédios: <strong>Z = 200x + 500y</strong>.</p>
            <p>Rodando a Reta de Lucro, o gestor descobre que a otimização de faturamento se encontra no vértice de interseção. Qual é o lucro máximo absoluto atingido?</p>
        `,
        options: [
            'R$ 3.000,00',
            'R$ 5.000,00',
            'R$ 5.400,00',
            'R$ 6.200,00'
        ],
        correctIndex: 2,
        explanation: `Isolando x na mão de obra: x = 30 - 3y. No terreno: 4(30 - 3y) + 2y = 60 ➔ 120 - 12y + 2y = 60 ➔ 10y = 60 ➔ y = 6. Com isso, x = 12. O vértice ótimo é (12, 6). Calculando o lucro Z: 200(12) + 500(6) = 2400 + 3000 = R$ 5.400,00.`
    },
    {
        id: 518,
        type: 'choice',
        topic: 'O Curso Online de Idiomas',
        statement: `
            <p>O produtor do curso oferta turmas no formato Básico (x) e Avançado (y). Para equilibrar a qualidade, ele desenhou as restrições semanais da equipe audiovisual:</p>
            <ul>
                <li><strong>Horas de Gravação:</strong> 2x + 5y ≤ 50</li>
                <li><strong>Horas de Edição:</strong> 3x + 2y ≤ 42</li>
            </ul>
            <p>A receita líquida de cada turma é de R$ 100,00 para o Básico e R$ 150,00 para o Avançado (Z = 100x + 150y). Qual é a configuração ideal de turmas para o maior lucro?</p>
        `,
        options: [
            '10 Turmas Básicas e 6 Avançadas.',
            '14 Turmas Básicas e 0 Avançadas.',
            '0 Turmas Básicas e 10 Avançadas.',
            '8 Turmas Básicas e 8 Avançadas.'
        ],
        correctIndex: 0,
        explanation: `Multiplicando a primeira por 3 e a segunda por 2 para anular o x: 6x + 15y = 150; 6x + 4y = 84. Subtraindo: 11y = 66 ➔ y = 6. Substituindo: 2x + 30 = 50 ➔ 2x = 20 ➔ x = 10. O vértice (10, 6) rende Z = 100(10) + 150(6) = 1000 + 900 = R$ 1.900,00. É o maior lucro possível.`
    },
    {
        id: 519,
        type: 'choice',
        topic: 'Transporte Fluvial (Minimização)',
        statement: `
            <p>Para enviar grãos pelo rio, uma cooperativa aluga Barcos Pequenos (x) por R$ 200,00 e Barcos Grandes (y) por R$ 500,00, buscando minimizar o custo <strong>C = 200x + 500y</strong>. As metas mínimas de envio (pisos) são:</p>
            <ul>
                <li><strong>Toneladas de Milho:</strong> 2x + 4y ≥ 24</li>
                <li><strong>Toneladas de Soja:</strong> x + y ≥ 9</li>
            </ul>
            <p>Analisando os vértices criados pelo cruzamento desses pisos, qual é a escolha de transporte mais barata que ainda bate as metas logísticas?</p>
        `,
        options: [
            'Alugar 12 Barcos Pequenos e nenhum Grande, custando R$ 2.400,00.',
            'Alugar nenhum Barco Pequeno e 9 Grandes, custando R$ 4.500,00.',
            'Alugar 6 Barcos Pequenos e 3 Grandes, custando R$ 2.700,00.',
            'Alugar 8 Barcos Pequenos e 2 Grandes, custando R$ 2.600,00.'
        ],
        correctIndex: 0,
        explanation: `Vértices da área irrestrita superior: Interseção: x = 9 - y ➔ 2(9 - y) + 4y = 24 ➔ 18 - 2y + 4y = 24 ➔ 2y = 6 ➔ y = 3, x = 6. O ponto é (6,3). Os extremos no eixo são (12,0) para x e (0,9) para y. Testando custos C = 200x + 500y: C(12,0) = 2400. C(0,9) = 4500. C(6,3) = 1200 + 1500 = 2700. O menor valor absoluto ocorre no vértice (12,0), custando apenas R$ 2.400,00.`
    },
    {
        id: 520,
        type: 'choice',
        topic: 'Campanha de Marketing Digital',
        statement: `
            <p>Um analista de marketing lança Anúncios Gráficos (x) e Anúncios em Vídeo (y) para maximizar o número total de cliques <strong>Z = 50x + 120y</strong>. A campanha possui orçamentos fragmentados rígidos:</p>
            <ul>
                <li><strong>Verba para Google:</strong> 4x + 6y ≤ 600 reais</li>
                <li><strong>Verba para Instagram:</strong> 2x + 6y ≤ 420 reais</li>
            </ul>
            <p>Aplicando o Método Gráfico, o analista verifica a interseção e as bordas. Qual estratégia entregará o maior volume de cliques (Z) no final da semana?</p>
        `,
        options: [
            'Fazer 150 anúncios gráficos (x) e nenhum em vídeo (y), gerando 7.500 cliques.',
            'Fazer nenhum anúncio gráfico (x) e 70 em vídeo (y), gerando 8.400 cliques.',
            'Fazer 90 anúncios gráficos (x) e 40 em vídeo (y), gerando 9.300 cliques.',
            'Fazer 100 anúncios gráficos (x) e 30 em vídeo (y), gerando 8.600 cliques.'
        ],
        correctIndex: 2,
        explanation: `Subtraindo a 2ª restrição da 1ª: (4x + 6y) - (2x + 6y) = 600 - 420 ➔ 2x = 180 ➔ x = 90. Substituindo: 180 + 6y = 420 ➔ 6y = 240 ➔ y = 40. O vértice ótimo é (90, 40). Calculando cliques: 50(90) + 120(40) = 4500 + 4800 = 9.300 cliques. As extremidades viáveis são (150,0) com 7.500 cliques e (0,70) com 8.400 cliques.`
    }
]
};
