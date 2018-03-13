<template>
  <div class="layout">
    <m-header ></m-header>
    <div class="main">
      <m-left ></m-left>
      <div class="content">
          <tabs  class="menu"></tabs>
          <keep-alive>
            <router-view class="view"></router-view>
          </keep-alive>
      </div>
    </div>
    
   
  </div>
</template>

<script>
import MHeader from '@/components/m-header'
import MLeft from '@/components/m-left'
import Tabs from '@/components/tabs'
import {concatTabs} from '@/api/data'
 import {mapState} from 'vuex'

export default {
  methods: {
    onMenuChange() {
      this.$store.state.defaultActive  = this.$route.path.substring(1)
    },
  },
  components:{
    MHeader,MLeft,Tabs
  },
  beforeRouteEnter: (to, from, next) => {
      next(vm => {
         vm.onMenuChange();
      })
  },
  computed:mapState(['selectedItem']),
    
}
</script>

<style >
  @import url('../../common/sass/base.sass');
   .main{
     position: absolute;
     top: 60px;
     left: 0;
     bottom: 0;
     right: 0;
     display: flex;
   }
   .content{
     flex: 1;
     display: flex;
     flex-direction: column;
   }
   .view{
     flex: 1;
     position: relative;
   }
</style>
