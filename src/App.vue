<template>
  <section class="max-w-5xl mx-auto px-4">
    <Navbar />
    <Hero />
    <Technologies />
    <Projects />
    <Contact />
  </section>
  <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Hero from './sections/Hero.vue'
  import Technologies from './components/Technologies.vue'
  import Projects from './sections/Projects.vue'
  import Contact from './sections/Contact.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Navbar,
      Hero,
      Technologies,
      Projects,
      Contact,
      Footer
    }
  }
  
</script>