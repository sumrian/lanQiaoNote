function wordSegmentation(words) {
    // TODO：待补充代码
    return words.split(new RegExp([...stopWords,'\\w','\\s','[（：、，。）]'].join('|'))).filter(Boolean)
  }
//   多学习正则用join('|')来生成匹配多种字符的正则表达式