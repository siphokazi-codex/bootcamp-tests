function regCheck  (reg, prov) {

  var isGP = reg.endsWith(prov);
//  console.log(isGP);
   
  return isGP;
  
}

console.log(regCheck('CY189-012', 'ND'));
