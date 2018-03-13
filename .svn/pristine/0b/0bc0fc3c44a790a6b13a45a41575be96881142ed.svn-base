<template>
    <div class="vue-table"  ref="tableContainer">
        <v-table
                is-horizontal-resize
                column-width-drag
                style="width:100%"
                :columns="columns"
                :table-data="tableData"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
                :select-all="selectALL"
                :select-change="selectChange"
                :select-group-change="selectGroupChange"
                :height="defaultHeight"
                :is-loading="isLoading"
        ></v-table>
        <div class="pagination">
             <v-pagination :total="total" :page-index="pageIndex" :page-size="pageSize" @page-change="pageChange" @page-size-change="pageSizeChange"  :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']" :pageSizeOption="[20,30,50]"></v-pagination>
       </div>
    </div>

</template>

<script>
import Vue from 'vue'

export default {
  props: {
      columns: {
          type: Array,
          default:[]
      },
      tableDatas: {//不能修改父组件传来的值，数据单向流
          type: Array,
          default:[]
      },
  },
  data() {
    return {
      defaultHeight: 0,
      pageIndex: 1,
      pageSize: 20,
      total: 0,
      tableData:null,
      isLoading:true
    };
  },
  methods: {
    getTableData() {
      //加载表格数据
      this.tableData = this.tableDatas.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      this.total = this.tableDatas.length;
    },
    selectALL(selection) {
      //全选后回调

      console.log("select-aLL", selection);
    },

    selectChange(selection, rowData) {
        this.$emit('selectChange',[rowData,selection])
      //选中某一项
    //   console.log(selection)
    //   console.log(rowData)
    },

    selectGroupChange(selection) {
        // console.log(111)
      //任意选中项发生变化时回调
    //   console.log("select-group-change", selection);
    },
    pageChange(pageIndex) {
      //页码改变回调
      this.pageIndex = pageIndex;
      this.getTableData();
      console.log(pageIndex);
    },
    pageSizeChange(pageSize) {
      //每页大小下拉框改变回调
      this.pageIndex = 1;
      this.pageSize = pageSize;
      this.getTableData();
    }
  },
  created() {
    // this.getTableData();
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
      this.getTableData()
      let tableContainerHeight = window.getComputedStyle(this.$refs.tableContainer, null).height
      this.defaultHeight = parseInt(tableContainerHeight) - 100
    }, 500);
   
  }
};
</script>

<style >
.vue-table {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: auto;
}
.pagination {
  display: flex;
  padding: 10px 0;
}
.v-table-htable {
  background: #eee;
}
.v-page-ul {
  margin: auto;
}
.v-table-class{
   font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.v-scrollbar-wrap::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar
    {
        height:12px;
        width:10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #666;
    }
</style>