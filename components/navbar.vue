<template>    
<div>
  <b-navbar toggleable="lg" fixed="top">
    <b-navbar-brand><nuxt-link class="nav-link" to='/'>Pixel Studio Sochi</nuxt-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <NuxtLink class="nav-link" to="/blog">Блог</NuxtLink>
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
          <b-dropdown-item href="#">Profile</b-dropdown-item>
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
  background-color: $grey
  color: $olive
</style>