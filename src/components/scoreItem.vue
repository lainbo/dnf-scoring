<template>
  <div class="flex items-center" @mouseenter="scoreIn = true" @mouseleave="scoreIn = false">
    <div>{{ score }}</div>
    <div
      :style="{ visibility: scoreIn ? 'visible' : 'hidden' }"
      class="flex flex-col justify-center space-y-1"
    >
      <i
        class="text-16px cursor-pointer text-[#00b42a] el-icon-circle-plus"
        @click="changeScore('add')"
      ></i>
      <i
        class="text-16px cursor-pointer text-[#f00] el-icon-remove"
        @click="changeScore('subtract')"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      scoreIn: false
    }
  },
  created () { },
  mounted () { },
  methods: {
    changeScore (operate) {
      const afterSubtractNum = this.score - 1
      if (afterSubtractNum < 0 && operate === 'subtract') {
        return this.$message.error({ message: '到0了，别点了', duration: 800 })
      }
      this.$emit('change-score', this.score, operate)
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
