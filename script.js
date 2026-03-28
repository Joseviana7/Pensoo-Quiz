let res = document.querySelector ('#res')
let ponto = document.querySelector('#ponto')

let perguntas = [

        // === Mais Curiosidades ===
    {
        texto: "O ano de 2026 é um ano bissexto?",
        resposta: "errado"
    },
    {
        texto: "A seleção portuguesa de futebol venceu a Eurocopa em 2016?",
        resposta: "certo"
    },
    {
        texto: "O kwanza é a moeda oficial de Angola?",
        resposta: "certo"
    },
    {
        texto: "Angola foi colônia de Portugal até 1975?",
        resposta: "certo"
    },
    {
        texto: "A água ferve a 100 graus Celsius ao nível do mar?",
        resposta: "certo"
    },
    {
        texto: "A capital do Brasil é São Paulo?",
        resposta: "errado"
    },
    {
        texto: "A Terra é o terceiro planeta mais próximo do Sol?",
        resposta: "certo"
    },
    {
        texto: "O continente africano tem 54 países reconhecidos pela ONU?",
        resposta: "certo"
    },
    
    // ==================== PERGUNTAS NORMAIS (6-15) ====================
    {
        texto: "O maior oceano do mundo é o Oceano Atlântico?",
        resposta: "errado"
    },
    {
        texto: "A pintura 'Mona Lisa' foi criada por Vincent van Gogh?",
        resposta: "errado"
    },
    {
        texto: "A seleção brasileira de futebol venceu a Copa do Mundo de 2014 no Brasil?",
        resposta: "errado"
    },
    {
        texto: "O Monte Everest está localizado na cordilheira dos Andes?",
        resposta: "errado"
    },
    {
        texto: "Em 2026, os Jogos Olímpicos de Inverno estão sendo realizados na Itália (Milão e Cortina)?",
        resposta: "certo"
    },
    {
        texto: "A cantora Mariah Carey foi a atração principal da cerimônia de abertura das Olimpíadas de Inverno 2026?",
        resposta: "certo"
    },
    {
        texto: "O rio Amazonas é o rio mais extenso do mundo?",
        resposta: "certo"
    },
    {
        texto: "O telefone foi inventado por Alexander Graham Bell?",
        resposta: "certo"
    },
    {
        texto: "A Rússia é o maior país do mundo em área territorial?",
        resposta: "certo"
    },
    {
        texto: "O ano bissexto acontece a cada 4 anos e tem 366 dias?",
        resposta: "certo"
    },
    
    // ==================== PERGUNTAS DIFÍCEIS (16-50) ====================
    // === Eventos Rio 2016 (baseado na sua referência) ===
    {
        texto: "Nas Olimpíadas do Rio 2016, a China venceu 7 das 8 medalhas de ouro do mergulho?",
        resposta: "certo"
    },
    {
        texto: "A nadadora chinesa Fu Yuanhui ficou famosa no Rio 2016 por suas entrevistas sinceras e por falar sobre tabus?",
        resposta: "certo"
    },
    {
        texto: "O saltador chinês Qin Kai pediu a namorada He Zi em casamento após a cerimônia de medalhas no Rio 2016?",
        resposta: "certo"
    },
    {
        texto: "A promessa de despoluir 80% da Baía de Guanabara para o Rio 2016 foi cumprida?",
        resposta: "errado"
    },
    {
        texto: "O atleta César Cielo foi o grande destaque da natação brasileira no Rio 2016?",
        resposta: "errado"
    },
    
    // === Olimpíadas Inverno 2026 ===
    {
        texto: "Portugal está participando das Olimpíadas de Inverno 2026 com três atletas?",
        resposta: "certo"
    },
    {
        texto: "Os Jogos Olímpicos de Inverno 2026 acontecem na França?",
        resposta: "errado"
    },
    {
        texto: "A primeira edição dos Jogos Olímpicos de Inverno foi em 1924 na cidade de Chamonix, França?",
        resposta: "certo"
    },
    
    // === Cultura e Sociedade ===
    {
        texto: "O Financial Times previu que o preço do ouro pode ultrapassar 5 mil dólares por onça em 2026?",
        resposta: "certo"
    },
    {
        texto: "A tendência cultural 'Fricção Digital' em 2026 defende tecnologia com limites intencionais?",
        resposta: "certo"
    },
    {
        texto: "Os astronautas relatam que o espaço tem cheiro de metal quente e carne queimada?",
        resposta: "certo"
    },
    
    // === Curiosidades Científicas ===
    {
        texto: "A 'Lua Rosa' de abril recebe este nome porque a lua fica cor-de-rosa durante o fenômeno?",
        resposta: "errado"
    },
    {
        texto: "A chuva de meteoros Líridas tem seu pico em abril e são fragmentos do cometa Thatcher?",
        resposta: "certo"
    },
    {
        texto: "A Via Láctea é a única galáxia existente no universo?",
        resposta: "errado"
    },
    {
        texto: "O DNA humano é composto por 23 pares de cromossomos?",
        resposta: "certo"
    },
    
    // === História e Geografia ===
    {
        texto: "A Grande Muralha da China é visível do espaço a olho nu?",
        resposta: "errado"
    },
    {
        texto: "A cidade de Machu Picchu, no Peru, foi construída pelos Incas?",
        resposta: "certo"
    },
    {
        texto: "O deserto do Saara é o maior deserto do mundo em extensão?",
        resposta: "certo"
    },
    {
        texto: "A Revolução Francesa ocorreu em 1789?",
        resposta: "certo"
    },
    
    // === Tecnologia ===
    {
        texto: "Em 2026, robôs humanoides devem chegar ao mercado comercial, embora ainda sejam caros?",
        resposta: "certo"
    },
    {
        texto: "JavaScript é a mesma coisa que Java?",
        resposta: "errado"
    },
    {
        texto: "O 'Top-level await' permite usar 'await' fora de funções async em módulos JavaScript?",
        resposta: "certo"
    },
    
    // === Economia e Negócios ===
    {
        texto: "Angola vai sediar uma etapa do Campeonato Mundial de Barcos Elétricos (E1 League) em 2026?",
        resposta: "certo"
    },
    {
        texto: "O ator Will Smith visitou Angola em março de 2026 para o lançamento da corrida de barcos elétricos?",
        resposta: "certo"
    },
    {
        texto: "O ex-jogador Didier Drogba é dono de uma equipe na E1 League?",
        resposta: "certo"
    },
    
    // === Meio Ambiente ===
    {
        texto: "A China reduziu em 40% o nível de poluição atmosférica entre 2013 e 2020?",
        resposta: "certo"
    },
    {
        texto: "A Lagoa Rodrigo de Freitas, no Rio, teve mortandade de peixes durante as Olimpíadas de 2016?",
        resposta: "certo"
    },
    
    // === Saúde ===
    {
        texto: "O coração humano tem quatro câmaras: átrios e ventrículos?",
        resposta: "certo"
    },
    {
        texto: "O osso mais longo do corpo humano é o fêmur?",
        resposta: "certo"
    },
    
    // === Esportes ===
    {
        texto: "O atleta Usain Bolt é conhecido como o 'homem mais rápido do mundo'?",
        resposta: "certo"
    },
    {
        texto: "O Brasil nunca venceu uma Copa do Mundo de Futebol?",
        resposta: "errado"
    },
    {
        texto: "Michael Phelps é o maior medalhista olímpico da história?",
        resposta: "certo"
    },
    
    // === Artes e Entretenimento ===
    {
        texto: "O cantor Angolano Anselmo Ralph é conhecido como o 'príncipe do R&B' em Angola?",
        resposta: "certo"
    },
    {
        texto: "A obra 'Os Lusíadas' foi escrita por Fernando Pessoa?",
        resposta: "errado"
    }


]

