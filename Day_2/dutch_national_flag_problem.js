// using counting sort

function sortColors(nums) {
  let count = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  let index = 0;

  for (let i = 0; i < count[0]; i++) {
    nums[index++] = 0;
  }

  for (let i = 0; i < count[1]; i++) {
    nums[index++] = 1;
  }

  for (let i = 0; i < count[2]; i++) {
    nums[index++] = 2;
  }
  return nums;
}

// using Dutch National Flag Algorithm

function sortColors(nums) {
    let [low, mid, high] = [0,0,nums.length - 1];

    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if(nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}

const nums = [2, 0, 2, 1, 1, 0];

console.log(sortColors(nums));
