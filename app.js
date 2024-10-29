// Timothy Olofson
// Frontend Simplified(FES)
// Week 3: Javascript
// Lesson: Promises

console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email");
const videoRef = document.querySelector(".video");
const statusRef = document.querySelector(".status");


// Then 

// fetch("https://jsonplaceholder.typicode.com/users/1")

//   .then((response) => {

//     return response.json();
//   })

//   .then((data) => {

//     emailRef.innerHTML = data.email;
//   })


// Async/Await

// async function main() {
  
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

//   const data = await response.json();

//   emailRef.innerHTML = data.email;
// }


function getSubscriptionStatus() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve(undefined);
    }, 2000);
  });
}


function getVideo(SubscriptionStatus) {

  return new Promise((resolve, reject) => {

    if (SubscriptionStatus === 'VIP') {

      resolve("Show Video")
    }
    else if (SubscriptionStatus === 'FREE') {

      resolve("Show Trailer")
    }
    else {

      reject("No Video")
    }
  });
}


async function main() {

  const status = await getSubscriptionStatus();

  statusRef.innerHTML = status;

  // try catching status from backend or show user error.

  try {

    console.log(await getVideo(status))
  }
  catch(e) {

    console.log(e)

    videoRef.innerHTML = e;
  }
}

main();