<template>
  <h1 class="title-big">{{ titleText }}</h1>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>
