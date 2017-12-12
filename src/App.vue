<template>
  <div id="app" class="container">
    <!-- Header -->
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3">
        <router-view name="header-top"></router-view>
      </div>
    </div>

    <!-- Router View -->
    <div class="row content">
      <div class="col-xs-6 col-xs-offset-3">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Headers from './components/Headers'

  export default {
    name: 'app',
    components: {
      Headers,
    }
  };
</script>

<style>
  #app {
    margin-top: 50px;
    padding-bottom: 40px;
  }

  .content {
    margin-top: 50px;
  }
</style>
