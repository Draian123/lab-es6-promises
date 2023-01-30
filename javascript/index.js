// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction(
    "mashedPotatoes",
    1,
    (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction(
      "mashedPotatoes",
      2,
      (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction(
          "mashedPotatoes",
          3,
          (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
            getInstruction(
              "mashedPotatoes",
              4,
              (step5) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Popatoes are ready!</li>`;                
                document.querySelector("#mashedPotatoesImg").style.display = "block"
              },
              error => {error}
              );
          },
          error => {error}
          );
      },
      error => {error}
      );
     },
     error => {error}
     );
    },
   (error) => console.log(error));


// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
    obtainInstruction('steak', 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2).then((step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
          obtainInstruction('steak', 3).then((step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
            obtainInstruction('steak', 4).then((step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
              obtainInstruction('steak', 5).then((step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                obtainInstruction('steak', 6).then((step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                  obtainInstruction('steak', 7).then((step7) => {
                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                  document.querySelector("#steak").innerHTML += '<li>Stake is ready!</li'
                  document.querySelector("#steakImg").style.display = "block"

                })
              })
  })
  })
  })
  })
    })
  })

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try {
    const first = await obtainInstruction('broccoli',0);
    const second = await obtainInstruction('broccoli',1);
    const third = await obtainInstruction('broccoli',2);
    const fourth = await obtainInstruction('broccoli',3);
    const fifth = await obtainInstruction('broccoli',4);
    const sixth = await obtainInstruction('broccoli',5);
    const seventh = await obtainInstruction('broccoli',6);





    document.querySelector("#broccoli").innerHTML += `<li>${first}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${second}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${third}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${fourth}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${fifth}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${sixth}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${seventh}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").style.display = 'block'






    
  } catch(error) {
    console.log("Something went wrong: ", error)
  } 
}
makeBroccoli()

// Bonus 2 - Promise all
// ...

async function makeBrusselSprouts() {
  // ... Your code here
  try {
    const first = await obtainInstruction('brusselsSprouts',0);
    const second = await obtainInstruction('brusselsSprouts',1);
    const third = await obtainInstruction('brusselsSprouts',2);
    const fourth = await obtainInstruction('brusselsSprouts',3);
    const fifth = await obtainInstruction('brusselsSprouts',4);
    const sixth = await obtainInstruction('brusselsSprouts',5);
    const seventh = await obtainInstruction('brusselsSprouts',6);
    const eigth = await obtainInstruction('brusselsSprouts',7);

    Promise.all([first, second, third, fourth, fifth, sixth, seventh, eigth]).then((values=>{
      values.forEach(value=>{
        document.querySelector('#brusselsSprouts').innerHTML += `<li>${value}</li>`
      })
      
      document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels Sprouts are ready!</li>`
    }))
    document.querySelector("#brusselsSproutsImg").style.display = 'block'

    
  } catch(error) {
    console.log("Something went wrong: ", error)
  } 
}
makeBrusselSprouts();