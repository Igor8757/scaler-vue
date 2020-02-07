<template>
  <div>
    <div>{{ strings }}</div>
    <div class="shit">sfgsfg</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FretboardService } from "../services/fretboard/fretboardService";

@Component({
  components: {}
})
export default class Fretboard extends Vue {
  fretboardService = new FretboardService();
  strings: any;

  data() {
    return {};
  }
  created() {
    this.strings = this.fretboardService.generate(24);
  }
}
</script>

<style lang="scss" scoped>
.shit {
  width: calc(50% - 15px);
  border: 1px solid black;
}
</style>
