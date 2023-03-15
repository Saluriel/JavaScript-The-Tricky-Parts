function curriedAdd(total) {
    if (total === undefined) {
        return 0;
    }
    return function addNums(num) {
        if (num === undefined) {
            return total;
        }
        total += num;
        return addNums;
    }
}

module.exports = { curriedAdd };
