<!--  -->
<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div>
        <el-form :model="BasicInfo" label-width="80px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="出卖人(供方):" prop="gf" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.gf"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="合同编号:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.maxhtbh"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="特别码:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.maxhtbh"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="承受人(需方):" prop="xf" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.xf"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="招议标编号:"
                prop="zybbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.zybbh"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="是否框架合同:"
                prop="sflkc"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.sflkc"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="承办部门:" prop="sfsyht" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.sfsyht"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="签订地点:" prop="sfsyht" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.qzsx"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="计划付款类型:"
                prop="sfsyht"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.gbfs"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="竣工日期:" prop="sfsyht" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.gbyt"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="开票点比例:"
                prop="kjhtlx"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.kjhtlx"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="供方合同号:" prop="jhzq" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item
                label="合同有效期起:"
                prop="jhzq"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="合同有效期止:"
                prop="jhzq"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="框架合同类型:"
                prop="jhzq"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item
                label="合同付款方式:"
                prop="jhzq"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="是否零库存:" prop="jhzq" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="合同发票类型:"
                prop="jhzq"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="税率:" prop="jhzq" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="过磅方式:" prop="jhzq" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="过磅用途:" prop="jhzq" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item
                label="是否报表隐藏到货期:"
                prop="jhzq"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                  v-model="BasicInfo.jhzq"
                  readonly
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <div style="color: red">
      计划付款类型说明：<br />
      挂账支付：付款信息不需要填写；<br />
      按合同条款：比例之和为100%，金额可以自己输
      ，如果有合同总价就计算，主要是输入比例和付款日期（年月）以及月份
    </div>

    <div style="margin-top: 12px">
      供需双方本着平等互利、协商一致的原则，签订本合同，以资双方信守执行。
    </div>

    <div>
      <p>第一条 标的信息</p>
    </div>
    <div style="margin-top: 12px">
      <el-table
        border
        :data="TableFirst"
        style="width: 70%"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column
          prop="wzmc"
          label="标的名称"
          width="90"
          align="center"
          fixed
        >
        </el-table-column>
        <el-table-column prop="wzmc" label="标的名称" width="90" align="center">
        </el-table-column>
        <el-table-column prop="ggxh" label="规格型号" width="90" align="center">
        </el-table-column>
        <el-table-column prop="jldw" label="单位" width="90" align="center">
        </el-table-column>
        <el-table-column prop="sl" label="数量" width="90" align="center">
        </el-table-column>
        <el-table-column
          prop="hsdjview"
          label="含税单价(元)"
          width="90"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="dz" label="单重(kg)" width="90" align="center">
        </el-table-column>
        <el-table-column prop="zj" label="总价" width="90" align="center">
        </el-table-column>
        <el-table-column
          prop="jhbh"
          label="计划单号"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sqbmmc"
          label="使用部门"
          width="90"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="bz" label="备注" width="90" align="center">
        </el-table-column>
        <el-table-column
          prop="bz"
          label="商城交货周期"
          width="90"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="bz"
          label="招议标/询单编号"
          width="90"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="bddhrq"
          label="到货日期"
          width="90"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 12px">
      <div>
        <span>{{ DetaPrices.hblb }}金额合计:{{ DetaPrices.tk1je }}</span>
      </div>
      <div>
        <span>大写:{{ DetaPrices.tk1dx }},含{{ DetaPrices.tk1zzs }}</span>
      </div>
      <div>
        <span>备注:{{ DetaPrices.tk1bz }}</span>
      </div>
    </div>

    <div style="margin-top: 20px">
      <el-form>
        <el-row :gutter="20">
          <el-col :span="9"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="单位名称:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="单位地址:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="法定代表人:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="委托代表人:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="开户银行:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="账号:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="税号:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="电话:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="传真:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="邮政编码:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="9"
            ><div class="grid-content bg-purple">
              <el-form-item
                label="单位名称:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="单位地址:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="法定代表人:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="委托代表人:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="开户银行:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="账号:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="税号:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="电话:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item label="传真:" prop="maxhtbh" label-width="120px">
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="邮政编码:"
                prop="maxhtbh"
                label-width="120px"
              >
                <el-input
                  prefix-icon="el-icon-edit"
                  size="mini"
                  style="width: 200px"
                ></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>
      </el-form>
    </div>

    <div style="margin-top: 20px">
      <div>结算方式明细</div>
      <div>
        <div style="margin-top: 12px">
          <el-table
            border
            :data="jsfsmxs"
            style="width: 70%"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column
              prop="wzmc"
              label="序号"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="fklbmc"
              label="付款类别"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="fkbl"
              label="付款比例%"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="fkje"
              label="付款金额(元)"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="yjfksj"
              label="付款时间"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="fkmons"
              label="月数"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <!-- item.fkfsmx==0 承兑 item.fkfsmx==1 现汇 -->
            <el-table-column
              prop="fkfsmx"
              label="付款方式"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
            <el-table-column
              prop="fkmxbz"
              label="备注"
              width="90"
              align="center"
              fixed
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "BasicInfo",
  props: {
    BasicInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    TableFirst: {
      type: Array,
      default() {
        return [];
      },
    },
    DetaPrices: {
      type: Object,
      default() {
        return {};
      },
    },

     jsfsmxs: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      readonly: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>

.grid-content {
  background-color: rgb(214, 218, 217);
  border-radius: 4px;
  min-height: 550px;
  min-width: 100px;
}


</style>