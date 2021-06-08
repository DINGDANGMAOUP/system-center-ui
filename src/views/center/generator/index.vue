<template>
  <div>
    <Datasource />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Datasource from '/@/views/center/generator/componets/DataSource.vue';
  export default defineComponent({
    components: {
      Datasource,
    },
    setup() {},
  });
</script>

<style scoped></style>
