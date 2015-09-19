import java.util.Arrays;

public class KiwiJuiceTest {
  public static void main(String[] args){
    int[] capacities = {14, 35, 86, 58, 25, 62};
    int[] bottles = {6, 34, 27, 38, 9, 60};
    int[] fromId = {1, 2, 4, 5, 3, 3, 1, 0};
    int[] toId = {0, 1, 2, 4, 2, 5, 3, 1};

    KiwiJuiceEasy kiwiJuiceEasy = new KiwiJuiceEasy();
    bottles = kiwiJuiceEasy.thePouring(capacities, bottles, fromId, toId);
    System.out.println(Arrays.toString(bottles));
  }
}
