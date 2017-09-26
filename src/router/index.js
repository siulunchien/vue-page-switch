import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views'
import PageA from '@/views/pageA'
import PageB from '@/views/pageB'
import PageC from '@/views/PageC'
import TabA from '@/views/tabA'
import TabB from '@/views/tabB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page-a',
      name: 'PageA',
      component: PageA
    },
    {
      path: '/page-b',
      name: 'PageB',
      component: PageB,
      children: [
        {
          path: '',
          name: 'TabA',
          component: TabA
        },
        {
          path: 'tab-b',
          name: 'TabB',
          component: TabB
        }
      ]
    },
    {
      path: '/page-c',
      name: 'PageC',
      component: PageC,
      meta: {
        hideAnimate: true
      }
    }
  ]
})
