<template>
  <div>
    <h1>Перманентный макияж</h1>
    <b-row align-h="center">
      <b-col>
        <b-card
          title="Брови"
          img-src="~assets/img/girls/brows-1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >

          <nuxt-link to="permanentnyi-makiyazh/brovi">
            <b-button variant="primary">Подробнее</b-button>
          </nuxt-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Губы"
          img-src="~assets/img/girls/lips-2.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          classё="mb-2"
        >

          <nuxt-link to="permanentnyi-makiyazh/guby">
            <b-button variant="primary">Подробнее</b-button>
          </nuxt-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Веки"
          img-src="~assets/img/girls/brows-2.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >

          <nuxt-link to="permanentnyi-makiyazh/veki">
            <b-button variant="primary">Подробнее</b-button>
          </nuxt-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Перманентный макияж в Сочи",
      meta: [
        {
          name: "description",
          content: "Услуги перманентного макияжа в Сочи",
        },
      ],
    };
  },
};
</script>

<style lang="sass">

</style>
