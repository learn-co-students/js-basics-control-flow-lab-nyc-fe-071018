// Write your code in this file!

function scuberGreetingForFeet (ride) {
  if (ride <= 400) {
    result = 'This one is on me!'
  } 
    else if (ride > 2000 && ride <= 2500) {
      result = 'I will gladly take your thirty bucks.'
    }
    
    else if (ride > 2500) {
      result = 'No can do.'
    }
    
    else {
    result = 'This one is on you!';
  }
  return result
}

function ternaryCheckCity (city){
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip (tip) {
  if (tip === 'generous'){
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}
