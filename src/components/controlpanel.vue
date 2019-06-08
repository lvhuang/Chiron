<template>
  <div class="controlpanel">
    <div>
      <router-link :to="'/A'">AAAA</router-link>
    </div>
    <div>
      <router-link :to="'/B'">BBBB</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controlpanel",
  props: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
