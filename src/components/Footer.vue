<template>
    <section class="bg-primary pt-20 pb-10">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex flex-row justify-center items-center md:justify-between mb-16">
                <NavLinks text-color="text-white"/>
                <NavIcons :icon-fill="iconFill" :border-color="borderColor" :text-color="textColor"/>
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
        },
        setup() {
            return {
                iconFill: '#ffffff',
                borderColor: 'white',
                textColor: 'white'
            }
        }
    }
</script>