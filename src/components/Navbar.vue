<template>
    <nav class="flex flex-row justify-end items-center py-10 md:justify-between">
        <NavLinks text-color="text-primary"/>
        <NavIcons color="#273266"/>
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
        }
    }
</script>