//using two pointer

function twoSum(nums, target) {
  let [i, j] = [0, nums.length - 1];
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      return [i, j];
    }
  }
  return [-1, -1];
}

// using HashMap

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
