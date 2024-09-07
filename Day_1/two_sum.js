function twoSum(nums, target) {
    let [i,j] = [0, nums.length - 1];
    while(i<j) {
        if(nums[i] + nums[j] > target) {
            j--;
        } else if(nums[i] + nums[j] < target) {
            i++;
        } else {
            return [i, j];
        }
    }
    return [-1,-1];
}

console.log(twoSum([2, 7, 11, 15],9));