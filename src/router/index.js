/*
 * @Author: your name
 * @Date: 2019-11-02 14:11:03
 * @LastEditTime: 2019-11-12 05:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \waimai\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta: {
        footerShow: true
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        footerShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        footerShow: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        footerShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        footerShow: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
