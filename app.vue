<!-- <template>
  <div>
    hbo clone
  </div>
</template>

<script setup>
useHead({
  title: 'HBO Vue',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'An HBO Redesign site...' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>
 -->

<template>
  <main class="grid place-items-center h-screen  text-pink-500 text-4xl font-bold">
    <div class="flex hello">Hello! Let's go get daisyUI now...<div class="celebrate"> 🎉</div>
    </div>
  </main>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    this.sayHello()
  },

  methods: {
    sayHello() {
      gsap.to(".hello", { rotation: -23, y: -200, duration: 2 });
      gsap.to(".hello", { opacity: 0, duration: 2, scale: 3, ease: "expoScale(1, 3)" });
    }
  }
}

</script>
