<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、MySQL、テーブル接頭辞、秘密鍵、ABSPATH の設定を含みます。
 * より詳しい情報は {@link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 * wp-config.php の編集} を参照してください。MySQL の設定情報はホスティング先より入手できます。
 *
 * このファイルはインストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さず、このファイルを "wp-config.php" という名前でコピーして直接編集し値を
 * 入力してもかまいません。
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'bufuan');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'katsuya');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'sakura3939');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%bT+J<4(%&OxO)OfPv;[Y1{O~Ko0&P1b(r&F-/jQh}Dv3Zd7D!%[`jv|bP+u%2dk');
define('SECURE_AUTH_KEY',  'U()(m/j1wbF@#Y$Egxe1KHz,9]O85fL$bf9r9N?+ G3aMX/8Q{RWnw~-^IG_|H.S');
define('LOGGED_IN_KEY',    'bs+5=:Ux(Mcgx9sw {/AfPq^a}T7)~U+|2ko3[SDww9-AUqtxSl77y7-+=EKO>}w');
define('NONCE_KEY',        '!)!&V-]@2O_>vxW.kefRu!K D~/]vdCUW75pSPj5jT6J[C;mB4mk-2pQ487ID|o=');
define('AUTH_SALT',        '>:~C(Q]@se(!v-yE]|Lju?2|UCh[O5DLT|24vPX%,W~TQeO7X~*p?lfX<)tn%!VJ');
define('SECURE_AUTH_SALT', '-yRl0dxEvQ}<KB]4uiCqC*C+d-BMX$oKM:.|+J_`N@6g! z:=:*q-,,i]PuQ/V9G');
define('LOGGED_IN_SALT',   '^D[yYX-f6?QE[>+IViD;5brA{-pxLU 6+N<t1`/.A~]xB@))JCNI.B_tZg#H<zE<');
define('NONCE_SALT',       '1g@o`y3OL,8>dgo>{tD|-[>e.N[#69 Tn{<_ ^Fpy}vj?W(w,#J]lC)lgV}3yE9J');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
