<template>
    <nav class="dark-highlight flex justify-between items-center py-2 fixed z-50 top-0 right-0 left-0">
        <nuxt-link to="/" class="flex items-center py-4"><span class="logo-brand">HBO<span
                    class="logo-brand-light text-secondary opacity-50 ml-0.5 ">vue</span></span>
        </nuxt-link>

        <button class="mr-4 mt-2 btn md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <div class="gap-2 mr-2 hidden md:flex">
            <button class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm px-8 rounded-full">sign
                in</button>
            <button class="signup-button btn btn-secondary btn-sm px-8 rounded-full">sign up now</button>
        </div>
    </nav>
</template>


<style>
.signup-button {
    letter-spacing: .2em;
    font-size: .8rem;
    color: white;
    height: 2.4rem;
    font-family: Gilroy-Bold !important;
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
    color: white;
}

.logo-brand-light {
    font-family: Gilroy-Regular;
    letter-spacing: -.2rem;
    font-size: 3.2rem;
    line-height: 0%;
}
</style>