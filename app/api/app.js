function makecolor () {
  const things = ['violet', 'maroon', 'fuchsia', 'pink', 'brown', 'purple']
  const thing = things[Math.floor(Math.random() * things.length)]
  return thing
}

function makeid () {
  return Math.random().toString(36).slice(-5)
}

const tempNewApps = []
function createNewApps () {
  for (let i = 0; i < 30; i++) {
    const genApps = {
      id: makeid(),
      name: makecolor(),
      color: makecolor(),
      path: 'writer'
    }
    tempNewApps.push(genApps)
  }
  return tempNewApps
}

const tempNewConts2 = []
function createNewConts2 () {
  for (let i = 0; i < 20; i++) {
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
  for (let i = 0; i < 20; i++) {
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
  color: 'orange',
  direction: 'column',
  children: [
    {
      id: makeid(),
      name: 'brown',
      color: 'brown',
      path: 'commander',
      data: 'white data'
    },
    {
      id: makeid(),
      name: 'green',
      color: 'green',
      direction: 'row',
      children: [
        {
          id: makeid(),
          name: 'yellow',
          color: 'yellow',
          direction: 'column',
          children: [
            {
              id: makeid(),
              name: 'red',
              color: 'red',
              path: 'writer'
            },
            {
              id: makeid(),
              name: 'white',
              color: 'white',
              path: 'commander',
              data: 'white data 2'
            }
          ]
        },
        {
          id: makeid(),
          name: 'green',
          color: 'green',
          direction: 'column',
          children: [
            {
              id: makeid(),
              name: 'purple',
              color: 'purple',
              path: 'writer' }
          ]
        }
      ]
    },
    {
      id: makeid(),
      name: 'gray',
      color: 'gray',
      path: 'commander'
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
