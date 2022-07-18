// https://www.codewars.com/kata/52bef5e3588c56132c0003bc/javascript

function treeByLevels (rootNode) {
  const res = [];
  const nodes = [rootNode];
  
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i]) {
      res.push(nodes[i].value);
      nodes.push(nodes[i].left, nodes[i].right);   
    }
  }
  
  return res
}

