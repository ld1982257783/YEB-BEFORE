<!--  -->
<template>
<div>
    <div style="margin-top: 12px">
      <div style="margin-top: 12px">
        <el-descriptions
          class="margin-top"
          title="供方明细"
          direction="horizontal"
          :column="4"
        >
          <el-descriptions-item label="供方">kooriookami</el-descriptions-item>
          <el-descriptions-item label="委托代表人"
            ><el-tag size="small">学校</el-tag></el-descriptions-item
          >
          <el-descriptions-item label="法定代表人" :span="2">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="地址"> 江苏省 </el-descriptions-item>
          <el-descriptions-item label="开户银行" :span="3"
            >江苏省</el-descriptions-item
          >
          <el-descriptions-item label="税号">江苏省</el-descriptions-item>
          <el-descriptions-item label="账号">江苏省</el-descriptions-item>
          <el-descriptions-item label="邮政编码">江苏省</el-descriptions-item>
        </el-descriptions>
      </div>

      <div style="margin-top: 12px">
        <el-descriptions
          class="margin-top"
          title="需方明细"
          direction="horizontal"
          :column="4"
        >
          <el-descriptions-item label="供方">kooriookami</el-descriptions-item>
          <el-descriptions-item label="委托代表人"
            ><el-tag size="small">学校</el-tag></el-descriptions-item
          >
          <el-descriptions-item label="法定代表人" :span="2">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="地址"> 江苏省 </el-descriptions-item>
          <el-descriptions-item label="开户银行" :span="3"
            >江苏省</el-descriptions-item
          >
          <el-descriptions-item label="税号">江苏省</el-descriptions-item>
          <el-descriptions-item label="账号">江苏省</el-descriptions-item>
          <el-descriptions-item label="邮政编码">江苏省</el-descriptions-item>
        </el-descriptions>
      </div>

      <div style="margin-top: 12px">
        <el-descriptions
          class="margin-top"
          title="备注"
          direction="horizontal"
          :column="4"
        >
          <el-descriptions-item label="联系人电话"
            >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="签订地点"
            ><el-tag size="small">学校</el-tag></el-descriptions-item
          >
          <el-descriptions-item label="签订时间" :span="2">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="项目编码"> 江苏省 </el-descriptions-item>
          <el-descriptions-item label="经办人">江苏省</el-descriptions-item>
          <el-descriptions-item label="审核人" :span="2"
            >江苏省</el-descriptions-item
          >
        </el-descriptions>
      </div>
    </div>
    <!-- if test="htgl.htbz==1" -->
    <div>
      <div>
        <span
          >合同有效期起:{{ DetailInfos.htyxqq }}&nbsp;&nbsp;&nbsp;&nbsp;合同有效期止:{{
            DetailInfos.htyxqz
          }}</span
        >
      </div>

      <div>
        <!-- <s:if test="htgl.jhfklx==0">挂账支付 -->
        <div v-if="DetailInfos.jhfklx == 0">
          <span>计划付款类型:挂账支付</span>
        </div>
        <!-- <s:if test="htgl.jhfklx==1"> -->
        <div v-if="DetailInfos.jhfklx == 1">
          <span>计划付款类型:按合同条款</span>
        </div>
        <!-- <s:if test="htgl.htfkfs==0"> -->
        <div v-if="DetailInfos.htfkfs == 0">
          <span>合同付款方式:承兑</span>
        </div>
        <!-- <s:if test="htgl.htfkfs==1"> -->
        <div v-if="DetailInfos.htfkfs == 0">
          <span>合同付款方式:现汇</span>
        </div>
        <div>
          <span>开票点比例:{{ DetailInfos.kpdbl * 100 }}%</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
props:{
    DetailInfos:{
        type:Object,
        default(){
            return {};
        }
    }
},
name: 'DetaInfo',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

</style>