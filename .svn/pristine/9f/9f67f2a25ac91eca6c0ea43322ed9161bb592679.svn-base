//用户树模糊搜索
export function UsertreeSearch(tree, value) {
  //<1>.搜索条件
  let allNodes,
    highlightNodes,
    highlightNodes1,
    highlightNodes2,
    highlightNodes3;
  let treeObj = $.fn.zTree.getZTreeObj(tree);
  highlightNodes1 = treeObj.getNodesByParamFuzzy("name", value, null); // 满足搜索条件的节点
  highlightNodes2 = treeObj.getNodesByParamFuzzy("title", value, null);

  //合并数组并去重
  highlightNodes3 = highlightNodes1.concat(highlightNodes2);
  highlightNodes = highlightNodes3.filter(function(element, index, self) {
    return self.indexOf(element) === index;
  });
  allNodes = treeObj.transformToArray(treeObj.getNodes());

  if (value != "") {
    // 需要显示是节点（包含父节点）
    let showNodes = [];
    if (highlightNodes != null) {
      for (let i = 0; i < highlightNodes.length; i++) {
        //组装显示节点的父节点的父节点....直到根节点，并展示
        getParentShowNodes_ztree(tree, highlightNodes[i], showNodes);
      }
      treeObj.hideNodes(allNodes);
      treeObj.showNodes(showNodes);
      treeObj.expandAll(true);
    }
  } else {
    treeObj.showNodes(allNodes);
    treeObj.expandAll(true);
  }
  //查找父节点
  function getParentShowNodes_ztree(tree, node, showNodes) {
    if (node != null) {
      showNodes.push(node);
      let treeObj = $.fn.zTree.getZTreeObj(tree);
      let parentNode = node.getParentNode();
      return getParentShowNodes_ztree(tree, parentNode, showNodes);
    } else {
      return node;
    }
  }
}
