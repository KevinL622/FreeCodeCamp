/* QUEUE*/

//Queues are first in first out as apposed to a stack which is last in last out
function Queue(){
    var collection =[];
    this.print = function(){
        console.log(collection);
    };
    //pushes item into queue at the end
    this.enqueue = function(element){
        collection.push(element);
    };
    //takes first item off the queue
    this.dequeue = function(element){
        return collection.shift();
    };
    //shows what the first item is in the queue
    this.front = function(){
        return collection[0];
    };
    //checks lenght of the queue
    this.size = function(){
        return collection.length;
    };
    //checks if queue is empty, returns true if empty and false if not empty
    this.isEmpty = function(){
        return (collection.length === 0);
    };
};

//tests
var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();

//priority queue casts elements with priority values
function PriorityQueue(){
    var collection = [];
    this.printCollection = function(){
        (console.log(collection));
    };
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                //check priorities
                if (element[1] < collection[i][1]){
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            };
            if (!added){
                collection.push(element);
            };
        }
    };
    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0);
    };
};

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wojcik', 1]);
pq.enqueue(['Brian Swift', 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
