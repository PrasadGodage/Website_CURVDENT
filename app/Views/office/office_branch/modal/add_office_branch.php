<div class="modal fade bs-example-modal-lg" id="addOfficeBranchModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Office Info</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addOfficeBranchForm" method="post">
                    <div class="box-body">
                        <h4 class="box-title text-info"><i class="fa fa-code-fork mr-15"></i> Branch Details </h4>
                        <hr class="my-15">
                        <div class="row">
                        <div class="col-md-4">
                                <div class="form-group">
                                    <label>Select Type</label>
                                    <select class="form-control" name="office_type_id" id="office_type_id" style="width:100%;" required>
                                    
                                    </select>
                                    <input type="hidden" class="form-control" id="id" name="id">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Branch Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Branch Name" id="office_name" name="office_name">
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Select Head of Dept.</label>
                                    <select class="form-control" name="hod_id" id="hod_id" style="width:100%;"  required>
                                    
                                    </select>
                                    
                                </div>
                            </div>
                        </div>
                        <!-- row -->
                        <h4 class="box-title text-info"><i class="fa fa-handshake-o mr-15"></i> Contact Details </h4>
                        <hr class="my-15">
                        <div class="row">
                           <div class="col-md-4">
                                <div class="form-group">
                                    <label>Contact Number 1</label>
                                    <input type="text" class="form-control" placeholder="Enter contact No." name="contact_number1" id="contact_number1">
                                </div>
                            </div>
                           <div class="col-md-4">
                                <div class="form-group">
                                    <label>Contact Number 2</label>
                                    <input type="text" class="form-control" placeholder="Enter contact No." name="contact_number2" id="contact_number2">
                                </div>
                            </div>
                           <div class="col-md-4">
                                <div class="form-group">
                                    <label>Email Id</label>
                                    <input type="email" class="form-control" placeholder="Email id" name="email_id" id="email_id">
                                </div>
                            </div>
                        </div>
                        
                        <!-- row -->
                        <h4 class="box-title text-info"><i class="fa fa-map-marker mr-15"></i> Address Details </h4>
                        <hr class="my-15">
                        <div class="row">
                        <div class="col-md-4">
                                <div class="form-group">
                                    <label>Select Country</label>
                                    <select class="form-control select2" name="country_id" id="country_id" placeholder="Select Country" style="width:100%;" required>
                                    
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Select State</label>
                                    <select class="form-control select2" name="state_id" id="state_id" style="width:100%;" required>
                                    
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Select City</label>
                                    <select class="form-control select2" name="city_id" id="city_id" style="width:100%;" required>
                                    
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Enter Address</label>
                                    <textarea class="form-control" name="address" id="address" rows="1" cols="5"></textarea>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Enter Pincode</label>
                                    <input type="text" class="form-control" placeholder="Enter Pincode" name="pincode" id="pincode">
                                </div>
                            </div>
                        </div>
                        <!-- row -->
                    </div>
                    <div class="modal-footer text-right">
                        <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary btn-outline">
                            <i class="ti-save-alt"></i> Save
                        </button>
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
