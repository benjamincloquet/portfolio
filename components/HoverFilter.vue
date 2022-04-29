<template>
  <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <slot />
    <SVGFilter ref="filter" :scale="200" :filter-id="filterId" />
  </div>
</template>

<script>
export default {
  props: {
    filterId: {
      type: String,
      default: null,
    },
  },
  methods: {
    onMouseOver() {
      this.$refs.filter.distortIn();
    },
    onMouseLeave() {
      this.$refs.filter.distortOut();
    },
  },
};
</script>

<style lang="scss" scoped></style>
