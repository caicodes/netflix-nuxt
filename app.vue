<template>

  <nav class="dark-highlight flex justify-between items-center p-2 fixed top-0 right-0 left-0">

    <nuxt-link to="/" class="flex items-center"><span class="logo-brand">HBO<span
          class="logo-brand-light text-secondary opacity-50 ml-0.5 ">vue</span></span>
    </nuxt-link>
    <button class="signup-button btn btn-secondary btn-sm px-8 font-bold rounded-full">sign up now</button>
  </nav>

  <Hero />

  <footer>footer</footer>



</template>

<style>
.signup-button {
  letter-spacing: .2em;
  font-size: .8rem;
  color: white;
  height: 2.4rem;
}

.dark-highlight {
  background: rgba(0, 0, 0, .3);
}

.logo-brand {
  font-family: Gilroy-Bold;
  letter-spacing: -.1rem;
  font-size: 2.3rem;
  line-height: 0%;
  margin-left: .8rem;
}

.logo-brand-light {
  font-family: Gilroy-Regular;
  letter-spacing: -.2rem;
  font-size: 3.2rem;
  line-height: 0%;
}
</style>