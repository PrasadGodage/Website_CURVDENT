<div class="modal fade bs-example-modal-lg" id="addSubscriberModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Subscriber Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addSubscriberForm" method="post">
                    <div class="box-body">
                        <h4 class="box-title text-info"><i class="ti-user mr-15"></i> Subscribers </h4>
                        <hr class="my-15">
                        <div class="row">

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Email Address</label>
                                    <input type="text" class="form-control" placeholder="Enter Email Address" id="email" name="email">
                                    <span id="emailError" class="error"></span>
                                    <input type="hidden" class="form-control" id="id" name="id">
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Status</label>
                                    <select class="form-control" id="is_active" name="is_active">
                                        <option value="1">Yes</option> 
                                        <option value="0">No</option>
                                    </select>

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
