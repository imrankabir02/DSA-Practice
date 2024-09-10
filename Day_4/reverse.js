// using array reverse
function reverseString(s) {
    return s.reverse();
}

// using stack
function reverseString(s) {
    let stack = [];
    for(let x of s) {
        stack.push(x);
    }
    for(let i=0; i<s.length; i++) {
        s[i] = stack.pop();
    }
    return s;
}

// using recursion
function reverseString(s, l=0, r=s.length-1) {
    if(l>=r) return;
    [s[l],s[r]] =[s[r],s[l]];
    reverseString(s,l+1,r-1);
}

//using two point O(1) extra space
function reverseString(s) {
  let [left, right] = [0, s.length - 1];
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
