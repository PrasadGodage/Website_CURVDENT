<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Newsletter Management
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <!--<li class="breadcrumb-item"><a href="#">Master</a></li>-->
            <li class="breadcrumb-item active">Newsletter</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Newsletter List</h3>

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
                            <button type="button" class="btn btn-primary" id="addNewsletterBtn"><i class="fa fa-plus" aria-hidden="true"></i> Add Newsletter</button>
                            <!--</div>-->
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="newsletterTable" class="table table-bordered table-striped">
                                <colgroup>
                                    <col class="column1">
                                    <!-- <col class="column2"> -->
                                    <!-- Add more col elements for additional columns as needed -->
                                </colgroup>
                                    <thead>
                                        <tr>
                                            <th class="col-lg-1">Sr No.</th>
                                            <th class="col-lg-3">Article Title</th>
                                            <th class="col-lg-2">Publish Date</th>
                                            <th class="col-lg-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="newsletterList">
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Article Title</th>
                                            <th>Publish Date</th>
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
