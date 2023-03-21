<template>
    <div class="h-44 overflow-hidden">
        <img :src="image"
        alt="Project"
        class="object-cover"
        >
    </div>
    <div class="p-6 flex flex-col gap-6">
        <div class="flex flex-row gap-2">
            <div class="bg-accent-blue/30 border border-accent-blue rounded-full px-3.5 text-accent-blue" v-for="lang in stack">{{lang}}</div>
        </div>
        <div>
            <p class="text-2xl font-semibold text-primary mb-3 text-left">{{name}}</p>
            <p class="text-base text-primary font-regular text-left">{{description}}</p>
        </div>
        <div class="flex flex-row gap-6">
            <a class="text-button font-semibold text-primary hover:text-gradient-blue duration-300 ease-in-out" :href="codeLink">Code</a>
            <a class="text-button font-semibold text-primary hover:text-gradient-blue duration-300 ease-in-out" :href="previewLink">Preview</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["image", "stack", "name", "description", "codeLink", "previewLink"]
    }
</script>