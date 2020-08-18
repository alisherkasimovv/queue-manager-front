<template>
  <v-app>
    <v-navigation-drawer app dark temporary v-model="drawer">
      <v-list-item-group>
        <v-list v-for="link in links" :key="link.title">
            <v-list-item>
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-list-item-group>

    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title>Admin panel</v-toolbar-title>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- If using vue-router -->
        <admin-tab></admin-tab>
    </v-main>
  </v-app>
</template>

<script>
  import AdminTab from "../components/admin/Index"
  export default {
    components: {
      AdminTab
    },
    name: 'Admin',
    data() {
      return {
        // main drawer object
        drawer: false,
      }
    },
    computed: {
      links () {
        return [
          {title: 'Doktorlar ro\'yhati bilan ishlash', icon: 'mdi-alpha-s-circle-outline', url: '/admin'},
          {title: 'Asosiy oynaga o\'tish', icon: 'mdi-alpha-s-circle-outline', url: '/customer'}
        ]
      }
    },
  };
</script>

<style scoped>

</style>
