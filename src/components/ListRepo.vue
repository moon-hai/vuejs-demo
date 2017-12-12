<template>
  <div>
    <h2 v-show="isSuccess" class="notice-success">You've deleted a repo</h2>
    <ul class="list-group" v-if="errors && errors.length">
      <li v-for="error of errors" class="list-group-item list-group-item-danger">
        {{ error.message }}
      </li>
    </ul>

    <repo
        v-for="repo in listRepo"
        :repo="repo"
        @deleteRepo="deleteRepo">
    </repo>
  </div>
</template>

<script>
  import Repo from './Repo';
  import axios from 'axios';

  export default {
    props: ['listRepo'],
    data() {
      return {
        errors: [],
        isSuccess: false,
      };
    },
    components: {
      Repo,
    },
    methods: {
      deleteRepo(repo) {
        const indexRepo = this.listRepo.indexOf(repo);

        if (confirm("Are you sure??")) {
          axios({
            method: 'delete',
            url: 'https://api.github.com/repos/moon-hai/' + repo.name,
            headers: {
              'Authorization': 'token 99ca4fc6cac26d8bd745dbf4e9848a7a0995edc5',
              'Content-Type': 'application/json'
            },
          })
          .then(response => {
            this.listRepo.splice(indexRepo, 1);
            this.isSuccess = true;
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
      }
    }
  };
</script>

<style scoped>
  .notice-success {
    color: #5bc0de;
  }
</style>
