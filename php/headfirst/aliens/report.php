<!DOCTYPE>
<html>
  <head>
    <meta charset="UTF-8">
    <title>UFOに誘拐された！？「誘拐レポート」を！</title>
  </head>
  <body>
    <h2>UFOに誘拐された！？「誘拐レポート」を！</h2>

    <?php
      $when_it_happened = $_POST['whenithappened'];
      $show_long = $_POST['howlong'];
      $alien_description = $_POST['aliendescription'];
      $fang_spotted = $_POST['fangspotted'];
      $email = $_POST['email'];

      echo '情報ありがとうございます<br>';
      echo '誘拐されたのは' . $when_it_happened;
      echo 'で、時間は' . $show_long . 'です。<br>';
      echo '奴らは: ' . $alien_description . '<br>';
      echo 'ファングはいましたか？' . $fang_spotted . '<br>';
      echo 'メールアドレスは' . $email;
    ?>

  </body>
</html>
