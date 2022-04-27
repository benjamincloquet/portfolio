<template>
  <p class="fixed top-0 left-0">
    {{ title }}
  </p>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.ui.visibleSectionTitle;
    },
  },
};
</script>

<style lang="scss" scoped></style>
