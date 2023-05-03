import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView";
import LeadershipView from "@/views/LeadershipView";
import DualView from "@/views/Programs/DualView";
import InternView from "@/views/InternView";
import SocialView from "@/views/SocialView";
import ApplyView from "@/views/ApplyView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView
  },
  {
    path: "/leadership",
    name: "leadership",
    component: LeadershipView
  },
  {
    path: "/dual-program",
    name: "dual-program",
    component: DualView
  },
  {
    path: "/internship",
    name: "internship",
    component: InternView
  },
  {
    path: "/social-club",
    name: "social-club",
    component: SocialView
  },
  {
    path:"/apply",
    name: "apply",
    component: ApplyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
