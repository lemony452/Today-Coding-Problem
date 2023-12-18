function solution(str){
  let answer="YES";

  const length = str.length;
  const upperStr = str.toUpperCase();
  for (let i=0; i<Math.ceil(length / 2); i++) {
    if (upperStr[i] !== upperStr[length-1-i]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let str="goooG";
console.log(solution(str));