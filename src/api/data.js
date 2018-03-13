export const basicDataItems =  [
    {
        id:'user',
        name:'用户管理'
    },
    {
        id:'group',
        name:'分组管理'
    },
    {
        id:'vehicle',
        name:'车辆管理'
    },
    {
        id:'role',
        name:'角色管理'
    },
    {
        id:'enterprise',
        name:'企业管理'
    },
    {
        id:'practitioners',
        name:'从业人员管理'
    },
    {
        id:'notice',
        name:'通知管理'
    }
]

export const systermSettings = [
    {
       id:'useComputer',
       name:'上机日志'
   },
   {
       id:'operate',
       name:'操作日志'
   },
   {
       id:'remind',
       name:'提醒设置'
   },
]

export const home = [
    {
        id:'home',
        name:'Hou'
    }
]

export function concatTabs () {
    
    return basicDataItems.concat(systermSettings).concat(home)
}
