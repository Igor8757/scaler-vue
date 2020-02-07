<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <div id="main-content">
      <p>boom</p>
      <Fretboard></Fretboard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
import Fretboard from "./components/Fretboard.vue";
@Component({
  components: {
    Navbar,
    Fretboard
  }
})
export default class App extends Vue {
  data() {
    return {};
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: rgb(62, 56, 75);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 10;
}

#main-content {
  background-color: rgb(81, 90, 110);
  height: calc(90vh);
  margin: 10px 15px 0px 15px;
  position: relative;
  top: 75px;
}

p {
  color: white;
}
</style>
