#ifndef ___Class_Date
#define ___Class_Date

#include <string>
#include <iostream>

class Date{
  int y;
  int m;
  int d;

public:
  Date();
  Date(int yy, int mm = 1, int dd = 1);

  int year() const {return y;} //年
  int month() const {return m;}//月
  int day() const {return d;}//日

  Date preceding_day() const;//前日
  int day_of_week() const;//曜日
  std::string to_string() const;//文字列
};
std::ostream& operator<<(std::ostream& s, const Date& x);
//挿入子->to_stringを付けないようにしたい

#endif
