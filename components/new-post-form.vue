<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-row >
        <b-col>
      <b-form-group
        id="input-group-1"
        label="Заголовок:"
        label-for="input-1"
        description="Название поста"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="Название поста"
        ></b-form-input>
      </b-form-group>
      </b-col>
      <b-col>
      <b-form-group
        id="input-group-2"
        label="Alias:"
        label-for="input-2"
        description="url поста"
      >
        <b-form-input
          id="input-2"
          v-model="form.alias"
          type="text"
          required
          placeholder="url поста"
        ></b-form-input>
      </b-form-group>
      </b-col>
       <b-col>
      <b-form-group
        id="input-group-3"
        label="Текст:"
        label-for="input-3"
        description="Текст поста"
      >
        <b-form-textarea
      id="textarea"
      v-model="form.body"
      placeholder="Введите текст поста..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>
      </b-col>
      </b-form-row>
      <b-form-row>
      <b-col><b-button type="submit" variant="primary" @click="onSubmit" >Публиковать</b-button></b-col>
      <b-col><b-button type="reset" variant="danger" @click ="onReset">Сброс</b-button></b-col>
      </b-form-row>
    </b-form>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        alias: "",
        body: "",
      }
    };
  },
  methods: {
      onSubmit: async function (){
        try {
          await this.$axios.put('http://localhost:33310/api/posts', this.form)
        } catch (e) {
          throw e
        }
      },
    onReset: function(){
      this.form.title = ''
      this.form.alias = ''
      this.form.body = ''
    }
  }
};
</script>

<style>
</style>