// BEGIN
function extractData(node) {
  
    const data = [];
  
    function traverse(element) {

      if (element.tagName === 'P') {

        const text = element.textContent.trim();
        data.push(text);
      }
  
      element = element.firstChild;
      while (element) {

        traverse(element);
        element = element.nextSibling;
      }
    }
  
    traverse(node);
  
    return data;
  }
  
  export default extractData;
  
// END