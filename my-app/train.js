let arr = [4, 2, 3, 1, 5, 7, 2];

const twoSum = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            if (nums[i + 1] === undefined) {
                result.push(nums[i])
            } else {
                let temp = nums[i] + nums[i + 1];
                result.push(temp);
            }
        }
    }
    return result;
}

console.log(twoSum(arr));
