#オブザーバを分離
class Subject
  def initialize
    @observers = []
  end

  def add_observer(observer)
    @observers << observer
  end

  def delete_observer(observer)
    @observers.delete(observer)
  end

  def notify_observers
    @observersl.each do |observer|
      observer.update(self)
    end
  end
end


class Employee < Subject
  attr_reader :name, :address
  attr_reader :salary

  def initialize( name, title, salary)
    super
    @neme = name
    @title = title
    @salary = salary
  end

  def salary=(new_salary)
    @salary = new_salary
    notify_observers
  end
end
