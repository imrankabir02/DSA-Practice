//Kadane's algorithm

function maxSubArray(nums) {
  let currentMax = nums[0];
  let totalMax = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);

    if (currentMax > totalMax) {
      totalMax = currentMax;
    }
  }

  return totalMax;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
