create table Shohin
  (shohin_id  char(4)  not null,
   shohin_mei  varchar(100)  not null,
   shohin_bunrui  varchar(32)  not null,
   hanbai_tanka  integer  ,
   shiire_tanka  integer  ,
   torokubi  date  ,
   primary key (shohin_id));

insert into Shohin values ('0001', 'Tシャツ', '衣服', 1000, 500, '2009-09-20');
insert into Shohin values ('0002', '穴あけパンチ', '事務用品', 500, 320, '2009-09-11');
insert into Shohin values ('0003', 'カッターシャツ', '衣服', 4000, 2800, NULL);
insert into Shohin values ('0004', '包丁', 'キッチン用品', 3000, 2800, '2009-09-20');
insert into Shohin values ('0005', '圧力鍋', 'キッチン用品', 6800, 5000, '2009-01-15');
insert into Shohin values ('0006', 'フォーク', 'キッチン用品', 500, NULL, '2009-09-20');
insert into Shohin values ('0007', 'おろしがね', 'キッチン用品', 880, 790, '2008-04-28');
insert into Shohin values ('0008', 'ボールペン', '事務用品', 100, NULL, '2009-11-11');
