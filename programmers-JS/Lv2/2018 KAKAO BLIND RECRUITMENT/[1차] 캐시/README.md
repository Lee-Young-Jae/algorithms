# [[1차] 카카오 블라인드] 캐시

[프로그래머스 캐시](https://programmers.co.kr/learn/courses/30/lessons/17680)

### 문제 이해하기

- 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.

- 캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.

- cache hit일 경우 실행시간은 1이다.

- cache miss일 경우 실행시간은 5이다.

- 총 실행시간을 return한다.

### 문제 접근 방법

- 캐시 크기가 0일 경우 cache miss가 발생하므로 cities의 길이에 5를 곱한 값을 return한다.

- 캐시 크기가 0보다 클 경우 cache hit일 경우와 cache miss일 경우를 나누어 계산한다.

- cache hit일 경우 해당 도시를 캐시의 맨 뒤로 옮긴다.

- cache miss일 경우 캐시가 가득 찼을 경우 맨 앞의 도시를 제거하고 해당 도시를 캐시의 맨 뒤로 옮긴다.
