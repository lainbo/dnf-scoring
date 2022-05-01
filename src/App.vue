<template>
  <div class>
    <div
      class="total_score h-55px flex items-center justify-around text-26px font-bold px-10px"
      @click.ctrl="clearNum"
    >
      <div :class="pageInfo.firstBlue ? 'text-[#004ece]' : 'text-[#cd1803]'">
        {{ pageInfo.firstBlue ? '蓝队' : '红队' }}
      </div>
      <div class="flex">
        <div
          class="mr-14px"
          :class="pageInfo.firstBlue ? 'text-[#004ece]' : 'text-[#cd1803]'"
        >
          <ScoreItem :score="pageInfo.num1" @change-score="changeScore1" />
        </div>
        <i
          class="total_icon cursor-pointer el-icon-sort"
          @click="pageInfo.firstBlue = !pageInfo.firstBlue"
          @click.right="changeTeam"
        ></i>
        <div
          class="w-30px ml-26px"
          :class="pageInfo.firstBlue ? 'text-[#cd1803]' : 'text-[#004ece]'"
        >
          <ScoreItem :score="pageInfo.num2" @change-score="changeScore2" />
        </div>
      </div>
      <div :class="pageInfo.firstBlue ? 'text-[#cd1803]' : 'text-[#004ece]'">
        {{ pageInfo.firstBlue ? '红队' : '蓝队' }}
      </div>
    </div>
    <div class="table_main px-4px">
      <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column prop="name1" label="ID" min-width="56">
          <template v-slot="{ row }">
            <template v-if="row.editName1">
              <el-input
                ref="elInputName1"
                maxlength="3"
                @blur="row.editName1 = false"
                @keyup.enter.native="row.editName1 = false"
                v-model="row.name1"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer"
                @click="changeName(row, 'editName1', 'elInputName1')"
              >
                <span class="relative">
                  <i
                    v-if="row.index === 1"
                    class="text-12px absolute -right-9px -top-1px el-icon-star-on text-[#ffa500] z-50"
                  />
                  <span :class="[row.name1.length >= 3?'text-[19.5px]':'text-[24px]']">{{ row.name1 || 'ID' }}</span>
                </span>
              </div>
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
                maxlength="3"
                @blur="row.editName2 = false"
                @keyup.enter.native="row.editName2 = false"
                v-model="row.name2"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer ml-4px "
                @click="changeName(row, 'editName2', 'elInputName2')"
              >
                <span class="relative">
                  <i
                    v-if="row.index === 1"
                    class="text-12px absolute -right-9px -top-1px el-icon-star-on text-[#ffa500] z-50"
                  />
                  <span :class="[row.name2.length >= 3?'text-[19.5px]':'text-[24px]']">{{ row.name2 || 'ID' }}</span>
                </span>
              </div>
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
      v-html="pageInfo.psInfo"
      @blur="changePs($event)"
    ></div>
  </div>
</template>

<script>
import Cell from './components/cell.vue'
import ScoreItem from './components/scoreItem.vue'
export default {
  components: { Cell, ScoreItem },
  data () {
    return {
      pageInfo: {
        psInfo: '今天我和队长入的',
        num1: 0,
        num2: 0,
        firstBlue: true
      },
      tableData: [
        {
          index: 1,
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
          index: 2,
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
          index: 3,
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
          index: 4,
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
  created () {
    // 本地响应式数据
    const ReactivelyTableData = this.lodash.cloneDeep(this.tableData)
    const ReactivelyPageInfo = this.lodash.cloneDeep(this.pageInfo)

    // local的Table数据
    const LOCAL_TABLE_DATA = JSON.parse(
      localStorage.getItem('LocalTable') || JSON.stringify(ReactivelyTableData)
    )

    // local的比分数据
    const LOCAL_PAGE_INFO = JSON.parse(
      localStorage.getItem('LocalPageInfo') ||
        JSON.stringify(ReactivelyPageInfo)
    )

    if (!this.lodash.isEqual(LOCAL_TABLE_DATA, ReactivelyTableData)) {
      this.lodash.merge(this.tableData, LOCAL_TABLE_DATA)
    }
    if (!this.lodash.isEqual(LOCAL_PAGE_INFO, ReactivelyPageInfo)) {
      this.lodash.merge(this.pageInfo, LOCAL_PAGE_INFO)
    }
  },
  mounted () {},
  methods: {
    // 变更底部信息
    changePs (e) {
      const text = e.target.innerText.replaceAll('\n', '<br/>')
      this.pageInfo.psInfo = text
    },
    // 右键切换数据
    changeTeam () {
      ;[this.pageInfo.num1, this.pageInfo.num2] = [
        this.pageInfo.num2,
        this.pageInfo.num1
      ]
      this.pageInfo.firstBlue = !this.pageInfo.firstBlue
      this.tableData.forEach((i) => {
        ;[i.name1, i.name2] = [i.name2, i.name1]
        ;[i.editName1, i.editName2] = [i.editName2, i.editName1]
        ;[i.killNum1, i.killNum2] = [i.killNum2, i.killNum1]
        ;[i.killNum1Opt, i.killNum2Opt] = [i.killNum2Opt, i.killNum1Opt]
        ;[i.pingNum1, i.pingNum2] = [i.pingNum2, i.pingNum1]
        ;[i.pingNum1Opt, i.pingNum2Opt] = [i.pingNum2Opt, i.pingNum1Opt]
        ;[i.akNum1, i.akNum2] = [i.akNum2, i.akNum1]
        ;[i.akNum1Opt, i.akNum2Opt] = [i.akNum2Opt, i.akNum1Opt]
      })
    },
    // 恢复初始数据
    clearNum () {
      this.pageInfo = this.$options.data().pageInfo
      this.tableData = this.lodash.cloneDeep(this.$options.data().tableData)
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
  watch: {
    tableData: {
      handler (val) {
        localStorage.setItem('LocalTable', JSON.stringify(val))
      },
      deep: true
    },
    pageInfo: {
      handler (val) {
        localStorage.setItem('LocalPageInfo', JSON.stringify(val))
      },
      deep: true
    }
  }
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
    .el-input__inner {
      padding: 0 5px;
    }
    .cell {
      overflow: visible;
      line-height: 2.2;
      padding: 0 !important;
      font-size: 24px;
      color: #000;
      font-weight: bold;
      // position: relative;
    }
  }
}
</style>
