#include <stdio.h>
#include <stdlib.h>

struct CELL {
  struct CELL *next;
  int value;
} header;

insert(int a)
{
  struct CELL *p, *q, *new;

  /*挿入すべき場所を探す*/
  p = header.next;
  q = &header;
  while(p != NULL && a > p->value){
    q = p;
    p = p->next;
  }

  /*セルを挿入*/
  if((new = malloc(sizeof(struct CELL))) == NULL){
    puts("メモリが足りません");
    exit(1);
  }
  new->next = p;
  new->value = a;
  q->next = new;
}

print_list(){
  int value;
  struct CELL *p;
  p = header.next;
  puts("**/print_list/**");
  while(p != NULL){
    printf("%d\n", p->value);
    p = p->next;
  }
}

main()
{
  int i,value;
  for(i=0; i<10; i++){
    scanf("%d", &value);
    insert(value);
  }
  print_list();
}
