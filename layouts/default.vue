<template>
  <div>
    <navbar />
    <b-container fluid>
      <div class="content-area">
        <Nuxt />
      </div>
    </b-container>
    <div class="content-area__bg"></div>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap')
@import '~assets/sass/_variables.sass'
body
  font-family: 'Philosopher', sans-serif
  background-image: url('~assets/img/sea.jpg')
  background-size: cover
.content-area
  position: relative
  margin-top: 100px
  height: calc(100vh - 120px)
  padding: 10px
  z-index: 1000
.content-area__bg
  position: absolute
  z-index: 5
  margin-top: 100px
  background-image: url('~assets/img/sea.jpg')
  background-size: cover
  height: calc(100vh - 120px)
  filter: blur(8px)
  width: 98%
  left: 1%
  top: 0
.btn-primary
  background-color: $bej_dark !important
  border: none
.form-control:focus, .btn-primary:focus
  border-color: $pink
  box-shadow: 0 0 0 0.2rem rgba(177, 102, 167, 0.25)

</style>

  