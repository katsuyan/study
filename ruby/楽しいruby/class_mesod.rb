class HelloWorld

  class << self
    def hello(name)
      print name," said hello.\n"
    end
  end

  def hello(name)
    print name," said hi.\n"
  end

end

HelloWorld.hello("John")
HelloWorld.new.hello("Bob")
