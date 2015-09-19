public class FriendScore{
  public int highestScore(String[] friends){
    int ans = 0;
    int n = friends[0].length();

    for(int i1=0; i1 < n; i1++){
      int cnt = 0;

      for(int i2 = 0; i2 < n; i2++){
        if(i1 == i2) continue;

        if(friends[i1].charAt(i2) == 'Y'){
          cnt ++;
        } else {
          for(int i3 = 0; i3 < n; i3++){
            if(friends[i2].charAt(i3) == 'Y' && friends[i3].charAt(i1) == 'Y'){
              cnt++;
              break;
            }
          }
        }
      }
      ans = Math.max(ans, cnt);
    }
    return ans;
  }
}
