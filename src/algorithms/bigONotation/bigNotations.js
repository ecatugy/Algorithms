
// O(n)
//Algotithm sacles with size of array
const functionOn = () => {
    console.group('O(n)')

    const data = ['A', 'B', 'C']//n

    for (let i = 0; i < data.length; i++) {
        console.log(data[i], '\n')
    }

    console.groupEnd()
}

// O(n+a)
//Algotithm sacles with size of array, in this case have two array
//In this case notation is  O(n+a)
const functionOnPlus = () => {
    const data = ['A', 'B', 'C']//n
    const data2 = [1, 2, 3, 4, 5]//n

    console.group('O(n+a)')

    for (let j = 0; j < data.length; j++) {
        console.log(data2[j])
    }

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }

    console.groupEnd()
}

// O(n*a)
//Algotithm sacles with size of array, in this case have nested loops
//In this case notation is  O(n*a)
const functionOnMultiply = () => {
    const data = ['A', 'B', 'C']//n
    const data2 = [1, 2, 3, 4, 5]//n

    console.group('O(n*a)')

    for (let j = 0; j < data2.length; j++) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i] + data2[j])
        }
    }

    console.groupEnd()
}

// O(n^2)
//Algotithm sacles with size of array, in this case have nested loops
//In this case notation is  O(n*a)
const functionOnExponentially = () => {
    const data = ['A', 'B', 'C']//n

    console.group('O(n^2)')

    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i] + data[j])
        }
    }

    console.groupEnd()
}

// O(1) +O(1) + O(1)
// Total time 3* O(1)
const functionComplexityOone = () => {
    console.group('O(1) +O(1) + O(1) ')
    const x = 5 + (15 * 20)
    const y = 15 - 2
    console.log(x + y)
    console.groupEnd()
}


// O(1) +O(N) + O(N^2)
const functionComplexityOneN = () => {

    console.group('O(1) +O(N) + O(N^2) ')
    const x = 1 + (15 * 2)
    const arr = Array.from({ length: x }, (_, i) => i)

    for (const x in arr) {
        console.log(x)
    }


    for (const x in arr) {
        for (const y in arr) {
            console.log(x * y)
        }
    }
    console.groupEnd()
}

// O (log n)
//Base always two
const logComplexity = (n) => {
    if (n == 1)
        return
    console.log(n)
    n = Math.floor(n / 2);

    return logComplexity(n);
}

const functionCallLogComplexity = () => {

    console.group('O(log n)')
    logComplexity(8)
    console.groupEnd()
}


// O (log n)
//Algotithm sacles with size of array, in this case have nested loops
//In this case notation is  O(4n^2)
const functionOnExponentiallyMultiply = () => {
    const data = ['A', 'B', 'C']//n

    console.group('O(4n^2)')

    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i] + data[j])
            console.log(data[i] + data[j])
            console.log(data[i] + data[j])
            console.log(data[i] + data[j])
        }
    }
    console.groupEnd()
}


// O(4n^2)
//Algotithm sacles with size of array, in this case have nested loops
//In this case notation is  O(n^2 + n)
const functionOnExponentiallyJoin = () => {
    const data = ['A', 'B', 'C']//n

    console.group('O(n^2 + n)')

    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i] + data[j])
        }
    }

    for (let i = 0; i < data.length; i++) {
        console.log(data[i], '\n')
    }
    console.groupEnd()
}

const mainBig = () => {
    console.clear()
    functionOn()
    functionOnPlus()
    functionOnMultiply()
    functionOnExponentially()
    functionOnExponentiallyMultiply()
    functionOnExponentiallyJoin()
    functionComplexityOone()
    functionComplexityOneN()
    functionCallLogComplexity()
}

export default mainBig






