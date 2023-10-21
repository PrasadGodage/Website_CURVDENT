
<div class="content-wrapper"  id="">
    <!-- Content Header (Page header) -->


    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-10">

                <div class="row">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Profile <strong>Information</strong>


                            </h4>
                            <button type="button" class="btn btn-primary btn-xs"  id="editProfileBtn">Edit</button>
                            <ul class="box-controls pull-right">
                                <li><a class="box-btn-close" href="#"></a></li>
                                <li><a class="box-btn-slide rotate-180" href="#"></a></li>	
                                <li><a class="box-btn-fullscreen" href="#"></a></li>
                            </ul>
                        </div>

                        <div class="box-body">
                            
                            <div class="row text-center">

                                <div class="col-sm-4 my-15">
                                    <label class="font-weight-bold">Role:</label><span id="roleInfo"></span> 
                                </div>

                                <div class="col-sm-4 my-15">
                                    <label class="font-weight-bold">Profile Title:</label><span id="profileInfo"></span>
                                </div>
                                <div class="col-sm-4 my-15">
                                    <label class="font-weight-bold">Status:</label> <span id="statusInfo"></span> 
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <!--row-1-->
                <div class="row">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Role <strong>Access</strong>


                            </h4>
                            <button type="button" class="btn btn-primary btn-xs"  id="addProfileRoleBtn">Add</button>
                            <ul class="box-controls pull-right">
                                <li><a class="box-btn-close" href="#"></a></li>
                                <li><a class="box-btn-slide rotate-180" href="#"></a></li>	
                                <li><a class="box-btn-fullscreen" href="#"></a></li>
                            </ul>
                        </div>

                        <div class="box-body">
                        <div id="profileRoleListId"></div>
                            </div>
                    </div>
                    
                </div>
                <!-- row-2 -->
                <div class="row">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title"><strong>Tabs</strong>


                            </h4>
                            <button type="button" class="btn btn-primary btn-xs"  id="addProfileTabBtn">Add</button>
                            <ul class="box-controls pull-right">
                                <li><a class="box-btn-close" href="#"></a></li>
                                <li><a class="box-btn-slide rotate-180" href="#"></a></li>	
                                <li><a class="box-btn-fullscreen" href="#"></a></li>
                            </ul>
                        </div>

                        <div class="box-body">
                        <div id="profileTabListId"></div>
                            </div>
                    </div>
                    
                </div>
                <!-- row-3 -->
                <div class="row">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title"><strong>Activity</strong>


                            </h4>
                            <button type="button" class="btn btn-primary btn-xs"  id="addProfileActivityBtn">Add</button>
                            <ul class="box-controls pull-right">
                                <li><a class="box-btn-close" href="#"></a></li>
                                <li><a class="box-btn-slide rotate-180" href="#"></a></li>	
                                <li><a class="box-btn-fullscreen" href="#"></a></li>
                            </ul>
                        </div>

                        <div class="box-body">
                            <input type="hidden" name="activityId" id="activityId"/>
                        <div id="profileActivityListId"></div>
                            </div>
                    </div>
                    
                </div>
                   <!-- row-4     -->
               
            </div>
            <div class="col-2">

            </div>
            
            <!--side menu col-12-->
        </div>
        
        
    </section>
    <!-- /.content -->
</div>