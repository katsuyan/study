#標準ライブラリ(observebleモジュール)の利用
require 'observer'

class Employee
  include Observable

  attr_accessor :name, :address
  attr_reader :salary

  def initialize(name, title, salary)
    @name = name
    @title = title
    @salary = salary
  end

  def salary=(new_salary)
    old_salary = @salary
    @salary = new_salary
    if old_salary != new_salary
      changed
      notify_observers(self)
      #notify_observers の引数は そのままオブザーバの update メソッドに渡されます。 
    end
  end
end

class Payroll
  def update( changed_employee )
    puts "#{changed_employee.name}のために小切手を切ります"
    puts "彼の給料はいま#{changed_employee.salary}です。"
  end
end

fred = Employee.new( 'Fred', 'Crane Operator', 30000 )
payroll = Payroll.new

fred.add_observer(payroll)

fred.salary = 35000
