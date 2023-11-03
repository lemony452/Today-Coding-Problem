// 1: 가위, 2: 바위, 3: 보
// A, B 중 이긴 승자 출력, 비기면 D 출력

function solution(a, b){         
  let answer="";
  
  for (let i=0; i<a.length; i++) {
    const diff = a[i] - b[i];

    if (diff === 0) {
      answer += "D";
    } else if (Math.abs(diff) === 1) {
      a[i] > b[i] ? answer += "A" : answer += "B";
    } else if (Math.abs(diff) === 2) {
      a[i] < b[i] ? answer += "A" : answer += "B";
    }

    if (i !== a.length - 1) answer += "\n"; // 한 회씩 줄바꿈 출력
  }
  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));