 <!-- HEADER DESKTOP-->
 <header class="header-desktop3 d-none d-lg-block">
     <div class="section__content section__content--p35">
         <div class="header3-wrap">
             <div class="header__logo">
                 <a href=<?= base_url("/office") ?>>
                     <h1 class="text-white">YOO</h1>
                 </a>
             </div>
             <div class="header__navbar">
                 <ul class="list-unstyled">

                     <li>
                         <a href=<?= base_url("/office/booking") ?>>
                             <i class="fas fa-archive"></i>
                             <span class="bot-line"></span>Booking</a>
                     </li>
                     <li>
                         <a href=<?= base_url("/office/room") ?>>
                             <i class="fas  fa-square"></i>
                             <span class="bot-line"></span>Room</a>
                     </li>


                 </ul>
                 </li>
                 </ul>
             </div>
             <div class="header__tool">


                 <div class="account-wrap">
                     <div class="account-item account-item--style2 clearfix js-item-menu">
                         <div class="image">
                             <img src="/template/ca/images/icon/pp.png" alt="pp" />
                         </div>
                         <div class="content">
                             <a class="js-acc-btn" href="#">john doe</a>
                         </div>
                         <div class="account-dropdown js-dropdown">
                             <div class="info clearfix">
                                 <div class="image">
                                     <a href="#">
                                         <img src="/template/ca/images/icon/pp.png" alt="pp" />
                                     </a>
                                 </div>
                                 <div class="content">
                                     <h5 class="name">
                                         <a href="#">john doe</a>
                                     </h5>
                                     <span class="email">johndoe@example.com</span>
                                 </div>
                             </div>
                             <div class="account-dropdown__body">
                                 <div class="account-dropdown__item">
                                     <a href="#">
                                         <i class="zmdi zmdi-account"></i>Account Setting</a>
                                 </div>
                             </div>
                             <div class="account-dropdown__footer">
                                 <a href="#">
                                     <i class="zmdi zmdi-power"></i>Logout</a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </header>
 <!-- END HEADER DESKTOP-->

 <!-- HEADER MOBILE-->
 <header class="header-mobile header-mobile-2 d-block d-lg-none">
     <div class="header-mobile__bar">
         <div class="container-fluid">
             <div class="header-mobile-inner">
                 <a class="logo" href="index.html">
                     <h1 class="text-white">YOO</h1>
                 </a>
                 <button class="hamburger hamburger--slider" type="button">
                     <span class="hamburger-box">
                         <span class="hamburger-inner"></span>
                     </span>
                 </button>
             </div>
         </div>
     </div>
     <nav class="navbar-mobile">
         <div class="container-fluid">
             <ul class="navbar-mobile__list list-unstyled">
                 <li>
                     <a href=<?= base_url("/office/booking") ?>>
                         <i class="fas fa-archive"></i>
                         <span class="bot-line"></span>Booking</a>
                 </li>
                 <li>
                     <a href="#">
                         <i class="fas  fa-square"></i>
                         <span class="bot-line"></span>Room</a>
                 </li>
             </ul>
         </div>
     </nav>
 </header>

 <div class="sub-header-mobile-2 d-block d-lg-none">
     <div class="header__tool">


         <div class="account-wrap">
             <div class="account-item account-item--style2 clearfix js-item-menu">
                 <div class="image">
                     <img src="/template/ca/images/icon/pp.png" alt="John Doe" />
                 </div>
                 <div class="content">
                     <a class="js-acc-btn" href="#">john doe</a>
                 </div>
                 <div class="account-dropdown js-dropdown">
                     <div class="info clearfix">
                         <div class="image">
                             <a href="#">
                                 <img src="/template/ca/images/icon/pp.png" alt="John Doe" />
                             </a>
                         </div>
                         <div class="content">
                             <h5 class="name">
                                 <a href="#">john doe</a>
                             </h5>
                             <span class="email">johndoe@example.com</span>
                         </div>
                     </div>
                     <div class="account-dropdown__body">
                         <div class="account-dropdown__item">
                             <a href="#">
                                 <i class="zmdi zmdi-account"></i>Account Setting</a>
                         </div>

                     </div>
                     <div class="account-dropdown__footer">
                         <a href="#">
                             <i class="zmdi zmdi-power"></i>Logout</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <!-- END HEADER MOBILE -->