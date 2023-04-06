<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div class="flex flex-col w-full lg:flex-row">
          <div class="avatar">
            <div class="w-25 rounded">
              <nuxt-link to="https://nuxt.com/"><img src="../assets/images/nuxt.png"/></nuxt-link>
            </div>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="avatar">
            <div class="w-25 rounded">
              <nuxt-link to="https://tailwindcss.com/docs/installation"><img src="../assets/images/tailwind.png"/>
              </nuxt-link>
            </div>
          </div>
        </div>
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
          This website is a website created using the <span class="font-bold text-accent"><nuxt-link
            to="https://nuxt.com/">Nuxt JS 3</nuxt-link></span> framework which is based on <span
            class="font-bold text-accent"><nuxt-link
            to="https://vuejs.org/">Vue JS</nuxt-link></span>. This website is also equipped with the <span
            class="font-bold text-accent-content"><nuxt-link
            to="https://tailwindcss.com/docs/installation">Tailwind CSS</nuxt-link></span> and <span
            class="font-bold text-accent-content"><nuxt-link to="https://daisyui.com/">DaisyUI</nuxt-link></span>
          to enhance the appearance of the web.
        </p>
        <nuxt-link to="">
          <button class="btn btn-wide bg-accent text-accent-content">Source Code</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home"
    }
  }
}
</script>

<style>

</style>
  