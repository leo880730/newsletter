let submitBtn = document.querySelector(".submit-btn")
let body = document.querySelector("body")

submitBtn.addEventListener('click', function () {

  let address = document.querySelector("#mail-input").value
  let recipient = document.querySelector("#name-input").value

  document.querySelector('#wait').style.display = "block"

  $.ajax({
    //正式版
    // url: "",

    //測試版
    url: "https://script.google.com/macros/s/AKfycbxZz_kcYOG6RFpUE6ui1lefGZC2JZGRtUBfUl5hnViluPBNYDQdT6GoTRWAu5jNVlZu9Q/exec",

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
          <div class="main-content">
            <h1>訂閱成功啦！</h1>
            <h2>稍後會收到一封確認信，如果沒收到的話可以翻翻垃圾郵件，或是你的信箱輸入錯了，重新輸入一次就好囉！</h2>
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
            <h1>系統錯誤，請稍後再試一次:( </h1>
          </div>
        `
      console.log('error')
    },
  })
})

