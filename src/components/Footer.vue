<template>
    <section class="bg-primary pt-20 pb-10">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex flex-row justify-end items-center md:justify-between mb-16">
                <NavLinks text-color="text-white"/>
                <NavIcons color="#ffffff"/>
            </div>
            <p class="text-gray-400 text-sm text-center">© 2023 Ayden Wyer. All Rights Reserved.</p>
        </div>
    </section>
</template>

<script>
    import NavLinks from './Navlinks.vue'
    import NavIcons from './Navicons.vue'

    export default {
        components: {
            NavLinks,
            NavIcons
        }
    }
</script>