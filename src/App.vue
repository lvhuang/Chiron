<template>
  <div id="app">
    <div class="layout">
      <layout></layout>
    </div>
    <!-- <div class="controlpanel">
      <Controlpanel></Controlpanel>
    </div> -->
    <!-- <div class="content">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import layout from "./components/layout.vue";
// import Controlpanel from "./components/controlpanel.vue"

export default {
  name: "app",
  components: {
    layout,
  }
};
</script>

<style>
</style>
