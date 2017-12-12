<template>
  <div class="edit-form text-center">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="repoName" class="col-xs-3 control-label">Repo Name: </label>
        <div class="col-xs-9">
          <input type="text" class="form-control" placeholder="Name of respo" v-model="id">
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click.prevent="editRepo">EDIT REPO</button>
      </div>
    </form>
    <ul class="list-group" v-if="errors && errors.length">
      <li v-for="error of errors" class="list-group-item list-group-item-danger">
        {{ error.message }}
      </li>
    </ul>
    <h2 v-show="hasText" class="notice-fail">PLEASE INPUT YOUR REPO!</h2>
    <h2 v-show="isSuccess" class="notice-success">YOU'VE HAVE EDIT REPO!</h2>
    <!-- Test hash -->
    <!-- <div id="data" style="margin-top: 1000px">
      <p>{{ $route.query.locale }}</p>
      <p>{{ $route.query.q }}</p>
    </div> -->
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        hasText: false,
        isSuccess: false,
        errors: [],
        confirmed: false,
      };
    },
    methods: {
      editRepo() {
        if(this.id.length > 0 && confirm("Are you sure??")) {
          const oldName = this.$route.params.id;
          const newNameRepo = this.id;

          axios({
            method: 'patch',
            url: 'https://api.github.com/repos/moon-hai/'+oldName,
            headers: {
              'Authorization': 'token 99ca4fc6cac26d8bd745dbf4e9848a7a0995edc5',
              'Content-Type': 'application/json'
            },
            data: {
              name: newNameRepo,
            }
          })
          .then(response => {
            this.isSuccess = true;
            this.hasText = false;
          })
          .catch(e => {
            this.errors.push(e)
          })
        } else {
          this.isSuccess = false;
          this.hasText = false;
        }
        this.confirmed = true;
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {
        next();
      } else {
        if (confirm('You have not change!! Do you want to leave???')) {
          next();
        } else {
          next(false);
        }
      }
    },
  }
</script>

<style scoped>

  .edit-form {
    margin-top: 40px;
  }

  .notice-success {
    color: #5bc0de;
  }

  .notice-fail {
    color: red;
  }
</style>
