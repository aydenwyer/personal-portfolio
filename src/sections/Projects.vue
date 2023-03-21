<template>
    <section class="py-20 text-center">
        <p class="text-5xl font-semibold text-primary mb-16">My Current Projects</p>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="shadow-2xl shadow-primary/20 rounded-lg overflow-hidden flex flex-col" v-for="project in ProjectsData">
                <ProjectsItem
                    :name="project.name"
                    :description="project.description"
                    :image="project.image"
                    :codeLink="project.codeLink"
                    :previewLink="project.previewLink"
                    :stack="project.stack"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import ProjectsItem from '../components/ProjectsItem.vue'
    import ProjectsData from '../ProjectsData'

    export default {
        components: {
            ProjectsItem
        },
        data() {
            return {
                ProjectsData
            }
        },
        props: ["image", "stack", "name", "description", "codeLink", "previewLink"]

    }
</script>