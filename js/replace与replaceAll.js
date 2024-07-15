// 在 JavaScript 中，replace 方法只会替换第一个匹配项，
// 除非你使用正则表达式中的全局匹配标志（g）来指示全局替换。
// 如果没有使用全局匹配标志，replace 方法将只替换第一个匹配项，然后停止。

// 例如，考虑以下示例：

{
    let str = "apple, orange, banana, orange";
    let newStr = str.replace("orange", "lemon");

    console.log(newStr);
}


// 在这个例子中，只会将第一个匹配到的 "orange" 替换为 "lemon"，
// 结果为："apple, lemon, banana, orange"。

// 如果你想替换所有匹配项，你可以使用正则表达式，并添加全局匹配标志 g，如下所示：

{
    let str = "apple, orange, banana, orange";
    let newStr = str.replace(/orange/g, "lemon");

    console.log(newStr);
}
// 在这个例子中，使用了正则表达式 /orange/g 来匹配所有的 "orange"，
// 并将其替换为 "lemon"，结果为："apple, lemon, banana, lemon"。

// replaceAll 是 JavaScript 中的一个字符串方法，它可以用来替换所有匹配的子字符串，
// 而不仅仅是第一个匹配项。replaceAll 方法在替换所有匹配项时非常方便，
// 不需要使用正则表达式来指定全局匹配。

// 以下是一个使用 replaceAll 方法的示例：

{
    let str = "apple, orange, banana, orange";
    let newStr = str.replaceAll("orange", "lemon");

    console.log(newStr);
}
// 在这个例子中，replaceAll 方法将会将所有匹配到的 "orange" 都替换为 "lemon"，
// 结果为："apple, lemon, banana, lemon"。

// 需要注意的是，replaceAll 方法是在 ECMAScript 2021 中引入的，
// 因此如果你使用的是较旧版本的 JavaScript 环境，可能不支持这个方法。
// 在较新的环境中，replaceAll 是一个非常方便的方法来替换所有匹配项。


//总结：replace 与正则的正则的g全局匹配一起使用能达到和replaceAll一样的效果