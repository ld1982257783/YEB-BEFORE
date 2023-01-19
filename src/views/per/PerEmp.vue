<!--  -->
<template>
  <div>
    <!-- 这里引入BasicInfo -->
    <BasicInfo></BasicInfo>
    
    <!-- 这里引入第一个table表格 -->
    <TableFitst></TableFitst>

    <!-- 开始遍历条款 抽成组件-->

    <!-- detaInfo组件 -->
    <!-- <DetaInfo></DetaInfo> -->

    <!-- 再抽组件 结算方式组件  jsfs -->
    <Jsfs></Jsfs>    
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 工业买卖合同 框架
import BasicInfo from './psyl/BasicInfo.vue'
import TableFitst from './psyl/TableFirst.vue'
import DetaInfo from './psyl/DetaInfo.vue'
import Jsfs from './psyl/Jsfs.vue'
export default {
  name: "PerEmp",
  props:{
      htgl:{
          type:Object,
          default (){
              return {};
          }
      }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
      BasicInfo,
      TableFitst,
      DetaInfo,
      Jsfs
  },
  data() {
    //这里存放数据
    return {
      htgls: {

      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
      
  },
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
};
</script>
<style scoped>
.my-class {
  display: flex;
  justify-content: space-between;
}
</style>