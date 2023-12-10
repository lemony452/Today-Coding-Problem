// 상하좌우보다 큰 값을 가지면 봉우리
// 봉우리의 개수 구하기
function solution(arr){  
  let answer=0;
  let n=arr.length;
  let dx=[-1, 0, 1, 0]; // 좌 하 우 상
  let dy=[0, 1, 0, -1];

  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      let flag = 1; // 봉우리이면 1 아니면 0
      const top = arr[i][j]; // 기준점
      for (let d=0; d<4; d++) {
        const ni = i + dx[d];
        const nj = j + dy[d];
        if ((0<=ni && ni<n) && (0<=nj && nj<n) && top <= arr[ni][nj]) {
          flag = 0;
          break;
        }
      }
      if (flag === 1) answer += 1;
    }
  }
  return answer;
}

let arr=[[5, 3, 7, 2, 3], 
          [3, 7, 1, 6, 1],
          [7, 2, 5, 3, 4],
          [4, 3, 6, 4, 1],
          [8, 7, 3, 5, 2]];
console.log(solution(arr));
