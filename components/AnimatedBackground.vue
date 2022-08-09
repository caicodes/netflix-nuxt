<script>
// import gsap from "gsap";
// next we animate... 
// timeline animations vs loops, etc... 
// play with it!
</script>

<template>
    <div class="md:h-screen w-full p-40 -z-10 bg-base-100 absolute overflow-hidden">
        <!-- <div class="h-[300px] w-[400px] bg-cyan-200 rounded-full blur-3xl absolute "></div> -->
        <div
            class="blur-tr h-[320px] w-full rotate-6 bg-hbo-accent rounded-full blur-3xl hue-rotate-15 absolute -top-80 -right-80 opacity-40 ">
        </div>
        <div
            class="blur-tl h-[320px] w-2/3 -rotate-12 bg-hbo-accent rounded-full blur-3xl -hue-rotate-15 absolute -top-80 -left-40 opacity-40 ">
        </div>
        <div
            class="blur-br h-[320px] w-2/3 -rotate-12 bg-hbo-accent rounded-full blur-3xl -hue-rotate-15 absolute -bottom-80 -right-40 opacity-40 ">
        </div>
        <div
            class="blur-bl h-[320px] w-2/3 rotate-12 bg-hbo-accent rounded-full blur-3xl hue-rotate-15 absolute -bottom-80 -left-40 opacity-40 ">
        </div>
        <!-- <div class="h-[300px] w-[400px] bg-hbo-accent rounded-full blur-3xl absolute top-0 right-0 z-0"></div> -->
    </div>
</template>