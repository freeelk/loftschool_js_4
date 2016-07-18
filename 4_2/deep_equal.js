function deepEqual(objA, objB) {

    if (objA === objB) {
        return true;
    }

    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }

    for (var key in objA) {
        if (key in objB) {
            if (!compareValues(objA[key], objB[key])) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;

    function compareValues(a, b) {
        if (typeof(a) !== typeof(b)) {
            return false;
        }

        switch (typeof(a)) {
            case 'object' :
                return objectsCompare(a, b);
            case 'function' :
                return functionsCompare(a, b);
            default :
                return scalarsCompare(a, b);
        }
        return true;
    }

    //Functions for values compare
    function functionsCompare(a, b) {
        currentFuncLog();
        return a.toString() === b.toString();
    }

    function objectsCompare(a, b) {
        if ((a instanceof RegExp) && (b instanceof RegExp)) {
            return regexpsCompare(a, b);
        }

        if (Array.isArray(a) && Array.isArray(b)) {
            return arraysCompare(a, b);
        }

        if ((a instanceof Date) && (b instanceof Date)) {
            return datesCompare(a, b);
        }

        return deepEqual(a, b);
    }

    function regexpsCompare(a, b) {
        return a === b;
    }

    function arraysCompare(a, b) {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!compareValues(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    function datesCompare(a, b) {
        return a.getTime() === b.getTime();
    }

    function scalarsCompare(a, b) {
        return a === b;
    }

}

module.exports = deepEqual;