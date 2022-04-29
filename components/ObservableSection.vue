<template>
  <observer root-margin="-400px" @on-change="onChange">
    <slot />
  </observer>
</template>

<script>
import Observer from 'vue-intersection-observer';
export default {
  components: {
    Observer,
  },
  props: {
    onVisible: {
      type: Function,
      default() {
        return () => {};
      },
    },
  },
  methods: {
    onChange(entry) {
      if (entry.isIntersecting) {
        this.onVisible();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
