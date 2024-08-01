<template>
  <div class="interior">
    <ProjectBlocks :project-blocks="projectBlocks" />
  </div>
</template>

<script>
import { blocks, projectBlocks } from "@/config";
import ProjectBlocks from "@/components/Interior/ProjectBlocks.vue";
export default {
  name: "InteriorView",
  components: {
    ProjectBlocks,
  },
  setup() {
    return {
      blocks,
      projectBlocks,
    };
  },
};
</script>

<style lang="scss" scoped></style>
