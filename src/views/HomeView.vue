<template>
  <div class="home">
    <BlockOne />
    <BlockTwo />
    <BlockThree />
    <BlockFour />
    <BlockFive />
  </div>
</template>

<script>
import BlockOne from "@/components/Home/BlockOne.vue";
import BlockTwo from "@/components/Home/BlockTwo.vue";
import BlockThree from "@/components/Home/BlockThree.vue";
import BlockFour from "@/components/Home/BlockFour.vue";
import BlockFive from "@/components/Home/BlockFive.vue";

export default {
  name: "HomeView",
  components: {
    BlockOne,
    BlockTwo,
    BlockThree,
    BlockFour,
    BlockFive,
  },
};
</script>
