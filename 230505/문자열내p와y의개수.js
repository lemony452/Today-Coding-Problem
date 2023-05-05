// 문자열 내 p와 y의 개수 비교하기

// input 예시
// s = "pPoooyY"
// s = "Pyy"

// My Code
function solution(s){
    var answer = true;

    let pCount = 0;
    let yCount = 0;
    for (let i = 0; i < s.length; i += 1) {
        let temp = s[i];
        if (temp === 'p' || temp === 'P') {
            pCount += 1;
        } else if (temp === 'y' || temp === 'Y') {
            yCount += 1;
        }
    }

    if (pCount === yCount) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

// Other Code
// split() 함수를 사용해서 문자열을 분리한 배열의 길이 = 일치하는 개수 + 1
function solution(s){
    console.log(s.toUpperCase().split('P')); // [ '', '', 'OOOYY' ]
    console.log(s.toUpperCase().split('Y')); // [ 'PPOOO', '', '' ]
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y");
}