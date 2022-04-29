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
    scale: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      seed: 0,
      duration: 0.1,
      frequency: 0.05,
    };
  },
  methods: {
    setRandomSeed() {
      this.seed = Math.floor(Math.random() * 10000);
    },
    animateFilter(callback, scale) {
      const timeline = gsap.timeline();
      timeline.to(this.$refs.displacementMap, {
        attr: { scale },
        duration: this.duration,
        ease: 'power1.easeOut',
      });
      if (callback) {
        timeline.add(callback);
      }
    },
    distortIn(callback) {
      this.setRandomSeed();
      this.animateFilter(callback, this.scale);
    },
    distortOut(callback) {
      this.animateFilter(callback, 0);
    },
    distortInAndOut(callback) {
      this.distortIn(() => {
        callback();
        this.distortOut();
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
