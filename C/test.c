#include <stdio.h>
#include <string.h>

main(){
  char s[100];
  int x, i=0;
  char ex_s[3];

  while(++i){
    scanf("%s", s);
    x = strlen(s);
    if(strstr(s, ex_s) == NULL && i != 1) break;
    strcpy(ex_s, &s[x-3]);
  }
}
