<script setup lang="ts">
import { nav_logo } from "@your-org/web-common";
import { landing_app as strings } from "./RootApp.strings";
import { useReverseT } from "./i18n";
const { t } = useReverseT();
</script>

<template>
  <v-app>
    <v-app-bar>
      <img id="nav-logo" :src="nav_logo" alt="Logo" class="mt-2" />
      <v-app-bar-title>
        {{ t(strings.title) }}
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
