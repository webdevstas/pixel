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
  margin-top: 85px
.btn-primary
  background-color: $bej_dark !important
  border: none
.form-control:focus, .btn-primary:focus
  border-color: $pink
  box-shadow: 0 0 0 0.2rem rgba(177, 102, 167, 0.25)
</style>
