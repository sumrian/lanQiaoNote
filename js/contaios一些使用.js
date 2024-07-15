// contains 是 JavaScript 中用于检查一个元素是否是另一个元素的后代的方法。
// 它是 DOM 元素的方法，可以通过调用一个 DOM 元素的 contains 
// 方法来检查指定的元素是否是该 DOM 元素的后代。

// contains 方法接受一个参数，即要检查的后代元素。如果指定的后代元素是调用 
// contains 方法的 DOM 元素的后代之一，它将返回 true，否则返回 false。
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');

if (parentElement.contains(childElement)) {
  console.log('childElement is a descendant of parentElement');
} else {
  console.log('childElement is not a descendant of parentElement');
}
// contains 方法只能检查直接后代关系，而不能检查更深层次的后代关系。
// 如果您需要检查更深层次的后代关系，可以使用其他方法，如递归遍历 DOM 树来实现
tab.lis.item(i).classList.contains("liactive")
Array.from(tab.lis.item(i).classList).includes("liactive")
可以用于检测是否为选中状态