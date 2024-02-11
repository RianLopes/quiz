const perguntas = [
    {
      pergunta: "Qual é o maior rio do mundo?", 
      respostas: [
        "Rio Nilo",
        "Rio Amazonas",
        "Rio Yangtzé",
      ],
      correta: 1,
    },
    {
      pergunta: "Quem escreveu 'A Divina Comédia'?", 
      respostas: [
        "Dante Alighieri",
        "William Shakespeare",
        "Victor Hugo",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o país mais populoso do mundo?", 
      respostas: [
        "Índia",
        "Estados Unidos",
        "China",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o maior deserto do mundo?", 
      respostas: [
        "Deserto do Saara",
        "Deserto de Atacama",
        "Deserto da Antártida",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem foi o primeiro homem a pisar na Lua?", 
      respostas: [
        "Neil Armstrong",
        "Buzz Aldrin",
        "Yuri Gagarin",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a montanha mais alta do mundo?", 
      respostas: [
        "Monte Everest",
        "K2",
        "Mont Blanc",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o metal mais abundante na crosta terrestre?", 
      respostas: [
        "Ferro",
        "Ouro",
        "Alumínio",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o maior oceano do mundo?", 
      respostas: [
        "Oceano Pacífico",
        "Oceano Atlântico",
        "Oceano Índico",
      ],
      correta: 0,
    },
    {
      pergunta: "Quem foi o inventor da lâmpada elétrica?", 
      respostas: [
        "Thomas Edison",
        "Nikola Tesla",
        "Alexander Graham Bell",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o maior país da América do Sul em área territorial?", 
      respostas: [
        "Argentina",
        "Brasil",
        "Peru",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a capital mais alta do mundo?",
      respostas: [
        "La Paz",
        "Quito",
        "Bogotá"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é conhecido como o 'Pai da Computação'?",
      respostas: [
        "Alan Turing",
        "Bill Gates",
        "Steve Jobs"
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano foi assinada a Declaração de Independência dos Estados Unidos?",
      respostas: [
        "1776",
        "1789",
        "1801"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maior ilha do mundo?",
      respostas: [
        "Groenlândia",
        "Austrália",
        "Nova Guiné"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é considerado o pai da psicanálise?",
      respostas: [
        "Sigmund Freud",
        "Carl Jung",
        "Alfred Adler"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o livro mais vendido de todos os tempos?",
      respostas: [
        "Bíblia",
        "Dom Quixote",
        "Harry Potter e a Pedra Filosofal"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o maior animal terrestre do mundo?",
      respostas: [
        "Elefante africano",
        "Girafa",
        "Baleia-azul"
      ],
      correta: 0
    },
    {
      pergunta: "Em que país se originou o jogo de xadrez?",
      respostas: [
        "Índia",
        "China",
        "Japão"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da mais longa cadeia de montanhas do mundo?",
      respostas: [
        "Cordilheira dos Andes",
        "Cordilheira do Himalaia",
        "Cordilheira dos Apalaches"
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi o primeiro presidente negro da África do Sul?",
      respostas: [
        "Nelson Mandela",
        "Thabo Mbeki",
        "Cyril Ramaphosa"
      ],
      correta: 0
    }
  ]
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('spam').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
      
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }