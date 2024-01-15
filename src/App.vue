<template>
  <div class="wrapper">
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import ForYourPleasure from "@/views/ForYourPleasure.vue";
import ContactUs from "@/views/ContactUs.vue";
import ThankYouPage from "@/views/ThankYouPage.vue";

export default {
  components: {
    HeroView,
    FooterComponent,
    OurCoffeeView,
    ForYourPleasure,
    ContactUs,
    ThankYouPage,
  },
};
</script>

<style></style>
