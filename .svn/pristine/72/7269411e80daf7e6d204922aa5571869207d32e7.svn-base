export function getTablecolumns() {
  return [
    {
      width: 60,
      titleAlign: "center",
      columnAlign: "center",
      type: "selection"
    },
    {
      field: "number",
      title: "序号",
      width: 80,
      titleAlign: "center",
      columnAlign: "center",
      isResize: true
    },
    {
      field: "name",
      title: "姓名",
      width: 80,
      titleAlign: "center",
      columnAlign: "center",
      isResize: true
    },
    {
      field: "tel",
      title: "手机号码",
      width: 150,
      titleAlign: "center",
      columnAlign: "center",
      isResize: true
    },
    {
      field: "hobby",
      title: "爱好",
      width: 150,
      titleAlign: "center",
      columnAlign: "center",
      isResize: true
    },
    {
      field: "address",
      title: "地址",
      width: 280,
      titleAlign: "center",
      columnAlign: "left",
      isResize: true
    }
  ];
}

export function getMockData() {
  let tableData = [];
  for (let i = 1; i <= 200; i++) {
    tableData.push({
      number: i,
      name: `张三${i}`,
      tel: parseInt(15000000000 + Math.random() * 1000000000),
      hobby: "钢琴、书法、唱歌",
      address: "深圳市宝安区扬天路德至高科技大厦11栋5楼",
    });
  }
  return tableData;
}
