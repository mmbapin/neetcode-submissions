class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        let res = nums[0];
        for(let i = 0; i < n; i++){
            let count = 0;
            for(let j = i; j < n; j++){
                count += nums[j];
                res = Math.max(res, count);
            }
        }
        return res
    }
}
