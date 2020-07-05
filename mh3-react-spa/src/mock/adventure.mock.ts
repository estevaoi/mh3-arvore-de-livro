import { Adventure } from "interfaces/adventure";

export const ADVENTURE_MOCK: Adventure = <Adventure>{
  _id: '1',
  title: 'Wonder Women',
  book: {
    path: 'wonder-women',
    title: 'Wonder Women',
    img: 'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/books/images/wonder-women/thumb_9788555780417.jpg',
    author: 'Sam Maggs',
    description: 'Pense no quanto alguém é capaz de alcançar quando tem à disposição todos os recursos e o apoio de que precisa para desenvolver plenamente suas habilidades. Agora pense no quão especial alguém deve ser para conseguir os mesmos resultados quando nada ao redor conspira a seu favor. Em \"Wonder Women\", o leitor conhecerá mulheres além de seu tempo. Pessoas brilhantes, que se recusaram a se acomodar no papel de coadjuvantes e foram à luta, tornando-se protagonistas de sua própria vida. Cientistas, engenheiras, matemáticas, aventureiras e inventoras cujos feitos mudaram os rumos da história.'
  },
  phases: [
    {
      _id: '1',
      title: 'Inicio',
      status: 'ok',
      points: 30,
      tasks: [
        {
          _id: '1',
          title: 'Ler Capitulo 1 em 2 Dias',
          description: 'Ao ler o capitulo, podemos dizer que ele termina na página 20?',
          status: 'ok',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        },
        {
          _id: '1',
          title: 'Ler Capitulo 1 em 2 Dias',
          description: 'Ler Capitulo 1 em 2 Dias',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        },
        {
          _id: '1',
          title: 'Ler Capitulo 1 em 2 Dias',
          description: 'Ler Capitulo 1 em 2 Dias',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        },
        {
          _id: '1',
          title: 'Ler Capitulo 1 em 2 Dias',
          description: 'Ler Capitulo 1 em 2 Dias',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        },
        {
          _id: '1',
          title: 'Ler Capitulo 1 em 2 Dias',
          description: 'Ler Capitulo 1 em 2 Dias',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        },
        {
          _id: '1',
          title: 'Ler Capitulo 1 em 2 Dias',
          description: 'Ler Capitulo 1 em 2 Dias',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        },
      ],
      description: 'Era uma vez..'
    },
    {
      _id: '2',
      title: 'Meio',
      points: 30,
      tasks: [
        {
          _id: '2',
          title: 'Ler Capitulo 4 em 2 Dias',
          description: 'Ler Capitulo 5 em 2 Dias',
          points: 30,
          questions: [
            {
              identifier: 1,
              title: 'Sim'
            },
            {
              identifier: 2,
              title: 'Não'
            },
          ],
          rightAnswer: 1
        }
      ],
      description: 'Chegamos no meio do livro'
    },
  ],
}