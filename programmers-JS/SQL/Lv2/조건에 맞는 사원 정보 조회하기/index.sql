SELECT SUM(SCORE) AS SCORE, EMP_NO, EMP_NAME, POSITION, EMAIL
FROM HR_EMPLOYEES
JOIN HR_GRADE
USING(EMP_NO)
GROUP BY EMP_NO
ORDER BY SCORE DESC
LIMIT 1