// https://www.codewars.com/kata/54dc6f5a224c26032800005c/javascript

function stockList(listOfArt, listOfCat) {
  const res = [];
  listOfCat.forEach((category) => {
    let count = 0;
    for (let i = 0; i < listOfArt.length; i++) {
      if (listOfArt[i].startsWith(category)) 
        count += +listOfArt[i].match(/\d+/g)[0]
    }
    res.push(`(${category} : ${count})`)
  })
  
  return (!listOfArt.length || !listOfCat.length) ? "" : res.join(' - ')
}
