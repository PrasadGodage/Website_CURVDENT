<div class="modal fade bs-example-modal-lg" id="addCountryModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Country Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addCountryForm" method="post">
                    <div class="box-body">
                        <h4 class="box-title text-info"><i class="ti-user mr-15"></i> Country Info </h4>
                        <hr class="my-15">
                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter Country</label>
                                    <input type="text" class="form-control" placeholder="Enter Country" id="country" name="country">
                                    <input type="hidden" class="form-control" id="id" name="id">
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
