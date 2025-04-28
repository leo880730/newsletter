function handleRedirection() {
  const body = document.querySelector('body')
  body.innerHTML += `
 <div class="redirection">
  <h1 id="redirectText">我搬家了！ <br> 3秒後自動跳轉⋯</h1>
 </div>
`
  setTimeout(() => { document.location.href = "https://hitsuji-sheep.com" }, 3000)
}

handleRedirection()
