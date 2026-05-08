class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        const makeCombine = (idx, comb, total) => {
            if(total === target){
                res.push([...comb]);
                return;
            }
            if(total > target || idx >= nums.length){
                return;
            }
            comb.push(nums[idx]);
            makeCombine(idx, comb, total + nums[idx]);
            comb.pop();
            makeCombine(idx + 1, comb, total);
        }
        makeCombine(0, [], 0);
        return res;
    }
}
