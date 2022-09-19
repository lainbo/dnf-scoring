<template>
  <div>
    <div
      class="total_score h-55px flex items-center justify-around text-26px font-bold px-10px"
      @click.ctrl="clearNum"
    >
      <div :class="pageInfo.firstBlue ? 'text-[#004ece]' : 'text-[#cd1803]'">
        {{ pageInfo.firstBlue ? '蓝队' : '红队' }}
      </div>
      <div class="flex h-full">
        <div
          class="mr-14px flex items-center"
          :class="pageInfo.firstBlue ? 'text-[#004ece]' : 'text-[#cd1803]'"
        >
          <ScoreItem :score="pageInfo.num1" @change-score="changeScore1" />
        </div>
        <div
          class="flex flex-col justify-center w-28px"
          @mouseenter="小分按钮vis = true"
          @mouseleave="小分按钮vis = false"
        >
          <p>
            <i
              class="total_icon cursor-pointer el-icon-sort transition-all text-24px hover:text-[#00b42a]"
              @click="pageInfo.firstBlue = !pageInfo.firstBlue"
              @click.right="changeTeam"
            ></i>
          </p>
          <el-collapse-transition>
            <p
              v-show="小分按钮vis"
              class="text-14px mt-6px cursor-pointer select-none hover:text-[#cd1803]"
              @click="小分vis = !小分vis"
            >
              小分
            </p>
          </el-collapse-transition>
        </div>
        <div
          class="w-30px ml-20px flex items-center"
          :class="pageInfo.firstBlue ? 'text-[#cd1803]' : 'text-[#004ece]'"
        >
          <ScoreItem :score="pageInfo.num2" @change-score="changeScore2" />
        </div>
      </div>
      <div :class="pageInfo.firstBlue ? 'text-[#cd1803]' : 'text-[#004ece]'">
        {{ pageInfo.firstBlue ? '红队' : '蓝队' }}
      </div>
    </div>

    <!-- start：小分部分 -->
      <div
        :class="[小分vis ? 'h-45px' : 'h-0 !border-0']"
        class="total_score flex items-center overflow-hidden justify-around text-22px font-bold  transition-all duration-400 hover:bg-[#f5f7fa]"
        @click.ctrl="clearSmallNum"
      >
        <div :class="pageInfo.firstBlue ? 'text-[#004ece]' : 'text-[#cd1803]'">
          {{ pageInfo.firstBlue ? '蓝队小分' : '红队小分' }}
        </div>
        <div class="flex h-full">
          <div
            class="mr-14px flex items-center"
            :class="pageInfo.firstBlue ? 'text-[#004ece]' : 'text-[#cd1803]'"
          >
            <ScoreItem
              :score="smallInfo.smallNum1"
              @change-score="changeSmallScore1"
            />
          </div>
          <p class="flex items-center text-center">:</p>
          <div
            class="w-30px ml-26px flex items-center"
            :class="pageInfo.firstBlue ? 'text-[#cd1803]' : 'text-[#004ece]'"
          >
            <ScoreItem
              :score="smallInfo.smallNum2"
              @change-score="changeSmallScore2"
            />
          </div>
        </div>
        <div :class="pageInfo.firstBlue ? 'text-[#cd1803]' : 'text-[#004ece]'">
          {{ pageInfo.firstBlue ? '红队小分' : '蓝队小分' }}
        </div>
      </div>
    <div class="table_main px-4px">
      <el-table :data="tableData" style="width: 100%" :show-header="false">
        <el-table-column prop="name1" label="ID" min-width="56">
          <template v-slot="{ row }">
            <template v-if="row.editName1">
              <el-input
                ref="elInputName1"
                maxlength="4"
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
                  <span class="text-24px">{{ row.name1 || 'ID' }}</span>
                </span>
              </div>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="killNum1" label="Kill" width="60" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="killNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="akNum1" label="AK" width="50" align="center">
          <template v-slot="{ row }">
            <Cell hasA :row="row" field="akNum1" />
          </template>
        </el-table-column>
        <el-table-column prop="name2" label="ID" min-width="60">
          <template v-slot="{ row }">
            <template v-if="row.editName2">
              <el-input
                ref="elInputName2"
                maxlength="4"
                @blur="row.editName2 = false"
                @keyup.enter.native="row.editName2 = false"
                v-model="row.name2"
              ></el-input>
            </template>

            <template v-else>
              <div
                class="select-none cursor-pointer ml-4px"
                @click="changeName(row, 'editName2', 'elInputName2')"
              >
                <span class="relative">
                  <i
                    v-if="row.index === 1"
                    class="text-12px absolute -right-9px -top-1px el-icon-star-on text-[#ffa500] z-50"
                  />
                  <span class="text-24px">{{ row.name2 || 'ID' }}</span>
                </span>
              </div>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="killNum2" label="Kill" width="60" align="center">
          <template v-slot="{ row }">
            <Cell :row="row" field="killNum2" />
          </template>
        </el-table-column>
        <el-table-column prop="akNum2" label="AK" width="50" align="center">
          <template v-slot="{ row }">
            <Cell hasA :row="row" field="akNum2" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div
      class="min-h-70px text-24px font-bold text-center py-4px flex flex-col justify-center leading-28px outline-none total_score"
      contenteditable="true"
      v-html="bottomInfo"
      @click.ctrl="clearBottomInfo"
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
      小分按钮vis: false,
      小分vis: false,
      pageInfo: {
        num1: 0,
        num2: 0,
        firstBlue: true
      },
      smallInfo: {
        smallNum1: 0,
        smallNum2: 0
      },
      bottomInfo: '今天我和队长看好<br />老群GG了, 大家加新群: 913958545',
      tableData: [
        {
          index: 1,
          name1: '',
          editName1: false,
          killNum1: 0,
          akNum1: 0,
          name2: '',
          editName2: false,
          killNum2: 0,
          akNum2: 0
        },
        {
          index: 2,
          name1: '',
          editName1: false,
          killNum1: 0,
          akNum1: 0,
          name2: '',
          editName2: false,
          killNum2: 0,
          akNum2: 0
        },
        {
          index: 3,
          name1: '',
          editName1: false,
          killNum1: 0,
          akNum1: 0,
          name2: '',
          editName2: false,
          killNum2: 0,
          akNum2: 0
        },
        {
          index: 4,
          name1: '',
          editName1: false,
          killNum1: 0,
          akNum1: 0,
          name2: '',
          editName2: false,
          killNum2: 0,
          akNum2: 0
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

    // local的底部信息
    const LOCAL_BOTTOM_INFO = localStorage.getItem('LocalBottomInfo') || ''

    if (!this.lodash.isEqual(LOCAL_TABLE_DATA, ReactivelyTableData)) {
      this.lodash.merge(this.tableData, LOCAL_TABLE_DATA)
    }
    if (!this.lodash.isEqual(LOCAL_PAGE_INFO, ReactivelyPageInfo)) {
      this.lodash.merge(this.pageInfo, LOCAL_PAGE_INFO)
    }
    if (LOCAL_BOTTOM_INFO) {
      this.bottomInfo = LOCAL_BOTTOM_INFO
    }
  },
  mounted () {},
  methods: {
    // 变更底部信息
    changePs (e) {
      const text = e.target.innerText.replaceAll('\n', '<br/>')
      this.bottomInfo = text
    },
    // 右键切换数据
    changeTeam () {
      this.pageInfo.firstBlue = !this.pageInfo.firstBlue
      ;[this.pageInfo.num1, this.pageInfo.num2] = [
        this.pageInfo.num2,
        this.pageInfo.num1
      ]
      ;[this.smallInfo.smallNum1, this.smallInfo.smallNum2] = [
        this.smallInfo.smallNum2,
        this.smallInfo.smallNum1
      ]
      this.tableData.forEach((i) => {
        ;[i.name1, i.name2] = [i.name2, i.name1]
        ;[i.editName1, i.editName2] = [i.editName2, i.editName1]
        ;[i.killNum1, i.killNum2] = [i.killNum2, i.killNum1]
        ;[i.akNum1, i.akNum2] = [i.akNum2, i.akNum1]
      })
    },
    // 恢复初始数据
    clearNum () {
      this.pageInfo = this.lodash.cloneDeep(this.$options.data().pageInfo)
      this.tableData = this.lodash.cloneDeep(this.$options.data().tableData)
    },
    clearSmallNum () {
      this.smallInfo = this.lodash.cloneDeep(this.$options.data().smallInfo)
    },
    // 恢复底部信息
    clearBottomInfo () {
      this.bottomInfo = this.$options.data().bottomInfo
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
    // 更改左侧小分
    changeSmallScore1 (data, operate) {
      operate === 'add'
        ? (this.smallInfo.smallNum1 = data + 1)
        : (this.smallInfo.smallNum1 = data - 1)
    },
    // 更改右侧小分
    changeSmallScore2 (data, operate) {
      operate === 'add'
        ? (this.smallInfo.smallNum2 = data + 1)
        : (this.smallInfo.smallNum2 = data - 1)
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
    },
    bottomInfo (val) {
      localStorage.setItem('LocalBottomInfo', val)
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
