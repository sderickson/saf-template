<script setup lang="ts">
import { computed } from "vue";
import { DynamicExampleLayout } from "@your-org/example-clients-common";
import { useKratosSession } from "@saflib/ory-kratos-sdk";
const { data: session } = useKratosSession();
const loggedIn = computed(() => !!session);
</script>

<template>
  <DynamicExampleLayout :logged-in="loggedIn">
    <router-view />
  </DynamicExampleLayout>
</template>
