<template>
  <Head>
    <title>TailNuxt</title>
  </Head>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="link in links">
            <nuxt-link :to="link.to"> {{ link.label }} </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <nuxt-link to="/home" class="btn btn-ghost normal-case text-xl">Tail <span class="text-accent">Nuxt</span></nuxt-link>
    </div>
    <div class="navbar-end">
      <select class="select w-full max-w-xs" v-model="colorMode.preference">
        <option disabled selected>Theme</option>
        <option v-for="theme of themes" :key="theme">{{ theme }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
</script>

<script>
export default {
  name: 'AppHeader',

  data() {
    return {
      isOpen: false,
      mobileMenuOpen: false,
      menuItems: [
        {title: 'Home', url: '/home', isActive: false},
        {title: 'About', url: '/about', isActive: false},
        {title: 'Contact', url: '/contact', isActive: false},
      ],
      links: [
        {id: 1, to: "/home", label: "Home"},
        {id: 2, to: "/about", label: "About"},
        {id: 3, to: "/contact", label: "Contact"}
      ]
    }
  },
}
</script>

<style scoped>

</style>

