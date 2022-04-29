<template>
  <section class="pb-20 lg:pb-40">
    <fluid-container>
      <h1 class="text-5xl md:text-6xl font-semibold highlight mb-10">
        {{ $t('greeting') }}
      </h1>
      <p class="">
        {{ $t('about') }}
      </p>
      <p class="mb-6">
        {{ $t('tech') }}
      </p>
      <div
        class="flex flex-col items-center md:items-start sm:flex-row gap-8 mb-4"
      >
        <a href="mailto:benjamin.cloquet@gmail.com">{{ $t('email') }}</a>
        <a href="https://www.linkedin.com/in/benjamin-cloquet/">LinkedIn</a>
        <a href="https://github.com/benjamincloquet">GitHub</a>
      </div>
      <div class="flex justify-center">
        <div class="img inline-block">
          <img
            src="portrait.webp"
            alt="Benjamin Cloquet"
            class="w-full max-w-xs sm:max-w-sm"
          />
          <hover-filter filter-id="about-img" class="interactive-div" />
        </div>
      </div>
    </fluid-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img {
  position: relative;

  .interactive-div {
    content: '';
    position: absolute;
    width: 40%;
    height: 20%;
    bottom: -1rem;
    right: -10%;
    background-color: theme('colors.yellow.300');
    -webkit-filter: url(#about-img);
    filter: url(#about-img);
  }
}
</style>
