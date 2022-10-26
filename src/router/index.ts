import {
  createRouter,
  createWebHistory
} from 'vue-router';

export const constantRoutes = [{
  path: '/',
  name: 'layout',
  component: () => import('@/views/layout/index.vue'),
  children: [
    {
      path: 'component',
      name: 'component',
      component: ()=> import('@/views/component/index.vue'),
      children: [
        {
          
          path: 'installation',
          name: 'installation',
          component: ()=> import('@/views/component/installation/index.vue'),
        },
        {
          
          path: 'quickstart',
          name: 'quickstart',
          component: ()=> import('@/views/component/quickstart/index.vue'),
        },
        {
          path: 'changelog',
          name: 'changelog',
          component: ()=> import('@/views/component/changelog/index.vue'),
        },
        {
          path: 'menu',
          name: 'menu',
          component: ()=> import('@/views/component/menu/index.vue'),
        }
      ]
    }
  ]
},
]

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  strict: true
})

export function setupRouter(app) {
  app.use(router);
}