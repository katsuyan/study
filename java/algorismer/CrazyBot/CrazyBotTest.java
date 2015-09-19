import java.util.*;

public class CrazyBotTest{
  public static void main(String[] argas){
    int n = 14;
    int east = 50;
    int west = 50;
    int south = 0;
    int north = 0;
    double ans;
    CrazyBot crazyBot = new CrazyBot();
    ans = crazyBot.getProbability(n, east, west, south, north);
    System.out.println(ans);
  }
}
