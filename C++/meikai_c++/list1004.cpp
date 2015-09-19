/*クラスの関数定義と中身を分離*/
#include <string>
#include <iostream>

using namespace std;

class Account
{
  string full_name;
  string number;
  long crnt_balance;

public:
  Account(string name, string num, long amnt);
  string name(){return full_name;}
  string no(){return number;}
  long balance(){return crnt_balance;}
  void deposit(long amnt);
  void withdraw(long amnt);
};

Account::Account(string name, string num, long amnt)
{
  full_name = name;
  number = num;
  crnt_balance = amnt;
}

void Account::deposit(long amnt)
{
  crnt_balance += amnt;
}

void Account::withdraw(long amnt)
{
  crnt_balance -= amnt;
}

int main()
{
  Account suzuki("suzuki", "12345678", 1000);
  Account takeda("takeda", "87654321", 200);

  suzuki.withdraw(200);
  takeda.deposit(100);

  cout << "鈴木君の口座 : \"" << suzuki.name() << "\" (" << suzuki.no() << ")" << suzuki.balance() << "円\n";
  cout << "武田君の口座 : \"" << takeda.name() << "\" (" << takeda.no() << ")" << takeda.balance() << "円\n";
}