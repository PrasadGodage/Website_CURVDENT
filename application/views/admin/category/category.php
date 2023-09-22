<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>Category</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <!--<li class="breadcrumb-item"><a href="#">Master</a></li>-->
            <li class="breadcrumb-item active">Category</li>
        </ol>
    </section>
    
    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Category Management</h3>

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
                        <!-- <div class="box-header pull-left"> -->
                            <!-- <div class="box-controls pull-right"> -->
                            <button type="button" class="btn btn-primary" id="addCategoryBtn"><i class="fa fa-plus" aria-hidden="true"></i>Add Category</button>
                            <!-- <button type="button" class="btn btn-info" id="reloadCategoryBtn"><i class="fa-sync-alt"></i>Reload</button> -->
                            </div>
                        <!-- </div> -->
                        <!-- /.box-header -->
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="categoryTable" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Category Name</th>
                                            <th>Slug</th>
                                            <th>Active</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="categoryList">
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Category Name</th>
                                            <th>Slug</th>
                                            <th>Active</th>
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
