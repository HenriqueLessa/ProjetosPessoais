<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import api from '@/api/api'
import { onMounted, reactive } from 'vue';

export default {
  name: 'HomeView',

  setup() {
    const state = reactive({
      teste: String()
    });

    onMounted(async () => {
      await api.status
    });

    return {
      state
    }
  }
}
</script>
