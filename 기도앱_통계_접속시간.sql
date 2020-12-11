SET @ST_YYYYMMDD = '2020-11-01';
SET @END_YYYMMDD = '2020-11-30';

SELECT '접속시간 비율' AS TITLE
     , concat(truncate(M.`0시` / M.TOT * 100, 2), '%') AS '0시'
     , concat(truncate(M.`1시` / M.TOT * 100, 2), '%') AS '1시'
     , concat(truncate(M.`2시` / M.TOT * 100, 2), '%') AS '2시'
     , concat(truncate(M.`3시` / M.TOT * 100, 2), '%') AS '3시'
     , concat(truncate(M.`4시` / M.TOT * 100, 2), '%') AS '4시'
     , concat(truncate(M.`5시` / M.TOT * 100, 2), '%') AS '5시'
     , concat(truncate(M.`6시` / M.TOT * 100, 2), '%') AS '6시'
     , concat(truncate(M.`7시` / M.TOT * 100, 2), '%') AS '7시'
     , concat(truncate(M.`8시` / M.TOT * 100, 2), '%') AS '8시'
     , concat(truncate(M.`9시` / M.TOT * 100, 2), '%') AS '9시'
     , concat(truncate(M.`10시` / M.TOT * 100, 2), '%') AS '10시'     
     , concat(truncate(M.`11시` / M.TOT * 100, 2), '%') AS '11시'     
     , concat(truncate(M.`12시` / M.TOT * 100, 2), '%') AS '12시'     
     , concat(truncate(M.`13시` / M.TOT * 100, 2), '%') AS '13시'     
     , concat(truncate(M.`14시` / M.TOT * 100, 2), '%') AS '14시'     
     , concat(truncate(M.`15시` / M.TOT * 100, 2), '%') AS '15시'     
     , concat(truncate(M.`16시` / M.TOT * 100, 2), '%') AS '16시'     
     , concat(truncate(M.`17시` / M.TOT * 100, 2), '%') AS '17시'     
     , concat(truncate(M.`18시` / M.TOT * 100, 2), '%') AS '18시'     
     , concat(truncate(M.`19시` / M.TOT * 100, 2), '%') AS '19시'     
     , concat(truncate(M.`20시` / M.TOT * 100, 2), '%') AS '20시'     
     , concat(truncate(M.`21시` / M.TOT * 100, 2), '%') AS '21시'     
     , concat(truncate(M.`22시` / M.TOT * 100, 2), '%') AS '22시'     
     , concat(truncate(M.`23시` / M.TOT * 100, 2), '%') AS '23시'     
  FROM (
    SELECT COUNT(CASE WHEN S.COMPLETE_HOUR IN (0) THEN 1 END) AS '0시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (1) THEN 1 END) AS '1시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (2) THEN 1 END) AS '2시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (3) THEN 1 END) AS '3시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (4) THEN 1 END) AS '4시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (5) THEN 1 END) AS '5시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (6) THEN 1 END) AS '6시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (7) THEN 1 END) AS '7시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (8) THEN 1 END) AS '8시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (9) THEN 1 END) AS '9시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (10) THEN 1 END) AS '10시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (11) THEN 1 END) AS '11시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (12) THEN 1 END) AS '12시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (13) THEN 1 END) AS '13시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (14) THEN 1 END) AS '14시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (15) THEN 1 END) AS '15시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (16) THEN 1 END) AS '16시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (17) THEN 1 END) AS '17시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (18) THEN 1 END) AS '18시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (19) THEN 1 END) AS '19시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (20) THEN 1 END) AS '20시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (21) THEN 1 END) AS '21시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (22) THEN 1 END) AS '22시'
         , COUNT(CASE WHEN S.COMPLETE_HOUR IN (23) THEN 1 END) AS '23시'
         , COUNT(S.COMPLETE_HOUR) AS TOT
      FROM (
        SELECT HOUR(A.INPUT_DT) AS COMPLETE_HOUR
          FROM WATV_MYPAGE.T_PRAYER_USER_DATA A
         WHERE A.YYYYMMDD BETWEEN @ST_YYYYMMDD AND @END_YYYMMDD
    ) S
) M
;
