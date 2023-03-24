<template>
    <div class="max-w-[480px] w-full text-left bg-white rounded-lg p-2 shadow-2xl shadow-primary/20">
        <div class="bg-[#F8F8F8] rounded-md border-[.75px] border-[#E0E0E0] p-9 flex items-center justify-center">
            <form ref="form" @submit.prevent="sendEmail" class="flex flex-col w-full gap-5 transition ease-in-out duration-300" :class="emailSent ? '' : 'opacity-0'">
                <div class="flex flex-col">
                    <label class="text-sm text-primary font-regular mb-1" for="user_name">Full Name</label>
                    <input class="text-sm text-primary font-regular py-2 px-3 rounded-sm outline outline-1 outline-[#E0E0E0]" name="user_name" type="text">
                </div>
                <div class="flex flex-col">
                    <label class="text-sm text-primary font-regular mb-1" for="user_email">Email</label>
                    <input class="text-sm text-primary font-regular py-2 px-3 rounded-sm outline outline-1 outline-[#E0E0E0]" name="user_email" type="email" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-sm text-primary font-regular mb-1" for="message">Message</label>
                    <textarea rows="5" class="text-sm text-primary font-regular py-2 px-3 rounded-sm outline outline-1 outline-[#E0E0E0] resize-none" name="message" type="text" required></textarea>
                </div>
                <Button type="submit" />
            </form>
            <div class="absolute text-center text-xl md:text-2xl font-regular text-primary" v-if="!emailSent">Thanks for the email!<br>I will get back to you shortly.</div>
        </div>
    </div>
</template>

<script>
    import Button from '../components/Button.vue'
    import emailjs from '@emailjs/browser';

    export default {
        components: {
            Button
        },
        data() {
            return {
                emailSent: true,
            }
        },
        methods: {
            sendEmail() {
                emailjs.sendForm('service_rzo8f9t', 'template_pzc2akc', this.$refs.form, 'P_vPwYNY6Rl8xkASv')
                    .then((result) => {
                        console.log('SUCCESS!', result.text);           
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    });
                this.$refs.form.reset();
                this.emailSent = !this.emailSent;
            }
        }
    }
</script>