<template>
  <div class="home-page">
    <button @click="handleClick">点击 {{ hits }}</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleClick() {
      this.$store.dispatch("setHitsAction", {
        hits: this.hits + 1,
      });
    },
  },
  computed: {
    hits() {
      return this.$store.state.hits;
    },
  },
};
</script>
