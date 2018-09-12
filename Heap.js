/* Heaps */

//equations for finding values of a heap in an array based on i
//left child: i * 2
//right child: i * 2 +1
//parent: i / 2

/*
heaps are often represented as arrays
*/

//in a miniheap all the smallest numbers are on top
//order doesn't matter on the same levels
let MiniHeap = function(){
    let heap = [null];

    this.insert = function(num) {
        heap.push(num);
        if (heap.length > 2) {
            let index = heap.length - 1;
            while (heap[index]) < heap.[Math.floor(idx/2)]) {
                if (idx >= 1) {
                    //es6 syntax to swap the positions of the nodes
                    [heap[Math.floor(index/2)]], heap[index]] = [heap[idx]],
                    heap[Math.floor(index/2)]];
                    if (Math.floor(index/2) > 1) {
                        index = Math.floor(index/2);
                    } else {
                        break;
                    };
                };
            };
        };
    };

//always removes the top node in a miniheap
    this.remove = function(){
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length -1];
            heap.splice(heap.length -1);
            if (heap.length == 3){
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2] = heap[2], heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            //will keep moving the node down if necessary
            while (heap[i] >= heap[left] || heap[i] >= heap[right]){
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left] = heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right] = heap[right], heap[i]];
                    i=2*i+1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                };
            };
        } else if (heap.length == 2){
            heap.splice(1,1);
        } else {
            return null;
        };
        return smallest;
    };
    //O(nlogn) sorting method
    this.sort = function(){
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove());
        };
        return result;
    };
};
