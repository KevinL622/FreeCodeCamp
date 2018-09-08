/* Hash Tables */

/*common way to implement map best case ( O(1) for search insert and delete)
space: O(n)
takes a key and puts through a hash function to match hash number
if there are multiple keys per hash number that is called a collision
can just store it at the hash bucket and look up for specific key
*/

//max is the number of buckets
var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++){
        // adding char code for each character in the string
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function() {
    let storage =[];
    const storageLimit = 4; //4 buckets set for demonstration purposes

    this.print = function() {
        console.log(storage);
    };
    //this method adds a key value pair to the hash table
    this.add = function (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] == undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i=0; i< storage[index].length; i++){
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };
    //this method removes a key from the hash table
    this.remove = function(key){
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i=0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        };

    };
    //this method lookups a value key pair
    this.lookup = function(key){
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i=0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    return storage[index][i][1];
                }
            }
        };
    };
};

//test
console.log(hash('beau', 10));

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'));
ht.print();
