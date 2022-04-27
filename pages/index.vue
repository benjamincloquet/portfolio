<template>
  <main>
    <portfolio-section>
      <about-section />
    </portfolio-section>
    <portfolio-section title="Companies">
      <content-section slug="jobs" />
    </portfolio-section>
    <portfolio-section title="Projects">
      <content-section slug="projects" />
    </portfolio-section>
    <section-title />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
