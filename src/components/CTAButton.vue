<template>
    <button @click='empty'>Let's get started!</button>
</template>

<script>
export default {
  data () {
    return {
      CTAButton: 'CTAButton'
    }
  },
  methods: {
    empty () {
      return 'empty'
    }
  }
}
</script>
