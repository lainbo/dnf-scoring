<template>
  <div class="score_item flex items-center">
    <div>{{ score }}</div>
    <div
      class="operation_item flex flex-col justify-center space-y-4px invisible"
    >
      <i
        class="text_16r cursor-pointer text-[#00b42a] el-icon-circle-plus plus"
        @click="changeScore('add')"
      ></i>
      <i
        class="text_16r cursor-pointer text-[#f00] el-icon-remove minus"
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
  created () {},
  mounted () {},
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

<style lang="scss" scoped>
.score_item {
  &:hover {
    .operation_item {
      visibility: visible !important;
    }
  }
}
</style>
