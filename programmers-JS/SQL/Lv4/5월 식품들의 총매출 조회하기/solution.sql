SELECT PRODUCT_ID, PRODUCT_NAME, SUM(AMOUNT) * PRICE AS TOTAL_SALES
FROM FOOD_PRODUCT JOIN FOOD_ORDER USING(PRODUCT_ID)
WHERE DATE_FORMAT(PRODUCE_DATE, "%Y-%m") = "2022-05"
GROUP BY PRODUCT_ID
ORDER BY TOTAL_SALES DESC, PRODUCT_ID;