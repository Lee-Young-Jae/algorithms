SELECT LEFT(PRODUCT_CODE, 2) as CATEGORY, COUNT(*)
FROM PRODUCT
GROUP BY CATEGORY
ORDER BY CATEGORY;