#list11-24を立ち上げて利用
require 'net/http'

proxy_class = Net::HTTP::Proxy('192.168.33.10', 8080)
http_proxy = proxy_class.new('www.ruby-lang.org')
http_proxy.start do |h|
  h.get('/ja/')
end
