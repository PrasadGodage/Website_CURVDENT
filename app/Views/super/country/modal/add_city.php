<div class="modal fade bs-example-modal-lg" id="addCityModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">City Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addCityForm" method="post">
                    <div class="box-body">
                        <h4 class="box-title text-info"><i class="ti-user mr-15"></i> City Info </h4>
                        <hr class="my-15">
                        <div class="row">
                        <div class="col-md-6">
                                <div class="form-group">
                                    <label>Select State</label>
                                    <select class="form-control select2" name="citystate_id" id="citystate_id" style="width:100%;">
                                    
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label ><span class="error">*</span>Enter City</label>
                                    <input type="text" class="form-control" placeholder="Enter City" id="city" name="city">
                                    <input type="hidden" id="city_id" name="city_id">
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
