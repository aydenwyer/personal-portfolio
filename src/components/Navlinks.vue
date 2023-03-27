<template>
    <ul class="hidden md:flex flex-row items-center gap-16">
        <li v-for="link in Links"><a :class="textColor" class="font-medium text-lg hover:text-gradient-blue duration-300 ease-in-out" :href="link.link">{{link.name}}</a></li>
    </ul>
</template>

<script>
    export default {
        setup() {
            let Links = [
                {name: "Home", link: "#home"},
                {name: "Projects", link: "#projects"},
                {name: "About", link: "#about"},
                {name: "Contact", link: "#contact"},
            ]
            
            return{Links}
        },
        props: ['textColor']
    }
</script>