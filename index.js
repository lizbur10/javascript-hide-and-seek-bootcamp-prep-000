function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list li');
    for (let i=0; i<rankedList.length; i++) {
      rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + parseInt(n)).toString();
    }
  }


function deepestChild() {
  var current = document.querySelector('#grand-node');
    while (current.children.length > 0) {
    current = current.firstElementChild;
  }
  return current;

//    while (current); {
//      console.log('running');
//      current = current.children;
//    }
//    return current;
//  console.log(current.innerHTML);
}
