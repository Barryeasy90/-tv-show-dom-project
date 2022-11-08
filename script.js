//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

const searchInput = document.querySelector("#search")
let users = []
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowweCasee()
  allEpisodes.forEach(user => {
    const isVisible = user.name.includes(value) || user.summary.includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
}


function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

for (i = 0; i < episodeList.length; i++){
    let div = document.createElement("div");
  rootElem.append(div);
  const title = document.createElement("h5");
   const paragraph  = document.createElement("p");
   const image = document.createElement("img");
   title.innerText =`${episodeList[i].name} - S${episodeList[i].season.toString().padStart(2, '0')} E${episodeList[i].number.toString().padStart(2, '0')}` ;
   paragraph.innerHTML = episodeList[i].summary;
   image.src = episodeList[i].image.medium
   div.append(title);
   div.append(image);
   div.append(paragraph);
    }

  // rootElem.append(div)
   
  // rootElem.append(paragraph)
  // for (i=0; i < episodeList.length; i++){
  // rootElem.append(episodeList[i].name)
  // rootElem.append(` - S${episodeList[i].season.toString().padStart(2, '0')}`)
  // rootElem.append(`E${episodeList[i].number.toString().padStart(2, '0')}`)
  // // rootElem.append(episodeList[i].image.medium)
  //  rootElem.append(episodeList[i].summary)
  // }
  // for (let i=0; i<episodeList.length; i++){
  //   rootElem.texContent = episodeList[i]
  // }
  // episodeList.map(element => element.episodeList)
}

window.onload = setup();
console.log(users)
