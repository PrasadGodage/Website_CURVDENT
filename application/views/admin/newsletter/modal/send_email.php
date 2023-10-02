<!-- <div class="modal fade bs-example-modal-lg" id="addSendEmailModal" tabindex="-1" role="dialog"
	aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
	<div class="modal-dialog modal-lg">
		<div class="modal-content"> -->

			<!--form start-->

			<!-- <div class="modal-header">
				
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
			   <div class="col-12">
                    <div class="box box-transparent no-shadow"> -->

                         <!-- Tab panes -->

                        <!-- <div class="box-body bg-white tab-content">
                            <div class="tab-pane fade active show" id="home">    
	
                                <div class="row">
                                    <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm">
                                        <label>Subscriber List <span id="subscriberList"></span></label>
                                    </div>
                                </div>
                                <div class="row mb-2"> -->
                        
                                  <!-- /.box-header -->
                                
                                    <!-- <div class="box-body no-padding">
                                        <div class="table-responsive">
                                            <table id="subscriberTable" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Sr.No</th>
                                                        <th>Email</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="subscriberList">
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Sr.No</th>
                                                        <th>Email</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div> -->
              
                                    <!-- /.box-body -->

                                <!-- </div>
                            </div>  
                        </div>
                    </div>
                </div>				
			</div> -->
            
			<!-- /.box-body -->

		<!-- </div> -->

		<!-- /.modal-content -->

	<!-- </div> -->

	<!-- /.modal-dialog -->

<!-- </div> -->


<div class="modal fade bs-example-modal-lg" id="addSendEmailModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Add Newsletter Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                 <form class="form" id="addSendEmailForm" method="post">
                    <input type="hidden" name="id" id="id">

                    <div class="col-12">         
                            <div class="box">
                                <div class="box-header with-border box-controls pull-right">
                                    <!-- <div class="box-header pull-left"> -->
                                        <!-- <div class="box-controls pull-right"> -->
                                       
                                        <button type="button" class="btn btn-primary" id="addSubscriberBtn">Send Email<i class="fa fa-fw fa-arrow-right" aria-hidden="true"></i></button>
                                        <button type="button" class="btn btn-info mr-3" id="selectAllBtn"><i class="fa-sync-alt"></i>Select All</button> 
                                </div>
                                <!-- </div> -->
                                <!-- /.box-header -->
                                <div class="box-body">
                                    <div class="table-responsive">
                                        <table id="subscriberTable" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Sr.No</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="subscriberList">
                                                
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Sr.No</th>
                                                    <th>Email</th>
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

                </form>
                        
                <!--form end-->
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

