// N명의 학생들을 일렬로 세워 보이는 최대 학생수를 구하기

function solution(arr){         
  let answer=1, max=arr[0];
  
  arr.forEach((height) => {
    if (max < height) {
      max = height; // 가장 큰 키 업데이트
      answer += 1;
    } 
  })

  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));