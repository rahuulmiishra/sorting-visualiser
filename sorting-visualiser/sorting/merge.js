
const arr = [2,4,4,1,5,3];

function merge(a) {
  if(a.length <= 1 || !a) {
    return a;
  }
  
  const mid = Math.floor(a.length/2);
  
  const left = merge(a.slice(0,mid));
  const right = merge(a.slice(mid));
  
  return sort(left,right);
}

function sort(l,r) {
  const result = [];
  
  while(l.length && r.length) {
      // Insert the smallest item into sortedArr
    if (l[0] < r[0]) {
      result.push(l.shift())
    } else {
      result.push(r.shift())
    }
  }
  
  return [...result, ...l,...r];
}

console.log(merge(arr));