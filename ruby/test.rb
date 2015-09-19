class LList

  attr_accessor :data, :next_obj

  def initialize(data, next_obj=nil)
    @data = data
    @next_obj = next_obj
  end

  def add(object)
    obj = self
    while(obj.next_obj)
      obj = obj.next_obj
    end
    obj.next_obj = object
  end

  def show
    obj = self
    while(obj)
      puts obj.data
      obj = obj.next_obj
    end
  end

end

head = LList.new(1)
a = LList.new(2)
head.add(a)
head.show
