<template>
  <section>
    <fluid-container>
      <content-article
        v-for="articleContent in content"
        :key="articleContent.slug"
        :content="articleContent"
      />
    </fluid-container>
  </section>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      content: null,
    };
  },
  async fetch() {
    this.content = await this.$content(this.slug).fetch();
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 50vh;
}
</style>
