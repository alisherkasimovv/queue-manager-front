<template>
  <v-container fluid>
    <v-row dense>
      <v-flex md3 xs12>
        <v-card outlined>
          <v-card-title>
            <h1 class="headline">Doktorlar ro'yhati</h1>
          </v-card-title>
          <v-card-text>
            <add-button></add-button>
            <v-simple-table :height="tableHeight">
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left" :width="width">ID</th>
                  <th class="text-left">Doktor</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in doctorList" :key="item.id" @click="selectOne(item)">
                  <td>{{ index }}</td>
                  <td>{{ item.specialization }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex offset-md-1 md7 xs12>
        <v-card v-if="doctor !== null">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                YO'NALISH MA'LUMOTLARI
                <span class="text--disabled text-sm-caption text-uppercase">{{ doctor.id }}</span>
              </div>
              <v-list-item-title class="headline mb-1">{{ doctor.specialization }}</v-list-item-title>
              <v-list-item-subtitle>{{ doctor.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn text color="orange" @click="doctor = null">Bekor qilish</v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="red" @click="deleteDoctor(doctor.id)">
              <v-icon left>mdi-delete-empty</v-icon>
              O'chirish
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";
  import AddButton from "./forms/Add"

  export default {
    name: 'Index',
    components: {AddButton},
    data() {
      return{
        doctorList: [],
        doctor: null,
        tableHeight: document.documentElement.clientHeight - 226,
        width: 50
      }
    },
    created() {
      axios.get("http://localhost:9090/doctor/get")
        .then(response => {
          this.doctorList = response.data.data.doctors;
        })
    },
    methods: {
      selectOne: function (item) {
        this.doctor = item;
      },
      deleteDoctor: function (id) {
        axios.get("http://localhost:9090/doctor/delete/" + id)
        .then(response => {
          console.log(response);
          this.$router.go();
        });
      }
    }
  };
</script>

<style scoped>

</style>
