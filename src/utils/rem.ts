(function () {

  function resize() {
      var baseFontSize = 100; //设计稿100px相当于1rem
      var designWidth = 1920;//设计稿宽度
      var width = window.innerWidth;//获取屏幕宽度
      var currentFontSize = (width / designWidth) * baseFontSize;//
      document.querySelector('html')!.style.fontSize = currentFontSize+'px';//html的真实数值
  }

  window.onresize = function () {
     resize()
  }
  
  document.addEventListener('DOMContentLoaded',resize)

}())