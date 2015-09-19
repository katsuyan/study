public class FriendScoreTest{
  public static void main(String[] args){
    String[] friends = {"NYNNN", "YNYNN", "NYNYN", "NNYNY", "NNNYN"};
    FriendScore friendScore = new FriendScore();
    int ans = friendScore.highestScore(friends);
    System.out.println("ans: " + ans);
  }
}
