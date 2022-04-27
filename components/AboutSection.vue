<template>
  <section class="min-h-screen">
    <fluid-container>
      <h1 class="text-6xl font-semibold highlight mb-12">
        {{ $t('greeting') }}
      </h1>
      <p class="mb-4">
        I'm a software engineer based in Montpellier, France. I want to make the
        web a better place ! I do that every day by writing code, researching
        user experience and mostly being a good human.
      </p>
      <div class="flex gap-8 mb-4">
        <a href="mailto:benjamin.cloquet@gmail.com">Email me</a>
        <a href="https://www.linkedin.com/in/benjamin-cloquet/">LinkedIn</a>
      </div>
      <div class="flex justify-center">
        <div class="img inline-block">
          <img src="portrait.webp" alt="Benjamin Cloquet" class="max-w-sm" />
          <SVGFilter filter-id="about-img" />
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

  &::before {
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
