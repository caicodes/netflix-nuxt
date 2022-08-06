<template>
    <main class="grid place-items-center h-screen text-secondary text-4xl font-bold gap-4">
        <div class="flower flex gap-2 mt-36 lowercase">Hello 🌼 daisyUI<div class="celebrate">🎉</div>
        </div>
        <div class="hello">🌼</div>
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
            gsap.to(".hello", { rotation: -333, y: -333, duration: 2.618, ease: 'power4.out' });
            gsap.to(".hello", { opacity: 0, duration: 2, scale: 3, ease: "expoScale(1, 3)" });
            gsap.fromTo(".flower", { opacity: 0 }, { y: -50, opacity: 1, duration: 2, delay: .5, scale: 3, ease: "expoScale(1, 3)" });
            gsap.to(".celebrate", { rotation: 720, delay: 2.3, scale: 2, opacity: 0, duration: .34, ease: "expoScale(1, 2)" })
        }
    }
}
</script> 