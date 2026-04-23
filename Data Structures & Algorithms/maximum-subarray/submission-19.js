class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        let res = nums[n - 1];
        for(let i = n - 2; i >= 0; i--){
            let count = 0;
            for(let j = i; j < nums.length; j++){
                count += nums[j];
                res = Math.max(res, count);
            }
        }
        return res;
    }
}
