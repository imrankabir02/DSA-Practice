function waterContainer(heights) {
    let [left, right, max] = [0, heights.length - 1, 0];
    let w, h;
    while(left < right) {
        w = right - left;

        if(heights[left] < heights[right]) {
            h = heights[left];
            left++;
        } else {
            h = heights[right];
            right--;
        }
        max = Math.max(max, w*h);
    }
    return max;
}

let heights = [1,8,6,2,5,4,8,3,7];
console.log(waterContainer(heights));