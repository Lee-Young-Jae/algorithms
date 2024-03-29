# 뒤에 있는 큰 수 찾기

[프로그래머스 뒤에 있는 큰 수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/154539)

## 문제 이해하기

- 배열의 각 원소에 대해 오른쪽에 있는 원소 중에서 자신보다 큰 수를 찾는다.
- 오른쪽에 있는 원소 중에서 자신보다 큰 수가 없다면 -1을 반환한다.

## 진행과정

처음 접근 방법은 queue를 사용하여 풀어보려고 했다. 인자로 받은 배열을 queue에 넣고, 인자로 받은 배열을 순회하며 queue에서 find를 통해 자신과 가까운 큰 수를 찾고 queue를 shift시킨다. 이 방법은 O(N)의 시간복잡도를 가지는 find의 문제로 총 O(N^2)의 시간복잡도를 가져 효율성 테스트를 실패했다.

다음으로 접근한 방법은 백트래킹을 사용하여 풀어보았다. 인자로 받은 배열을 순회하며 현재 숫자가 스택의 가장 위에 있는 숫자보다 크다면, 현재 숫자가 스택의 가장 위에 있는 숫자의 오른쪽에 위치한 더 큰 값이라는 의미이다. 이를 이용하여 현재 숫자보다 작은 값들을 가진 스택의 요소를 역순으로 확인하며 해당 요소들에 대해 결과 배열에 값을 채워 넣었다. 이 방법은 아마도 O(NlogN)의 시간복잡도를 가지기에 효율성 테스트를 통과했다.
