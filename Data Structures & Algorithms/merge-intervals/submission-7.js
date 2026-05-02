class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let output = [];
        output.push(intervals[0]);

        for(let interval of intervals){
            let start = interval[0];
            let end = interval[1];
            let lastEnd = output[output.length - 1][1];

            if(start <= lastEnd){
                output[output.length - 1][1] = Math.max(lastEnd, end)
            }else{
                output.push([start, end])
            }
        }
        return output;
    }
}
