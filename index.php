<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="#" />
  <link rel="stylesheet" href="http://localhost/CMS/css/main2.css">
  <title>Home - Project Menagment Studio</title>
</head>
<body>
  <div #id="app" class="grid-container">
    <div class="grid-item grid-item-top-menu">
      <div id="top-menu">
        <div class="menu-item menu-left">
          <div class="cube-logo">
            <div class="nav-icon cube-top"></div>
            <div class="nav-icon cube-bottom"></div>
            <div class="nav-icon cube-left"></div>
            <div class="nav-icon cube-right"></div>
            <div class="nav-icon cube-front"></div>
            <div class="nav-icon cube-back"></div>
          </div>
          <div class="logo-text">Cube</div>
        </div>
        <div class="menu-item menu-center"></div>
        <div class="menu-item menu-right"></div>
      </div>
    </div>
    <div class="grid-item grid-item-side-menu">
      <div>
        <div class="mobile-side-menu-button">
          <svg style="width:24px;height:24px;box-sizing:content-box;padding:10px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
        <div id="side-menu" class="scroll-wheel-stop">
          <ul>
            <li data-location="/CMS/">
              <div class="icon">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <div class="icon-text">Active projects</div>
            </li>
            <li data-location="/CMS/addProject">
              <div class="icon">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </div>
              <div class="icon-text">Add new project</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid-item grid-item-main-content" id="main-content">
      <div class="product-details-container">
        <div class="product-details-text">
          <h1>Sava Šumanović</h1>
          <h3>Zimski pejzaž</h3>
        </div>
        <div class="product-details-galery">
          <img src="/CMS/images/20220919_100308.jpg" alt="" width="500px" height="350px">
          <img src="/CMS/images/20220919_100322.jpg" alt="" width="500px" height="350px">
          
        </div>
      </div>
    </div>
  </div>
  <script type="module" src="http://localhost/CMS/js/helpers.js"></script>
  <script type="module" src="http://localhost/CMS/js/router.js"></script>
</body>
</html>