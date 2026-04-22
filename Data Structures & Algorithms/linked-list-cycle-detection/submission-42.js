/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let set = new Set();
        let cur = head;
        while(cur){
            if(set.has(cur)){
                return true;
            }
            set.add(cur);
            cur = cur.next;
        }
        return false;
    }
}
