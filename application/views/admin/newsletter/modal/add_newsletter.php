<div class="modal fade bs-example-modal-lg" id="addNewsletterModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Add Newsletter Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                 <form class="form" id="addNewsletterForm" method="post">
                    <input type="hidden" name="id" id="id">

                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label"><span class="text-danger">*</span> Article Title</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="title" name="title" autocomplete="off">
                            </div>
                        </div> 

                        <div class="form-group row">
                            <label for="article" class="col-sm-2 col-form-label"><span class="text-danger">*</span> Content</label>
                            <div class="col-sm-10">
                                <textarea name="content" id="content" cols="30" rows="4" class="form-control"></textarea>
                            </div>
                        </div>
    
                        <div class="col-md-12 text-center modal-footer text-right">
                            <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal" id="cancleaddNewsletterPage">Cancel</button>
                            <button type="submit" id="callNewsletterAjax" class="btn btn-primary btn-outline"><i
                                    class="ti-save-alt"></i> Save
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