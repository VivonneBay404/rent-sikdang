<template>
  <div>
    <p>음식 카테고리</p>
    <v-chip
      :color="selectedCategories.length === 0 ? 'primary' : null"
      @click="$emit('click', '전체')"
    >
      전체
    </v-chip>
    <v-chip
      v-for="(item, index) in category"
      :key="index"
      @click="$emit('click', item)"
      class="ma-2"
      :color="selectedCategories.includes(item) ? 'primary' : null"
      >{{ item }}</v-chip
    >
  </div>
</template>

<script>
export default {
  props: {
    selectedCategories: Array,
  },
  data() {
    return {
      category: ["베트남", "한식", "중식", "이태리"],
    };
  },
  mounted() {},
};
</script>

<style>
</style>