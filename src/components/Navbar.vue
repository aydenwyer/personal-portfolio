<template>
    <nav class="flex flex-row justify-center items-center py-10 md:justify-between">
        <NavLinks text-color="text-primary"/>
        <NavIcons :icon-fill="iconFill" :border-color="borderColor" :text-color="textColor" />
    </nav>
</template>

<script>
    import NavIcons from "../components/Navicons.vue"
    import Hamburger from "../components/Hamburger.vue"
    import NavLinks from "../components/Navlinks.vue"

    export default {
        components: {
            NavIcons,
            Hamburger,
            NavLinks
        },
        data() {
            return {
                iconFill: '#273266',
                borderColor: 'primary',
                textColor: 'primary'
            }
        }
    }
</script>