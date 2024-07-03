const showTime = () => {
  let now = new Date();

  let currentTime = now.toLocaleTimeString();

  document.querySelector("#clock").textContent = currentTime;
}

setInterval(showTime, 1000);