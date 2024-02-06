let submitBtn = document.querySelector(".submit-btn")
let body = document.querySelector("body")

submitBtn.addEventListener('click', function () {

  let address = document.querySelector("#mail-input").value
  let recipient = document.querySelector("#name-input").value

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
      }
    },
    error: function () {
      // alert('系統錯誤，請重新整理網頁稍後再試！')
      document.querySelector('#wait').style.display = "none"
      // document.querySelector('#submit-error-1').style.display = "block"
      // document.querySelector('#submit-error-2').style.display = "block"
      body.innerHTML = `
          <div class="main-content">
            <h1 class="error-message">系統錯誤，請稍後再試一次:( </h1>
          </div>
        `
      console.log('error')
    },
  })
})

let learnMoreBtn = document.querySelector('.learn-more-btn')

learnMoreBtn.addEventListener('click', function () {
  body.innerHTML = `
    <h1>home page</h1>
  `
})
