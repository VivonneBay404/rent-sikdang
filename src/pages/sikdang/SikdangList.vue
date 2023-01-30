<template>
  <div>
    <v-content>
      <v-row>
        <v-col cols="2">
          <v-navigation-drawer permanent>
            <SikdangSort
              @click="onCategoryClicked"
              :selectedCategories="selectedCategories"
          /></v-navigation-drawer>
        </v-col>

        <v-col>
          <v-row v-if="sikdangs.length">
            <v-col
              v-for="(sikdang, index) in sikdangs"
              :key="index"
              cols="12"
              sm="6"
              md="5"
              lg="3"
            >
              <SikdangCard
                v-bind="sikdang"
                @click="onSikdangClicked(sikdang._id)"
              />
            </v-col>
          </v-row>
          <v-row v-else><h2>찾는 식당이 없습니다😱</h2></v-row>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="parseInt(count / limit) + 1"
          total-visible="7"
        ></v-pagination>
      </div>
    </v-content>
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
      page: 1,
      count: null,
      limit: 5,
    };
  },
  methods: {
    onSikdangClicked(id) {
      // this.$router.push(`/sikdang/${id}`);
      //새로운 탭으로 열기
      let route = this.$router.resolve({ path: `/sikdang/${id}` });
      window.open(route.href, "_blank");
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
      this.page = 1;
    },
    async getSikdang() {
      const query = { category: this.selectedCategories, page: this.page };
      console.log("query", query);
      const data = (
        await this.$axios.get("/sikdang", {
          params: query,
        })
      ).data;
      this.sikdangs = data.sikdang;
      //해당 카테고리의 총합
      this.count = data.count;
      this.$router.push({ query: query }).catch(() => {});
      console.log("router push ok");
    },
  },
  async mounted() {
    // console.log(dummyData);
    console.log("this.$route.query;", this.$route.query);
    //선택된 카테고리가 하나면 오브젝트로 들어옴
    if (this.$route.query.category) {
      Array.isArray(this.$route.query.category)
        ? (this.selectedCategories = this.$route.query.category)
        : (this.selectedCategories = [this.$route.query.category]);
    }

    this.getSikdang();
    // this.sikdangs = (
    //   await this.$axios.get("/sikdang", {
    //     params: this.$route.query,
    //   })
    // ).data;
  },
  watch: {
    async selectedCategories() {
      console.log(" this.selectedCategories ", this.selectedCategories);
      this.getSikdang();
      //selectedCategories가 변하면 route query에 push
    },
    async page() {
      this.getSikdang();
    },
  },
};
</script>

<style>
</style>