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
                                <div class="mailbox-controls">
                                <div class="mailbox-messages">
                                        <div class="box-header with-border box-controls pull-right custom-control custom-checkbox pl-0">
                                            <!-- <div class="box-header pull-left"> -->
                                                <!-- <div class="box-controls pull-right"> -->
                                            
                                                <button type="button" class="btn btn-primary" id="sendEmail">Send Email<i class="fa fa-fw fa-arrow-right" aria-hidden="true"></i></button>
                                                <!-- <button type="button" class="btn btn-info mr-3 checkbox-toggle" id="selectAllBtn"><i class="fa-sync-alt"></i>Select All</button> -->
                                                <!-- <button type="button" class="btn btn-sm checkbox-toggle bg-transparent no-border"><i class="ion ion-android-checkbox-outline-blank"></i>  -->
                                                </button>

                                        </div>
                                <!-- </div> -->
                                <!-- /.box-header -->
                                    <div class="box-body ">
                                        <!-- <div class="row">
                                            <div class="col-md-4">
                                                <h3>Selected Record ids: => </h3>
                                            </div>
                                            <div class="col-md-8 selectedDiv">
                                            </div>
                                        </div> -->
                                        <div class="table-responsive">
                                            <table id="subscriberTable" class="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                     <!-- <th class="custom-control-input"></th> -->
                                                        <th><input type="checkbox"  class="largerCheckbox" id="chkAll" style="position: absulute; left:20px; opacity:1;" /></th>
                                                        <th>Sr.No</th>
                                                        <th>Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="subscriberList">
                                                
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <!-- <th class="custom-control-input"></th> -->
                                                        <th>#</th>
                                                        <th>Sr.No</th>
                                                        <th>Email</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <!-- /.box-body -->

                                </div>
                                <!-- /.box -->
                                </div>
                                </div>
                            </div>
                           <!-- /.box -->          
                        </div>

                </form>
                        
                <!--form end-->
            </div>
            <!-- /.box-body -->
        <!-- </div> -->
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

