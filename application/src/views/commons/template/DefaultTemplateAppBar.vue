<template>
  <div>
    <v-app-bar color="primary" app dark>
      <v-app-bar-nav-icon v-if="!openMenu" @click="changeMenu"></v-app-bar-nav-icon>

      <default-template-title/>

      <v-spacer></v-spacer>

      <v-btn text @click="goToLogoutPage">
        Sair
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="openMenu" app>
      <v-list nav dense>
        <default-template-avatar/>

        <v-divider class="mb-2"></v-divider>

        <v-list-item-group>
          <v-list-item :to="{ name: 'parties'}">
            <v-list-item-icon>
              <v-icon>mdi-cake</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Minhas festas</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <v-btn block large text @click="changeMenu">
          <v-icon>mdi-chevron-left</v-icon>
          Fechar menu
        </v-btn>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import DefaultTemplateTitle from "./DefaultTemplateTitle";
  import DefaultTemplateAvatar from "./DefaultTemplateAvatar";
  import {mutations} from "@/constants";
  export default {
    name: "default-template-app-bar",
    components: {DefaultTemplateTitle, DefaultTemplateAvatar},
    data() {
      return {
        openMenu: true
      }
    },
    methods: {
      changeMenu() {
        this.openMenu = !this.openMenu;
      },
      goToLogoutPage() {
        this.$store.commit(mutations.SET_USER, null);
        this.$router.push({ name: "login" });
      }
    }
  };
</script>
