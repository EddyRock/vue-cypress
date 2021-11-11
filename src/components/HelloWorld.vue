<template>
  <div class="hello">
    {{ new Date() }}
    <span data-cy="test-value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      value: 30,
      id: null,
    }
  },

  created() {
    this.id = setInterval(() => {
      this.value = this.value - 1;
      if(!this.value) {
        clearTimeout(this.id);
      }
    }, 1000)
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
