#include <string>
#include <iostream>
#include "Account.h"

using namespace std;

void print_Account(string title, Account *p)
{
  cout << title << "\""<< p->name() << "\" (" << p->no() << ")" << p->balance() << "円\n";
}

int main()
{
  Account suzuki("suzuki", "12345678", 1000);
  Account takeda("takeda", "87654321", 200);
  suzuki.withdraw(200);
  takeda.deposit(100);

  print_Account("鈴木君の口座 : ", &suzuki);
  print_Account("武田君の口座 : ", &takeda);
}
