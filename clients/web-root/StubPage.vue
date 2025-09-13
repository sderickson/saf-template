<script setup lang="ts">
import { getProfile } from "@saflib/auth";
import { useQuery } from "@tanstack/vue-query";
import { authLinks } from "@saflib/auth-links";
import { linkToProps } from "@saflib/vue";

const { data: profile } = useQuery(getProfile());
</script>

<template>
  <v-container>
    <div>
      <h1 class="mt-10">Stub Page</h1>
      <hr class="my-10" />
      <h2>Setup</h2>
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
      <hr class="my-10" />
      <h2 class="mb-10">Try Out Auth</h2>
      <div>
        Try signing in
        <v-btn class="ml-1" v-bind="linkToProps(authLinks.login)">here</v-btn>
      </div>
      <v-alert v-if="profile?.email" type="info" class="mt-10">
        Logged in as {{ profile.email }}
        <v-btn class="float-right" v-bind="linkToProps(authLinks.logout)">
          Logout</v-btn
        >
      </v-alert>
      <hr class="my-10" />
      <h2 class="mb-10">Monitoring</h2>
      <div>
        You can also go to Grafana and review Prometheus metrics at
        <a href="http://grafana.docker.localhost"
          >http://grafana.docker.localhost</a
        >. You'll need to add Prometheus as a data source; point it to the url
        <strong>http://prometheus:9090</strong>.
      </div>
    </div>
  </v-container>
</template>
