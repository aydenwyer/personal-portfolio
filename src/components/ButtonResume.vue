<template>
    <button :class="`border-${borderColor} text-${textColor} hover:bg-${textColor}/10`" class="border rounded-xl font-semibold py-2 px-5 text-button transition duration-300 ease-in-out"><a href="../public/aydenwyer_resume.pdf" download="AydenWyer_Resume">Resume</a></button>
</template>

<script>
    export default {
        props: ['borderColor','textColor']
    }
</script>