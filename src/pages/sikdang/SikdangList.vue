<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-navigation-drawer permanent>
          <SikdangSort
            @click="onCategoryClicked"
            :selectedCategories="selectedCategories"
        /></v-navigation-drawer>
      </v-col>

      <v-col>
        <v-row>
          <v-col v-for="(sikdang, index) in sikdangs" :key="index">
            <SikdangCard
              v-bind="sikdang"
              @click="onSikdangClicked(sikdang.id)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SikdangCard from "../../components/SikdangCard";
// import dummyData from "../../assets/dummyData";
import SikdangSort from "../sikdang/SikdangSort.vue";
export default {
  components: {
    // HelloWorld
    SikdangCard,
    SikdangSort,
  },
  data() {
    return {
      sikdangs: [],
      selectedCategories: [],
    };
  },
  methods: {
    onSikdangClicked(id) {
      this.$router.push(`/sikdang/${id}`);
    },
    onCategoryClicked(id) {
      if (id === "전체") {
        this.selectedCategories = [];
      } else {
        this.selectedCategories.includes(id)
          ? this.selectedCategories.splice(
              this.selectedCategories.indexOf(id),
              1
            )
          : this.selectedCategories.push(id);
      }
    },
  },
  async mounted() {
    // console.log(dummyData);
    this.sikdangs = (await this.$axios.get("/sikdang")).data;
  },
};
</script>

<style>
</style>