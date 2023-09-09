<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Add Post
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <!--<li class="breadcrumb-item"><a href="#">Master</a></li>-->
            <li class="breadcrumb-item active">Posting</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Add Post</h3>

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

                            <div class="box-controls pull-right">
                                <button type="button" class="btn btn-primary" id="addPostBtn">Add Post</button>
                            </div>
                        </div>
                        <!-- /.box-header -->
                      
                        <div class="box">
                            <div class="box-header with-border">
                            <!-- <h3 class="box-title">Data Table With Full Features</h3> -->
                                <div class="box-controls pull-right">
                                    <button id="row-count" class="btn btn-xs btn-danger">Row count</button>
                                </div>
                            </div>
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="table-responsive">
                                        <table id="postTable" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Article Title</th>
                                                    <th>F</th>
                                                    <th>C</th>
                                                    <th>P</th>
                                                    <th>Category</th>
                                                    <th>Active</th>
                                                    <th>Publised</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="postList" >

                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                <th>Article Title</th>
                                                    <th>F</th>
                                                    <th>C</th>
                                                    <th>P</th>
                                                    <th>Category</th>
                                                    <th>Active</th>
                                                    <th>Publised</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <!-- /.box-body -->
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
