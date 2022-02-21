<template>
  <div
    class="flex relative"
    @mouseenter="row[`${field}Opt`] = true"
    @mouseleave="row[`${field}Opt`] = false"
  >
    <div class="w-50px transition-all mr-12px">
      {{ row[field] }}
    </div>
    <div
      class="flex flex-col justify-center space-y-1 absolute right-0 top-1/2 transform -translate-y-1/2"
      v-if="row[`${field}Opt`]"
    >
      <i
        class="text-14px cursor-pointer text-[#67C23A] el-icon-circle-plus"
        @click="changeNum(row, field, 'add')"
      >
      </i>
      <i
        class="text-14px cursor-pointer text-[#F56C6C] el-icon-remove"
        @click="changeNum(row, field, 'subtract')"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object
    },
    field: {
      type: String
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    changeNum (row, field, operate) {
      const afterAddNum = row[field] + 1
      const afterSubtractNum = row[field] - 1
      if (afterAddNum > 99 && operate === 'add') {
        this.$message.error('咋可能杀这么多？')
        return
      }
      if (afterSubtractNum < 0 && operate === 'subtract') {
        this.$message.error('到0了，别点了')
        return
      }
      row[field] = operate === 'add' ? row[field] + 1 : row[field] - 1
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
