<template>
    <div class="relative inline-block transition ease-in-out delay-150 hover:-translate-y-1 duration-700 rounded-xl overflow-hidden">
        <div class="w-full h-1 absolute z-10 bg-gradient-to-b from-white/40"></div>
        <a :href="link"><button class="w-full transition ease-in-out bg-gradient-to-r from-gradient-purple to-gradient-blue/80 hover:bg-gradient-purple/50 duration-300 px-10 py-3 text-white font-semibold text-button shadow-md shadow-primary/25">Get in touch</button></a>
    </div>
</template>

<script>
    export default {
        props: ['link']
    }
</script>