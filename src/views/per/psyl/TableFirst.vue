<!--  -->
<template>
  <div>
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
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  name: "TableFirst",
  props:{
      TableFirst:{
          type: Array,
          default(){
              return [];
          }
      },
      DetaPrices:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        loading: false,
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
</style>