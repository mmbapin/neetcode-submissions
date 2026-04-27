class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let count = {};
        for(let s of strs){
            let newStr = s.split("").sort().join("");

            if(!count[newStr]){
                count[newStr] = []
            }
            count[newStr].push(s);
        }
        return Object.values(count);
    }
}
