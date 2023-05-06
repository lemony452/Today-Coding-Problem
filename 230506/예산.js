// programmers js level 1
// Summer/Winter Coding 예산문제

// My Code
function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    // d = [1, 3, 111] 인 경우
    // d.sort() = [1, 111, 3] 으로 숫자가 문자열로 변환되어 정렬됨!!
    // 따라서 각 요소의 차를 계산해 인덱스 지정해주는 함수를 사용해야 숫자로 오름차순 정렬됨
    const newD = d.sort((a, b) => a - b);
    while (answer < d.length) {
        sum += newD[answer];
        if (sum > budget) {
            break;
        }
        answer += 1;
    }

    return answer;
}


// Other Code
function solution(d, budget) {
    d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0); // 금액이 예산보다 작은지 판단하는 boolean 값을 count 증가에 사용
    }, 0)
}