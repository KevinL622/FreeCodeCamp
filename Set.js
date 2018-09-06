/* Set data Structure */

// similar to an array but not repeat values and in no particular order.

function mySet() {
    // the var collection will hold the Set
    var collection = [];

    // this method will check for presence of an element and return boolean
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the Set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a Set
    this.remove = function(element){
        if (this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function(){
        return collection.length;
    }
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.value();
        var secondSet = otherSet.values();
        firstSet.forEach(function(element){
            unionSet.add(element);
        });
        secondSet.forEach(function(element){
            unionSet.add(element);
        });
        return unionSet;
    };
    //this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(element){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    //this method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new Set();
        var firstSet = this.value();
        firstSet.forEach(function(element){
            if(!otherset.has(element)){
                differenceSet.add(element);
            }
        });
        return differentSet;
    };
    //tests if set is a subset of a different set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };

};

//tests
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setA.has("a"));
