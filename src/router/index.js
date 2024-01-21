import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

/* Vue router
   SPA(single page application) 웹페이지의 전환을 지원하는 라이브러리
   페이지 변경시 DOM을 새로 갱신하지 않고 
   요청한 컴포넌트만 갱신
*/

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
/* 로그인 페이지 */  
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
/* 대시보드 페이지 */  
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue')
  }
]

/* router 인스턴스 생성 */
const router = new VueRouter({
  path: '/',
  mode: 'history', // 브라우저 히스토리 스택에 기록
  base: process.env.BASE_URL,
  routes
})

export default router
