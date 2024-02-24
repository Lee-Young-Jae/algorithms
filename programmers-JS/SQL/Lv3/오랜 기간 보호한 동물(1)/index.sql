SELECT INS.NAME, INS.DATETIME
FROM ANIMAL_INS INS 
LEFT JOIN ANIMAL_OUTS OUTS ON INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE OUTS.ANIMAL_ID IS NULL
ORDER BY DATETIME
LIMIT 3;