<template>
  <div class="flex relative cell_item">
    <div class="w-50px transition-all mr-8px text_24r">
      <template v-if="hasA && row[field] > 0">A</template>
      <span v-if="['killNum1', 'killNum2'].includes(field)">
        {{ row[field] }}
      </span>
      <span v-else :class="calcRed(row)">{{ calcNum(row) }}</span>
    </div>
    <div
      class="operation_item flex flex-col justify-center space-y-4px absolute right-10px top-1/2 transform -translate-y-1/2 invisible"
      :class="[hasA && 'right-6px',!isSmall && '!right-0']"
    >
      <i
        class="text_16r cursor-pointer text-[#00b42a] el-icon-circle-plus plus"
        @click="changeNum(row, field, 'add')"
      ></i>
      <i
        class="text_16r cursor-pointer text-[#f00] el-icon-remove minus"
        @click="changeNum(row, field, 'subtract')"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasA: {
      type: Boolean,
      default: false
    },
    row: {
      type: Object
    },
    field: {
      type: String
    },
    isSmall: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    calcRed (row) {
      const num = parseInt(row[this.field])
      if (num > 1) {
        return 'text-[#f53f3f]'
      } else {
        return ''
      }
    },
    calcNum (row) {
      if (row[this.field] === 0) {
        return '-'
      } else {
        return row[this.field] === 1 && this.hasA ? '+' : row[this.field]
      }
    },
    changeNum (row, field, operate) {
      const afterAddNum = row[field] + 1
      const afterSubtractNum = row[field] - 1
      if (
        ['akNum1', 'akNum2'].includes(field) &&
        operate === 'add' &&
        afterAddNum > 9
      ) {
        this.$message.error({ message: '咋可能这么多？', duration: 800 })
        return
      }
      if (afterAddNum > 99 && operate === 'add') {
        this.$message.error({ message: '咋可能这么多？', duration: 800 })
        return
      }
      if (afterSubtractNum < 0 && operate === 'subtract') {
        this.$message.error({ message: '到0了，别点了', duration: 800 })
        return
      }
      row[field] = operate === 'add' ? row[field] + 1 : row[field] - 1
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.cell_item {
  &:hover {
    .operation_item {
      visibility: visible !important;
    }
  }
}
</style>
