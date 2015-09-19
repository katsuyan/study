class Nabeatsu
  def nabeatsu(max)
    (1..max).each do |n|
      if n % 3 == 0 or n.to_s.include?('3')
        puts 'Aho '
      else
        puts n
      end
    end
  end
end

aho = Nabeatsu.new.method(:nabeatsu)
num = ARGV[0].to_i || 40
aho.call(num)
