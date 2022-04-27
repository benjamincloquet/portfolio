<template>
  <article class="h-96">
    <h2 class="font-bold">{{ content.title }}</h2>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
