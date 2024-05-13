export default {
  '/guide/': Guide(),
}

function Guide() {
  return [
    { text: 'Start Read', link: '/guide/index' },
    {
      text: 'Introduce',
      collapsed: true,
      items: [
        { text: 'Start Read', link: '/guide/index' },
        { text: 'Nocomment', link: '/guide/demo/nocomment' },
       
      ]
    },
  ]
}
