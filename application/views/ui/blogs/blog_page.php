<nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Logo -->
            <div class="logo-wrapper mt-3">
                <a class="logo" href="home"> <img src="<?php echo base_url() . 'uiAssets/'; ?>img/logo-light.png" class="logo-img" alt=""> </a>
                <!-- <a class="logo" href="index.html">
                    <h2>Curvdent<span>Center of Beauty</span></h2>
                </a> -->
            </div>
            <!-- Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
                    class="navbar-toggler-icon"><i class="ti-menu"></i></span> </button>
            <!-- Menu -->
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#" onclick="goHome()">Home</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#" onclick="goHome()">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" onclick="goService()">Services</a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="#" data-scroll-nav="4">Blog</a></li> -->
                    <li class="nav-item"><a class="nav-link" href="#" onclick="goHome()">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" onclick="goBlog()">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" onclick="goLogin()">Login</a></li>
                </ul>
           </div>
        </div>
    </nav>
    
    <!-- Header -->
    <header class="banner-header valign bg-img" data-overlay-dark="1" data-background="<?php echo base_url() . 'uiAssets/'; ?>img/slider/2.jpg">
        <div class="container">
            <div class="row">
                <div class="banner_content">
                    <div class="col-md-8 caption mt-90 animate-box" data-animate-effect="fadeInUp">

                        <a href="blog"><h2>Product Details</h2></a>
                            <div class="page_link" style="font-weight:bold;">
                                <a href="home"><span class="text-yellow">Home</span></a>/
                                <a href="blog"><span class="text-yellow">Blog</span></a>
                                <hr class="line line-hr-left-white">
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>

    </header>
<!-- section -->
<section class="section-padding">
        <div class="container">
            <div class="row">
                <!-- Content -->
                <div class="col-md-8 animate-box" data-animate-effect="fadeInUp" id="data3">
                    <!-- <div class="main_title2"><h6 style="font-weight:bold;">All News About Blog</h6></div> -->
                    <!-- <div class="row">
                        <div class="col-md-12 p-4">
                            <div class="item">
                                <div class="position-re o-hidden">
                                </div>

                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="row">
                        <div class="col-md-12 p-4">
                            <div class="item">
                                <div class="media-body">
                                    <div class="row">
                                         <div class="col-sm-4"><button type="button" class="btn btn-warning">Blog</button></div> -->
                                        <!-- <div class="col-sm-4"></div> -->
                                        <!-- <div class="col-sm-4"><i class="fa fa-calendar" aria-hidden="true"></i>May 22, 2023</a></div>
                                        <div class="col-md-12">
                                            <h5 style="color:red;">The Definitive Story of How Marvel Studios Created the Marvel Cinematic Universe</h5>
                                        </div>    
                                        <div class="col-md-12">
                                            <p>Get your first look at The Story of Marvel Studios: The Making of the Marvel Cinematic Universe from…</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate molestias quis nihil impedit dignissimos accusantium quaerat facere, exercitationem asperiores iste beatae perspiciatis numquam quo est sit. Itaque, explicabo? Totam.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate molestias quis nihil impedit dignissimos accusantium quaerat facere, exercitationem asperiores iste beatae perspiciatis numquam quo est sit. Itaque, explicabo? Totam.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate molestias quis nihil impedit dignissimos accusantium quaerat facere, exercitationem asperiores iste beatae perspiciatis numquam quo est sit. Itaque, explicabo? Totam.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate molestias quis nihil impedit dignissimos accusantium quaerat facere, exercitationem asperiores iste beatae perspiciatis numquam quo est sit. Itaque, explicabo? Totam.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate molestias quis nihil impedit dignissimos accusantium quaerat facere, exercitationem asperiores iste beatae perspiciatis numquam quo est sit. Itaque, explicabo? Totam.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>     -->
                    
                </div> 
                <!-- Sidebar -->
                <div class="col-md-4 animate-box" data-animate-effect="fadeInUp" id="data4">
                    <!-- <div class="main_title2"><h6 style=" font-weight:bold;">Most Popular News</h6></div>
                    <div class="row">
                        <div class="col-md-12 p-4">
                            <div class="item">
                                <div class="media-body">
                                    <div class="row">
                                        <div class="col-sm-4"><button type="button" class="btn btn-warning">Contact</button></div>
                                        <div class="col-sm-4"></div>
                                        <div class="col-sm-4"><i class="fa fa-calendar" aria-hidden="true"></i>May 22, 2023</a></div>
                                        <div class="col-md-12">
                                            <h5 style="color:red;">The Definitive Story of How Marvel Studios Created the Marvel Cinematic Universe</h5>
                                        </div>    
                                        <div class="col-md-12">
                                            <p>Get your first look at The Story of Marvel Studios: The Making of the Marvel Cinematic Universe from…</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div class="main_title2"><h6 style=" font-weight:bold;">Trending Now</h6></div>
                    <div class="container-fluid">
                        <div class="row">
                            <p>abcd</p>
                        </div>
                    </div> -->

                    <!-- <div class="main_title2"><h6 style=" font-weight:bold;"></h6></div>
                    <div class="main_title2"><h6 style=" font-weight:bold;">Social Network</h6></div>
                    <div class="betty-sidebar-part">
                        <div class="betty-sidebar-block betty-sidebar-block-categories">
                            <div class="betty-sidebar-block-content">
                                    <h6>-- Skin/Hair Treatments --</h6>-->
                                    <ul class="ul1" id="uiList1"> 
                                    <!-- <li><a href="services">Laser Hair Removal</a></li>
                                    <li><a href="services">Pimple/Acne Scar</a></li>
                                    <li><a href="services">Pimple Treatment</a></li>
                                    <li><a href="services">Removal</a></li>
                                    <li><a href="services">Hair Fall Treatment</a></li>
                                    <li><a href="services">Skin Lightening</a></li>
                                    <li><a href="services">Treatment</a></li>
                                    <li><a href="services">Pigmentation Treatment</a></li>
                                    <li><a href="services">Melasma Treatment</a></li> 
                                    <li><a href="services">Dark Circle Treatment</a></li>
                                    <li><a href="services">Dull Skin Treatment</a></li>
                                    <li><a href="services">Signature Facial</a></li>
                                    <li><a href="services">Stretch Marks Removal</a></li>
                                    <li><a href="services">Treatment</a></li>
                                    <li><a href="services">Anti-Aging Treatment</a></li>
                                    <li><a href="services">Botox Treatment</a></li>
                                    <li><a href="services">Filters Treatment</a></li>
                                    <li><a href="services">Skin Tightiening</a></li>
                                    <li><a href="services">Permanent Tatto</a></li>
                                    <li><a href="services">Removal</a></li>
                                    <li><a href="services">Mole Removal</a></li>
                                    <li><a href="services">Wart Removal</a></li>
                                    <li><a href="services">Skin Tag Removal</a></li>
                                    <li><a href="services">Liquid Rhinoplasty</a></li> -->
                                 </ul>
                        <!--    </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <style>
    .main_title2{
	   background: #f9f9ff;
	   border-left: 3px solid $baseColor;
	   margin-bottom: 30px;
	h2{
		color: $dip;
		font-size: 18px; 
		font-family: $rob;
		font-weight: 500;
		line-height: 40px;
		padding-left: 15px;
		margin-bottom: 0px;
	}
}

        .content {
            overflow: hidden;
            max-height: 50px; /* Adjust the max-height as needed */
        }
        .read-more-button {
            display: none;
        }
    </style>