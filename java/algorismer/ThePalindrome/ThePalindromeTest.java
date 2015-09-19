public class ThePalindromeTest{
  public static void main(String[] args){
    String s = "abab";
    ThePalindrome thePalindrome = new ThePalindrome();
    int ans = thePalindrome.find(s);
    System.out.println("ans: " + ans);
  }
}
