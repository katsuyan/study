require "./booklist_enum"

booklist = BookList.new
booklist.add(Book.new("Software", "Rucker", "SF"))
booklist.add(Book.new("BABEL-17", "Delany", "SF"))
booklist.add(Book.new("Programming", "Wall", "Computer"))
booklist.add(Book.new("Programming Pearls", "Bearls", "Computer"))

titles = booklist.collect do |book|
  book.title
end
p titles
