<template>
  <section class="max-w-5xl mx-auto px-4">
    <Navbar id="home"/>
    <Hero />
    <Technologies/>
    <Projects id="projects"/>
    <Contact id="contact"/>
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

<style>
body {
  overflow-x: hidden;
}
</style>