// 자신의 앞 수보다 크면 출력하기
// N개의 정수 입력

function solution(N, input) {
  const inputList = input.split(' '); // 문자열로 받은 입력을 배열에 담기
  inputList.forEach((str, idx) => inputList[idx] = Number(str)); // 숫자로 변환
  // console.log(inputList);

  let ans = String(inputList[0]);
  // 앞 수보다 큰 수인지 비교하기
  for (let i=1; i<N; i++) {
    inputList[i] > inputList[i-1] ? ans += ' ' + String(inputList[i]) : null;
  }
  
  return ans
}

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(N, input)); // 7 9 6 12