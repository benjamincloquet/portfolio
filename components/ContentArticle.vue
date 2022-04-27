<template>
  <article class="flex mb-60">
    <div
      v-if="content.img"
      class="w-1/3 flex-none flex items-center justify-center"
    >
      <img
        :src="require(`~/assets/content/${content.img}`)"
        :alt="content.title"
        class="w-32"
      />
    </div>
    <div class="">
      <h2 class="text-3xl highlight font-semibold mb-2">{{ content.title }}</h2>
      <p v-if="content.startDate" class="font-medium mb-2">
        {{ formatDate(content.startDate) }} -
        {{ content.endDate ? formatDate(content.endDate) : 'current' }}
      </p>
      <nuxt-content :document="content" />
    </div>
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long' };
      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
    },
  },
};
</script>

<style lang="scss" scoped></style>
