<template>
  <svg v-if="filterId" width="0" height="0">
    <filter :id="filterId" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        :baseFrequency="`${frequency} ${frequency}`"
        result="NOISE"
        numOctaves="2"
        :seed="seed"
      />
      <feDisplacementMap
        ref="displacementMap"
        in="SourceGraphic"
        in2="NOISE"
        scale="0"
        xChannelSelector="R"
        yChannelSelector="R"
      />
    </filter>
  </svg>
</template>

<script>
import { gsap } from 'gsap';
export default {
  props: {
    filterId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      seed: 0,
      duration: 0.1,
      maxScale: 20,
      frequency: 0.05,
    };
  },
  methods: {
    setRandomSeed() {
      this.seed = Math.floor(Math.random() * 10000);
    },
    fadeOutAndIn(callback) {
      gsap
        .timeline()
        .to(this.$refs.displacementMap, {
          attr: { scale: this.maxScale },
          duration: this.duration,
          ease: 'power1.easeOut',
        })
        .add(callback)
        .add(this.setRandomSeed)
        .to(this.$refs.displacementMap, {
          attr: { scale: 0 },
          duration: this.duration,
          ease: 'power1.easeOut',
        });
    },
    fadeIn(callback) {
      gsap
        .timeline()
        .to(this.$refs.displacementMap, {
          attr: { scale: this.maxScale },
          duration: 0,
        })
        .add(callback)
        .add(this.setRandomSeed)
        .to(this.$refs.displacementMap, {
          attr: { scale: 0 },
          duration: this.duration,
          ease: 'power1.easeOut',
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
