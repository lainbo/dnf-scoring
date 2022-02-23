<template>
  <div class>
    <div
      class="total_score h-55px flex items-center justify-around text-26px font-bold"
      @click.ctrl="clearNum"
    >
      <div :class="firstBlue ? 'text-[#409eff]' : 'text-[#f56c6c]'">{{ firstBlue ? '蓝队' : '红队' }}</div>
      <div class="flex">
        <div class="mr-14px" :class="firstBlue ? 'text-[#409eff]' : 'text-[#f56c6c]'">
          <ScoreItem :score="pageInfo.num1" @change-score="changeScore1" />
        </div>
        <i class="total_icon cursor-pointer el-icon-sort" @click="firstBlue = !firstBlue"></i>
        <div class="w-30px ml-26px" :class="firstBlue ? 'text-[#f56c6c]' : 'text-[#409eff]'">
          <ScoreItem :score="pageInfo.num2" @change-score="changeScore2" />
        </div>
      </div>
      <div :class="firstBlue ? 'text-[#f56c6c]' : 'text-[#409eff]'">{{ firstBlue ? '红队' : '蓝队' }}</div>
    </div>
    <div class="table_main px-8px">
      <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column prop="name1" label="ID" min-width="60">
          <template v-slot="{ row }">
            <template v-if="row.editName1">
              <el-input
                ref="elInputName1"
                maxlength="2"
                @blur="row.editName1 = false"
                @keyup.enter.native="row.editName1 = false"
                v-model="row.name1"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer"
                @click="changeName(row, 'editName1', 'elInputName1')"
              >{{ row.name1 || 'ID' }}</div>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="killNum1" label="Kill" width="50" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="killNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="akNum1" label="AK" width="50" align="center">
          <template v-slot="{ row }">
            <Cell hasA :row="row" field="akNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="pingNum1" label="卡" width="50" align="center">
          <template v-slot="{ row }">
            <Cell hasAdd :row="row" field="pingNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="name2" label="ID" min-width="60">
          <template v-slot="{ row }">
            <template v-if="row.editName2">
              <el-input
                ref="elInputName2"
                maxlength="2"
                @blur="row.editName2 = false"
                @keyup.enter.native="row.editName2 = false"
                v-model="row.name2"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer ml-8px"
                @click="changeName(row, 'editName2', 'elInputName2')"
              >{{ row.name2 || 'ID' }}</div>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="killNum2" label="Kill" width="50" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="killNum2" />
          </template>
        </el-table-column>
        <el-table-column prop="akNum2" label="AK" width="50" align="center">
          <template v-slot="{ row }">
            <Cell hasA :row="row" field="akNum2" />
          </template>
        </el-table-column>
        <el-table-column prop="pingNum2" label="卡" width="50" align="center">
          <template v-slot="{ row }">
            <Cell hasAdd :row="row" field="pingNum2" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div
      class="h-70px text-24px font-bold text-center pt-8px leading-28px"
      contenteditable="true"
    >{{ psInfo }}</div>
  </div>
</template>

<script>
import Cell from './components/cell.vue'
import ScoreItem from './components/scoreItem.vue'
export default {
  components: { Cell, ScoreItem },
  data () {
    return {
      psInfo: '今天我入的',
      pageInfo: {
        num1: 0,
        num2: 0
      },
      firstBlue: true,
      tableData: [
        {
          name1: '',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        },
        {
          name1: '',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        },
        {
          name1: '',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '',
          editName2: false,
          killNum2: 0,
          killNum2Opt: false,
          pingNum2: 0,
          pingNum2Opt: false,
          akNum2: 0,
          akNum2Opt: false
        },
        {
          name1: '',
          editName1: false,
          killNum1: 0,
          killNum1Opt: false,
          pingNum1: 0,
          pingNum1Opt: false,
          akNum1: 0,
          akNum1Opt: false,
          name2: '',
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
  created () { },
  mounted () { },
  methods: {
    clearNum () {
      this.pageInfo = this.$options.data().pageInfo
      this.tableData = JSON.parse(JSON.stringify(this.$options.data().tableData))
    },
    // 更改右侧的分数
    changeScore2 (data, operate) {
      operate === 'add'
        ? (this.pageInfo.num2 = data + 1)
        : (this.pageInfo.num2 = data - 1)
    },
    // 更改左侧的分数
    changeScore1 (data, operate) {
      operate === 'add'
        ? (this.pageInfo.num1 = data + 1)
        : (this.pageInfo.num1 = data - 1)
    },
    // 将所有input框恢复成文字
    recoverText () {
      this.tableData.forEach((i) => {
        i.editName1 = false
        i.editName2 = false
      })
    },
    // 变更ID
    changeName (row, field, refName) {
      this.recoverText()
      row[field] = true
      this.$nextTick(() => {
        this.$refs[refName].focus()
        this.$refs[refName].select()
      })
    }
  },
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
