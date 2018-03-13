<template>
    <div class="zTree">
        <div class="btnbartitle">| 用户列表</div>
        <div class="inputContainer">
            <input type="text" placeholder="请输入用户名" id="txtUserName" v-model="txt" @keyup="treeSearch">
        </div>
        <ul id="treeDemo" class="ztree"></ul>  
    </div>
</template>

<script>
import "@/plugins/zTree/jquery-1.4.4.min.js";
import "@/plugins/zTree/jquery.ztree.core.js";
import "@/plugins/zTree/jquery.ztree.excheck.js";
import "@/plugins/zTree/jquery.ztree.exhide-3.5.min.js";
import { UsertreeSearch } from "@/plugins/zTree/ztreeSearch.js";
import { ztreeData } from "@/api/ztreeData";

export default {
  data() {
    return {
      txt: "",
      setting: {
        data: {
          simpleData: {
            enable: true
          }
        },
        callback: {
          beforeClick: this.beforeClick,
          onClick: this.zTreeOnClick,
          onCheck: this.zTreeOnCheck
        }
      },
      zNodes: null
    };
  },

  methods: {
    initZtree: function() {
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    },
    zTreeOnClick: function(event, treeId, treeNode) {},
    zTreeOnCheck: function(event, treeId, treeNode) {},
    beforeClick: function(treeId, treeNode) {
      var zTree = $.fn.zTree.getZTreeObj("treeDemo");
      // zTree.checkNode(treeNode, !treeNode.checked, null, true);
      zTree.checkNode(treeNode, !treeNode.checked, true, true); //第二个参数!treeNode.checked和"",省略此参数效果等同，则根据对此节点的勾选状态进行 toggle 切换，第三个参数设置为true时候进行父子节点的勾选联动操作 ，第四个参数true 表示执行此方法时触发 beforeCheck & onCheck 事件回调函数；false 表示执行此方法时不触发事件回调函数
      return false;
    },
    treeSearch: function() {
      UsertreeSearch("treeDemo", this.txt);
    }
  },
  created() {
    this.zNodes = ztreeData
  },
  mounted() {
    this.initZtree();
  }
};
</script>

<style scoped lang="scss">
.zTree {
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  width: 208px;
  background: #fff;
  border: 1px solid #ccc;
}
.btnbartitle {
  width: 100%;
  height: 30px;
  background: #fff;
  line-height: 30px;
  text-indent: 8px;
  color: #333;
}
.inputContainer {
  width: 100%;
  height: 25px;
}
.inputContainer > input {
  width: 98%;
  height: 100%;
  text-indent: 5px;
}
.ztree {
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0;
  overflow: auto;
}
</style>

<style>
@import url("../plugins/zTree/zTreeStyle.css");
</style>