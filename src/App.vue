<template>
  <v-app class="app-main">
    <!-- <v-app-bar app color="primary">
    </v-app-bar> -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  })
});
</script>

<style scoped>
.app-main {
  background-color: blanchedalmond !important;
}
</style>
