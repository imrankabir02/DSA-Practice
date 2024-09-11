function checkInclusion(s1,s2) {
    let len1 = s1.length, len2 = s2.length;

    if(len1 > len2) return false;

    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    let aCode = 'a'.charCodeAt(0);

    for(let i=0; i<len1; i++) {
        count1[s1.charCodeAt(i) - aCode]++;
        count2[s2.charCodeAt(i) - aCode]++;
    }

    for(let i=0; i< len2-len1; i++) {
        if(helper(count1, count2)) return true;

        count2[s2.charCodeAt(i) - aCode]--;
        count2[s2.charCodeAt(i + len1) - aCode]++;
    }
    return helper(count1, count2);
}

function helper(count1, count2) {
    for(let i=0; i<26; i++) {
        if(count1[i] !== count2[i]) return false;
    }
    return true;
}

const s1 = "ab";
const s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));  // Output: true