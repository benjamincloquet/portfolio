<template>
  <div class="fixed top-1/2 left-0 px-8 opacity-5 lg:opacity-100">
    <p
      :class="`text-6xl font-semibold transition-opacity ${
        visible ? '' : 'opacity-0'
      }`"
    >
      {{ title }}
    </p>
    <SVGFilter ref="filter" filter-id="section-title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      visible: false,
    };
  },
  computed: {
    newTitle() {
      return this.$store.state.ui.visibleSectionTitle;
    },
  },
  watch: {
    newTitle(newTitle, oldTitle) {
      this.visible = false;
      if (oldTitle === '') {
        this.$refs.filter.fadeIn(this.updateTitle);
      } else {
        this.$refs.filter.fadeOutAndIn(this.updateTitle);
      }
    },
  },
  methods: {
    updateTitle() {
      this.title = this.newTitle;
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  -webkit-filter: url(#section-title);
  filter: url(#section-title);
}
</style>
