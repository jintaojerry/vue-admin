<template>
    <div>
        <vue-table :columns="columns" :tableDatas="tableDatas" v-on:selectChange="selectChange"><p>123</p></vue-table>
    </div>
</template>

<script>
    import VueTable from '@/components/vue-table'
    import { getMockData,getTablecolumns } from "@/api/tableData";
    export default {
        data() {
            return {
                columns: [],
                tableDatas:[]
            }
        },
        methods: {
            getData() {
                this.columns = getTablecolumns()
                this.tableDatas = getMockData()
            },
            selectChange(item){
                console.log(item)
            }
        },
        created(){
            this.getData()
        },
        components:{
            VueTable
        },
    }
</script>

<style scoped>

</style>