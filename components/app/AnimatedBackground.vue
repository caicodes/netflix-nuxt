<script setup>
// gsap this bitch
</script>

<template>
  <div
    class="main-bg md:h-screen w-full p-40 -z-10 bg-base-100 absolute overflow-hidden"
  >
    <div
      class="blur-tr h-[420px] w-full rotate-12 bg-base-100 rounded-full blur-3xl absolute -top-80 -right-80 opacity-80"
    ></div>
    <div
      class="blur-tl h-[420px] w-full -rotate-12 bg-base-100 rounded-full blur-3xl absolute -top-80 -left-40 opacity-80"
    ></div>
    <div
      class="blur-br h-[420px] w-full -rotate-12 bg-base-100 rounded-full blur-3xl absolute -bottom-80 -right-40 opacity-80"
    ></div>
    <div
      class="blur-bl h-[420px] w-full rotate-12 bg-base-100 rounded-full blur-3xl absolute -bottom-80 -left-40 opacity-80"
    ></div>
  </div>
</template>

<style>
.main-bg {
  background-image: url("@/images/bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -999;
  opacity: 0.64;
}
</style>
