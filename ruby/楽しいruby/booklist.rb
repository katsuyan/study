require './book.rb'

class BookList
  def initialize()
    @booklist = Array.new
  end

  #新しい本を加える
  def add(book)
    @booklist.push(book)
  end
  #本の冊数を返す
  def length
    @booklist.length
  end
  #n番目に格納されている本を別の本にする
  def []=(n,book)
    @booklist[n] = book
  end
  #n番目に格納されている本を返す
  def [](n)
    @booklist[n]
  end
  #本をリストから削除する
  def delete(book)
    @booklist.delete(book)
  end

  def each
    @booklist.each do |book|
      yield book
    end
  end

  def each_title
    @booklist.each do |book|
      yield book.title
    end
  end

  def each_title_author
    @booklist.each do |book|
      yield book.title, book.author
    end
  end

  def find_by_author(author)
    if block_given?
      @booklist.each do |book|
        if author =~ book.author
          yield book
        end
      end
    else
      @booklist.select do |book|
        author =~ book.author
      end
    end
  end
  
end
