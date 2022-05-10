const skeletonDomString = `<div id="mainPage" class="frontPage">
<div id="topContent" class="mainPortion">
 <div id="profileContent" class="leftSide">
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
</footer>
</div>`

function renderToDom(divToChange, stringToUse) {
  document.querySelector(divToChange).innerHTML = stringToUse;
}

export {skeletonDomString, renderToDom};
