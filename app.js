// document.write("<script language='javascript' src='data.js'></script>")

let submitBtn = document.querySelector(".submit-btn")
let body = document.querySelector("body")

submitBtn.addEventListener('click', function () {

  let address = document.querySelector("#mail-input").value
  let recipient = document.querySelector("#name-input").value

  emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/

  if (address.search(emailRule) != -1) {
    document.querySelector('.loader').style.display = "block"

    $.ajax({
      //正式版
      // url: "",

      //測試版
      url: "https://script.google.com/macros/s/AKfycbwb-Iqmp1_H5nHeuQ2uIo20OaGPgCZ5LRBX2zaIiloSsYzt8iEp2igO2tHzeOGpmAvYYA/exec",

      data: {
        "name": recipient,
        "mail": address,
      },

      success: function (response) {
        if (response == "Success") {
          // location.href = './result.html'
          console.log('success')
          document.querySelector('#wait').style.display = "none"
          body.innerHTML = `
            <div class="success-content">
              <div class="success-container">
                <h1 class="success-title">訂閱成功啦！</h1>
                <h2 class="success-message">稍後會收到一封確認信，如果沒收到的話可以翻翻垃圾郵件，或是你的信箱輸入錯了，重新輸入一次就好囉！</h2>
              </div>
              <div class="btn-container">
                <button class="learn-more-btn">Learn More　〉</button>
              </div>
            </div>
          `
          let learnMoreBtn = document.querySelector('.learn-more-btn')
          learnMoreBtn.addEventListener('click', learnMore)
        }
      },
      error: function () {
        document.querySelector('#wait').style.display = "none"
        body.innerHTML = `
          <div class="main-content">
            <h1 class="error-message">系統錯誤，請稍後重新整理網頁再試一次:( </h1>
          </div>
        `
        console.log('error')
      },
    })
  } else {
    alert('電子郵件格式錯誤！')
  }
})



function learnMore() {

  $.ajax({
    // methods: 'get',

    url: "https://script.google.com/macros/s/AKfycbyLEceyRJHgdkhat5ETkiOcj_C_nUg8OO6sJi9WuMayjniC-5jk5WDNngAHoF0pu3QP/exec",

    success: function (response) {
      console.log(response)
      console.log(typeof (response))

      body.innerHTML = ``
      for (let i = response.length - 1; i >= 0; i--) {
        body.innerHTML += `
           <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="article" id="article-${i}">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapse${i}" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapse${i}">
                  <h1 class="title" id="title-${i}">${response[i].title}</h1>
                  <h2 class="date" id="date-${i}">${response[i].date}</h2>
                </button>
              </h2>
              <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne">
                <p class="content" id="content-${i}">${response[i].content}</p>
              </div>
            </div>
          </div>
        `
      }
    },
    error: function () {
      console.log('error')
    }
  })

}

let learnMoreBtn = document.querySelector('.learn-more-btn')
learnMoreBtn.addEventListener('click', learnMore)


// < div class="article" id = "article-${i}" >
//           <h1 class="title" id="title-${i}" >${response[i].title}</h1>
//           <h2 class="date" id="date-${i}" >${response[i].date}</h2>
//           <p class="content" id="content-${i}">${response[i].content}</p>
//         <div>
