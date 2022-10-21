<template>
 <div>{{hitsText}}</div>
</template>

<script>
export default {
  computed: {
    hitsText(){
      return this.$store.getters.hitsText;
    }
  },
};
</script>
