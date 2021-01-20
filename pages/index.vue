<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">setup-app-nuxt</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

const jhony: tipo = 'tipo1'
console.log(jhony)
export default Vue.extend({
  head() {
    return {
      title: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        { hid: 'robots', name: 'robots', content: 'follow' },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'empresa,desenvolvimento,desenvolvimento digital, serviços, sites, aplicativos, software, marketing, marketing digital,Ser digital e essencial,desenvolvimento de sites, desenvolvimento de aplicativos,portfólio, Desenvolvimento Mobile,artigos, Serviços',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: '',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: '',
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
          content: '0',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: './assets/logo-jhony.svg',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '',
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: '',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: '',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: '',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '../favicon.png',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: '',
        },
      ],
    }
  },
})
</script>
