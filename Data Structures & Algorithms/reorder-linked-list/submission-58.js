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
     * @return {void}
     */
    reorderList(head) {
        let cur = head;
        let node = [];
        while(cur){
            node.push(cur);
            cur = cur.next;
        }

        let i = 0;
        let j = node.length - 1;

        while(i < j){
            node[i].next = node[j];
            i++;
            if(i >= j) break;
            node[j].next = node[i];
            j--;
        }
        node[i].next = null;
    }
}
