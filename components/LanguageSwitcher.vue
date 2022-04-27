<template>
  <nuxt-link :to="switchLocalePath(locale)" class="flex items-center gap-1">
    <SVGIcon name="language" />
    <span class="uppercase">{{ locale }}</span>
  </nuxt-link>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$i18n.locale === 'en' ? 'fr' : 'en';
    },
  },
};
</script>

<style lang="scss" scoped></style>
