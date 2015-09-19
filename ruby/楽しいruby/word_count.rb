count = Hash.new(0)

while line = gets
  words = line.split
  words.each do |word|
    count[word] += 1
  end
end

count.sort{|a,b|
  a[1] <=> b[1]
}.each do |key, value|
  print "#{key}: #{value}\n"
end
