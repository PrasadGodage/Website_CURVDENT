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

                            <!--<div class="box-controls pull-right">-->
                            <button type="button" class="btn btn-primary" id="addPurchaseBtn">Add</button>
                            <button type="button" class="btn btn-xs btn-primary">Reload</button>
                            <!--</div>-->
                        </div>
                        <!-- /.box-header -->
                        <!-- <div class="box-body">
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
                        </div> -->
                        <!-- /.box-body -->


                        <div class="box-body">
				<div class="table-responsive">
                <div class="row"><div class="col-sm-12 col-md-6">
                    <div class="dataTables_length" id="project-table_length">
                        <label>Show 
                            <select name="project-table_length" aria-controls="project-table" class="form-control form-control-sm">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select> 
                            entries</label>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div id="project-table_filter" class="dataTables_filter">
                        <label>Search:
                            <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="project-table">
                        </label>
                    </div>
                </div>
            </div>
				  <table id="example1" class="table table-bordered table-striped">
					<thead>
						<tr>
                            <th>Sr.No</th>
                            <th>Category Name</th>
                            <th>Slug</th>
                            <th>Active</th>
                            <th>Action</th>             
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>System Architect</td>
							<td>Edinburgh</td>
							<td>Active</td>
							<td> <a href="" onclick="" title="view"><i class="mdi mdi-eye-outline" style="font-size: 20px;"></i></a>
                                 <a href="" onclick="" title="update"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>                   
                            </td>
						</tr>
						<tr>
							<td>2</td>
							<td>Accountant</td>
							<td>Tokyo</td>
							<td>In-Active</td>							
							<td> <a href="" onclick="" title="view"><i class="mdi mdi-eye-outline" style="font-size: 20px;"></i></a>
                                 <a href="" onclick="" title="update"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>                   
                            </td>
						</tr>
						<tr>
							<td>3</td>
							<td>Junior Technical Author</td>
							<td>San Francisco</td>
							<td>Active</td>
							<td> <a href="" onclick="" title="view"><i class="mdi mdi-eye-outline" style="font-size: 20px;"></i></a>
                                 <a href="" onclick="" title="update"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>                   
                            </td>
						</tr>
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
