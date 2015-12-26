#include <stdio.h>

void cmb_str(char *a, char *b){
  int i = 0, j = 0;
  while(a[i]){
    i++;
  }
  while(b[j]){
    a[i++] = b[j++];
  }
  a[i] = '\0';
}

int main(void){
  char a[64], b[64];
  printf("文字列1 > "); scanf("%s", a);
  printf("文字列2 > "); scanf("%s", b);

  cmb_str(a, b);
  printf("結合文字列:%s\n", a);

  return 0;
}
