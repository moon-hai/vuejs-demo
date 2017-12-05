<template>
  <div class="edit-form text-center">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="repoName" class="col-xs-3 control-label">Repo Name: </label>
        <div class="col-xs-9">
          <input type="text" class="form-control" placeholder="Name of respo" v-model="name">
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
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        name: this.$route.params.name,
        hasText: false,
        isSuccess: false,
        errors: []
      };
    },
    methods: {
      editRepo() {
        if(this.name.length > 0 && confirm("Are you sure??")) {
          const oldName = this.$route.params.name;
          const newNameRepo = this.name;

          axios({
            method: 'patch',
            url: 'https://api.github.com/repos/moon-hai/'+oldName,
            headers: {
              'Authorization': 'token 8f26b213ec73885b864222a7103fa6106b5b4172',
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
          this.hasText = true;
          this.isSuccess = false;
        }
      }
    }
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
