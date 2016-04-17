export const mockApps = {
  name: 'orange',
  color: 'orange',
  direction: 'column',
  children: [
    {
      name: 'white',
      color: 'white',
      path: 'commander',
      data: 'white data'
    },
    {
      name: 'green',
      color: 'green',
      direction: 'row',
      children: [
        {
          name: 'yellow',
          color: 'yellow',
          direction: 'column',
          children: [
            {
              name: 'red',
              color: 'red',
              path: 'writer'
            },
            {
              name: 'white',
              color: 'white',
              path: 'commander',
              data: 'white data 2'
            }
          ]
        },
        {
          name: 'green',
          color: 'green',
          direction: 'column',
          children: [
            { name: 'purple', color: 'purple', path: 'writer' }
          ]
        }
      ]
    },
    { name: 'gray', color: 'gray', path: 'commander' }
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
