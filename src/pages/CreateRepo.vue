<template>
  <div class="text-center">
    <!-- Create Form -->
    <form class="form-horizontal">
      <div class="form-group">
        <label for="repoName" class="col-xs-3 control-label">Repo Name: </label>
        <div class="col-xs-9">
          <input type="text" class="form-control" placeholder="Name of respo" v-model="repoName">
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click.prevent="createNewFn">CREATE REPO</button>
      </div>
    </form>

    <ul class="list-group" v-if="errors && errors.length">
      <li v-for="error of errors" class="list-group-item list-group-item-danger">
        {{ error.message }}
      </li>
    </ul>
    <h2 v-show="isSuccess" class="notice-success">YOU'VE CREATE NEW REPO!</h2>
    <h2 v-show="hasText" class="notice-fail">PLEASE INPUT YOUR REPO!</h2>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        errors: [],
        repoName: '',
        isSuccess: false,
        hasText: false,
      };
    },
    components: {
    },
    methods: {
      createNewFn() {
        const name = this.repoName;

        if (name.length > 0) {
          axios({
            method: 'post',
            url: 'https://api.github.com/user/repos',
            headers: {
              'Authorization': 'token 99ca4fc6cac26d8bd745dbf4e9848a7a0995edc5',
              'Content-Type': 'application/json'
            },
            data: {
              name: this.repoName,
            }
          })
          .then(response => {
            this.isSuccess = true;
            this.hasText = false;
            this.repoName = '';
          })
          .catch(e => {
            this.errors.push(e)
          })
        } else {
          this.hasText = true;
          this.isSuccess = false;
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {
        next();
      } else {
        if (confirm('You have not create!! Do you want to leave???')) {
          next();
        } else {
          next(false);
        }
      }
    },
  };
</script>

<style scoped>

  .container {
    margin-top: 80px;
  }

  .notice-success {
    color: #5bc0de;
  }

  .notice-fail {
    color: red;
  }
</style>

