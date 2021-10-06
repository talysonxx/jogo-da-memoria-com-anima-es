// classes
const FRONT = 'card-front'
const BACK = 'card-back'

let techs = [
  'css',
  'git',
  'github',
  'html',
  'js',
  'node',
  'npm',
  'reactjs',
  'ubuntu',
  'vscode'
]

createCardsFromTechs(techs)

function createCardsFromTechs(techs) {
  let cards = []

  techs.map(tech => {
      cards.push(createPairFromTech(tech))
    })

    // if each pair of cards is an array, fletmap breaks it apart
    return cards.flatMap(pair => pair)
}
function createPairFromTech(tech) {
  return [{
    id: createIdWithTech(tech),
    icon: tech,
    flipped: false
  }, {
    id: createIdWithTech(tech),
    icon: tech,
    flipped: false
  }]
}
function createIdWithTech(tech) {
  return tech + parseInt(Math.random() * 1000)
}
