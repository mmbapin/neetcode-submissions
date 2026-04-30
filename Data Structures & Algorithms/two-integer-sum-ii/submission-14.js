class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();
        for(let i = 0; i < numbers.length; i++){
            let complete = target - numbers[i];
            if(map.has(complete)){
                return [map.get(complete) + 1, i + 1]
            }
            map.set(numbers[i], i);
        }
    }
}
