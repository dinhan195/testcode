function canNest(a, b) {
    if (Math.min(...a) > Math.min(...b) && Math.max(...a) < Math.max(...b))
    return true;
    else return false;
}
console.log(canNest([1, 2, 3, 4], [0, 10]) )
console.log(canNest([3, 1], [6, 0]) )
console.log(canNest([1, 2, 3], [2, 3]))