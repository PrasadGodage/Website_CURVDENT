



<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Dashboard
            <!--<small>Control panel</small>-->
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!--row-->
        <div class="row">
            <div class="col-xl-3 col-md-6 col-12">
                <div class="box">
                    <div class="flexbox flex-justified text-center bg-primary rounded">
                        <div class="no-shrink py-30">
                            <span class="si-people si font-size-50"></span>
                        </div>

                        <div class="py-30 bg-white text-dark">
                            <div class="font-size-30 countnm" id="clientCount"></div>
                            <span>Client</span>
                        </div>
                    </div>			
                </div>
            </div>
            <!-- /.col -->

            <div class="col-xl-3 col-md-6 col-12">
                <div class="box">
                    <div class="flexbox flex-justified text-center bg-info rounded">
                        <div class="no-shrink py-30">
                            <span class="si-like si font-size-50"></span>
                        </div>

                        <div class="py-30 bg-white text-dark">
                            <div class="font-size-30 countnm" id="projectCount"></div>
                            <span>Projects</span>
                        </div>
                    </div>			
                </div>
            </div>
            <!-- /.col -->
            <div class="col-xl-3 col-md-6 col-12">
                <div class="box">
                    <div class="flexbox flex-justified text-center bg-danger rounded">
                        <div class="no-shrink py-30">
                            <span class="fa fa-calendar font-size-50"></span>
                        </div>

                        <div class="py-30 bg-white text-dark">
                            <div class="font-size-30 countnm" id="openIssues"></div>
                            <span>Open Issues</span>
                        </div>
                    </div>			
                </div>
            </div>


            <div class="col-xl-3 col-md-6 col-12">
                <div class="box">
                    <div class="flexbox flex-justified text-center bg-warning rounded">
                        <div class="no-shrink py-30">
                            <span class="fa fa-calculator font-size-50"></span>
                        </div>

                        <div class="py-30 bg-white text-dark">
                            <div class="font-size-30 countnm"><i class="fa fa-fw fa-rupee"></i><span id="totalInvestment"></span></div>
                            <span>Total Investment</span>
                        </div>
                    </div>			
                </div>
            </div>

        </div>
        <!--row-->		

        <div class="row">

            <div class="col-lg-6 col-12">
                <!-- AREA CHART -->
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title" style="text-shadow: 2px 2px 4px #000000;">AMC Alert Notification</h4>

                        <ul class="box-controls pull-right">
                            <li><a class="box-btn-close" href="#"></a></li>
                            <li><a class="box-btn-slide" href="#"></a></li>	
                            <li><a class="box-btn-fullscreen" href="#"></a></li>
                        </ul>
                    </div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Business Name</th>
                                        <th>Owner Name</th>
                                        <th>Owner Contact</th>
                                        <th>Product Name</th>
                                        <th>AMC Amount</th>
                                        <th>AMC Date</th>
                                    </tr>
                                </thead>
                                <tbody id="amcAlertList">
<!--                                    <tr>
                                        <td><span class="txt-dark">TK infotech</span></td>
                                        <td>Lalit</td>
                                        <td>CA project</td>
                                        <td>
                                            <span class="txt-dark"><i class="fa fa-fw fa-rupee"></i>1284</span>
                                        </td>
                                        <td>
                                            12/03/2021
                                        </td>
                                    </tr>-->

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <div class="col-lg-6 col-12">
                <!-- AREA CHART -->
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title" style="text-shadow: 2px 2px 4px #000000;">Project List</h4>

                        <ul class="box-controls pull-right">
                            <li><a class="box-btn-close" href="#"></a></li>
                            <li><a class="box-btn-slide" href="#"></a></li>	
                            <li><a class="box-btn-fullscreen" href="#"></a></li>
                        </ul>
                    </div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Technology</th>
                                        <th>Web</th>
                                        <th>Android</th>
                                    </tr>
                                </thead>
                                <tbody id="projectList">
<!--                                    <tr>
                                        <td><span class="txt-dark">Facebook</span></td>
                                        <td>Ponting</td>
                                        <td><span class="txt-success"><i class="ion-android-arrow-dropup text-success"></i><span>2.43%</span></span></td>
                                        <td>
                                            <span class="txt-dark">$1284</span>
                                        </td>
                                        <td>
                                            <span class="badge badge-success">Active</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="txt-dark">Youtube</span></td>
                                        <td>Helix</td>
                                        <td><span class="txt-success"><i class="ion-android-arrow-dropup text-success"></i><span>3.43%</span></span></td>
                                        <td>
                                            <span class="txt-dark">$8457</span>
                                        </td>
                                        <td>
                                            <span class="badge badge-danger">Closed</span>
                                        </td>
                                    </tr>
                                    -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>




        </div>

    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->