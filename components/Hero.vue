<template>
    <section id="top" class="h-screen flex lg:pb-20 pb-10">
        <!-- movie hero main container -->
        <div class="flex flex-col w-full justify-center">
            <div class="text-xl p-4 md:text-2xl text-center"> Now streaming blockbuster movies, epic originals, and
                addictive series...</div>
            <!-- movie tile conveyor belt container -->
            <div class="conveyor-belts overflow-y-auto">
                <div id="tray-1" class="w-full mb-3 flex gap-3 -ml-28">
                    <!-- movie tiles tray one -->
                    <img v-for="pic in trayPics1" :src="`./images/tiles/${pic}`" class="w-96" />
                </div>
                <!-- movie tile conveyor belt tray two -->
                <div id="tray-2" class="w-full mb-3 flex gap-3">
                    <!-- movie tiles tray two -->
                    <img v-for="pic in trayPics2" :src="`./images/tiles/${pic}`" class="w-96" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'

import { trayPics1, trayPics2 } from '~/constants/'

export default {
    mounted() {
        this.scrollTrays()
    },

    data() {
        return {
            trayPics1: trayPics1,
            trayPics2: trayPics2,
        }
    },
    methods: {

        scrollTrays() {
            gsap.to("#tray-1", { x: -10500, duration: 228, ease: 'linear', repeat: -1 });
            gsap.to("#tray-2", { x: -10500, duration: 168, ease: 'linear', repeat: -1, });
        }
    }
}
</script> 
