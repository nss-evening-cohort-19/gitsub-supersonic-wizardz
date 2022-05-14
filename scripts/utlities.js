const skeletonDomString = `
    
      <div id="topContent" class="mainPortion">
        <div id="profileContent" class="leftSide">
        <img src="https://placebeard.it/500
        " alt="Man with beard">
  
        <h4>Mr. Beardly</h4>
        <p>@TheBeardedOne</p>
        <div class = 'btnGroup'>
          <button type="button" class="btn btn-outline-danger btn-sm">Follow</button>
          <button type="button" class="btn btn-outline-danger btn-sm">Sponsor</button>
          <button type="button" class="btn btn-outline-danger btn-sm">...</button>
        </div>
        <ul class='profileDetails'>
          <li>Location</li>
          <li>Personal Email</li>
          <li>Twitter Link</li>
          <li>Github Profile</li>
        </ul>
        </div>
        <div id="rightSideContent" class="rightSide">
          <navbar id="navigation" class="head">
            <nav class="nav">
              <a class="nav-link" href="./index.html">Overview</a>
              <a class="nav-link" href="./repos.html">Repositories</a>
              <a class="nav-link" href="./projects.html">Projects</a>
              <a class="nav-link" href="./packages.html">Packages</a>
            </nav>
          </navbar>
          <div id="titleDiv"></div>
          <div id="searchBar" class="searchBar"></div>
          <div id="uploadedContent" class="uploaded">
            <!-- This is where your rendered content goes -->
          </div>
          <div id="uploadContent" class="uploads">
            <!-- Paste your form here -->
          </div>
        </div>
      </div>

      <footer id="mainPageFooter" class="foot">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Terms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Privacy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Security</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Status</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact GitHub</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">API</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Training</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </footer>`;


function renderToDom(divToChange, stringToUse) {
  document.querySelector(divToChange).innerHTML = stringToUse;
}

function searchSetup() {
  const searchString = `
  <form>
  <div class="form-container" id="form-container">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <input type="text" class="form-control" id="search-field" aria-label="search-field" required placeholder="🔍 Search all">
     </div>
    </div>
  </div>
</form>
  `
  renderToDom(`#searchBar`, searchString)
}

function createId(array) {
  if (array.length) {
    const idArray = [];
    array.forEach((el) => {
      idArray.push(el.id);
    });
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
};

export { skeletonDomString, renderToDom, searchSetup, createId };
