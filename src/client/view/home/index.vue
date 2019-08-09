<template>
  <div>
    1111
  </div>
</template>

<script>
export default {
  name: "homePage",
  mounted() {
    this.$http
      .get("/")
      .then(function(req) {
        console.log(req.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

