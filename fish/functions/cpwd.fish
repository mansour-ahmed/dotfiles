function cpwd
  command pwd | tr -d '\n' | pbcopy; and echo 'pwd copied to clipboard';
end