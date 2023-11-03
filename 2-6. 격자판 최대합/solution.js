// N*N 격자판에서 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합 구하기
// 각 자연수는 100을 넘지 않음

function solution(arr){  
  let answer=Number.MIN_SAFE_INTEGER;
  let n=arr.length;
  // let sum1=sum2=0;

  let sliceR = 0, sliceL = 0;
  for (let i=0; i<n; i++) {
    let rowSum = 0, colSum = 0;
    for (let j=0; j<n; j++) {
      // 각 열의 합
      rowSum += arr[i][j];
      // 각 행의 합
      colSum += arr[j][i];
    }
    // 두 대각선 합
    sliceR += arr[i][i];
    sliceL += arr[i][n-1-i];

    answer = Math.max(rowSum, colSum, sliceR, sliceL, answer);
  }

  return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));