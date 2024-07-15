// cloneNode() 是 JavaScript 中的一个方法，用于克隆一个节点。
// 它可以用来创建一个节点的副本，包括节点的所有属性和子节点。
// cloneNode() 方法接受一个布尔值参数，表示是否深度克隆节点。
// 如果参数为 true，则会克隆节点及其整个子节点树；如果参数为 false，
// 则只克隆节点本身，不包括子节点。如果不指定参数，默认为 false。
const originalNode = document.getElementById('original');
const clonedNode = originalNode.cloneNode(true);
parentNode.appendChild(clonedNode);
// 在上面的代码中，我们首先获取了一个具有 id 属性为 "original" 
// 的原始节点。然后，使用 cloneNode(true) 克隆了这个节点，
// 并将克隆后的节点添加到了 parentNode 中。