document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const insideSliderTop = document.getElementById("inside-slider-top");
  const insideSliderBot = document.getElementById("inside-slider-bot");

  toggleBtn.addEventListener("click", function () {
    insideSliderTop.classList.toggle("show");
    insideSliderBot.classList.toggle("show");
    toggleBtn.classList.toggle("flipped");
  });
});

const contentMain = document.getElementById('content-main');

const fetchData = async () => {
  try {
    const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
    const data = await response.json();

    const projectData = [
      {
        title: data.assets[0].asset_title,
        description: data.assets[0].asset_description,
        content: `
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TiMRwri1xJ8?si=_0H4MY11nmWy32Dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        `
      },
      {
        title: data.assets[1].asset_title,
        description: data.assets[1].asset_description,
        content: `
          <div id="thread">
            <div id="thread-heading">
              <img src="./src/up-arrow.png" alt="" />
              <h1>Thread A</h1>
            </div>
            <div id="thread-body">
              <div id="thread-body-first">
                <div class="sub-box">
                  <h4>Sub thread 1</h4>
                  <textarea id="textarea" name="textarea" placeholder="Enter Text here"></textarea>
                </div>
                <div class="box-img">
                  <a href=""><img src="./src/Vector (4).png" alt="" /></a>
                  <a href=""><img src="./src/Vector (3).png" alt="" /></a>
                  <a href=""><img src="./src/Vector (2).png" alt="" /></a>
                  <a href=""><img src="./src/Vector (1).png" alt="" /></a>
                </div>
              </div>
              <div id="thread-body-second">
                <div class="sub-box">
                  <h4>Sub thread 1</h4>
                  <textarea id="textarea" name="textarea" placeholder="Enter Text here"></textarea>
                </div>
                <div class="box-select">
                  <select name="" id="">
                    <option value="">Select Categ</option>
                  </select>
                  <select name="" id="">
                    <option value="">Select Proces</option>
                  </select>
                </div>
              </div>
            </div>
            <button>
              <p><span>+ </span>Sub-thread</p>
            </button>
            <div class="final-box">
              <h4>Sub thread 1</h4>
              <textarea id="textarea" name="textarea" placeholder="Enter Text here"></textarea>
            </div>
          </div>
        `
      },
      {
        title: data.assets[2].asset_title,
        description: data.assets[2].asset_description,
        content: `
          <div id="card3-bottom-box">
            <div style="display: flex; flex-direction: column">
              <h3>Title</h3>
              <input type="text" />
            </div>
            <div>
              <h3>Content</h3>
              <div class="last-box">
                <div style="display: flex; gap: 15px; margin-left: 20px; margin-top: 15px;">
                  <p>File</p>
                  <p>Edit</p>
                  <p>View</p>
                  <p>Insert</p>
                  <p>Format</p>
                  <p>Tools</p>
                  <p>Table</p>
                  <p>Help</p>
                </div>
                <div class="img-box">
                  <img src="./src/arrow-curve-left-right.png" alt="" />
                  <img src="./src/arrow-curve-left-down.png" alt="" />
                  <img src="./src/arrow-expand-02.png" alt="" />
                  <input id="inp" type="text" placeholder="Paragraph" style="width: 102px; min-height: 18px; background: #ebebeb; border-radius: 0%; box-shadow: none; padding: 1px 20px 1px 3px;" />
                  <img src="./src/Group 1741.png" alt="" style="height: 5px; width: 20px" />
                </div>
              </div>
            </div>
            <div style="background: #fcfbfb; box-shadow: -2px 2px 6px 0px #00000026; width: 100%; min-height: 146px; height: auto; flex-grow: 1;"></div>
          </div>
        `
      },
      {
        title: data.assets[3].asset_title,
        description: data.assets[3].asset_description,
        content: `
          <div id="fourth-box">
            <div id="f-box1">
              <div id="f-box1-head">
                <img src="./src/up-arrow.png" alt="" style="width: 15.98px; height: 9.6px" />
                <h1 style="font-family: Open Sans; font-size: 16px; font-weight: 700; line-height: 21.79px; letter-spacing: 0.02em; text-align: left;">Introduction</h1>
              </div>
              <p>The 4SA Method, How to bring an idea into progress?</p>
              <span>see more</span>
            </div>
            <div id="f-box2">
              <div id="f-box2-head">
                <img src="./src/up-arrow.png" alt="" style="width: 15.98px; height: 9.6px" />
                <h1 style="font-family: Open Sans; font-size: 16px; font-weight: 700; line-height: 21.79px; letter-spacing: 0.02em; text-align: left;">Introduction</h1>
              </div>
              <p>How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
              <span>see more</span>
            </div>
            <div id="f-box3">
              <div id="f-box3-head">
                <h1>Example 1</h1>
              </div>
              <p>You have a concept, How will you put it into progress?</p>
            </div>
          </div>
        `
      }
    ];

    projectData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-header">
          <h3>${item.title}</h3>
          <img src="./src/Group 1735.png" alt="" />
        </div>
        <div class="description">
          <p><span>Description: </span>${item.description}</p>
        </div>
        ${item.content}
      `;
      contentMain.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
