//declare variables
let noun1 = ''
let noun2 = ''
let noun3 = ''
let noun4 = ''
let noun5 = ''
let noun6 = ''
let noun7 = ''

let verb1 = ''
let verb2 = ''
let verb3 = ''
let verb4 = ''

let adj1 = ''
let adj2 = ''
let adj3 = ''

let userName = ''

//event trigger for enter button
btnEnter.onclick=function(){
  noun1 = inptNoun1.value
  noun2 = inptNoun2.value
  noun3 = inptNoun3.value
  noun4 = inptNoun4.value
  noun5 = inptNoun5.value
  noun6 = inptNoun6.value
  noun7 = inptNoun7.value
  
  verb1 = inptVerb1.value
  verb2 = inptVerb2.value
  verb3 = inptVerb3.value
  verb4 = inptVerb4.value
  
  adj1 = inptAdj1.value
  adj2 = inptAdj2.value
  adj3 = inptAdj3.value
  
  userName = inptName.value
  
  lblMadLib.value = `${userName}, A ${noun1} in Nebraska was arrested this morning after ${verb1}ing in front of a ${adj1}${noun2}. The perpetrator had a history of ${verb2}ing, but no one - not even her ${noun3} - ever imagined she'd ${verb3} with a ${noun4}. Even her ${noun5} was surprised. "I always thought she was ${adj2}, but I never thought she\'d do something like this." Either way, we imagine that after witnessing her ${verb4}ing with a ${adj3} ${noun6}, there are probably a whole lot of ${noun7}s that are going to need therapy.`
}

//event trigger for reset button
btnReset.onclick=function(){
  inptNoun1.value = ''
  inptNoun2.value = ''
  inptNoun3.value = ''
  inptNoun4.value = ''
  inptNoun5.value = ''
  inptNoun6.value = ''
  inptNoun7.value = ''
  
  inptVerb1.value = ''
  inptVerb2.value = ''
  inptVerb3.value = ''
  inptVerb4.value = ''
  
  inptAdj1.value = ''
  inptAdj2.value = ''
  inptAdj3.value = ''
  
  inptName.value = ''
  
  lblMadLib.value = ''
}
