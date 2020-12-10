-- DECLARE ST_YYYYMMDD VARCHAR(10);
SET @ST_YYYYMMDD = '2020-09-18';
SET @END_YYYMMDD = '2020-11-30';

SELECT A.KIND
     , A.TITLE
     , A.`참여자-학남`
     , concat(truncate(A.`참여자-학남` / A.`전체-학남` * 100, 1),'%') AS '참여율-학남'
     , A.`참여자-학여`
     , concat(truncate(A.`참여자-학여` / A.`전체-학여` * 100, 1),'%') AS '참여율-학여'
     , A.`참여자-대남`
     , concat(truncate(A.`참여자-대남` / A.`전체-대남` * 100, 1),'%') AS '참여율-대남'
     , A.`참여자-대여`
     , concat(truncate(A.`참여자-대여` / A.`전체-대여` * 100, 1),'%') AS '참여율-대여'
     , A.`참여자-청남`
     , concat(truncate(A.`참여자-청남` / A.`전체-청남` * 100, 1),'%') AS '참여율-청남'
     , A.`참여자-청여`
     , concat(truncate(A.`참여자-청여` / A.`전체-청여` * 100, 1),'%') AS '참여율-청여'
     , A.`참여자-장남`
     , concat(truncate(A.`참여자-장남` / A.`전체-장남` * 100, 1),'%') AS '참여율-장남'
     , A.`참여자-장여`
     , concat(truncate(A.`참여자-장여` / A.`전체-장여` * 100, 1),'%') AS '참여율-장여'
     , A.`참여자-노남`
     , concat(truncate(A.`참여자-노남` / A.`전체-노남` * 100, 1),'%') AS '참여율-노남'
     , A.`참여자-노여`
     , concat(truncate(A.`참여자-노여` / A.`전체-노여` * 100, 1),'%') AS '참여율-노여'
     , A.`참여자-전체`
     , concat(truncate(A.`참여자-전체` / A.`전체` * 100, 1),'%') AS '참여율-전체'  
  FROM (
   SELECT '직책' AS KIND
         , '목회자' AS 'TITLE'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남', '노녀','장남','장여','청남','청여','대남','대여','학남','학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체'  
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학여'
         , COUNT(DISTINCT CASE WHEN X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-전체'              
     FROM WATV_MEMBER.T_DW_WATV_MEMBER A 
        LEFT OUTER JOIN WATV_MYPAGE.T_PRAYER_USER_DATA X ON (X.LIFE_SEQ_NO = A.LIFE_SEQ_NO)          
        INNER JOIN WATV_MEMBER.C_COMMON_GB D1 ON (D1.COMMON_TXT_CD = A.DEPART_GB AND D1.COMMON_GB = 'DEPART_GB' AND D1.LANGUAGE_GB = 'KOR')
        INNER JOIN WATV_MEMBER.C_COMMON_GB D2 ON (D2.COMMON_CD = A.POSITION_CD AND D2.COMMON_GB = 'POSITION_GB' AND D2.LANGUAGE_GB = 'KOR')
    WHERE A.NATION_CD = 0
      AND D2.COMMON_CD IN (2,3,11,13,14,28,29,30,31)
) AS A
UNION ALL
SELECT A.KIND
     , A.TITLE
     , A.`참여자-학남`
     , concat(truncate(A.`참여자-학남` / A.`전체-학남` * 100, 1),'%') AS '참여율-학남'
     , A.`참여자-학여`
     , concat(truncate(A.`참여자-학여` / A.`전체-학여` * 100, 1),'%') AS '참여율-학여'
     , A.`참여자-대남`
     , concat(truncate(A.`참여자-대남` / A.`전체-대남` * 100, 1),'%') AS '참여율-대남'
     , A.`참여자-대여`
     , concat(truncate(A.`참여자-대여` / A.`전체-대여` * 100, 1),'%') AS '참여율-대여'
     , A.`참여자-청남`
     , concat(truncate(A.`참여자-청남` / A.`전체-청남` * 100, 1),'%') AS '참여율-청남'
     , A.`참여자-청여`
     , concat(truncate(A.`참여자-청여` / A.`전체-청여` * 100, 1),'%') AS '참여율-청여'
     , A.`참여자-장남`
     , concat(truncate(A.`참여자-장남` / A.`전체-장남` * 100, 1),'%') AS '참여율-장남'
     , A.`참여자-장여`
     , concat(truncate(A.`참여자-장여` / A.`전체-장여` * 100, 1),'%') AS '참여율-장여'
     , A.`참여자-노남`
     , concat(truncate(A.`참여자-노남` / A.`전체-노남` * 100, 1),'%') AS '참여율-노남'
     , A.`참여자-노여`
     , concat(truncate(A.`참여자-노여` / A.`전체-노여` * 100, 1),'%') AS '참여율-노여'
     , A.`참여자-전체`
     , concat(truncate(A.`참여자-전체` / A.`전체` * 100, 1),'%') AS '참여율-전체'  
  FROM (
   SELECT '직책' AS KIND
         , '지역장(임시포함)' AS 'TITLE'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남', '노녀','장남','장여','청남','청여','대남','대여','학남','학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체'  
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학여'
         , COUNT(DISTINCT CASE WHEN X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-전체'              
     FROM WATV_MEMBER.T_DW_WATV_MEMBER A 
        LEFT OUTER JOIN WATV_MYPAGE.T_PRAYER_USER_DATA X ON (X.LIFE_SEQ_NO = A.LIFE_SEQ_NO)          
        INNER JOIN WATV_MEMBER.C_COMMON_GB D1 ON (D1.COMMON_TXT_CD = A.DEPART_GB AND D1.COMMON_GB = 'DEPART_GB' AND D1.LANGUAGE_GB = 'KOR')
        INNER JOIN WATV_MEMBER.C_COMMON_GB D2 ON (D2.COMMON_CD = A.POSITION_CD AND D2.COMMON_GB = 'POSITION_GB' AND D2.LANGUAGE_GB = 'KOR')
    WHERE A.NATION_CD = 0
      AND D2.COMMON_CD IN (5,7,15,17,21,23)
) AS A
UNION ALL
SELECT A.KIND
     , A.TITLE
     , A.`참여자-학남`
     , concat(truncate(A.`참여자-학남` / A.`전체-학남` * 100, 1),'%') AS '참여율-학남'
     , A.`참여자-학여`
     , concat(truncate(A.`참여자-학여` / A.`전체-학여` * 100, 1),'%') AS '참여율-학여'
     , A.`참여자-대남`
     , concat(truncate(A.`참여자-대남` / A.`전체-대남` * 100, 1),'%') AS '참여율-대남'
     , A.`참여자-대여`
     , concat(truncate(A.`참여자-대여` / A.`전체-대여` * 100, 1),'%') AS '참여율-대여'
     , A.`참여자-청남`
     , concat(truncate(A.`참여자-청남` / A.`전체-청남` * 100, 1),'%') AS '참여율-청남'
     , A.`참여자-청여`
     , concat(truncate(A.`참여자-청여` / A.`전체-청여` * 100, 1),'%') AS '참여율-청여'
     , A.`참여자-장남`
     , concat(truncate(A.`참여자-장남` / A.`전체-장남` * 100, 1),'%') AS '참여율-장남'
     , A.`참여자-장여`
     , concat(truncate(A.`참여자-장여` / A.`전체-장여` * 100, 1),'%') AS '참여율-장여'
     , A.`참여자-노남`
     , concat(truncate(A.`참여자-노남` / A.`전체-노남` * 100, 1),'%') AS '참여율-노남'
     , A.`참여자-노여`
     , concat(truncate(A.`참여자-노여` / A.`전체-노여` * 100, 1),'%') AS '참여율-노여'
     , A.`참여자-전체`
     , concat(truncate(A.`참여자-전체` / A.`전체` * 100, 1),'%') AS '참여율-전체'  
  FROM (
    SELECT '직책' AS KIND
         , '구역장(임시포함)' AS 'TITLE'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남', '노녀','장남','장여','청남','청여','대남','대여','학남','학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체'     
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학여'
         , COUNT(DISTINCT CASE WHEN X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-전체'              
     FROM WATV_MEMBER.T_DW_WATV_MEMBER A 
        LEFT OUTER JOIN WATV_MYPAGE.T_PRAYER_USER_DATA X ON (X.LIFE_SEQ_NO = A.LIFE_SEQ_NO)          
        INNER JOIN WATV_MEMBER.C_COMMON_GB D1 ON (D1.COMMON_TXT_CD = A.DEPART_GB AND D1.COMMON_GB = 'DEPART_GB' AND D1.LANGUAGE_GB = 'KOR')
        INNER JOIN WATV_MEMBER.C_COMMON_GB D2 ON (D2.COMMON_CD = A.POSITION_CD AND D2.COMMON_GB = 'POSITION_GB' AND D2.LANGUAGE_GB = 'KOR')
    WHERE A.NATION_CD = 0
      AND D2.COMMON_CD IN (1,4,18,20,24,26,27)    
) AS A
UNION ALL
SELECT A.KIND
     , A.TITLE
     , A.`참여자-학남`
     , concat(truncate(A.`참여자-학남` / A.`전체-학남` * 100, 1),'%') AS '참여율-학남'
     , A.`참여자-학여`
     , concat(truncate(A.`참여자-학여` / A.`전체-학여` * 100, 1),'%') AS '참여율-학여'
     , A.`참여자-대남`
     , concat(truncate(A.`참여자-대남` / A.`전체-대남` * 100, 1),'%') AS '참여율-대남'
     , A.`참여자-대여`
     , concat(truncate(A.`참여자-대여` / A.`전체-대여` * 100, 1),'%') AS '참여율-대여'
     , A.`참여자-청남`
     , concat(truncate(A.`참여자-청남` / A.`전체-청남` * 100, 1),'%') AS '참여율-청남'
     , A.`참여자-청여`
     , concat(truncate(A.`참여자-청여` / A.`전체-청여` * 100, 1),'%') AS '참여율-청여'
     , A.`참여자-장남`
     , concat(truncate(A.`참여자-장남` / A.`전체-장남` * 100, 1),'%') AS '참여율-장남'
     , A.`참여자-장여`
     , concat(truncate(A.`참여자-장여` / A.`전체-장여` * 100, 1),'%') AS '참여율-장여'
     , A.`참여자-노남`
     , concat(truncate(A.`참여자-노남` / A.`전체-노남` * 100, 1),'%') AS '참여율-노남'
     , A.`참여자-노여`
     , concat(truncate(A.`참여자-노여` / A.`전체-노여` * 100, 1),'%') AS '참여율-노여'
     , A.`참여자-전체`
     , concat(truncate(A.`참여자-전체` / A.`전체` * 100, 1),'%') AS '참여율-전체'  
  FROM (
    SELECT '직책' AS KIND
         , '성도' AS 'TITLE'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체-학여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남', '노녀','장남','장여','청남','청여','대남','대여','학남','학여') THEN A.LIFE_SEQ_NO ELSE NULL END) AS '전체'              
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노남' 
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('노녀') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-노여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('장여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-장여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('청여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-청여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('대여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-대여'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학남') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학남'
         , COUNT(DISTINCT CASE WHEN D1.COMMON_NM IN  ('학여') AND X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-학여'
         , COUNT(DISTINCT CASE WHEN X.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD THEN X.LIFE_SEQ_NO ELSE NULL END) AS '참여자-전체'              
     FROM WATV_MEMBER.T_DW_WATV_MEMBER A 
        LEFT OUTER JOIN WATV_MYPAGE.T_PRAYER_USER_DATA X ON (X.LIFE_SEQ_NO = A.LIFE_SEQ_NO)          
        INNER JOIN WATV_MEMBER.C_COMMON_GB D1 ON (D1.COMMON_TXT_CD = A.DEPART_GB AND D1.COMMON_GB = 'DEPART_GB' AND D1.LANGUAGE_GB = 'KOR')
        -- INNER JOIN WATV_MEMBER.C_COMMON_GB D2 ON (D2.COMMON_CD = A.POSITION_CD AND D2.COMMON_GB = 'POSITION_GB' AND D2.LANGUAGE_GB = 'KOR')
    WHERE A.NATION_CD = 0
      AND A.POSITION_CD NOT IN (1,2,3,4,5,7,11,13,14,15,17,18,20,21,23,24,26,27,28,29,30,31,32,33)
      -- AND D2.COMMON_CD NOT IN (1,2,3,4,5,7,11,13,14,15,17,18,20,21,23,24,26,27,28,29,30,31)
) AS A

