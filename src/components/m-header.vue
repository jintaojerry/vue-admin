<template>
    <div class="m-header">
        <img src="../common/image/logo.png" alt="" srcset="">
        <div class="systerm-name">服务器运维管理系统</div>
        <div type="success" class="toggle-menu iconfont icon-menu" @click="toggleMenu"></div>
        <el-col :span="4" class="userinfo">
            <el-dropdown>
                <div class="el-dropdown-link userinfo-inner">
                    <div class="user-name"> Jerry</div>
                    <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="getMessage">我的消息</el-dropdown-item>
                    <el-dropdown-item @click.native="set">设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["toggleMenu"]),
    logout() {
      this.$confirm("确认退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getMessage() {
        this.$message('暂无消息');
    },
    set() {
        this.$message('此功能还在开发当中...');
    }
  }
};
</script>

<style scoped lang="scss">
@import url("../common/fonts/iconfont.css");
.m-header {
  height: 60px;
  background: #373d41;
  display: flex;
  .systerm-name {
    color: #fff;
    font-size: 16px;
    padding: 0 15px;
    line-height: 60px;
  }
  img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .toggle-menu {
    color: #fff;
    font-size: 24px;
    line-height: 60px;
    cursor: pointer;
  }
  .userinfo {
    position: absolute;
    width: 120px;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .userinfo-inner {
    display: flex;
    img {
      border-radius: 50%;
    }
  }
  .user-name {
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 24px;
  }
}
</style>