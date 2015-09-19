/*コンストラクタ初期化子->コンストラクタのやつの後ろに :~~~ てやつ*/
#include <string>
#include <iostream>
#include "Account.h"

using namespace std;

Account::Account(string name, string num, long amnt, const Date& op) :
full_name(name), number(num), crnt_balance(amnt), open(op)
{
}
void Account::deposit(long amnt)
{
  crnt_balance += amnt;
}

void Account::withdraw(long amnt)
{
  crnt_balance -= amnt;
}
