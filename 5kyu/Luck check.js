// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

function luckCheck(ticket){
  if (typeof ticket !== 'string' || ticket.match(/[0-9]/g).length !== ticket.length) throw new Error('invalid chars');
  
  const middle = Math.floor(ticket.length >> 1);
  const firstHalf = ticket.slice(0, middle);
  const secondHalf = ticket.length % 2 === 0 ? ticket.slice(middle, ticket.length) :
  ticket.slice(middle + 1, ticket.length);
 
  return firstHalf.split``.reduce((a,b) => a + +b, 0) ===
    secondHalf.split``.reduce((a,b) => a + +b, 0)
}
