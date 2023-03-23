<template>
    <section class="py-20">
        <div class="flex flex-row w-full justify-center items-center text-center md:justify-between md:text-left">
            <div class="text-primary">
                <p class="text-5xl font-semibold  mb-6">Want to chat?</p>
                <p class="text-lg font-regular">Directly send me an email to start a project, or just say what's up! I don't bite.</p>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    </section>
    
</template>

<script>
    import ContactForm from '../components/ContactForm.vue'

    export default {
        components: {
            ContactForm
        }
    }
</script>