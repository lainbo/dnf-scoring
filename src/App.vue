<template>
  <div class="">
    <div
      class="total_score h-55px flex items-center justify-around text-26px font-bold space-x-16px"
    >
      <div :class="firstBlue ? 'text-[#409eff]' : 'text-[#f56c6c]'">
        {{ firstBlue ? '蓝队' : '红队' }}
      </div>
      <div class="flex space-x-8px">
        <span :class="firstBlue ? 'text-[#409eff]' : 'text-[#f56c6c]'">6</span>
        <div class="total_icon cursor-pointer" @click="firstBlue = !firstBlue">
          <i class="el-icon-sort"></i>
        </div>
        <span :class="firstBlue ? 'text-[#f56c6c]' : 'text-[#409eff]'">3</span>
      </div>
      <div :class="firstBlue ? 'text-[#f56c6c]' : 'text-[#409eff]'">
        {{ firstBlue ? '红队' : '蓝队' }}
      </div>
    </div>
    <div class="table_main">
      <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column prop="name1" label="ID" min-width="60">
          <template v-slot="{ row }">
            <template v-if="row.editName1">
              <el-input
                maxlength="2"
                @blur="row.editName1 = false"
                @keyup.enter.native="row.editName1 = false"
                v-model="row.name1"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer"
                @click="row.editName1 = true"
              >
                {{ row.name1 }}
              </div>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="killNum1" label="Kill" width="50" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="killNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="pingNum1" label="卡" width="40" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="pingNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="akNum1" label="AK" width="40" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="akNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="name2" label="ID" min-width="60">
          <template v-slot="{ row }">
            <template v-if="row.editName2">
              <el-input
                maxlength="2"
                @blur="row.editName2 = false"
                @keyup.enter.native="row.editName2 = false"
                v-model="row.name1"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer"
                @click="row.editName2 = true"
              >
                {{ row.name2 }}
              </div>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="killNum2" label="Kill" width="40" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="killNum2" />
          </template>
        </el-table-column>
        <el-table-column prop="pingNum2" label="卡" width="40" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="pingNum2" />
          </template>
        </el-table-column>
        <el-table-column prop="akNum2" label="AK" width="40" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="akNum2" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Cell from './components/cell.vue'
export default {
  components: { Cell },
  data () {
    return {
      firstBlue: true,
      tableData: [
        {
          name1: '-',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '-',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        },
        {
          name1: '-',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '-',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        },
        {
          name1: '-',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '-',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        },
        {
          name1: '-',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '-',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.total_score {
  border-bottom: 1px solid #ebeef5;
}
.total_icon {
  transform: rotate(90deg);
}
.table_main {
  ::v-deep {
    .el-table__cell {
      padding: 0;
    }
    .cell {
      line-height: 2.2;
      padding: 0 !important;
      font-size: 24px;
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
