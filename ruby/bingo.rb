class Bingo
  def self.generate_card
    num_array = [
      (1..15).map {|i| i},
      (16..30).map {|i| i},
      (31..45).map {|i| i},
      (46..60).map {|i| i},
      (61..75).map {|i| i}
    ]

    puts '  B |  I |  N |  G |  O'
    25.times do |index|
      prace = index % 5
      take_num = num_array[prace].sample
      num_array.delete take_num
      printf(" %2d ", take_num)
      if (index + 1) % 5 != 0
        print '|'
      else
        print "\n"
      end
    end
  end
end

Bingo.generate_card
