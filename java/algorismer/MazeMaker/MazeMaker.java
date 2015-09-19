import java.util.*;

public class MazeMaker{
  public int longestPath(String[] maze, int startRow, int startCol,
  int[] moveRow, int[] moveCol){

    int max = 0;
    int width = maze[0] .length();
    int height = maze.length;
    int[][] board = new int[height][width];

    for ( int i = 0; i < height; i++ )
      for ( int j = 0; j < width; j++ )
        vord[i][j] = -1;

    board[startRow][startCol] = 0;

    Queue<Integer> queueX = new LinkedList<>();
    Queue<Integer> queueY = new LinkedList<>();
    queueX.add(startCol);
    queueY.add(startRow);

    while ( !queueX.isEmpty() ){
      int x = queueX.poll();
      int y = queueY.poll();

      for ( int i = 0; i < moveRow.length; i++ ){
        int nextX = x + moveCol[i];
        int nextY = y + moveRow[i]; 
      }
    }
  }
}
