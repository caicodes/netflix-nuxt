<template>
  <nav
    class="dark-highlight flex justify-between items-center py-2 fixed z-50 top-0 right-0 left-0"
  >
    <NuxtLink to="/" class="flex items-center py-4"
      ><span class="logo-brand"
        >NETFLIX<span class="logo-brand-light text-secondary opacity-80 ml-0.5"
          >nuxt</span
        ></span
      >
    </NuxtLink>

    <button class="mobile-menu-btn mr-4 mt-2 btn btn-ghost md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div class="gap-2 mr-2 hidden md:flex">
      <NuxtLink
        to="/signin"
        class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm px-8 rounded-none"
        >sign in</NuxtLink
      >
      <NuxtLink
        to="/signup"
        class="signup-button btn btn-secondary btn-sm px-8 rounded-none"
        >sign up now</NuxtLink
      >
    </div>
  </nav>
</template>

<style>
.signup-button {
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: white;
  height: 2.4rem;
  font-family: Gilroy-Bold !important;
}

.dark-highlight {
  background: rgba(0, 0, 0, 0.3);
}

.logo-brand {
  font-family: Gilroy-Bold;
  letter-spacing: -0.1rem;
  font-size: 2.3rem;
  line-height: 0%;
  margin-left: 0.8rem;
  color: white;
}

.logo-brand-light {
  font-family: Gilroy-Regular;
  letter-spacing: -0.2rem;
  font-size: 3.2rem;
  line-height: 0%;
}

.mobile-menu-btn:hover,
.mobile-menu-btn:active {
  background: var(--secondary);
  outline: none;
}
</style>
