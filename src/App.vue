<template>
  <v-app id="inspire" light>
  <navigation></navigation>
  <toolbar></toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </v-content>
  <foot></foot>
</v-app>
</template>

<script>
import router from './Router.js';
import Toolbar from './partials/Toolbar';
import Navigation from './partials/Navigation';
import Foot from './partials/Foot';
import Home from './views/Home';

export default {
  name: 'app',
  router,
  components: { Toolbar, Navigation, Foot, Home },
  data () {
    return {
      shared: window.sharedData,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
