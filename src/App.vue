<script setup lang="ts">
  import Research from './components/Research.vue'
</script>

<template>
  <div>
    <div>
      <a href="https://https://www.mitrust.eu/?r=0" target="_blank">
        <img src=".\assets\Mitrust.svg" class="logo" alt="Mitrust" />
      </a>
    </div>
    <Research />
  </div>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
