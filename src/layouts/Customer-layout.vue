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
            justify="center"
        >
            <v-card v-for="item in doctorList" :key="item.id" outlined class="ma-3" min-width="15%" @click="queue(item.id)" elevation="4">
              <v-card-title class="text-h3">{{ item.specialization }}</v-card-title>
              <v-card-text>{{ item.description }}</v-card-text>
            </v-card>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
        color="indigo"
        app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="heading">Ro'yat bileti</v-card-title>

        <v-card-text>
          <p>Ro'yhat raqami:</p>
          <p class="text-h3 text-center">{{ info.counter }}</p>
          <p>Tanlangan shifokor:</p>
          <p class="text-h4">{{ info.docSpec }}</p>
          <p>Vaqt:</p>
          <p class="text-h4">{{ info.time }}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Yopish
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Customer',
    data() {
      return {
        doctorList: [],
        info: {
          docSpec: '',
          time: '',
          counter: 0
        },
        dialog: false,
      }
    },
    created() {
      axios.get("http://localhost:9090/doctor/get")
      .then(response => {
        this.doctorList = response.data.data.doctors;
      })
    },
    methods: {
      queue: function(id) {
        axios.get(`http://localhost:9090/queue/${id}`)
        .then(response => {
          this.info = {
            docSpec: response.data.data.doctor.specialization,
            time: response.data.data.currentOrderDate,
            counter: response.data.data.queueCounter
          }
          this.dialog = true;
        });
      },
    }
  };
</script>

<style scoped>

</style>
