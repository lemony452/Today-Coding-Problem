// Lv2 영어 끝말잇기

function solution(n, words) {
    
  let ans = [0, 0];
  
  for (let idx=1; idx<words.length; idx++) {
      const num = (idx+1) % n === 0 ? n : (idx+1) % n;
      const seq = Math.ceil((idx+1) / n);

      // 1. 끝말잇기가 되는지 확인
      if (words[idx][0] !== words[idx-1].slice(-1)) {
          ans = [num, seq];
          break
      }
      
      // 2. 이전에 나왔던 단어인지 확인
      for (let j=0; j<idx; j++) {
          if (words[idx] === words[j]) {
              ans = [num, seq];
              break
          }
      }
      if (ans[0] !== 0 && ans[1] !== 0) break; // 탈락자 발생했으면 break
  }
  return ans
}