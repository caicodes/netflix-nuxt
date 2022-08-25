<template>
  <section id="top" class="pt-28 md:pt-40 md:h-screen flex lg:pb-20 pb-10">
    <!-- movie hero main container -->
    <div class="flex flex-col w-full justify-center mb-64">
      <div class="text-xl md:text-3xl text-center p-4 lg:p-8">
        <h1 class="text-7xl font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 class="text-3xl my-4">Watch anywhere. Cancel anytime.</h2>
        <p class="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap"

import { trayPics1, trayPics2 } from "~/constants/"

export default {
  mounted() {
    this.scrollTrays()
  },

  data() {
    return {
      trayPics1: trayPics1,
      trayPics2: trayPics2,
    }
  },
  methods: {
    scrollTrays() {
      gsap.to("#tray-1", {
        x: -10500,
        duration: 228,
        ease: "linear",
        repeat: -1,
      })
      gsap.to("#tray-2", {
        x: -10500,
        duration: 168,
        ease: "linear",
        repeat: -1,
      })
    },
  },
}
</script>
