<script setup>
import { FooterLinks, FooterActions, CopyrightText } from '~~/constants';
</script>

<template>



    <footer class="footer footer-center p-4 md:p-8 lg:p-12 bg-base-100 text-base-content ">

        <div class="flex flex-wrap justify-center">
            <NuxtLink to="/" class="footer-links btn btn-ghost hover:bg-inherit hover:text-white"
                v-for="Link in FooterActions">{{
                        Link
                }}</NuxtLink>
        </div>
        <div class="flex flex-wrap justify-center text-xs">
            <NuxtLink to="/" class="link link-hover whitespace-nowrap m-2 " v-for="Link in FooterLinks">{{ Link }}
            </NuxtLink>
        </div>
        <div>
            <p class="text-xs text-primary/80">{{ CopyrightText }}</p>
        </div>

    </footer>




</template>

<style>
.btn {
    font-family: Gilroy-Bold;
    letter-spacing: .2rem;
    font-size: .8rem;
}

.footer-links {
    color: var(--primary) !important;
}

.footer-links:hover {
    color: white !important;
}
</style>