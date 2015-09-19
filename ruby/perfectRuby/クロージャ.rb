def create_proc
  num = 0
  Proc.new{puts num += 1}
end

a = create_proc
a.call
a.call

b = create_proc

b.call
b.call
