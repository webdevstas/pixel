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
  background-image: url('~assets/img/gold.jpg')
  background-size: cover
  background-attachment: fixed
.content-area
  position: relative
  margin-top: 100px
  height: auto
  padding: 10px
  z-index: 1000
  &__bg
    position: fixed
    z-index: 5
    margin-top: 80px
    background-size: cover
    background-attachment: fixed
    height: calc(100vh - 80px)
    backdrop-filter: blur(12px) grayscale(50%)
    width: 100%
    top: 0
.btn-primary
  background-color: $bej_dark !important
  border: none
.form-control:focus, .btn-primary:focus
  border-color: $pink
  box-shadow: 0 0 0 0.2rem rgba(177, 102, 167, 0.25)
h1 
  text-align: center
  margin-bottom: 30px
.card
  margin: auto
  text-align: center
  background-color: rgba(255,255,255, .2)
  text-transform: uppercase
  transition: 1s
  filter: saturate(75%)
  &:hover
    filter: saturate(100%)
p
  color: #000
 
</style>

  