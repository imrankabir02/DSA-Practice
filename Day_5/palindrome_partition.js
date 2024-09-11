
function isPalindrome(s, start, end) {
    let [left, right] = [start, end];
    while(left<right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

function backTrack(ans,path,start, s) {
    if(start === s.length)  ans.push([...path]);
    
    for(let i=start; i <= s.length; i++) {
        let xx = s.substring(start, i+1);
        
        if(isPalindrome(s,start,i)) {
            path.push(xx);
            backTrack(ans,path, i+1, s);
            path.pop();
        }
    }
}

function partition(s) {
    let ans = [];
    
    backTrack(ans,[], 0, s);
    
    return ans;
}

const s = "aab";
console.log(partition(s));  // Output: [["a","a","b"],["aa","b"]]


// function isPalindrome(s) {
//     let [left, right] = [0, s.length-1];
//     while(left<right) {
//         if(s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

// function partition(s) {
//     let ans = [];
//     function backTrack(start, path) {
//         if(start === s.length) {
//             ans.push([...path]);
//             return;
//         }

//         for(let end=start+1; end <= s.length; end++) {
//             let xx = s.slice(start, end);

//             if(isPalindrome(xx)) {
//                 path.push(xx);
//                 backTrack(end,path);
//                 path.pop();
//             }
//         }
//     }

//     backTrack(0,[]);

//     return ans;
// }