// https://www.codewars.com/kata/52aebd2423b44356b8000578/javascript

function isValidTree(tree){
  function traverse(node) {
    if (!node) return true;
    if (!node.left && !node.right) return node.color == 'blue';
    return node.color == 'red' && traverse(node.left) && traverse(node.right);
  }
  
  return tree.ornament == 'star' && traverse(tree.left) && traverse(tree.right);
}
