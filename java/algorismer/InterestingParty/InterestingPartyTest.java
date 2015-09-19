public class InterestingPartyTest {
  public static void main(String[] args){
    String[] first = {"snakes", "programing", "cobra", "monty"};
    String[] second = {"python", "python", "anaconda", "python"};

    InterestingParty interestingParty = new InterestingParty();
    int ans = interestingParty.bestInvitation(first, second);
    System.out.println("return: " + ans);
  }
}
