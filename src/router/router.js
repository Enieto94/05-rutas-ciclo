import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import(/*webPackChunkName: "PokemonLayout"*/'@/modules/pokemon/layouts/PokemonLayout'),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import(/*webPackChunkName: "ListPage"*/ '@/modules/pokemon/pages/ListPage') 
      },
      {
        path: 'about', 
        name: 'pokemon-about',
        component: () => import(/*webPackChunkName: "AboutPage"*/'@/modules/pokemon/pages/AboutPage') 
      },
      {
        path: '/pokemonid/:id', 
        name: 'pokemon-id',
        component: () => import(/*webPackChunkName: "PokemonPage"*/  '@/modules/pokemon/pages/PokemonPage'),
        props: (route) =>{
          // console.log(route)
          const id = Number(route.params.id)
          return isNaN (id) ? {id: 1} : {id}
        }
      },
      {
        path:'',
        redirect: {name: 'pokemon-about'}
      }
    ] 

  },

  // DBZ Layout
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import(/*webPackChunkName: "DragonBallLayout"*/ '@/modules/dbz/layout/DragonBallLayout'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/*webPackChunkName: "ListPage"*/ '@/modules/dbz/pages/Characters'),

      },
      {
        path: 'about',
        name: 'dbz-about',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/*webPackChunkName: "ListPage"*/ '@/modules/dbz/pages/About'),

      },
      {
        path: '',
        redirect: {name: 'dbz-characters'}
      },
    ]
  },

  /* 
    layout: path: /dbz
      path: 'characters'
      name: 'dbz-characters'
      path: 'about'
      name: 'dbz-about'
  */
  {
    path: '/:pathMatch(.*)*', 
    component: () => import(/*webPackChunkName: "DragonBallLayout"*/ '@/modules/shared/pages/NoPageFound')
    // redirect: '/home',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// Guard Global -Sincrono 
// router.beforeEach( (to, from, next) => {
//   console.log({to, from, next})
//   const random = Math.random() * 100
//   if(random>50){
//     console.log('autenticado')
//     next()
//   }else{
//     console.log(random, 'bloqueado por el beforeEach Guard')
//     next({name: 'pokemon-home'})
//   }
//   // next()
// }) 
// GLOBAL GUARD ASINCRONO

// const canAccess = () => {
//   return new Promise(resolve => {
//     const random = Math.random() * 100
//     if(random>50){
//       console.log('autenticado - canAcess')
//       resolve(true)
//     }else{
//       console.log(random, 'bloqueado por el beforeEach Guard -canAccess')
//       resolve(false)
//       next({name: 'pokemon-home'})
//     }
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess()
//   authorized ? next() : next({name:'pokemon-home'})
// })

export default router