let indiceAtual = 0
let pontuacao = 0
let perguntasRespondidas = 0

function iniciarQuiz(){
    indiceAtual = 0
    pontuacao = 0
    perguntasRespondidas = 0
    ponto.innerHTML = pontuacao
    
    mostrarPergunta()
    res.innerHTML = '<h2>Bora Jogar! Tens 15 segundos para responder as questões</h2>'
}
 
    window.addEventListener('blur', () => {
    alert('Você saiu do jogo! pontuação reiniciada')

    iniciarQuiz()
})

function embaralhar(n){
    for(let ini = n.length - 1; ini > 0 ; ini--){
    
    let agora = Math.floor(Math.random() * (ini + 1));
    
    [n[ini], n[agora]] = [n[agora], n[ini]]
    
    }
    
}

embaralhar(perguntas)

let timer

function mostrarPergunta(){

    if(indiceAtual < perguntas.length){
        res.innerHTML = `<h2>${perguntas[indiceAtual].texto}</h2>`

      clearTimeout(timer)
        timer = setTimeout(() => {
            carregar('pular')

        }, 10000)

    }else if(pontuacao === perguntas.length){

        res.innerHTML = `<h2>Parabéns venceste o jogo! faz screeshot da tela e manda no e-mail abaixo para resgatar premio <br> ${pontuacao}/${perguntas.length} </h2> <br> viewsnetao@gmail.com`

    }
    else{
        res.innerHTML = `<h2>Fim do Jogo! Pontuação final:</h2> ${pontuacao}/${perguntas.length}`
    }

}

function carregar(valor){
    
    if(indiceAtual >= perguntas.length){
        res.innerHTML = `<h2>Jogo terminado! Pontuação:</h2> ${pontuacao}/${perguntas.length}`
        return
    }

    let perguntaAtual = perguntas[indiceAtual]

    if(valor === 'certo' || valor === 'errado'){

        if(valor === perguntaAtual.resposta){

            pontuacao++
            ponto.innerHTML = pontuacao
            res.innerHTML = `<h2>Resposta certa!</h2>`

    

        }else{
            res.innerHTML = `<h2>Resposta Errada! A resposta era:</h2> ${perguntaAtual.resposta}`
        }

        perguntasRespondidas++
        indiceAtual++

            setTimeout(() => {

            mostrarPergunta()
            }, 1000)

    }else if (valor === 'pular'){

        res.innerHTML = `<h2>Pergunta pulada, sem pontuação!</h2>`
        indiceAtual++

            setTimeout(() => {
            mostrarPergunta()
            }, 1000)
    }
}

iniciarQuiz()