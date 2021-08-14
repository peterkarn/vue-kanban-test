<template>
 <div class="menubar">
    <div class="btn-group" role="group" aria-label="Menu bar">
      <router-link :class="buttonClass('/board')" to="/board">Board</router-link>
      <router-link :class="buttonClass('/backlog')" to="/backlog">Backlog</router-link>
      <!-- <button class="btn btn-primary">
        Add Lane
      </button> -->
    </div>
  </div>         
</template>

<script>
  export default {
    name: 'MenuBar',
    methods: {
      buttonClass(path) {
        return {
          'btn': true,
          'btn-primary': this.$route.path === path,
          'btn-secondary': this.$route.path !== path,
        }
      }
    }
  };
</script>

<style>
  .menubar {
    margin-bottom: 16px;
  }
</style>