<template>
  <v-app id="inspire">

    <v-app-bar
        app
        color="indigo"
        dark
    >
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
          class="fill-height"
          fluid
      >
        <v-row
            align="center"
            justify="center"
        >
          <div class="text-center">
            <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
        color="indigo"
        app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Customer',
  };
</script>

<style scoped>

</style>
