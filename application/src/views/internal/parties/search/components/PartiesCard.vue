<template>
  <v-card class="ma-4" max-width="400" height="140" outlined :color="openRemoveConfirm ? 'error lighten-2' : ''">
    <v-card-title>
      <v-layout align-center>
        {{party.name}}
        <v-spacer></v-spacer>
        <v-btn class="mr-1" icon @click="goToUpdatePartyPage">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon @click="changeRemoveConfirmStatus">mdi-delete</v-icon>
        </v-btn>
      </v-layout>
    </v-card-title>
    <v-card-subtitle v-if="party.date_time">
      <v-icon>mdi-clock</v-icon>
      {{getFormattedDate}}
    </v-card-subtitle>
    <v-card-subtitle v-else>
      <span class="font-italic grey--text text--lighten-1">Data não definida</span>
    </v-card-subtitle>
    <v-card-text>{{party.description}}</v-card-text>
    <confirm
      :open="openRemoveConfirm"
      title="Você tem certeza disso?"
      description-prefix="Se você realizar esta ação, a festa"
      :term="party.name"
      description-suffix="será excluída permanentemente."
      rejectText="Cancelar"
      acceptText="Excluir"
      @reject="changeRemoveConfirmStatus"
      @accept="remove"/>
  </v-card>
</template>

<script>
  import dayjs from "dayjs";
  import Confirm from "../../../../commons/Confirm";
  export default {
    name: "parties-card",
    components: {Confirm},
    data() {
      return {
        openRemoveConfirm: false
      }
    },
    props: {
      party: {
        type: Object,
        required: true
      }
    },
    computed: {
      getFormattedDate() {
        return dayjs(this.party.date_time).format('DD/MM/YYYY - HH:mm');
      }
    },
    methods: {
      goToUpdatePartyPage() {
        this.$router.push({ name: "updateParty", params: {id: this.party.id} });
      },
      changeRemoveConfirmStatus() {
        this.openRemoveConfirm = !this.openRemoveConfirm;
      },
      remove() {
        this.changeRemoveConfirmStatus();
        this.$emit("remove", this.party.id);
      }
    }
  }
</script>
