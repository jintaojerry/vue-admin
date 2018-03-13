<template>
    <div class="m-left" :class="{active:isCollapse}">
        <el-col :span="12">
            <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :collapse="isCollapse"
            active-text-color="#ffd04b">
                <el-menu-item index="home" @click="clickTab({id:'home',name:'后台首页'})">
                    <i class="el-icon-menu"></i>
                    <span slot="title">后台首页</span>
                </el-menu-item>

                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>基础资料</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="item in basicDataItems" 
                            :key="item.index"
                            @click="clickTab(item)" 
                            :index="item.id" >
                            {{item.name}}
                        </el-menu-item>
                    </el-menu-item-group>
                
                </el-submenu>

                 <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>系统设置</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item  v-for="item in systermSettings" 
                            :key="item.index" 
                            @click="clickTab(item)" 
                            :index="item.id">
                            {{item.name}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</template>

<script>

import {basicDataItems,systermSettings} from '@/api/data'
import {mapMutations,mapState } from 'vuex';
export default {
    data() {
        return {
            basicDataItems: basicDataItems,
            systermSettings:systermSettings,
        }
    },
    methods: {
         ...mapMutations(['clickTab']),
    },
    watch:{
        defaultActive(newValue,oldValue) {
           this.$router.push({path:newValue})
        },
    },
    computed:mapState(['isCollapse','defaultActive']),
    
};
</script>

<style scoped lang="scss">
.m-left {
  width: 210px;
  background: #545c64;
  &.active{
      width: 64px;
  }
  .el-col-12 {
    width: 100%;
  }
  .el-menu{
      border-right: none;
  }
  .el-submenu .el-menu-item{
      height: 40px;
      line-height: 40px;
  }
}
</style>