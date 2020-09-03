<template>
  <div>
    <navbar />
    <b-container>
      <div class="content-area">
        <Nuxt />
      </div>
    </b-container>
  </div>
</template>

<style lang="sass">
@import '~assets/sass/_variables.sass'
.content-area
  margin-top: 80px
  width: 100%
  text-align: left
.btn-primary
  background-color: $bej_dark !important
  border: none
</style>
