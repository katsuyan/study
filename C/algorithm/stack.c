/*配列でstackを実現する*/
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

typedef long ELEM; //スタックの要素の型
#define STACK_SIZE 100 //スタックの大きさ

ELEM stack[STACK_SIZE]; //スタックを定義
int n; //スタックポインタ

/*エラー時*/
void error(char *s)
{
  fprintf(stderr, s);
  exit(1);
}
/*スタック初期化*/
void init()
{
  n = 0;
}
/*pushする*/
void push(ELEM x)
{
  if( n >= STACK_SIZE)
    error("stack overflow\n");
  stack[n++] = x;
}
/*popする*/
ELEM pop()
{
  if(n <= 0)
    error("stack underflow\n");
  return stack[--n];
}
/*スタックが空かどうか(空…1,空でない…0)*/
int empty()
{
  return n == 0;
}

/*逆ポーランド電卓プログラム*/
main()
{
  int c;
  long x,a,b;

  init();
  while((c = getchar()) != EOF){
    if(isdigit(c)){
      ungetc(c, stdin);
      scanf("%ld", &x);
      push(x);
    }else{
      switch(c){
        case '+':
          b = pop(); a = pop();
          push(a + b);
          break;
        case '-':
          b = pop(); a = pop();
          push(a - b);
          break;
        case '*':
          b = pop(); a = pop();
          push(a * b);
          break;
        case '/':
          b = pop(); a = pop();
          push(a / b);
          break;
        case '\n':
          if(! empty())
            printf("答えは%ldです\n", pop());
          init();
          break;
        case ' ':
        case '\t':
          break;
        default:
          printf("不正な文字がありました。\n");
          printf("入力しなおしてください。\n");
          while((c = getchar()) != EOF && c != '\n')
            ;
          break;
      }
    }
  }
}
