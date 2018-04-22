let pascalsTriangle = (N, A) => {
    if (N === 0) {
        return [];
    } else if (N < 2) {
        return A;
    }

    let prevRow = A[A.length - 1],
        curRow = [1];
    
    for (let i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i - 1];
    }

    curRow.push(1);
    A.push(curRow);

    return pascalsTriangle(N - 1, A);
};


console.log(pascalsTriangle(5, [[1]]));