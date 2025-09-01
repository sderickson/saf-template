<script setup lang="ts">
import { getProfile } from "@saflib/auth";
import { useQuery } from "@tanstack/vue-query";
import { authLinks } from "@saflib/auth-links";
import { linkToProps } from "@saflib/links";

const { data: profile } = useQuery(getProfile());
</script>

<template>
  <v-container>
    <div>
      <h1>Stub Page</h1>
      <div>
        Delete this file once you've added a page with:
        <v-sheet elevation="1" color="grey-lighten-3" class="pa-4 my-8">
          <pre>
cd clients/web-root
npm exec saf-workflow kickoff add-spa-page name-of-page</pre
          >
        </v-sheet>
        Give the above commands to your agent to run to have it done
        automatically.
      </div>
      <div class="mt-10">
        You can also sign in
        <v-btn class="ml-1" v-bind="linkToProps(authLinks.login)">here</v-btn>
      </div>
      <v-alert v-if="profile?.email" type="info" class="mt-10">
        Logged in as {{ profile.email }}
        <v-btn class="float-right" v-bind="linkToProps(authLinks.logout)">
          Logout</v-btn
        >
      </v-alert>
    </div>
  </v-container>
</template>
