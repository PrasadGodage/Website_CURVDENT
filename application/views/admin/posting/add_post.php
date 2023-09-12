<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Post
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <!--<li class="breadcrumb-item"><a href="#">Master</a></li>-->
            <li class="breadcrumb-item active">Post</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Add Post</h3>

                <ul class="box-controls pull-right">
                    <li><a class="box-btn-close" href="#"></a></li>
                    <li><a class="box-btn-slide" href="#"></a></li>
                    <li><a class="box-btn-fullscreen" href="#"></a></li>
                </ul>
            </div>
            <div class="box-body">
                <div class="card shadow">
                    <div class="card-body">
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

                            <div class="form-group row" id="photo_preview">
                            <label class="col-sm-2 col-form-label">Photo</label>
                            <div class="col-sm-10">
                                (No photo)
                            </div>
                            </div>

                            <div class="form-group row">
                            <label class="col-sm-2 col-form-label" id="label-photo"><span class="text-danger">*</span> Upload Photo </label>
                            <div class="col-sm-10">
                                <input name="photo" type="file" id="photo">
                            </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal" id="closePage">Close</button>
                        <button type="button" class="btn btn-sm btn-primary" id="btn_save">Save</button>
                    </div>
                </div>
            </div>
                            




        </div>
            <!-- box -->

    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->