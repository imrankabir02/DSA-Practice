// using map and sort
function frequencySort(s) {
    let frequencyMap = {};
    for(let i of s) {
        frequencyMap[i] = (frequencyMap[i] || 0) + 1;
    }
    let sorted = Object.keys(frequencyMap).sort((a,b) => frequencyMap[b] - frequencyMap[a]);
    let ans = '';
    for(let i of sorted) {
        ans += i.repeat(frequencyMap[i]);
    }
    return ans;
}

// using bucket sort
function frequencySort(s) {
    let frequencyMap = {};
    for(let i of s) {
        frequencyMap[i] = (frequencyMap[i] || 0) + 1;
    }
    let buckets = [];
    for(let i=0; i<=s.length; i++) {
        buckets[i] = [];
    }
    for(let i in frequencyMap) {
        let x = frequencyMap[i];
        buckets[x].push(i);
    }
    let ans = '';
    for(let i=buckets.length-1; i>0; i--) {
        for(let j of buckets[i]) {
            ans += j.repeat(i);
        }
    }
    return ans;
}

function frequencySort(s) {
    let frequencyMap = new Map();

    for(let i of s) {
        frequencyMap.set(i, (frequencyMap.get(i) || 0) + 1);
    }

    let ans = [...frequencyMap.entries()].sort((a,b) => b[1] - a[1]).map(c => c[0].repeat(c[1])).join('');

    return ans;
}

const s = "tree";
console.log(frequencySort(s));