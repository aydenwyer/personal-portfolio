<template>
    <div class="max-w-[480px] w-full text-left bg-white rounded-lg p-2 shadow-2xl shadow-primary/20">
        <div class="bg-[#F8F8F8] rounded-md border-[.75px] border-[#E0E0E0] p-9">
            <form class="flex flex-col w-full  gap-5">
                <div class="flex flex-col">
                    <label class="text-sm text-primary font-regular mb-1" for="name">Full Name</label>
                    <input class="text-sm text-primary font-regular py-2 px-3 rounded-sm outline outline-1 outline-[#E0E0E0]" name="name" type="text">
                </div>
                <div class="flex flex-col">
                    <label class="text-sm text-primary font-regular mb-1" for="email">Email</label>
                    <input class="text-sm text-primary font-regular py-2 px-3 rounded-sm outline outline-1 outline-[#E0E0E0]" name="email" type="email" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-sm text-primary font-regular mb-1" for="message">Message</label>
                    <textarea rows="5" class="text-sm text-primary font-regular py-2 px-3 rounded-sm outline outline-1 outline-[#E0E0E0] resize-none" name="message" type="text" required></textarea>
                </div>
                <Button />
            </form>
        </div>
    </div>
</template>

<script>
    import Button from '../components/Button.vue'

    export default {
        components: {
            Button
        }
    }

</script>