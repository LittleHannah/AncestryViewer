import Vue from 'vue'
import Router from 'vue-router'
import AncestryViewer from '@/components/AncestryViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AncestryViewer',
      component: AncestryViewer
    }
  ]
})
