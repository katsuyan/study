create table ShohinCopy
  (shohin_id  char(4)  not null,
   shohin_mei  varchar(100)  not null,
   shohin_bunrui  varchar(32)  not null,
   hanbai_tanka  integer  ,
   shiire_tanka  integer  ,
   torokubi  date  ,
   primary key (shohin_id));

insert into ShohinCopy (shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi)
select shohin_id, shohin_mei, shohin_bunrui, hanbai_tanka, shiire_tanka, torokubi
from shohin;
