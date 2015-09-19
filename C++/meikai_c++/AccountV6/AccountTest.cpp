#include <iostream>
#include "Date.h"
#include "Account.h"

using namespace std;

int main()
{
  Account suzuki("suzuki", "12345678", 1000, Date());
  string dw[] = {"日","月","火","水","木","金","土"};

  cout << "鈴木君の口座\n";
  cout << "名義指名=" << suzuki.name() << '\n';
  cout << "口座番号=" << suzuki.no() << '\n';
  cout << "預金額=" << suzuki.balance() << "円\n";
  cout << "(" << dw[suzuki.opening_date().day_of_week()] << ") \n";
}
