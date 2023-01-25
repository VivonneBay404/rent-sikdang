<template>
  <div>
    <v-navigation-drawer permanent absolute>
      <v-container>
        <div>
          <p>음식 카테고리</p>
          <v-chip @click="onChipClicked()">전체</v-chip>
          <v-chip>베트남</v-chip>
          <v-chip>한식</v-chip>
        </div>
      </v-container>
    </v-navigation-drawer>
    <v-container>
      <v-row>
        <v-col cols="2"></v-col>
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
    </v-container>
  </div>
</template>

<script>
import SikdangCard from "../../components/SikdangCard";
import dummyData from "../../assets/dummyData";
export default {
  components: {
    // HelloWorld
    SikdangCard,
  },
  data() {
    return {
      sikdangs: dummyData.sikdang,
    };
  },
  methods: {
    onSikdangClicked(id) {
      console.log(id);
      this.$router.push(`/sikdang/${id}`);
    },
    onChipClicked() {
      console.log("chip");
    },
  },
  mounted() {
    console.log(dummyData);
  },
};
</script>

<style>
</style>