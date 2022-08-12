window.onload = function() {
  
 const style = document.createElement('style');
 style.innerHTML = `
   .loader-wrap {
     position:fixed;
     top:0;
     left:0;
     right:0;
     bottom:0;
     height:100%;
     width:100%;
     background:#fff;
     z-index: 99;
     display:grid;
     place-items:center;
     transition:0.4s ease;
   }
   .loader {
       height:50px;
       width:50px;
       border-radius:50%;
       -webkit-border-radius:50%;
       border: 6px solid #f5f3f3;
       border-left:6px solid #ff4093;
       animation:loaderSpin 2s linear infinite;
   }
  
   @keyframes loaderSpin {
  0% { transform: rotate(0deg); }
  
  100% { transform: rotate(360deg) }
}
 `;
 //append style in head
 document.head.appendChild(style)
  
 const loaderWrap = document.createElement('div');
 loaderWrap.className = "loader-wrap";
 const loader = document.createElement("div");
 loader.className = "loader";
 loaderWrap.appendChild(loader);
 document.body.appendChild(loaderWrap); 
  setTimeout(function(){
      document.body.removeChild(loaderWrap);
  },3000);
  if (!sessionStorage.viewed){
              const loader = document.querySelector(".loader-wrap");
             document.body.appendChild(loader)
              sessionStorage.viewed = 1;
          }else{
            document.body.removeChild(loader)
          }
}
