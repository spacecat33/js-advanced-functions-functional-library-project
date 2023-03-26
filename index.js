function myEach(collection, alert) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    for (let i = 0; i < newCollection.length; i++) {
        alert(newCollection[i])
    }

    return collection;
};

function myMap(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
    let array = [];

    for (let i = 0; i < newCollection.length; i++) {
        array.push(fn(newCollection[i]))
    };

    return array;
};

function myReduce(collection, fn, start=0) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    if (!start) {
        start = newCollection[0]
        newCollection = newCollection.slice(1)
    };

    for (let i = 0; i < newCollection.length; i++) {
        start = fn(start, newCollection[i], newCollection);
    };

    return start;
};

function myFind(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (fn(newCollection[i])) {
            return newCollection[i];
            break;
        };
    };
};

function myFilter(collection, fn) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
    let array = [];

    for (let i = 0; i < newCollection.length; i++) {
        if (fn(newCollection[i])) {
            array.push(newCollection[i]);
        };
    };
    return array;
};

function mySize(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection).length;
};

function myFirst(array, n) {
    if (!n) {
        return array[0]
    } else {
        return array.slice(0, n)
    };
};

function myLast(array, n) {
    if (!n) {
        return array[array.length -1];
    } else {
        return array.slice(-n);
    };
};

function myKeys(obj) {
    let array = [];
    for(let key in obj) {
        array.push(key);
    };
    return array;
};

function myValues(obj) {
    let array = [];
    for(let key in obj) {
        array.push(obj[key]);
    };
    return array;
};
// => alerts each number in turn and returns the original collection

// Bonus:
// compact: 
function compact(collection) {
    const badBad = new Set([false, null, 0, "", undefined, NaN])
    return collection.filter(el => !badBad.has(el))
  };

//   sortBy: 
  function sortBy(collection, callback) {
    const newArr = [...collection]
    return newArr.sort(function(a, b) {
      return callback(a) - callback(b)
    })
  };

//   unpack: 
  function unpack(receiver, arr) {
    for (let val of arr)
      receiver.push(val)
  };

//   flatten: 
  function flatten(collection, shallow, newArr=[]) {
    if (!Array.isArray(collection)) return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  };

//   uniqSorted: 
  function uniqSorted(collection, iteratee) {
    const sorted = [collection[0]]
    for (let idx = 1; idx < collection.length; idx++) {
      if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }
    return sorted
  };

//   uniq: 
  function uniq(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  };
