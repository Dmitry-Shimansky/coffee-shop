<template>
  <li :class="classLink">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    classLink: {
      type: String,
      required: false,
    },
  },
};
</script>
