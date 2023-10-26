<div class="modal fade bs-example-modal-lg" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Employee Info</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addEmployeeForm" method="post">
                    <div class="box-body">
                        
                        <div class="row">
                        <div class="col-md-3">
                                    <div class="form-group text-center">
                                        <img src="<?php echo base_url('resource/images/avatar-custom.png'); ?>" alt="" id="otherdpre"  width="100px" height="100px"/>
                                        <p><label for="profile_image" style="cursor: pointer;" class="h6"><u>Upload...</u></label></p>
                                        <input type="file" class="form-control" name="profile_image" style="display: none;" id="profile_image" accept="image/*"  onchange="loadFile(event, 'otherdpre')" />

                                    </div>
                                </div>
                                <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select Role</label>
                                    <select class="form-control" name="role_id" id="role_id" style="width:100%;" required>
                                    
                                    </select>
                                    <input type="hidden" class="form-control" id="id" name="id">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select Profile</label>
                                    <select class="form-control" name="profile_id" id="profile_id" style="width:100%;" required>
                                    
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select Branch</label>
                                    <select class="form-control" name="office_branch_id" id="office_branch_id" style="width:100%;" required>
                                    
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <!-- row-0 -->
                        <h4 class="box-title text-info"><i class="fa fa-code-fork mr-15"></i> Employee Details </h4>
                        <hr class="my-15">
                        <div class="row">
                        
                        
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Name" id="name" name="name">
                                    
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select D.O.B</label>
                                    <input type="date" class="form-control" name="dob" id="dob" />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Age</label>
                                    <input type="text" class="form-control" placeholder="Enter Age" id="age" name="age">
                                 </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Select Gender</label>
                                    <select class="form-control" name="gender" id="gender" style="width:100%;" required>
                                    <option value="" disabled selected hidden>Please Choose...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Aadhar No.</label>
                                    <input type="text" class="form-control" placeholder="Enter Aadhar No." id="aadhar_no" name="aadhar_no">
                                 </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Pancard</label>
                                    <input type="text" class="form-control" placeholder="Enter Pancard" id="pancard" name="pancard">
                                 </div>
                            </div>
                            <div class="col-md-3" id="passwordData">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Password</label>
                                    <input type="text" class="form-control" placeholder="Enter Password" id="password" name="password">
                                    
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
                        <h4 class="box-title text-info"><i class="fa fa-map-marker mr-15"></i> Employee Status </h4>
                        <hr class="my-15">
                        <div class="row">
                         <div class="col-md-3">
                                <div class="form-group">
                                    <label>Status</label>
                                    <div class="radio">
                                        <input name="is_active" type="radio" id="active" value="1" checked="">
                                        <label for="active">Active</label>                    
                                    </div>
                                    <div class="radio">
                                        <input name="is_active" type="radio" id="inactive" value="0">
                                        <label for="inactive">Inactive</label>   
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                <input type="checkbox" id="is_verified" name="is_verified" value="1">
										<label for="is_verified">Document Verified</label>                              </div>
                            </div>
                        </div>
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
