<?php
use yii\helpers\Html;
use yii\grid\GridView;
/* @var $this yii\web\View */
use academy\assets\ProfileAsset;

ProfileAsset::register($this);
$this->title = 'My Profile page';
?>
<div id="wrapper"  class="profile-page">

  <!--
  /////////////////////////////////////////////////////////////////////////
  //////////     SLIDE LEFT CONTENT     //////////
  //////////////////////////////////////////////////////////////////////
  -->
  <div id="nav">
      <div id="nav-scroll">
          <div class="avatar-slide">

              <span class="easy-chart1 avatar-chart" data-color="theme-inverse" data-percent="69" data-track-color="rgba(255,255,255,0.1)" data-line-width="5" data-size="118">
                                  <label for="upload">
                                      <?= Html::img('@web/images/avatar.png', ['alt'=>'user', 'id'=>'uploadPreview', 'class'=>'circle'])?>
                                      <input type="file" id="upload" name="upload" onchange="UploadPreview();" >
                                  </label>

              </span>
              <!-- //avatar-chart-->

              <div class="avatar-detail">
                  <p><strong>Hi</strong>, Nutprawee</p>
                  <p><a href="#">@ Chaing Mai , TH</a></p>
                  <span>12,110 Sales</span>
                  <span>106 Follower</span>
              </div>
              <!-- //avatar-detail-->
              <div class="avatar-link btn-group btn-group-justified">
                  <a class="btn" href="profile.html"  title="Portfolio"><i class="fa fa-briefcase"></i></a>
                  <a class="btn"  data-toggle="modal" href="#md-notification" title="Notification">
                      <i class="fa fa-bell-o"></i><em class="green"></em>
                  </a>
                  <a class="btn" href="#menu-right" title="Contact List"><i class="fa fa-book"></i></a>
              </div>

              <!-- //avatar-link-->

          </div>
          <!-- //avatar-slide-->
          <div class="widget-collapse dark">
              <header>
                  <a data-toggle="collapse" href="#collapseSetting"><i class="collapse-caret fa fa-angle-up"></i>Check Payment Status </a>
              </header>
              <section class="collapse in" id="collapseSetting">
                  <div class="collapse-boby" style="padding:0">

                      <ul class="widget-slide-setting">
                          <li>
                              <label><span>PAID</span></label>

                          </li>
                      </ul>
                      <!-- //widget-slide-setting-->

                  </div>
                  <!-- //collapse-boby-->

              </section>
              <!-- //collapse-->
          </div>
          <!-- //widget-collapse-->


      </div>
      <!-- //nav-scroller-->
  </div>
  <!-- //nav-->


  <div id="main">

      <div id="overview">
          <div class="row">
              <div class="col-sm-9">
                  <section class="profile-cover">
                      <div class="profile-avatar">
                          <div>
                              <?= Html::img('@web/images/avatar.png', ['alt'=>'user', 'id'=>'uploadPreview1', 'class'=>'circle'])?>
                              <span>Ramyana Chai</span>
                          </div>
                          <span class="alert alert-success">Admitted</span>
                      </div>
                      <div class="profile-status">
                          <a class="btn"> 14,548 <small>Sales</small></a>
                          <a class="btn"> 254 <small> Follower</small></a>
                      </div>
                  </section>
              </div>
              <!-- //content > row > col-sm-9 -->

              <div class="col-sm-3">
                  <section class="profile-about">
                      <h3>About</h3>
                      <hr>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non leo convallis nibh tristique commodo.</p>
                  </section>
              </div>
              <!-- //content > row > col-lg-3 -->
          </div>
          <!-- //row-->
      </div>

      <div class="tabbable">
          <ul id="profile-tab" class="nav nav-tabs" data-provide="tabdrop">
              <li><a href="#" id="prevtab" data-change="prev"><i class="fa fa-chevron-left"></i></a></li>
              <li><a href="#" id="nexttab" class="change" data-change="next"><i class="fa fa-chevron-right"></i></a></li>
              <li class="active"><a href="#tab1" data-toggle="tab">Courses</a></li>
              <li><a href="#tab2" data-toggle="tab" class="timeline-show">Projects</a></li>
              <li><a href="#tab3" data-toggle="tab" class="portfolio-show">Profile</a></li>
              <li><a href="#tab4" data-toggle="tab">Emails</a></li>
          </ul>
          <div class="tab-content row">

                      <div class="tab-pane fade in active col-lg-8" id="tab1">
                          <div class="widget-timeline">
                              <ul>
                                  <li class="history">
                                                                                      <span>
                                                                                              October 2013
                                                                                      </span>
                                  </li>
                                  <li class="right">
                                      <section>
                                          <div class="mark bgimg" style="background-image: url(assets/photos_preview/300/city/1.jpg)"></div>
                                          <div class="timeline-content">
                                              <time><i class="fa fa-clock-o"></i>Today ,10:36am</time>
                                              <h3>Image Mark</h3>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                          </div>
                                      </section>
                                  </li>
                                  <li class="left">

                                      <section>
                                          <div class="mark bg-primary"><i class=" fa fa-trophy"></i></div>
                                          <div class="timeline-content">
                                              <time><i class="fa fa-clock-o"></i>Today ,09:18pm</time>
                                              <h3>Color Mark</h3>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                          </div>
                                      </section>
                                  </li>
                                  <li class="right">
                                      <section>
                                          <div class="mark bg-inverse"><i class="fa fa-paste"></i></div>
                                          <div class="timeline-content">
                                              <time><i class="fa fa-clock-o"></i>Yesterday ,01:18pm</time>
                                              <h3>Icon Mark Right</h3>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                          </div>
                                      </section>
                                  </li>
                                  <li class="left">
                                      <section>
                                          <time><i class="fa fa-clock-o"></i>2 Day ago ,08:49pm</time>
                                          <h3>Image Normal Position</h3>
                                          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                          <img alt="" src="assets/photos_preview/700/nature/1.jpg" />
                                      </section>
                                  </li>
                              </ul>
                          </div>
                      </div>
                              <!-- /#tab1-->

                      <div class="tab-pane fade col-lg-8" id="tab2">
                          <br>
                          <!-- box Filter -->
                          <div class="box-filter">
                              <a href="#" class="btn btn-inverse active" data-filter="*"><i class="fa fa-th"></i></a>
                              <a href="#" class="btn btn-theme " data-filter=".artwork">Artwork</a>
                              <a href="#" class="btn btn-theme " data-filter=".photography">Photography</a>
                              <a href="#" class="btn btn-theme " data-filter=".webdesign">Web Design</a>
                          </div>
                          <hr>

                          <!-- /row-->
                      </div>
                      <!-- /#tab2-->

                      <div class="tab-pane fade col-lg-8" id="tab3">
                          <div class="row">
                              <div class="col-md-4 align-lg-center">
                                  <img alt="" src="assets/img/avatar.png" class="circle" style="max-width:120px; border:5px #edece5 solid; margin:25px 0;">
                                  <div class="progress progress-shine progress-sm tooltip-in">
                                      <div class="progress-bar bg-warning" aria-valuetransitiongoal="69"></div>
                                  </div>
                                  <label class="progress-label">Account Complete</label>
                              </div>
                              <div class="col-md-8">
                                  <br>
                                  <h3><strong>Account</strong> Setting</h3>
                                  <hr>
                                  <form>
                                      <div class="form-group">
                                          <label class="control-label">User name</label>
                                          <input type="text" class="form-control"  parsley-trigger="keyup"  parsley-rangelength="[8,15]"  parsley-required="true" parsley-trigger="keyup" placeholder="8-15 Characters">
                                      </div>
                                      <div class="form-group row">
                                          <div class="col-md-6">
                                              <label class="control-label">Full Name</label>
                                              <input type="text" class="form-control" id="fullname" parsley-required="true" placeholder="Your full name">
                                          </div>
                                          <div class="col-md-6">
                                              <label class="control-label">Last Name</label>
                                              <input type="text" class="form-control"  placeholder="Your last name">
                                          </div>
                                      </div>
                                      <div class="form-group">
                                          <label class="control-label">Password</label>
                                          <input type="password" class="form-control" id="pword"  parsley-trigger="keyup"  parsley-rangelength="[4,8]"  parsley-required="true" placeholder="4-8 Characters">
                                      </div>
                                      <div class="form-group">
                                          <label class="control-label">Confirm Password</label>
                                          <input type="password" class="form-control"  parsley-trigger="keyup"  parsley-equalto="#pword" placeholder="Confirm Password" parsley-error-message="Password don't match" >
                                      </div>

                                      <br>
                                      <h3><strong>Address</strong> Info</h3>
                                      <hr>
                                      <div class="form-group">
                                          <label class="control-label">Address Line</label>
                                          <textarea class="form-control"  parsley-trigger="keyup" rows="3" placeholder="Enter  your address"></textarea>
                                      </div>
                                      <div class="form-group row">
                                          <div class="col-md-4">
                                              <label class="control-label">City</label>
                                              <input class="form-control" parsley-required="true" placeholder="Current city">
                                          </div>
                                          <div class="col-md-4">
                                              <label class="control-label">State</label>
                                              <select  class="selectpicker form-control" multiple>
                                                  <option value="Australia">Australia</option>
                                                  <option value="China">China</option>
                                                  <option value="Japan">Japan</option>
                                                  <option value="Thailand">Thailand</option>
                                                  <option value="United States">United States</option>
                                                  <option value="United Kingdom">United Kingdom</option>
                                              </select>
                                          </div>
                                          <div class="col-md-4">
                                              <label class="control-label">Zip Code</label>
                                              <input type="text" class="form-control" parsley-required="true">
                                          </div>
                                      </div>
                                      <hr>
                                      <div class="form-group">
                                          <button type="button" class="btn btn-theme"> Update Account</button>
                                      </div>
                                  </form>
                              </div>
                              <!-- /row-->
                          </div>
                          <!-- /row-->
                      </div>
                      <!-- /#tab3-->

                      <div class="tab-pane fade col-lg-8 container" id="tab4" style="min-height: 900px;">
                              <div id="mailbox">
                                  <div id="nav-scroll">
                                      <div class="mail-list">
                                          <header>
                                              <h2 class="header-text">inbox </h2>
                                              <div class="mail-seach">
                                                  <input type="text" placeholder="Search Mail" class="form-control" />
                                              </div>
                                              <div class="dropdown pull-right">
                                                  <button class="btn btn-theme dropdown-toggle" data-toggle="dropdown">
                                                      <i class="dropdown-icon fa fa-angle-down"></i>
                                                  </button>
                                                  <ul class="dropdown-menu  pull-right">
                                                      <li><a href="#"> Selete All</a></li>
                                                      <li><a href="#"> Unselete All </a></li>
                                                      <li class="divider"></li>
                                                      <li><a href="#"> Move to trash</a></li>
                                                      <li class="divider"></li>
                                                      <li><a href="#"> Action </a></li>
                                                  </ul>
                                                  <!-- //dropdown-menu-->
                                              </div>
                                              <div class="btn-group">
                                                  <button type="button" class="btn btn-theme btn-transparent"><i class="fa fa-clock-o"></i></button>
                                                  <button type="button" class="btn btn-theme btn-transparent active"><i class="fa fa-inbox"></i></button>
                                                  <button type="button" class="btn btn-theme btn-transparent "><i class="fa fa-check"></i></button>
                                              </div>

                                          </header>
                                          <ul class="mlist">
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite active"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5><a href="#">Edlado Holder</a></h5>
                          <p><strong>Title mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-30 11:20">2013-11-30 11:20</time>
                          <div class="mail-attach"><i class="fa fa-paperclip"></i></div>
                          <label data-color="theme"></label>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Laine Franchi (3)</h5>
                          <p><strong>Title mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-28 08:40">2013-11-28 08:40</time>
                          <label data-color="warning"></label>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite active"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Cinda Collar</h5>
                          <p><strong>Templates mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-28 14:50">2013-11-28 14:50</time>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Cary	 Strickland</h5>
                          <p><strong>Lorem ipsum mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-27">2013-11-27</time>
                          <div class="mail-attach"><i class="fa fa-paperclip"></i></div>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Stephen	 Francis</h5>
                          <p>Title mail message, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-25">2013-11-25</time>
                          <div class="mail-attach"><i class="fa fa-paperclip"></i></div>
                          <label data-color="#E75B8F"></label>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Peter	 Harvey (5)</h5>
                          <p>Title mail message , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-24">2013-11-24</time>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite active"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Terry Kelly</h5>
                          <p>Title mail message, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-22">2013-11-22</time>
                          <div class="mail-attach"><i class="fa fa-paperclip"></i></div>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite active"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Edlado Holder</h5>
                          <p><strong>Title mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-21">2013-11-21</time>
                          <label data-color="green"></label>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Yvonne	 Blake</h5>
                          <p><strong>Title mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-11-20">2013-11-20</time>
                          <div class="mail-attach"><i class="fa fa-paperclip"></i></div>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                              <li>
                                                  <div class="iCheck"  data-style="minimal"  data-color="red"><input type="checkbox"></div>
                                                  <a href="#" class="mail-favourite"><i class=" glyphicon glyphicon-star"></i></a>
                                                  <span>
                          <h5>Edlado Holder(8)</h5>
                          <p><strong>Mail message</strong> , Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <time class="timeago" datetime="2013-08-30 10:10">2013-08-30 11:20</time>
                          <div class="mail-tools">
                            <a href="#" title="reply"><i class="fa fa-reply"></i></a>
                            <a href="#" title="move to trash"><i class="fa fa-trash-o"></i></a>
                          </div>
                        </span>
                                              </li>
                                          </ul>
                                          <footer>
                                              <div class="pull-right">
                                                  <span class="mail-pagination">1-50 of 685</span>
                                                  <ul class="pagination">
                                                      <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                                      <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                                  </ul>
                                              </div>
                                          </footer>
                                      </div>
                                  </div>
                                  <!-- //nav-scroller-->
                              </div>
                              <div id="content"  class="after-mail-box">

                                  <div class="row">

                                      <div class="col-lg-12">
                                          <div class="mail-tools clearfix">
                                              <div class="btn-group pull-left">
                                                  <div class="btn-group">
                                                      <button type="button" class="btn dropdown-toggle" data-color="#f2f2ed" data-fcolor="#a1a1a1" data-toggle="dropdown" data-hover="dropdown"><i class="fa fa-gear"></i></button>
                                                      <ul class="dropdown-menu">
                                                          <li><a href="#">Dropdown link</a></li>
                                                          <li><a href="#">Dropdown link</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div class="btn-group  pull-right ">
                                                  <button type="button" class="btn" data-color="#f2f2ed" data-fcolor="#a1a1a1" title="Prev mail"><i class="fa fa-angle-left"></i></button>
                                                  <button type="button" class="btn" data-color="#f2f2ed" data-fcolor="#a1a1a1" title="Next mail"><i class="fa fa-angle-right"></i></button>
                                                  <button type="button" class="btn btn-inverse  visible-xs mail-collapse" title="Open mailbox"><i class="fa fa-inbox"></i></button>
                                              </div>
                                              <h4 class="hidden-xs">Inbox (1/25)</h4>

                                          </div>
                                          <section class="panel corner-flip">
                                              <header class="panel-heading no-borders bg-lightseagreen">
                                                  <div class="mail-title">
                                                      <h2>RE : Title mail message</h2>
                                                      <section>
                                                          <div class="mail-thumbnail"><img alt="" src="assets/img/avatar2.png" class="circle" /></div>
                                                          <span><strong>Form</strong> <em>Edlado Holder</em> <strong>To</strong> Me , <a href="#">admin@domain.com</a></span>
                                                          <span><i class="fa fa-paperclip"></i> (2 file ,42.3 KB) </span>
                                                          <span><time class="timeago" datetime="2013-11-20">2013-11-20</time></span>
                                                      </section>
                                                  </div>
                                              </header>
                                              <div class="panel-tools fully color bg-lightseagreen-darken" align="right">
                                                  <ul class="tooltip-area">
                                                      <li><a href="javascript:void(0)" class="btn btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                                      <li><a href="javascript:void(0)" class="btn btn-reload" title="Reload"><i class="fa fa-retweet"></i></a></li>
                                                      <li><a href="javascript:void(0)" class="btn btn-close" title="Close"><i class="fa fa-times"></i></a></li>
                                                  </ul>
                                              </div>
                                              <div class="panel-body">
                                                  <div class="btn-toolbar" role="toolbar">
                                                      <div class="btn-group">
                                                          <button type="button" class="btn btn-default" title="Compose"><i class="fa fa-pencil"></i></button>
                                                          <button type="button" class="btn btn-default" title="Reply all"><i class="fa fa-mail-reply"></i></button>
                                                          <button type="button" class="btn btn-default" title="Forward"><i class="fa fa-mail-forward"></i></button>

                                                      </div>
                                                      <div class="btn-group  pull-right">
                                                          <button type="button" class="btn btn-default" title="Move to trash "><i class="fa fa-trash-o"></i></button>
                                                      </div>
                                                  </div>
                                                  <hr>
                                                  <p>Hello, Man</p>
                                                  <p>
                                                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                                                  </p><br>
                                                  <p>Regrads,<br> Zicedemo</p>

                                                  <div class="mail-attach-list">
                                                      <h5>Attachments (2 file ,42.3 KB)</h5>
                                                      <ul>
                                                          <li><span class="label label-danger">HTML</span> index.html (25.1 KB)</li>
                                                          <li><span class="label label-info">ZIP</span> label.zip (17.2 KB)</li>
                                                      </ul>

                                                  </div>
                                              </div>
                                          </section>

                                      </div>
                                      <!-- //content > row > col-lg-12 -->

                                  </div>
                                  <!-- //content > row-->

                              </div>
                          </div>

                      <div class="col-lg-4">
                          <div class="widget-rating row">
                              <div class="col-xs-12">
                                  <div class="well corner-flip flip-gray flip-bg-white ">
                                      <div class="row">
                                          <div class="col-xs-12 col-md-6 text-center">
                                              <a href=""><button class="btn btn-primary btn-lg">Make Payment</button></a>
                                          </div>
                                          <!-- end xs-12 -->
                                      </div>
                                      <!-- end row -->
                                  </div>
                                  <!-- end well-->
                              </div>
                              <!-- end xs-12 -->
                          </div>

                      </div>
                      <!-- //content > row > col-lg-4 -->

          </div>
          <!-- //tab-content -->
      </div>

  </div>

  <!-- //main-->



</div>
