console.log('starting app');


setTimeout(() =>{
  console.log('inside the timer');
},2000);

setTimeout(() =>{
  console.log('printing before finish');
},0);


console.log('finishing app');
