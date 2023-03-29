module.exports={
  loaders:[  {
      test: /\.(gif|svg|jpg|png|jpeg)$/,
      loader: "file-loader",
    }],
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
  }
  
  }