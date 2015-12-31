create table ShohinIns
  (shohin_id  char(4)  not null,
   shohin_mei  varchar(100)  not null,
   shohin_bunrui  varchar(32)  not null,
   hanbai_tanka  integer  default 0,
   shiire_tanka  integer  ,
   torokubi  date  ,
   primary key (shohin_id));

--ノーマル
insert into ShohinIns (shohin_id, shohin_mei, shohin_bunrui,
hanbai_tanka, shiire_tanka, torokubi) values ('0001', 'Tシャツ',
'衣服', 1000, 500, '2009-09-20');

--省略形
insert into ShohinIns values ('0005', '圧力鍋', 'キッチン用品',
6800, 5000, '2009-01-20');

--NULL
insert into ShohinIns values ('0006', 'フォーク', 'キッチン用品',
500, NULL, '2009-09-20');

--明示的DEFAULT
insert into ShohinIns values ('0007', 'おろしがね', 'キッチン用品',
DEFAULT, 790, '2009-04-28');

--暗黙的DEFAULT
insert into ShohinIns (shohin_id, shohin_mei, shohin_bunrui,
shiire_tanka, torokubi) values ('0007', 'おろしがね', 'キッチン用品',
790, '2009-04-28');

--DEFAULT無しを省略->NULLに成る
insert into ShohinIns (shohin_id, shohin_mei, shohin_bunrui,
hanbai_tanka, torokubi) values ('0008', 'ボールペン', '事務用品',
100, '2009-11-11');
