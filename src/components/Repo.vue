<template>
  <div class="repo-cover">
    <div class="repo-id">
      {{ repo.id }}
    </div>
    <div class="repo-border">
      <div class="repo-name">
        {{ repo.name }}
      </div>
      <div class="repo-control text-center">
        <router-link
            tag="a"
            :to="link"
            class="btn btn-primary">EDIT</router-link>
        <a class="btn btn-danger" @click.prevent="deleteRepoFn(repo)">DELETE</a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['repo'],
    data() {
      return {
        link: {
          name: 'editRepo',
          params: {
            id: this.repo.name,
          },
          query: {
            locale: 'en',
            q: '100',
          },
          hash: '#data',
        }
      }
    },
    methods: {
      closeControlFn() {
        this.showControl = false;
      },
      deleteRepoFn(repo) {
        this.$emit('deleteRepo', repo);
      },
      editPage() {
        const id = this.repo.name;
        this.$router.push('/edit/'+id);
      }
    }
  }
</script>

<style scoped>
  .repo-cover {
    padding: 10px 0;
    margin-top: 15px;
    border-bottom: 2px dashed #f3e5e5;
  }

  .repo-border {
    border-left: 2px dashed #f3e5e5;
    border-right: 2px dashed #f3e5e5;
  }

  .repo-id,
  .repo-name {
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 18px;
  }

  .repo-name {
    margin-top: 2px;
  }

  .repo-id {
    color: #000;
    font-weight: 900;
    background-color: #cecccc;
  }

  .repo-control {
    margin-top: 10px;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .btn {
    width: 100px;
  }

</style>
