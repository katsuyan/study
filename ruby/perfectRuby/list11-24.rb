#プロキシサーバー(Ctrl+Cでシャットダウン)
require 'webrick'
require 'webrick/httpproxy'

#プロキシサーバオブジェクトを作る
proxy = WEBrick::HTTPProxyServer.new(
  :BindAddress => '192.168.33.10',
  :Port => 8080,
  :ProxyContentHandler =>
    ->(req, res) {
      puts res.body.scan(/<title>(.*)<\/title>/im).join rescue nil
    }
)

#SIGINT を補足 Ctrl+Cでシャットダウンさせるため
Signal.trap('INT') do
  proxy.shutdown
end

proxy.start
