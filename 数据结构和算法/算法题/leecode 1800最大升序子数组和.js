/**
 * @param {number[]} nums
 * @return {number}
 */
/* var maxAscendingSum = function (nums) {
  let maxNum = 0, // 处理后的数组
    tmpNum = 0; // 临时和

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      if (tmpNum === 0) {
        tmpNum += nums[i];
      }
      tmpNum += nums[i + 1];
    } else {
      if (tmpNum === 0) {
        tmpNum += nums[i];
      }
      maxNum = maxNum < tmpNum ? tmpNum : maxNum;
      tmpNum = 0;
    }

    if (i === nums.length - 2) {
      maxNum = maxNum < tmpNum ? tmpNum : maxNum;
      tmpNum = 0;
    };
  }

  nums.length === 1 && (maxNum = nums[0]);
  return maxNum;
}; */

var maxAscendingSum = function (nums) {
  let max = nums[0], // 最大值
    last = nums[0]; // 上一个值

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > last) {
      last = nums[i];
      nums[i] += nums[i - 1];
    } else {
      last = nums[i];
    }

    if (nums[i] > max) max = nums[i]
  }
  console.log('nums', nums)

  return max;
};

let arr = [10, 20, 30, 5, 10, 50];
console.log(arr);
maxAscendingSum(arr);