#include <stdio.h>
#include <stdlib.h>

int main()
{
  int count = 0;
  char card_name[3];
  do{
    puts("カード名を入力して下さい");
    scanf("%2s", card_name);
    int val = 0;
    switch(card_name[0]){
      case 'k':
      case 'Q':
      case 'J':
      val = 10;
      break;
      case 'A':
      val = 11;
      break;
      case 'X':
      continue;
      default:
      val = atoi(card_name);
      if(val < 1 || val > 10){
        puts("その値は無効です");
        continue;
      }
    }

    if(val > 2 && val < 7){
      count ++;
    }else if(val == 10){
      count --;
    }
    printf("現在のカウント:%i\n", count);
  }while(card_name[0] != 'X');
  return 0;
}
