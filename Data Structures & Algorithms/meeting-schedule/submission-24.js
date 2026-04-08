/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let n = intervals.length;
        for(let i = 0; i < n; i++){
            let A = intervals[i];
            for(let j = i + 1; j < n; j++){
                let B = intervals[j];
                if(Math.min(A.end, B.end) > Math.max(A.start, B.start)){
                    return false
                }
            }
        }
        return true;
    }
}
