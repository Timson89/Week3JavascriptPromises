// const statusRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

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