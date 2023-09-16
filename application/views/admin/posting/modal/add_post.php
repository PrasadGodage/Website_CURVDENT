<div class="modal fade bs-example-modal-lg" id="addPostModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--form start-->
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Add Post Details</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">

                 <form class="form" id="addPostForm" method="post">
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

                        <div class="form-group row">
                            <div class="col">
                                <label for="featured" class="col-form-label">Featured</label>
                                <select class="form-control" id="featured" name="featured">
                                    <option value="N">No</option>
                                    <option value="Y">Yes</option> 
                                </select>
                                <!-- <small class="form-text text-danger">Recommended Image: 1920 x 1080.</small> -->
                            </div>

                            <div class="col">
                                <label for="choice" class="col-form-label">Editor's Choice</label>
                                <select class="form-control" id="choice" name="choice">
                                    <option value="N">No</option>
                                    <option value="Y">Yes</option> 
                                </select>
                            </div>

                            <div class="col">
                                <label for="thread" class="col-form-label">Popular News</label>
                                <select class="form-control" id="thread" name="thread">
                                    <option value="N">No</option>
                                    <option value="Y">Yes</option> 
                                </select>
                            </div>
                            
                            <div class="col">
                                <label for="category" class="col-form-label"><span class="text-danger">*</span> Category</label>
                                <select type="text" class="form-control" placeholder="Select Category" id="id_category" name="id_category"></select>
                            </div>
                            
                            <div class="col">
                                <label for="is_active" class="col-form-label">Active</label>
                                <select class="form-control" id="is_active" name="is_active">
                                    <option value="Y">Yes</option> 
                                    <option value="N">No</option>
                                </select>
                            </div>
                        </div>

                        <!-- <div class="col-md-3">
                            <div class="form-group text-center">
                                <label class="col-sm-2 col-form-label">Photo</label> -->
                                <!-- <div class="col-sm-10"> -->
                                   
                                <!-- </div> -->
                            <!-- </div> --> 


                        <div class="form-group row" id="photo_preview">
                            <label class="col-sm-2 col-form-label">Photo</label>
                            <div class="col-sm-10">
                                <img src="<?php echo base_url('resource/images/avatar-custom.png'); ?>" alt="" id="otherdpre"  width="100px" height="100px"/>
                                <!-- <p><label for="profile_image" style="cursor: pointer;" class="h6"><u>Upload...</u></label></p>
                                <input type="file" class="form-control" name="profile_image" style="display: none;" id="profile_image" accept="image/*"  onchange="loadFile(event, 'otherdpre')" /> -->
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label" id="label-photo"><span class="text-danger">*</span> Upload Photo </label>
                           <label class="col-sm-2 col-form-label h6" for="profile_image"><span class="text-danger">*</span> Upload Photo </label>    
                            <div class="col-sm-8">
                                <!-- <input name="photo" type="file" id="photo"> -->
                                <input type="file" class="form-control" name="profile_image" style="display: none;" id="profile_image" accept="image/*"  onchange="loadFile(event, 'otherdpre')" />
                            </div>
                        </div>
                        <div class="col-md-12 text-center modal-footer text-right">
                            <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal" id="cancleaddPostPage">Cancel</button>
                            <button type="submit" id="callPostAjax" class="btn btn-primary btn-outline"><i
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
