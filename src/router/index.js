import Vue from 'vue';
import Router from 'vue-router';
import ListRepos from '@/pages/ListRepos';
import CreateRepo from '@/pages/CreateRepo';
import EditRepo from '@/pages/EditRepo';
import Headers from '@/components/Headers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: ListRepos,
        'header-top': Headers,
      },
      name: 'home',
    },
    {
      path: '/create',
      name: 'createRepo',
      components: {
        default: CreateRepo,
        'header-top': Headers,
      }
    },
    {
      path: '/edit/:id',
      props: true,
      name: 'editRepo',
      components: {
        default: EditRepo,
        'header-top': Headers,
      },
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      },
    }
  ],
  mode: 'history',

  // Scroll behavior with hash
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
