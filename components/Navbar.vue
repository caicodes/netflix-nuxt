<template>
    <nav class="dark-highlight flex justify-between items-center p-2 fixed top-0 right-0 left-0">
        <nuxt-link to="/" class="flex items-center"><span class="logo-brand">HBO<span
                    class="logo-brand-light text-secondary opacity-50 ml-0.5 ">vue</span></span>
        </nuxt-link>
        <div class="flex gap-2 mr-2">
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