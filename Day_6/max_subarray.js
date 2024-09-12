function characterReplacement(s,k) {
    let [left, max, maxlen] = [0,0,0];
    let map = {};

    for(let right=0; right<s.length; right++) {
        map[s[right]] = (map[s[right]] || 0) + 1;
        max = Math.max(max, map[s[right]]);

        while(right-left+1-max > k) {
            map[s[left]]--;
            left++;
        }
        maxlen = Math.max(maxlen, right-left+1);
    }
    return maxlen;
}

const s = "ABAB", k = 2;
console.log(characterReplacement(s,k));