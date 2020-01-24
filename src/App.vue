<template>
  <div id="app">
    <Navbar></Navbar>
    <div>{{ fretboardService.init() }}</div>
    <p>boasdom</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
import { FretboardService } from "./services/fretboard/fretboardService";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  data() {
    return { fretboardService: new FretboardService() };
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  color: blue;
}
</style>
