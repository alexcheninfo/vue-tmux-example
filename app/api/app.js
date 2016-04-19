function makecolor () {
  const things = ['#eb885d', '#b9394b', '#720e34', '#2c142b']
  const thing = things[Math.floor(Math.random() * things.length)]
  return thing
}

function makeid () {
  return Math.random().toString(36).slice(-5)
}

const tempNewApps = []
function createNewApps () {
  for (let i = 0; i < 50; i++) {
    const genApps = {
      id: makeid(),
      name: makecolor(),
      color: makecolor(),
      path: 'commander',
      data: 'Type here'
    }
    tempNewApps.push(genApps)
  }
  return tempNewApps
}

const tempNewConts2 = []
function createNewConts2 () {
  for (let i = 0; i < 30; i++) {
    const genApps = {
      id: makeid(),
      name: 'container',
      color: makecolor(),
      direction: 'column',
      children: []
    }
    tempNewConts2.push(genApps)
  }
  return tempNewConts2
}
const newConts2 = createNewConts2()

const tempNewConts = []
function createNewConts () {
  for (let i = 0; i < 30; i++) {
    const newCont2 = newConts2[Math.floor(Math.random() * newConts2.length)]
    const newCont3 = newConts2[Math.floor(Math.random() * newConts2.length)]
    const genApps = {
      id: makeid(),
      name: 'container',
      color: makecolor(),
      direction: 'row',
      children: [
        newCont2,
        newCont3
      ]
    }
    tempNewConts.push(genApps)
  }
  return tempNewConts
}

// console.log(createNewApps())

export const newApps = createNewApps()
export const newConts = createNewConts()

export const mockApps = {
  id: makeid(),
  name: 'orange',
  color: makecolor(),
  direction: 'column',
  children: [
    {
      id: makeid(),
      name: 'brown',
      color: makecolor(),
      path: 'commander',
      data: 'Type here'
    }
  ]
}

export const mockWallpaper = [
  {
    name: 'Forest Patrol',
    file: require('../assets/images/wallpaper.jpg')
  }
]

export const menuItems = [
  { name: 'Split up', action: 'up' },
  { name: 'Split down', action: 'down' },
  { name: 'Split left', action: 'left' },
  { name: 'Split right', action: 'right' }
]
