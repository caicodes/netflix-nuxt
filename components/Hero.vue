<template>
    <section id="top" class="h-screen flex lg:pb-20 pb-10">
        <!-- movie treadmill container -->
        <div class="flex flex-col w-full justify-center">
            <div class="text-xl p-4 md:text-2xl text-center"> Now streaming blockbuster movies, epic originals, and
                addictive series</div>
            <!-- movie treadmill tray one -->
            <div class="treadmill overflow-y-auto">
                <div id="tray-1" class="w-full mb-3 flex gap-3 -ml-28">
                    <!-- movie tiles -->
                    <template v-for="i in 3">
                        <template v-for="n in 28">
                            <img v-if="n + 14 <= 28" :src="`/images/tiles/tile_${n + 14}.jpg`" class="w-96 rounded" />
                        </template>
                    </template>

                    <img src="@/images/tiles/tile_0.jpg" class="w-96" />
                </div>
                <!-- movie treadmill tray two -->
                <div id="tray-2" class="w-full mb-3 flex gap-3">
                    <template v-for="i in 3">
                        <template v-for="n in 28">
                            <img v-if="n + 14 <= 28" :src="`/images/tiles/tile_${n}.jpg`" class="w-96 rounded" />
                        </template>
                    </template>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import gsap from 'gsap'


export default {
    mounted() {
        this.scrollTrays()
    },

    methods: {

        scrollTrays() {
            gsap.to("#tray-1", { x: -10500, duration: 228, ease: 'linear', repeat: -1 });
            gsap.to("#tray-2", { x: -10500, duration: 168, ease: 'linear', repeat: -1, });
        }
    }
}
</script> 
