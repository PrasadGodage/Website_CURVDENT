<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Appointment's
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <!--<li class="breadcrumb-item"><a href="#">Master</a></li>-->
            <li class="breadcrumb-item active">Appointment</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Appointment List</h3>

                <ul class="box-controls pull-right">
                    <li><a class="box-btn-close" href="#"></a></li>
                    <li><a class="box-btn-slide" href="#"></a></li>	
                    <li><a class="box-btn-fullscreen" href="#"></a></li>
                </ul>
            </div>
            <div class="box-body">
                <!--table start-->
                <div class="col-12">         
                    <div class="box">
                        <div class="box-header with-border box-controls pull-right">

                            <!--<div class="box-controls pull-right">-->
                            <!--<button id="row-count" class="btn btn-xs btn-primary">Row count</button>-->
                            <button type="button" class="btn btn-primary" id="addappointmentBtn"><i class="fa fa-plus" aria-hidden="true"></i> New Appointment</button>
                            <!--</div>-->
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="appointmentTable" class="table table-bordered table-striped">
                                <colgroup>
                                    <col class="column1">
                                    <!-- <col class="column2"> -->
                                    <!-- Add more col elements for additional columns as needed -->
                                </colgroup>
                                    <thead>
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Contact</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="appointmentList">
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <th>Sr No.</th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Contact</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->


                    <!-- /.box -->          
                </div>
                <!--table end-->

            </div>
            <!-- /.box-body -->

            <!-- /.box-footer-->
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
