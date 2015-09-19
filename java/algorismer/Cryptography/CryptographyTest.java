import java.util.*;

public class CryptographyTest{
  public static void main(String[] args){
    int[] numbers1 = {1, 2, 3};
    int[] numbers2 = {1, 3, 2, 1, 1, 3};
    int[] numbers3 = {1000, 999, 998, 997, 996, 995};
    Cryptography cryptography = new Cryptography();
    Cryptography2 cryptography2 = new Cryptography2();
    long ans1 = cryptography.encrypt(numbers3);
    long ans2 = cryptography2.encrypt(numbers3);
    System.out.println("ans1:" + ans1);
    System.out.println("ans2:" + ans2);
  }
}
