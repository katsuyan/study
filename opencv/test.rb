require 'opencv'
include OpenCV

if ARGV.length < 1
  puts "Usage: ruby #{__FILE__} source dest"
  exit
end

data = './haarcascade_frontalface_alt.xml'
detector = CvHaarClassifierCascade::load(data)
image = IplImage.load(ARGV[0])

detector.detect_objects(image).each do |region|
  color = CvColor::Blue
  image.rectangle! region.top_left, region.bottom_right, :color => color #ここで顔に枠をつけるよ
  image.set_roi(region) #ここでさらに顔の部分だけを切り取り
end

#image.save_image(ARGV[1])
window = GUI::Window.new('Face detection')
window.show(image)
GUI::wait_key
