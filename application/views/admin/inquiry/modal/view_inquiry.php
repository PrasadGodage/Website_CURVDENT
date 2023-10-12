<div class="modal fade bs-example-modal-lg" id="viewPurchaseModal" tabindex="-1" role="dialog"
	aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<!--form start-->
			<div class="modal-header">
				
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
			<div class="col-12">
            <div class="box box-transparent no-shadow">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs nav-tabs-danger" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active show" data-toggle="tab" href="#home" role="tab" aria-selected="true">Purchase Details</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-selected="false">Item List</a>
                </li>
            </ul>

              <!-- Tab panes -->
              <div class="box-body bg-white tab-content">
                <div class="tab-pane fade active show" id="home">
                  <!-- start -->
				          <div class="row">
                                <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm">
                                    <label>Product Order# <span id="purchaseOrdIdView"></span></label>
                                </div>
                                <div class="col-6 col-md-3 col-lg-3 col-xs-3 input-group-sm"></div>
                                
                                <div class="col-6 col-md-1 col-lg-1 col-xs-1 input-group-sm">
                                    <div class="form-group">
                                        <label class="control-label" for="purchaseDateView" style="text-align:right;"> Date
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm">
                                    <div class="input-group">
                                         <div id="purchaseDateView"></div>
                                    </div>
                                </div>
                    </div>
                      <div class="row mb-2">
                                <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm ">
                                    <div class="form-group">
                                        <label>Vendor Name </label>
                                        <div id="vendorNameView"></div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm ">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="form-label">GST IN </label>
                                        <div id="gstinView"></div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm ">
                                    <div class="form-group">
                                        <label class="form-label" style="text-align:right;">Contact </label>
                                        <div id="contactFirmView"></div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm ">
                                    <div class="form-group">
                                        <label class="form-label" style="text-align:right;">Created By </label>
                                        <div id="createdByView"></div>
                                    </div>
                                </div>
                     </div>
                  <!-- end -->
				              <hr/>
                      <div class="row">
                        <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm">
                          <label>Purchase <span id="purchaseView"></span></label>
                        </div>
                      </div>
                      <div class="row mb-2">
                        
                                  <!-- /.box-header -->
                                
                        <div class="box-body no-padding">
                          <div class="table-responsive">
                            <table class="table table-hover" id="purchaseTableView">
                              <thead>
                                <tr>
                                  <th>Sr No</th>
                                  <th>Product Name</th>
                                  <th>Total Quantity</th>
                                </tr>
                              </thead>
                              <tbody id="purchaseListView">
                                        
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th>Sr No</th>
                                  <th>Product Name</th>
                                  <th>Total Quantity</th>
                                </tr>
                              </tfoot>
                            </table>
			                	  </div>
                      </div>
              
                              <!-- /.box-body -->
                        
                      </div>
                </div>
                <div class="tab-pane fade" id="profile">
                    <div class="row">
                      <div class="col-6 col-md-4 col-lg-4 col-xs-4 input-group-sm">
                        <label>Item Details <span id="itemDetailsView"></span></label>
                      </div>
                    </div>
                    
                      <!----itemDetailTable Start----->
                      <div class="box-body no-padding row mb-2">
                          <div class="table-responsive">
                            <table class="table table-hover" id="itemDetailTableView">
                              <thead>
                                <tr>
                                  <th>Sr No</th>
                                  <th>Product Name</th>
                                  <th>IMEI NO</th>
                                  <th>UID/ICCDE No</th> 
                                  <th>SIM1NO</th>
                                  <th>SIM2NO</th>
                                  <th>Status</th>
                                  <th>Purchase Date</th>
                                </tr>
                              </thead>
                              <tbody id="itemDetailListView">
                                        
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th>Sr No</th>
                                  <th>Product Name</th>
                                  <th>IMEI NO</th>
                                  <th>UID/ICCDE No</th>
                                  <th>SIM1NO</th>
                                  <th>SIM2NO</th>
                                  <th>Status</th>
                                  <th>Purchase Date</th>
                                </tr>
                              </tfoot>
                            </table>
			                	  </div>
                      </div>
                      <!----itemDetailTable End----->
                    
                </div>
                
              </div>
            </div>
          </div>				
			</div>
			<!-- /.box-body -->
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>