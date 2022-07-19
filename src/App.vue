<template>
  <div class="conteudo">
    <NavBar v-on:click="open" />
    <PageContent  />
    <MenuLateralMobile v-on:click="close" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PageContent from "./components/PageContent.vue";
import MenuLateralMobile from "./components/MenuLateralMobile.vue"

export default {
  name: "App",
  components: {
    NavBar,
    PageContent,
    MenuLateralMobile
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body{
  font-family: "Manrope", sans-serif;
  src: url('./assets/fonts/Epilogue-VariableFont_wght.ttf');
  font-style: normal;
  background-color: hsl(0, 0%, 98%); 
}

</style>
