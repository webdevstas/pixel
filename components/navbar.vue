<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <nuxt-link exact class="nav-link" to="/">
        <img class="header-logo" src="~/assets/img/logo.svg" alt />
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/permanentnyi-makiyazh" active-class="nuxt-link-active"
            >Перманентный макияж</b-nav-item
          >
          <b-nav-item to="/obuchenie" active-class="nuxt-link-active"
            >Обучение</b-nav-item
          >
          <b-nav-item to="/tseny" active-class="nuxt-link-active"
            >Цены</b-nav-item
          >
          <b-nav-item-dropdown right text="Отзывы">
            <b-dropdown-item
              to="/otzyvy/obuchenie-tatuazhu"
              active-class="nuxt-link-active"
              >Об обучении</b-dropdown-item
            >
            <b-dropdown-item
              to="/otzyvy/tatuazh"
              active-class="nuxt-link-active"
              >Клиентов</b-dropdown-item
            >
          </b-nav-item-dropdown>
<!--          <b-nav-item to="/aktsii" active-class="nuxt-link-active"-->
<!--            >Акции</b-nav-item-->
<!--          >-->
<!--          <b-nav-item-dropdown right text="О нас">-->
<!--            <b-dropdown-item exact to="/o-nas" active-class="nuxt-link-active"-->
<!--              >О компании</b-dropdown-item-->
<!--            >-->
<!--            <b-dropdown-item to="/o-nas/mastera" active-class="nuxt-link-active"-->
<!--              >Наши мастера</b-dropdown-item-->
<!--            >-->
<!--          </b-nav-item-dropdown>-->
          <b-nav-item to="/kontakty" active-class="nuxt-link-active"
            >Контакты</b-nav-item
          >
<!--          <b-nav-item to="/blog">Блог</b-nav-item>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/_variables.sass'
.navbar-brand a
  color: $pink
.navbar
  color: #fff
  position: fixed
  z-index: 1002
  backdrop-filter: blur(12px)
  background-color: rgba(0,0,0,.2)
  padding: 0
.header-logo
  width: 130px
.nuxt-link-active
  color: #000 !important
.dropdown-menu
  background-color: rgba(255,255,255, .5) !important
.dropdown-item:active
  background-color: $pink !important
.nav-item
  font-size: 18px
.navbar-light .navbar-nav .nav-link .dropdown-toggle span
  color: #fff
@media (max-width: 991px)
  .navbar-collapse
    background-color: rgba(255,255,255, .95)
    padding: 10px
    border-radius: 5px
</style>
