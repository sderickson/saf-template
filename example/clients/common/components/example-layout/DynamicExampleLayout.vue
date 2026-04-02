<template>
  <!-- Events are rendered here for playwright tests to assert on -->
  <pre class="d-none" data-testid="events">{{ events }}</pre>

  <ExampleLayout :logged-in="loggedIn">
    <slot />
  </ExampleLayout>

  <SnackbarQueue />
</template>

<script setup lang="ts">
import ExampleLayout from "./ExampleLayout.vue";
import { events } from "@saflib/vue";
import { SnackbarQueue } from "@saflib/vue/components";

defineProps<{
  loggedIn?: boolean;
}>();
</script>
