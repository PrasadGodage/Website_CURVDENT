<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
	  <div class="row">
	    <div class="col">
		<!-- id="successMessage" style="display: none;" class="alert alert-success"> -->
            <div id="successMessage" style="display: none;" class="alert alert-pale-success alert-dismissible fade show callout bg-pale-info"  role="alert">
                <!-- Logged In Successfully...                -->
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
                     <span aria-hidden="true">×</span>
                </button>   
            </div>
        </div>

		<!-- <div class="callout bg-pale-info">
					<h4>Nots!</h4>
					<p>All the data is loaded from a seperate JS file</p>
		</div> -->

	  </div>
    <div class="row">
		<div class="col-md-4 col-12">
          	<a class="box box-body box-inverse box-primary bg-primary">
              <div class="flexbox align-items-center">
                <div>
                  <h6 class="mb-0">TOTAL BLOG</h6>
                  <div id="blogConut" style=""></div>
                </div>
                <!-- <img class="avatar avatar-lg avatar-bordered" src="../../../images/avatar/4.jpg" alt="..."> -->
                <i class="fa fa-newspaper-o fa-3x text-gray-500 avatar avatar-lg avatar-bordered" aria-hidden="true"></i>
              </div>
            </a>
        </div>


            
          <div class="col-md-4 col-12">
          	<a class="box box-body box-inverse box-primary bg-danger">
              <div class="flexbox align-items-center">
                <div>
                  <h6 class="mb-0">TOTAL NEWSLETTER</h6>
				  <div id="newsletterCount" style=""></div>
                </div>
                <!-- <img class="avatar avatar-lg avatar-bordered" src="../../../images/avatar/4.jpg" alt="..."> -->
                <i class="mdi mdi-checkbox-multiple-blank-outline fa-3x text-gray-500 avatar avatar-lg avatar-bordered" aria-hidden="true"></i>
            </div>
            </a>
         </div>

        <div class="col-md-4 col-12">
          	<a class="box box-body box-inverse box-primary bg-success">
              <div class="flexbox align-items-center">
                <div>
                  <h6 class="mb-0">SUBSCRIBER</h6>
                  <div id="subscriberCount" style=""></div>
                </div>
                <!-- <img class="avatar avatar-lg avatar-bordered" src="../../../images/avatar/4.jpg" alt="..."> -->
                <i class="fa fa-picture-o fa-3x text-gray-500 avatar avatar-lg avatar-bordered" aria-hidden="true"></i>

              </div>
            </a>
         </div>
        
      </div>

      <div class="col-12">
          <div class="box">
            <div class="box-body">
			  <div class="flexbox align-items-center p-15 bg-light">
				<div class="flexbox align-items-center">
				  <div class="custom-control custom-checkbox pl-0">
					<!-- <button type="button" class="btn btn-default btn-sm checkbox-toggle"><i class="ion ion-android-checkbox-outline-blank"></i></button> -->
                    <h6 class="m-0 font-weight-bold text-primary">Total Posts Monthly</h6>
                  </div>

				  <span class="divider-line mx-1"></span>

				  <!-- <div class="dropdown">
					<button class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Move to</button>
					<div class="dropdown-menu">
					  <a class="dropdown-item" href="#"><span class="badge badge-ring badge-danger mr-1"></span> Work</a>
					  <a class="dropdown-item" href="#"><span class="badge badge-ring badge-warning mr-1"></span> Family</a>
					  <a class="dropdown-item" href="#"><span class="badge badge-ring badge-info mr-1"></span> Friends</a>
					  <a class="dropdown-item" href="#"><span class="badge badge-ring badge-success mr-1"></span> Private</a>
					</div>
				  </div> -->
				  <!-- <div class="dropdown d-none d-sm-block">
					<button class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Sort by</button>
					<div class="dropdown-menu">
					  <a class="dropdown-item" href="#">Date</a>
					  <a class="dropdown-item" href="#">Name</a>
					  <a class="dropdown-item" href="#">Group</a>
					  <a class="dropdown-item" href="#">Popular</a>
					</div>
				  </div> -->
				</div>

				<!-- <div>
				  <div class="lookup lookup-circle lookup-right">
					<input type="text" data-provide="media-search">
				  </div>
				</div> -->
			  </div>
				
              <!-- <div class="media-list media-list-divided media-list-hover">

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

					<div class="app-contact-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-danger"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/1.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Hannah</h6>
					  <small>
						<span>hannah@gmail.com</span>
						<span class="divider-dash">(123) 456-7980</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>
					
				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				  <div class="app-contact-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-danger opacity-0"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/2.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Samuel</h6>
					  <small>
						<span>samuel@gmail.com</span>
						<span class="divider-dash">(256) 875-6579</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				 <div class="app-contact-star"> <a href="#"><i class="fa fa-star-o text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-warning"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/3.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Caleb</h6>
					  <small>
						<span>caleb84@gmail.com</span>
						<span class="divider-dash">(123) 456-7890</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				  <div class="app-contact-star"><a href="#"><i class="fa fa-star-o text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-danger opacity-0"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/4.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Isaac</h6>
					  <small>
						<span>isaac@gmail.com</span>
						<span class="divider-dash">(123) 456-7890</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				  <div class="app-contact-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-info"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/default.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Luke</h6>
					  <small>
						<span>luke@gmail.com</span>
						<span class="divider-dash">(123) 456-7890</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				  <div class="app-contact-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-info"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/5.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Isaiah</h6>
					  <small>
						<span>isaiah@gmail.com</span>
						<span class="divider-dash">(123) 456-7890</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				  <div class="app-contact-star"><a href="#"><i class="fa fa-star-o text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-danger opacity-0"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/6.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Brandon</h6>
					  <small>
						<span>brandon@gmail.com</span>
						<span class="divider-dash">(123) 456-7890</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

				<div class="media align-items-center">
				  <div class="custom-control custom-checkbox">
					<div class="icheckbox_flat-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="custom-control-input" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
				  </div>

				  <div class="app-contact-star"><a href="#"><i class="fa fa-star text-yellow"></i></a></div>

				  <span class="badge badge-dot badge-success"></span>

				  <a class="flexbox flex-grow gap-items text-truncate" href="#qv-user-details" data-toggle="quickview">
					<img class="avatar" src="../../../images/avatar/8.jpg" alt="...">

					<div class="media-body text-truncate">
					  <h6>Aaron</h6>
					  <small>
						<span>aaron@gmail.com</span>
						<span class="divider-dash">(123) 456-7890</span>
					  </small>
					</div>
				  </a>
					
				  <ul class="list-inline">
					<li><a class="hover-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a class="hover-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a class="hover-google" href="#"><i class="fa fa-google-plus"></i></a></li>
					<li><a class="hover-instagram" href="#"><i class="fa fa-instagram"></i></a></li>
					<li><a class="hover-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
					<li><a class="hover-pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
				  </ul>

				  <div class="dropdown">
					<a class="text-lighter" href="#" data-toggle="dropdown"><i class="ti-more-alt rotate-90"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-commenting"></i> Message</a>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-envelope"></i> Email</a>
					  <div class="dropdown-divider"></div>
					  <a class="dropdown-item" href="#"><i class="fa fa-fw fa-trash"></i> Delete</a>
					</div>
				  </div>
				</div>

			  </div> -->
            </div>
            <!-- /.box-body -->
 
            <div class="box-body">
                <div class="chart-area">
                    <!-- <canvas id="myAreaChart" height="400vh"></canvas> -->

					<!-- <section class="section-padding">
    <div class="container"> -->
        <div class="row">
            <!-- Content -->
         	 <!-- <ul class="content list-group">   -->
            <div class="col-md-6 animate-box  contentTest list-group" data-animate-effect="fadeInUp" id="data1">
                <!-- <div class="main_title2"><h6 style=" font-weight:bold;">All News About Blog</h6></div>
                <div class="row"> -->
                    <!-- <div class="col-md-5 p-4">
                        <div class="item">
                            <div class="position-re o-hidden" id="div1">
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 p-4">
                        <div class="item">
                            <div class="media-body">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <a  href="blog_page">
                                        <button type="button" class="btn btn-warning">Blog</button></a>
                                    </div>
                                    <div class="col-sm-4">
                                    </div>
                                    <div class="col-sm-4" id="div2">
                                    </div>
                                    <div class="col-md-12" id="heading1">
                                         <h5 style="color:red;" href="blog_page" id="heading1"> -->
                                        <!-- The Definitive Story of How Marvel Studios Created the Marvel Cinematic Universe -->
                                    <!-- </h5> -->
                                    <!--</div>    
                                    <div class="col-md-12" href="blog_page" id="p1">
                                         <p id="paragraph1"></p> -->
                                        <!-- <p>Get your first look at The Story of Marvel Studios: The Making of the Marvel Cinematic Universe from…</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div> -->
                <!-- </div> -->
            </div>

			<div class="col-md-6 animate-box  contentTest list-group" data-animate-effect="fadeInUp" id="data1"></div>

			<div class="paginator"></div> 

		</div>







                </div>
            </div>

          </div>

          <!-- /. box -->
        </div>

	</section>
    <!-- /.content -->
  </div>