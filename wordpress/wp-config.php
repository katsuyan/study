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
define('DB_PASSWORD', 'Sakura1216');

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
define('AUTH_KEY',         ':+A2PEA#Z`r`W]DdX`lnp0l1ZH}bZddAH^9Wf1` j+X&k]PL_$!w2ud5pU*~5$qL');
define('SECURE_AUTH_KEY',  '8/Jp6$~|ids`MCd,Q3c$SL4U)QL0I5}fv:tg#?.[y+hnrAa`o`q*,/%ih}d$yVg{');
define('LOGGED_IN_KEY',    'Em&QY(DU~+9t5tTh30(<2oar@E 6V6,t_86h9Z6n9hfo|72a);i3r7H&D-AyxmPD');
define('NONCE_KEY',        'uJvAV)vjYuV|T_89.Luso>r2`(8v;jZhW;v2{8V3NJ2ikZ;rU=cwtvy:^k M6-)j');
define('AUTH_SALT',        'l+M{fp^&VlPD>EX_o4F2pH$H~x$fyA}idfE_kL#.-wWv,qe3Ae-+j!x1&2A505j.');
define('SECURE_AUTH_SALT', '4>2o *O&w=4Q[Lb93=F(AyD|c]e$?1%egbH|$nm>!ff:+r}1YfB&PTQ4wXJc<C9T');
define('LOGGED_IN_SALT',   'D*wo>:u`h&y&^t[FuRhVeN1|WL`ewl2n~e_%?x|l?|f{@Q8-FI}g|2z7s8gEP<Vj');
define('NONCE_SALT',       'UpaJC.x Wa-2Q/oNyp_:=btYOXF#dwt[aSyDERe#Df#UR;]&sW8-}0hnR;>v@U,j');

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
