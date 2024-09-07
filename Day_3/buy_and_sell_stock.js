// one pointer
function maxProfit(nums) {
    let min = Infinity;
    let max = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
        } else {
            max = Math.max(max, nums[i] - min);
        }
    }
    return max;
}

// two pointer
function maxProfit(nums) {
    let [l,r,max] = [0,1,0];

    while(r < nums.length) {
        if(nums[r] <= nums[l]) {
            l = r;
        }
        max = Math.max(max, nums[r] - nums[l]);
        r++;
    }
    return max;
}

let nums = [2,7, 6, 4, 3, 1];
console.log(maxProfit(nums));