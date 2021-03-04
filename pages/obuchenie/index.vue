<template>
<div>
  <h1>Обучение</h1>
  <b-row align-h="center">
      <b-col>
        <b-card
          title="Старт перманент.1"
          img-src="~assets/img/girls/brows-1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            
          </b-card-text>

          <b-button href="#" variant="primary">Подробнее</b-button>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Старт перманент.2"
          img-src="~assets/img/girls/lips-2.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          classё="mb-2"
        >
          <!-- <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text> -->

          <b-button href="#" variant="primary">Подробнее</b-button>
        </b-card>
      </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    head() {
    return {
      title: "HELLO Permanent",
      meta: [
        {
          name: "description",
          content: "Обучение перманентному макияжу в Сочи",
        },
      ],
    };
  },
}
</script>

<style>

</style>