<template>
  <div class="text-center">
    <router-link
        tag="a"
        :to="{ name: 'createRepo' }"
        class="btn btn-primary">CREATE NEW REPO</router-link>

    <list-repo :listRepo="repos"></list-repo>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import ListRepo from '../components/ListRepo';

  export default {
    data() {
      return {
        repos: [],
        errors: [],
      };
    },
    components: {
      'list-repo': ListRepo,
    },
    created() {
      axios.get('https://api.github.com/users/moon-hai/repos')
      .then(response => {
        // JSON responses are automatically parsed.
        this.repos = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      })
    }
  };
</script>
