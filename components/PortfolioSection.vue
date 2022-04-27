<template>
  <observable-section :on-visible="onVisible">
    <slot />
  </observable-section>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    title: {
      type: String,
      default() {
        return '';
      },
    },
  },
  methods: {
    onVisible() {
      this.setTitle(this.title);
    },
    ...mapMutations({
      setTitle: 'ui/setVisibleSectionTitle',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
