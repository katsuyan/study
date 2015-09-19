import java.util.*;

public class InterestingDigits2{
  public int[] digiys(int base){
    Vector<Integer> v = new Vector<>();

    for(int i = 2; i < base; i++){
      if(((base-1) % i) == 0) v.add(i);
    }

    int[] ans = new int[v.size()];
    for(int i=0; i<v.size(); i++) ans[i] = v.get(i);

    return ans;
  }
}
