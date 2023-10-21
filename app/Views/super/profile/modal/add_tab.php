<div class="modal fade bs-example-modal-sm" id="addProfileTabModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Add Tab</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <form class="form" id="addProfileTabForm" method="post">
                    <div class="box-body">
                        
                        
                        <div class="row">

                        <div class="col-sm-12">
                                <div class="form-group">
                                    <label>Select Tab</label>
                                    <select class="form-control valid" name="tab_id" id="tab_id">
                                   </select>
                                   <input type="hidden" id="id" name="id">
                                   <input type="hidden" id="profile_id" name="profile_id">
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
