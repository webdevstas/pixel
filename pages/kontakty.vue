<template>
  <div>
    <h1>Контакты</h1>
    <b-row>
      <b-col md="6">
        <img src="~/assets/img/evrop_bc.jpeg" alt="" class="contacts-img">
      </b-col>
      <b-col md="6">
        <b-card title="HELLO Permanent">
          <div class="contacts-text">
            <div class="contacts-address">
              Город-курорт Сочи, <br> улица Несебрская 6, <br> БЦ "Европейский", <br> офис 311
            </div>
            <div class="contacts-phone__block">
              <a href="tel:+79676454648">+7-967-645-46-48</a>
              <a href="mailto:hello.spirina@mail.ru">hello.spirina@mail.ru</a>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Контакты HELLO Permanent",
      meta: [
        {
          name: "description",
          content: "Контакты школы-студии по перманентному макияжу Hello Permanent в Сочи",
        },
      ],
    };
  },
}
</script>

<style lang="sass">
.contacts
  &-img
    max-width: 100%
    border-radius: 0.25rem

  &-text
    text-transform: none
    display: flex
    flex-direction: row
    justify-content: space-between

  &-address
    text-transform: none
    text-align: left

  &-phone__block
    display: flex
    flex-direction: column
</style>
