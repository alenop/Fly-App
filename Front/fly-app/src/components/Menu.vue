<script lang="ts">
  export default {
    data() {},
    components: {
    },
    methods: {
      toAccueil() {
        this.$router.push("/");
      }
    },
  };
</script>

<template>
  <div>
    <header class="menu">
      <img @click="toAccueil" class="logo" src="../assets/logo_plane.png" alt="">
      <h1 @click="toAccueil">Fly APP</h1>
    </header>
  </div>
</template>

<style scoped>

.menu {
  background-color: #4444FF;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  color: white;
}

body {
  padding: 0;
}

.logo {
  width: 5vw;
}

</style>

