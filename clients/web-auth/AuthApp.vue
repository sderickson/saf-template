<template>
  <v-app>
    <v-app-bar title="Auth SPA">
      <template #prepend>
        <img
          id="nav-logo"
          :src="nav_logo"
          alt="Logo"
          class="ml-4"
          height="40"
        />
      </template>
      <template #append>
        <v-btn href="http://docker.localhost/">Go back</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container class="mt-8">
        <v-row>
          <v-spacer />
          <v-col cols="12" md="10" lg="6" xl="4">
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </v-col>
          <v-spacer />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { nav_logo } from "@your-org/web-common";
</script>

<style scoped></style>
