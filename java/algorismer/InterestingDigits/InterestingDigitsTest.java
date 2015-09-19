public class InterestingDigitsTest{
  public static void main(String[] args){
    InterestingDigits interestingDigits = new InterestingDigits();
    int base = 7;
    int[] ans;
    ans = interestingDigits.digits(base);
    System.out.print("ans: { ");
    for(int i = 0; i < ans.length; i++){
      System.out.print(ans[i] + " ");
    }
    System.out.println("}");
  }
}
