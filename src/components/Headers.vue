<template>
  <ul class="nav nav-tabs">
    <router-link
        :to="{ name: 'home' }"
        tag="li"
        active-class="active"
        exact><a>Home</a></router-link>

    <router-link
        :to="{ name: 'createRepo' }"
        tag="li"
        active-class="active"><a>Create</a></router-link>
  </ul>
</template>
