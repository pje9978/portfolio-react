module.exportsmodule.exports = {
    // ... 기존 웹팩 설정 ...
  
    module: {
      rules: [
        // ... 기존 로더 설정 ...
  
        // CSS 로더 설정
        {
          test: /\.css$/,
          use: ['css-loader'],
        },
      ],
    },
    externals: {
      gsap: 'gsap',
    }
  
    // ... 기타 설정 ...
  };
  