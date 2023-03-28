<template>
    <section class="text-center flex flex-col items-center py-20">
        <p class="font-regular text-lg text-primary pb-6">The <span class="font-semibold underline">technologies</span> I know best.</p>
        <div class="grid grid-cols-2 gap-12 md:gap-20 lg:grid-cols-4">
            <div class="flex flex-row gap-3 items-center place-content-center" v-for="technology in Technologies">
                <img :src="technology.image" alt="">
                <p class="text-2xl font-semibold text-primary">{{ technology.text }}</p>
            </div>
        </div>
    </section>
</template>
    
<script>
    export default {
        setup() {
            let Technologies = [
                {image: "../../html_icon.svg", text: "HTML"},
                {image: "../../js_icon.svg", text: "JavaScript"},
                {image: "../../tailwind_icon.svg", text: "Tailwind"},
                {image: "../../vue_icon.svg", text: "Vue"},
            ]

            return{Technologies}
        }
    }
</script>