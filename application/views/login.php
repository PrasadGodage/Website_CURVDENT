<?php
$session_data=$this->session->userdata();
if(isset($session_data['empSession'])){
    redirect(base_url('dashboard'));
}
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <!--<link rel="icon" href="../../../images/favicon.ico">-->

        <title>Log in </title>

        <!-- Bootstrap 4.1-->
        <link rel="stylesheet" href="<?php echo base_url() . 'resource/assets/vendor_components/bootstrap/dist/css/bootstrap.min.css'; ?>">

        <!-- Bootstrap extend-->
        <link rel="stylesheet" href="<?php echo base_url() . 'resource/css/bootstrap-extend.css'; ?>">	

        <!-- Data Table-->
        <link rel="stylesheet" type="text/css" href="<?php echo base_url() . 'resource/assets/vendor_components/datatable/datatables.min.css' ?>"/>

        <!-- Theme style -->
        <link rel="stylesheet" href="<?php echo base_url() . 'resource/css/master_style.css'; ?>">



        <!-- SoftMaterial admin skins -->
        <link rel="stylesheet" href="<?php echo base_url() . 'resource/css/skins/_all-skins.css'; ?>">	

    </head>
    <body class="hold-transition bg-img" style="background-image: url(<?php base_url()?>resource/images/gallery/full/6.jpg)" data-overlay="4">

        <div class="container h-p100">
            <div class="row align-items-center justify-content-md-center h-p100">

                <div class="col-lg-5 col-md-8 col-12">
                    <div class="content-top-agile">
                        <h2>Admin Login</h2>
                        <p class="text-white">Sign in to start your session</p>
                    </div>
                    <div class="p-40 mt-10 bg-info content-bottom">
                        <form action="#" id="loginForm" method="post">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-danger border-danger"><i class="ti-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Userid" name="userid" id="userid">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-danger border-danger"><i class="ti-lock"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Password" name="password" id="password">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="checkbox">
                                        <input type="checkbox" id="basic_checkbox_1" >
                                        <label for="basic_checkbox_1">Remember Me</label>
                                    </div>
                                </div>
                                <!-- /.col -->
                                <div class="col-6">
                                    <div class="fog-pwd text-right">
                                        <a href="forgate-password"><i class="ion ion-locked"></i> Forgot pwd?</a><br>
                                    </div>
                                </div>
                                <!-- /.col -->
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-danger btn-block margin-top-10">SIGN IN</button>
                                </div>
                                <!-- /.col -->
                            </div>
                        </form>			

                      
                    </div>
                </div>


            </div>
        </div>


        <!-- jQuery 3 -->
        <script src="<?php echo base_url() . 'resource/assets/vendor_components/jquery-3.3.1/jquery-3.3.1.js'; ?>"></script>



        <script src="<?php echo base_url() . 'resource/js/ajax-jquery.js'; ?>"></script>

        <!--jquery validation-->
        <script src="<?php echo base_url() . 'resource/js/jquery.validate.min.js'; ?>"></script>

        <!-- Bootstrap 4.1-->
        <script src="<?php echo base_url() . 'resource/assets/vendor_components/bootstrap/dist/js/bootstrap.min.js'; ?>"></script>

        <!-- SlimScroll -->
        <script src="<?php echo base_url() . 'resource/assets/vendor_components/jquery-slimscroll/jquery.slimscroll.min.js'; ?>"></script>

        <!-- FastClick -->
        <script src="<?php echo base_url() . 'resource/assets/vendor_components/fastclick/lib/fastclick.js'; ?>"></script>

        <!--sweet alert-->
       
        <script src="<?php echo base_url() . 'resource/js/sweetalert.js' ?>"></script>


        <!-- super login js -->
        <script src="<?php echo base_url() . 'resource/js/custom/employee-login.js'; ?>"></script>
        
    </body>
</html>
