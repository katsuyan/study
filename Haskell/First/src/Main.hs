import Data.List

isIn :: (Eq a) => [a] -> [a] -> Bool
needle `isIn` haystack = any (needle `isPrefixOf`) (tails haystack)

main = do
  print $ "art" `isIn` "party"
  print $ [1, 2] `isIn` [1, 3, 5]
  print $ isInfixOf "art" "party"
