// document.write("<script language='javascript' src='data.js'></script>")

//subscribe doing here

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
                <button class="learn-more-btn" onclick="location.href='./home.html'">Learn More　〉</button>
              </div>
            </div>
          `
          // let learnMoreBtn = document.querySelector('.learn-more-btn')
          // learnMoreBtn.addEventListener('click', learnMore)
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

