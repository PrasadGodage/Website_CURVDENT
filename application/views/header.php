
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="<?php echo base_url() . 'resource/images/favicon.ico'; ?>">

        <title>Curvdent</title>

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

        <!-- Select2 -->
	    <link rel="stylesheet" href="<?php echo base_url() . 'resource/assets/vendor_components/select2/dist/css/select2.min.css'?>">	

        <link rel="shortcut icon" href="<?php echo base_url() . 'uiAssets/img/logo-light.png'?>" />
        <link rel="stylesheet" href="<?php echo base_url() . 'uiAssets/css/plugins.css'?>" />
        <link rel="stylesheet" href="<?php echo base_url() . 'uiAssets/css/style.css'?>" />

        <style>
            .error{
                color: red;
            }
        </style>
        <style>

            #loader {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                background: rgba(0, 0, 0, 0.75) url('<?php echo base_url('resource/images/loader.gif'); ?>') no-repeat center center;
                z-index: 10000;
            }

        </style>
    </head>
    <body class="hold-transition skin-blue sidebar-mini">
        <!-- Site wrapper -->
        <div class="wrapper">
            <header class="header slider-fade" data-scroll-index="0" id="home">
                <div class="owl-carousel owl-theme">
                    <div class="text-left item bg-img" data-overlay-dark="1" data-background="img/slider/3.jpg">
                        <div class="v-middle caption mt-30">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="o-hidden">
                                            <h1 style="font-weight: 700;">Face the wow experience</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-left item bg-img" data-overlay-dark="1" data-background="img/slider/2.jpg">
                        <div class="v-middle caption mt-30">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="o-hidden">
                                            <h1 style="font-weight: 700">Let's Glow More</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-left item bg-img" data-overlay-dark="1" data-background="img/slider/1.jpg">
                        <div class="v-middle caption mt-30">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="o-hidden">
                                            <h1 style="font-weight: 700">Surprise Yourself At Curvdent</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-left item bg-img" data-overlay-dark="1" data-background="img/slider/4.jpg">
                        <div class="v-middle caption mt-30">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="o-hidden">
                                            <h1 style="font-weight: 700">No More Wrinkles On Face</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>