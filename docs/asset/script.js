function apiCall(){axios({method:"post",url:"https://amer-js.herokuapp.com/hello",data:"Hey Amer, I`ve viewed your website, Yohooo"}).then(e=>console.log(e)).catch(e=>console.log(e))}$(document).on("ready scroll",(function(){window.scrollY>10?$("#view").removeClass("full"):$("#view").addClass("full")})),$(document).ready((function(){console.info("Nothing here except your legend..."),$("#year").text((new Date).getFullYear())})),window.addEventListener("load",apiCall());