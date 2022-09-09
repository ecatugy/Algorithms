
/**
 * Call function countdown 
 */
const countDown = (n) => {
    console.group('common countdown')
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.groupEnd()
}


/**
 * Call function countdown recursively 
 */
const countdownRecursive = (n) => {
    console.log(n)
    if (n <= 1)
        return n
    countdownRecursive(--n)
}

/**
 * Call function 
 */
const callCountdownRecursive = (n) => {
    console.group('countdown recursive')
    countdownRecursive(n)
    console.groupEnd()
}

/**
 * Sum range 
 */
const sumRange = (n) => {
    console.group('common sumRange')
    let total = 0
    for (let i = n; i > 0; i--) {
        console.log(i)
        total += i
    }
    console.log(total)
    console.groupEnd()
}


/**
 * Sum range recursively
 */
const sumRangeRecursion = (n, total = 0) => {
    console.log(n)
    if (n < 1) {
        console.log(total)
        return n
    }

    total += n

    sumRangeRecursion(--n, total)
}

/**
 * Call function
 */
const callSumRangeRecursive = (n) => {
    console.group('sumRange recursive')
    sumRangeRecursion(n)
    console.groupEnd()
}


/**
 * Tree of sample
 */
const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] },
            ]
        }
    ]
}

/**
 * Print the children recursively
 */
const printChildrenRecursive = (t) => {

    if (!t.children)
        return
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)

    });
}

/**
 * Call the function
 */
const callPrintChildren = () => {
    console.group('print tree')
    printChildrenRecursive(tree)
    console.groupEnd()
}

/**
 * Call the functions
 */
const mainRecursion = () => {
    console.clear()
    countDown(10)
    callCountdownRecursive(10)
    sumRange(10)
    callSumRangeRecursive(10)
    callPrintChildren()
}

export default mainRecursion

