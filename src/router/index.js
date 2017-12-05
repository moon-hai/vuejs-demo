import Vue from 'vue';
import Router from 'vue-router';
import ListRepos from '@/pages/ListRepos';
import CreateRepo from '@/pages/CreateRepo';
import EditRepo from '@/pages/EditRepo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListRepos',
      component: ListRepos,
      name: 'home'
    },
    {
      path: '/create',
      name: 'CreateRepo',
      component: CreateRepo,
      name: 'createRepo'
    },
    {
      path: '/edit/:name',
      name: 'EditRepo',
      component: EditRepo,
      props: true,
      name: 'editRepo'
    },
  ],
  mode: 'history',
});
