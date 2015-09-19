import java.util.*;

public class Cryptography2{

  public long encrypt(int[] numbers){
    long seki = 1;
    for(int i = 0; i < numbers.length; i++){
      seki *= numbers[i];
    }
    long ans = 0;
    for(int i = 0; i < numbers.length; i++){
      ans = Math.max(ans, (seki / numbers[i]) * (numbers[i] + 1));
    }
    return ans;
  }

}
