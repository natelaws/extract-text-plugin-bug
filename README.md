
# A test for extract-text-webpack-plugin which seems to have a bug

When multiple css files are required their order is not necessarily preserved in the extracted file. [Related Issue](https://github.com/webpack/extract-text-webpack-plugin/issues/52)



```
npm install
webpack
```

Then see that in `output/main.css` the body style declaration of color:red is not the last thing in the file.
