<template>
    <nav class="flex flex-row justify-center items-center py-10 md:justify-between">
        <NavLinks text-color="text-primary"/>
        <NavIcons :icon-fill="iconFill" :outline-color="outlineColor" :text-color="textColor" />
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
        setup() {
            return {
                iconFill: '#273266',
                outlineColor: 'primary',
                textColor: 'primary'
            }
        }
    }
</script>