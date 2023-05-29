// BEGIN
function solution(url) {
  
  const userAgent = navigator.userAgent;
  const browserInfo = userAgent.match(/Mozilla\/\d+\.\d+/)[0]; 
  return `${browserInfo} ${url}`;
}
export default solution;
// END
//Не уверен, что должно быть именно так...


