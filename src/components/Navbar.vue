<template>
  <div class="navbody">
    <p>shiish</p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
p {
  color: red;
}

.navbody {
  background-color: gray;
  overflow: hidden;
  height: 75px;
  top: 0;
}
</style>
