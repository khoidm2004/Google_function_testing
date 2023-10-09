git init 
npm init -y

touch .gitignore
echo "node_modules" >>.gitignore

mkdir test
touch test/test.spec.js

npm i --save -dev mocha chai selenium-webdriver

touch readme.md