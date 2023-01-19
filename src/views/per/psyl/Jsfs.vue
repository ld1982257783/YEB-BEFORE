<!--  -->
<template>
  <div>
    <div style="margin-top:20px;">
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
  name: "jsfs",
  props: {
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
.box-card {
  width: 400px;
  margin: 20px auto;
}
.block {
  padding: 30px 24px;
  background-color: rgb(27, 16, 16);
}
.alert-item {
  margin-bottom: 10px;
}
.tag-item {
  margin-right: 15px;
}
.link-title {
  margin-left: 35px;
}
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #f38181;
  height: 100%;
}

.right-container {
  background-color: #fce38a;
  height: 200px;
}

.top-container {
  background-color: #fce38a;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95e1d3;
  height: 100%;
}

.left-container-twoOne {
  background-color: rgb(110, 75, 75);
  height: 100%;
}

.container-onetoOne {
  background-color: rgb(47, 80, 74);
  height: 100%;
  width: 50%;
}

.container-onetoTwo {
  background-color: rgb(61, 19, 56);
  height: 100%;
  width: 50%;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #57926b;
}
.bg-purple {
  background: #7e2970;
}
.bg-purple-light {
  background: #071c4d;
}
.grid-content {
  background-color: rgb(214, 218, 217);
  border-radius: 4px;
  min-height: 550px;
  min-width: 100px;
}
.grid-contentB {
  background-color: rgb(64, 56, 134);
  border-radius: 4px;
  min-height: 150px;
  min-width: 100px;
}
.grid-a-contentWidth {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 100px;
}
.grid-a-content-a-Width {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 220px;
}

.grid-one-contentheight {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 100%;
}

.el-row-two {
  margin-bottom: 80px;
  margin-top: 80px;
}
</style>
