export const mixin = {
  methods: {
    show() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('hello');
  },
  data() {
    return {
      x:1
    }
  },
}