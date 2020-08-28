/*
 * @Author: xin.chen
 * @Date: 2020-08-05 17:42:33
 * @LastEditors: xin.chen
 * @LastEditTime: 2020-08-07 13:39:54
 * @Description: router configuration
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import first1 from '@/views/first1'
import first2 from '@/views/first2'
import second1 from '@/views/second1'
import second2 from '@/views/second2'

Vue.use(VueRouter)

// 避免报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
// 页面名字要与menu-config中的id一致
  const routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/first1',
    name: 'first1',
    component: first1
  },
  {
    path: '/first2',
    name: 'first2',
    component: first2
  },
  {
    path: '/second1',
    name: 'second1',
    component: second1
  },
  {
    path: '/second2',
    name: 'second2',
    component: second2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
