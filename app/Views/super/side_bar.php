<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
    <!-- sidebar-->
    <section class="sidebar">

        <!-- sidebar menu-->
        <ul class="sidebar-menu" data-widget="tree">

            <li class="header nav-small-cap">PERSONAL</li>
            <li>
                <a href="<?php echo base_url('super/superDashboard'); ?>">
                    <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                </a>
            </li>

            <li class="treeview">
                <a href="#">
                    <i class="fa fa-envelope"></i> <span>Masters</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-right pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu" style="display: none;">
                    <li><a href="<?php echo base_url('super/superTab'); ?>"><i class="fa fa-circle-thin"></i>Tab</a></li>
                    <li><a href="<?php echo base_url('super/superActivity'); ?>"><i class="fa fa-circle-thin"></i>Activity</a></li>
                    <li><a href="<?php echo base_url('super/superRole'); ?>"><i class="fa fa-circle-thin"></i>Role Master</a></li>
                    <li><a href="<?php echo base_url('super/superIcon'); ?>"><i class="fa fa-circle-thin"></i>Icon Master</a></li>
                    
                    
                </ul>
            </li>
            
            

            <li>
                <a href="<?php echo base_url('super/superProfile'); ?>">
                    <i class="glyphicon glyphicon-user mr-15"></i> <span>Profile</span>
                </a>
            </li>

            <li class="treeview">
                <a href="#">
                    <i class="fa fa-envelope"></i> <span>Office</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-right pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu" style="display: none;">
                    <li><a href="<?php echo base_url('super/office_type'); ?>"><i class="fa fa-circle-thin"></i>Type</a></li>
                    <li><a href="<?php echo base_url('super/superOfficeBranch'); ?>"><i class="fa fa-circle-thin"></i>Branch</a></li>
                    <li><a href="<?php echo base_url('super/superEmployee'); ?>"><i class="fa fa-circle-thin"></i>Employee</a></li>
                    
                    
                    
                </ul>
            </li>

            <li>
                <a href="<?php echo base_url('super/superCountry'); ?>">
                    <i class="glyphicon glyphicon-user mr-15"></i> <span>Location</span>
                </a>
            </li>
            
    </section>
</aside>

