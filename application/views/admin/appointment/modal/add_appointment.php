<div class="modal fade bs-example-modal-lg" id="addappointmentModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="appointmentLabel">Appointment Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addappointmentForm" method="post">
                    <div class="box-body">
                        <h4 class="box-title text-info"><i class="ti-user mr-15"></i> Appointment </h4>
                        <hr class="my-15">
                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Name</label>
                                    <input type="text" class="form-control" id="fullName" name="fullName" placeholder=" Name" required>
                                    <input type="hidden" class="form-control" id="id" name="id">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Contact</label>
                                    <input type="tel" class="form-control" id="contactNo" name="contactNo" placeholder=" Contact" recorded>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Email</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" >
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Address</label>
                                    <textarea  id="address" class="form-control" name="address"placeholder="Address" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Date</label>
                                    <input type="date" class="form-control" id="date" name="date">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Time</label>
                                    <input type="time" class="form-control" id="time" name="time ">
                                </div>
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
