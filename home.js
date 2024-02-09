//home page render here

window.onload = function () {
  document.querySelector('.loader').style.display = "block"
  let home = document.querySelector('.home-container')
  $.ajax({
    // methods: 'get',

    url: "https://script.google.com/macros/s/AKfycbyLEceyRJHgdkhat5ETkiOcj_C_nUg8OO6sJi9WuMayjniC-5jk5WDNngAHoF0pu3QP/exec",

    success: function (response) {

      console.log(response)
      console.log(typeof (response))
      home.innerHTML = `
        <nav class="nav-bar">
          <img class="nav-img" src="./img/avatar.png" alt="">
          <h1 class="nav-title">洋洋の電子報</h1>
          <button class="nav-button" onclick="location.href='./subscribe.html'">subscribe</button>
        </nav>
      `

      for (let i = response.length - 1; i >= 0; i--) {
        home.innerHTML += `
          <div class="accordion" id="accordionPanelsStayOpen${i}">
            <div class="article" id="article-${i}">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse${i}" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse${i}">
                  <div class="title-container">
                    <h1 class="title" id="title-${i}">${response[i].title}</h1>
                    <h2 class="date" id="date-${i}">${response[i].date}</h2>
                  </div>
                </button>
              </h2>
              <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne">
                <p class="content" id="content-${i}">${response[i].content}</p>
              </div>
            </div>
          </div>
        `
        document.querySelector('.loader').style.display = "none"
      }
    },
    error: function () {
      console.log('error')
    }
  })

}

// let learnMoreBtn = document.querySelector('.learn-more-btn')
// learnMoreBtn.addEventListener('click', learnMore)
