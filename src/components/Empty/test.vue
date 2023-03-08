<template>
    <div class="test-container">
  <Empty />
</div>
</template>

<script>
import Empty from "./";

export default {
  components: {
    Empty,
  },
};
</script>

<style>
.test-container{
    position: relative;
   width: 400px;
   height: 400px;
   border: 2px solid #000;
   margin:  0 auto;
}
</style>