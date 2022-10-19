<!-- eslint-disable max-len -->
<template>
    <div :class="`${row} filter-item`" :style="{backgroundImage: `url(${imageData})`}" @click="fire">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageData: String,
    row: String,
  },
  methods: {
    fire() {
      this.emitter.emit("fire", this.row);
    },
  },
};
</script>

<style>
    .filter-item {
        width: 100px;
        height: 100px;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color : white;
        background-size: cover;
        background-position : center;
    }
</style>
