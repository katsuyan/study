/*配列で待ち行列を実現する*/
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

typedef long ELEM; //待ち行列の要素の型
#define QUEUE_SIZE 100 //待ち行列の大きさ

ELEM queue[QUEUE_SIZE]; //待ち行列を定義
int front; //先頭
int rear; //末尾

#define next(a) ((a + 1) % QUEUE_SIZE)

/*エラー時*/
void error(char *s)
{
  fprintf(stderr, s);
  exit(1);
}
/*待ち行列の初期化*/
void init()
{
  front = rear = 0;
}
/*データ挿入*/
void enqueue(ELEM x)
{
  if(next(rear) == front)
    error("待ち行列がいっぱいです。\n");
  queue[rear] = x;
  rear = next(rear);
}
/*データ取り出し*/
ELEM dequeue()
{
  ELEM x;
  if(front == rear)
    error("待ち行列が空です。\n");
  x = queue[front];
  front = next(front);
  return x;
}
/*待ち行列がが空かどうか(空…1,空でない…0)*/
int empty()
{
  return front == rear;
}

/*テスト*/
main()
{
  int i;
  long x;
  puts("値入力");
  for(i=0; i<5; i++){
    scanf("%ld",&x);
    enqueue(x);
  }

  if(empty())
    puts("空です");
  else
    puts("空ではありません");

  puts("値出力");
  for(i=0; i<5; i++){
    x = dequeue();
    printf("%ld\n",x);
  }

  if(empty())
    puts("空です");
  else
    puts("空ではありません");
}
