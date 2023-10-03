<div class="modal fade bs-example-modal-lg" id="addSendEmailModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
            <h4 class="modal-title" id="myLargeModalLabel">Subscribers List</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                 <form class="form" id="addSendEmailForm" method="post">
                    <input type="hidden" name="id" id="id">

                        <div class="col-12">         
                            <div class="box">
                                <div class="box-header with-border box-controls pull-right custom-control custom-checkbox pl-0">
                                    <!-- <div class="box-header pull-left"> -->
                                        <!-- <div class="box-controls pull-right"> -->
                                       
                                        <button type="button" class="btn btn-primary" id="addSubscriberBtn">Send Email<i class="fa fa-fw fa-arrow-right" aria-hidden="true"></i></button>
                                        <button type="button" class="btn btn-info mr-3 checkbox-toggle" id="selectAllBtn"><i class="fa-sync-alt"></i>Select All</button> 
                                        <button type="button" class="btn btn-sm checkbox-toggle bg-transparent no-border"><i class="ion ion-android-checkbox-outline-blank"></i>
						                </button>

                                </div>
                                <!-- </div> -->
                                <!-- /.box-header -->
                                <div class="box-body ">
                                    <div class="mailbox-messages">
                                        <div class="table-responsive">
                                            <table id="subscriberTable" class="table table-bordered table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                     <!-- <th class="custom-control-input"></th> -->
                                                        <!-- <th>Select All <input type="checkbox" id="selectAll"></th> -->
                                                        <th>Sr.No</th>
                                                        <th>Email</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="subscriberList">
                                                
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <!-- <th class="custom-control-input"></th> -->
                                                        <!-- <th>Select All <input type="checkbox" id="selectAll"></th> -->
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
                            </div>
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

