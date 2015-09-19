function writeCookie(name, value, days){
  var expires = "";

  if(days){
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name){
  var searchName = name + "=";
  var cookies = document.cookie.split(';');
  for(var i=0; i < cookies.length; i++){
    var c = cookies[i];
    while(c.charAt(0) == ' ')//スペースの削除
      c = c.substring(1, c.length);//substring=>値の小さい引数から大きい引数までの文字列抽出
    if(c.indexOf(searchName) === 0)
      return c.substring(searchName.length, c.length);//name+"="以降である値を返す
  }
  return null;
}

function eraseCookie(name){
  writeCookie(name, "", -1);
}
