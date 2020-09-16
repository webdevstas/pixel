<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <nuxt-link exact class="nav-link" to="/">
        <img class="header-logo" src="~assets/img/logo.png" alt />
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/uslugi-studii" active-class="nuxt-link-active">Услуги студии</b-nav-item>
            <b-nav-item to="/obuchenie" active-class="nuxt-link-active">Обучение</b-nav-item>
            <b-nav-item to="/tseny" active-class="nuxt-link-active">Цены</b-nav-item>
            <b-nav-item-dropdown 
            right
            text="Отзывы"
            >
              <b-dropdown-item to="/otzyvy/obuchenie-tatuazhu" active-class="nuxt-link-active">Об обучении</b-dropdown-item>
              <b-dropdown-item to="/otzyvy/tatuazh" active-class="nuxt-link-active">Клиентов</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/aktsii" active-class="nuxt-link-active">Акции</b-nav-item>
            <b-nav-item-dropdown 
            right
            text="О нас"
            >
              <b-dropdown-item exact to="/o-nas" active-class="nuxt-link-active">О компании</b-dropdown-item>
              <b-dropdown-item to="/o-nas/mastera" active-class="nuxt-link-active">Наши мастера</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/kontakty" active-class="nuxt-link-active">Контакты</b-nav-item>
            <b-nav-item to="/blog">Блог</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Искать</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="sass" scoped>
@import '~assets/sass/_variables.sass'
.navbar-brand a
  color: $pink
.nav-link
  color: #fff
.navbar
  background-color: $bej_light
  color: $olive
.header-logo
  width: 220px
.nuxt-link-active
  color: $pink !important
.dropdown-item:active
  background-color: $pink !important
.nav-item
  font-size: 18px
</style>