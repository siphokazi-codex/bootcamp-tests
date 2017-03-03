function countRegNumber (registration) {
  
  var regSpilt = registration.split(","); 
  var regCount = regSpilt.length;
  console.log(regCount);
  return regCount;
}

countRegNumber('CA 182736,CY 523519,CJ 812328');
