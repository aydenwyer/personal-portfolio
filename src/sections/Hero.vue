<template>
    <section class="py-20">
        <GradientCircles />
        <div class="flex flex-row w-full justify-center items-center text-center md:justify-between md:text-left">
            <div class="text-primary">
                <p class="text-2xl font-medium">Hello, my name is</p>
                <h1 class="text-h1 font-semibold mb-6">Ayden Wyer</h1>
                <p class="text-lg font-regular mb-12">I'm a <span class="font-semibold underline">designer</span> and <span class="font-semibold underline">software developer</span>.</p>
                <Button link="#contact"/>
            </div>
            <div class="hidden md:block">
                <img src="../../hero_graphic.svg" alt="" class="shadow-2xl shadow-primary/20">
            </div>
        </div>
    </section>
</template>

<script>
    import Button from '../components/Button.vue'
    import GradientCircles from '../components/GradientCircles.vue'

    export default {
        components: {
            Button,
            GradientCircles,
        }
    }    
</script>