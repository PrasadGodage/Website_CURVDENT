<div class="modal fade bs-example-modal-lg" id="activeControlModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Activity Control Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                <!--ul-->
                <!-- Nav tabs -->
                <ul class="nav nav-tabs nav-fill" role="tablist">
                    <li class="nav-item" id="amcLi"> <a class="nav-link active" data-toggle="tab" href="#activityControlListTab" role="tab" onclick="resetActivityControlList();"><span class="hidden-sm-up"><i class="ion-home"></i></span> <span class="hidden-xs-down">Control LIST</span></a> </li>
                    <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#addAMCTab" role="tab"><span class="hidden-sm-up"><i class="ion-person"></i></span> <span class="hidden-xs-down">ADD Control</span></a> </li>
                </ul>
                <!--ul-->
                <!-- Tab panes -->
                <div class="tab-content tabcontent-border">
                    <!--control list-->
                    <div class="tab-pane pad active" id="activityControlListTab" role="tabpanel"  data-toggle="tab">
                        
                        
                    </div>
                    <!--control list-->

                    <!--add amc details-->
                    <div class="tab-pane pad" id="addAMCTab" role="tabpanel">

                        <form class="form" id="addactivityControlForm" method="post">

                            <div class="box-body">
                                <h4 class="box-title text-info"><i class="fa fa-shopping-cart"></i> Add Comtrol </h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label><span class="error">*</span>Control Name</label>
                                            <input type="text" class="form-control" placeholder="Enter Control Name" id="control_name" name="control_name">
                                            <input type="hidden" class="form-control" id="activity_id" name="activity_id">
                                        </div>
                                    </div>
                                    
                                                           
                                    <!--</div>-->
                                </div>
                                <!-- /.box-body -->
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
                </div>
                <!-- Tab panes -->




            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

</div>