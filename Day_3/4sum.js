function fourSum(nums, target) {
    nums.sort((a,b) => a-b);
    let ans = [];
    let n = nums.length;

    for(let i=0; i<n-3; i++) {
        if(i>=0 && nums[i] === nums[i-1]) continue;

        for(let j=i+1; j<n-2; j++) {
            if(j>i+1 && nums[j] === nums[j-1]) continue;

            let left = j+1;
            let right = n-1;

            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum === target) {
                    ans.push([nums[i], nums[j], nums[left], nums[right]]);

                    while(left < right && nums[left] === nums[left+1]) left++;
                    while(left < right && nums[right] === nums[right-1]) right++;

                    left++;
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return ans;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));
