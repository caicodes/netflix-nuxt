<script setup>

const FooterLinks = [
    "Privacy",
    "Do Not Sell My Personal Information",
    "Terms of Use",
    "Ad Choices",
    "Help",
    "Join the Team",
    "Press Releases",
    "Company",
    "Press Contacts",
    "HBO Max Advertising",
    "Affiliate Marketing Program",
]

const FooterActions = [
    "explore what's on",
    "movies",
    "tv shows",
    "originals",
    "free episodes",
]

const CopyrightText = '©2022 WarnerMedia Direct, LLC. All Rights Reserved. HBO Max™ is used under license.';

</script>

<template>
    <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded">
        <div class="grid grid-flow-col gap-4">
            <NuxtLink to="/" class="btn btn-ghost hover:bg-inherit hover:text-white" v-for="Link in FooterActions">{{
                    Link
            }}</NuxtLink>
        </div>
        <div class="grid grid-flow-col gap-4">
            <NuxtLink to="/" class="link link-hover" v-for="Link in FooterLinks">{{ Link }}</NuxtLink>
        </div>
        <div>
            <p>{{ CopyrightText }}</p>
        </div>
    </footer>
</template>

<style>
.btn {
    font-family: Gilroy-Bold;
    letter-spacing: .2rem;
    font-size: .8rem;
}
</style>