/**
 * date: 2019-11-28
 * des: 爬楼梯
 * 假设你正在爬楼梯，需要 n 步你才能到达顶部。
 * 但每次你只能爬一步或者两步，你能有多少种不同的方法爬到楼顶部？
比如 n=3，1+1+1=1+2=2+1=3，共有 3 种不同的方法
返回 3
 */

/**
 * 
 * 解析： n = ? r = ?
 * 0 0 
 * 1 1
 * 2 2
 * 3 3
 * 4 5
 * 5 8 
 */
function climbStairs(n) {
  let dp = [0, 1, 2]
  for(let i=3; i<=n; ++i) {
    dp[i] = dp[i-2] + dp[i-1]
  }
  return dp[n]
}
console.log(climbStairs(1), climbStairs(3), climbStairs(5))