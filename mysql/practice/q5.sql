create view ViewRenshu5_1(shohin_mei, hanbai_tanka, torokubi)
as
select shohin_mei, hanbai_tanka, torokubi
from Shohin
where hanbai_tanka >= 1000 && torokubi = '2009-09-20';


select shohin_id, shohin_mei, hanbai_tanka,
(select avg(hanbai_tanka) from Shohin) as hanbai_tanka_all
from Shohin;

create view AvgTankaByBunrui
as
select shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka,
(select avg(hanbai_tanka)
from Shohin S2
where S1.shohin_bunrui = S2.shohin_bunrui
group by S2.shohin_bunrui) as avg_hanbai_tanka
from Shohin S1;
