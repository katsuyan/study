select sum(case when hanbai_tanka <= 1000
                then 1 else 0 end) as low_price,
       sum(case when hanbai_tanka between 1001 and 3000
                then 1 else 0 end) as mid_price,
       sum(case when hanbai_tanka >= 3001
                then 1 else 0 end) as high_price
from Shohin;
