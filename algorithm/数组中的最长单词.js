/**
 * date: 2019-11-29
 * des: 数组中的最长单词
 * 给一个数组，找出其中所有最长的单词。
[
  "dog",
  "google",
  "facebook",
  "internationalization",
  "blabla"
]
最长的单词集合为 ["internationalization"]
 */
function findLongest(arr) {
  let newArr = arr.sort((a, b) => b.length - a.length)
  let result = []
  let max = arr[0]
  result.push(max)
  for(let i=1,len=newArr.length; i<len; ++i) {
    if(max.length === newArr[i].length) {
      result.push(max)
    }
  }
  return result
}

console.log(findLongest([
  "dog",
  "google",
  "facebook",
  "internationalization",
  "blabla"
]),findLongest([
  "like",
  "love",
  "hate",
  "yes"
]))