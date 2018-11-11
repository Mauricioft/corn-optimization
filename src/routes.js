import crop from './components/crop/list.vue'

const routes = [
  {
    path: '/',
    component: crop,
    name: 'crop',
    title: 'crop'
  },
  {
    path: '*',
    redirect: '/'
  },
]

export default routes