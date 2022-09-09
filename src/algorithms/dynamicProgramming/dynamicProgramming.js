

const prevValues = []

/**
 * Calculate the square based in param m
 * @param  {} n
 */
const square = (n) => {

    let result = 0;
    if (prevValues[n]) {
        result = prevValues[n]
    }
    else {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                result += 1;
            }
        }
        prevValues[n] = result
    }

    console.log(result)

}

/**
 * Make the memoization function
 */
const memoization = () => {
    console.group('memoization')
    square(50000)
    square(50000)
    square(50000)
    square(50000)
    square(50000)
    console.groupEnd()
}

/**
 * Fibi with memoization
 */
const fib = (num, prevValues = []) => {

    if (prevValues[num])
        return prevValues[num]

    let result

    if (num <= 1)
        return result = 1
    else
       result  =    fib(num - 1, prevValues) + fib(num - 2, prevValues) 
       prevValues[num] = result

    return result
};

/**
 * Fibi with memoization
 */
const dynamic = () => {
    console.group('dynamic')
    console.log(fib(15))
    console.groupEnd()
}

/**
 * Call the functions
 */
const mainDynamic = () => {
    console.clear()
    memoization()
    dynamic()
}

export default mainDynamic
