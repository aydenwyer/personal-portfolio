<template>
    <a :class="`text-${textColor} border-${outlineColor}`" class="border border-primary rounded-xl font-semibold py-2 px-5 text-button transition duration-300 ease-in-out" href="../aydenwyer_resume.pdf" download="AydenWyer_Resume">Resume</a>
</template>

<script>
    export default {
        props: ['outlineColor','textColor']
    }
</script>