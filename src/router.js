import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Work from './views/Work.vue';
import Skill from './views/Skill.vue';

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/skill',
      component: Skill
    },
  ]
})