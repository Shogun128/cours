if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='style/index-mobile.css'><link rel='stylesheet' href='style/header-mobile.css'>"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
