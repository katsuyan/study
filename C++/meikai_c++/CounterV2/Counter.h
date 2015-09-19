/*変数関数を定義*/
#ifndef ___Class_Counter
#define ___Class_Counter

//型の最大値を求めたいときに使うやつ
#include <climits>

class Counter
{
  unsigned cnt;

public:
  Counter() : cnt(0){}

  //unsignedに変換
  operator unsigned() const {return cnt;}
  //!
  bool operator!() const {return cnt == 0;}
  //前置++
  Counter& operator++(){
    if(cnt < UINT_MAX) cnt++;
    return *this;
  }
  //後置++
  Counter operator++(int){
    Counter x = *this;
    if(cnt < UINT_MAX) cnt++;
    return x;
  }
  //前置--
  Counter& operator--(){
    if(cnt > 0) cnt--;
    return *this;
  }
  //後置--
  Counter operator--(int){
    Counter x = *this;
    if(cnt > 0) cnt--;
    return x;
  }
};

#endif
