<!DOCTYPE html>
<html lang="en">

<head>

	<?php
            use yii\helpers\Html;
use yii\helpers\Url;

?>
		<!-- Meta information -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<!-- Title-->
		<title>Student Profile</title>

		<?= Html::cssFIle('@web/css/profile/bootstrap/bootstrap.min.css'); ?>
			<?= Html::cssFIle('@web/css/profile/bootstrap-themes.css'); ?>
				<?= Html::cssFIle('@web/css/profile/style.css'); ?>
					<?= Html::cssFIle('@web/css/profile/styleTheme1.css'); ?>
						<?= Html::cssFIle('@web/css/profile/styleTheme2.css'); ?>
							<?= Html::cssFIle('@web/css/profile/styleTheme3.css'); ?>
								<?= Html::cssFIle('@web/css/profile/styleTheme4.css'); ?>
									<?= Html::cssFIle('@web/assets/6d218c34/css/bootstrap.css'); ?>
										<?= Html::cssFIle('@web/font-awesome/font-awesome.min.css'); ?>
											<?= Html::cssFIle('@web/fonts/fonts.css'); ?>

												<style>
													#upload {
														display: none;
													}
												</style>
</head>

<body>

	<div class="modal fade" id="uploadProject" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Upload Project</h4>
				</div>
				<div class="modal-body">

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>


	<div id="wrapper">
		<?php  if (count($student) > 0): ?>
		<?php $info = $student; ?>
		<?php endif; ?>
		<div id="header">

			<div class="logo-area clearfix">
				<a href="#" class="logo"></a>
			</div>
			<!-- //logo-area-->

			<div class="tools-bar">
				<ul class="nav navbar-nav nav-main-xs">
					<li>
						<a href="#menu" class="icon-toolsbar">
							<i class="fa fa-bars"></i>
						</a>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right tooltip-area">
					<li>
						<a href="#menu-right" data-toggle="tooltip" title="Right Menu" data-container="body" data-placement="left">
							<i class="fa fa-align-right"></i>
						</a>
					</li>
					<li class="hidden-xs hidden-sm">
						<a href="#" class="h-seperate">Help</a>
					</li>
					<li>
						<button class="btn btn-circle btn-header-search">
							<i class="fa fa-search"></i>
						</button>
					</li>
					<li>
						<a href="#" class="nav-collapse avatar-header">
							<img alt="" src="assets/img/avatar.png" class="circle">
							<span class="badge">3</span>
						</a>
					</li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
							<em>
								<strong>Hi</strong>,
								<?= $info->last_name; ?>
							</em>
							<i class="dropdown-icon fa fa-angle-down"></i>
						</a>
						<ul class="dropdown-menu pull-right icon-right arrow">
							<li>
								<a href="#">
									<i class="fa fa-user"></i> Profile</a>
							</li>
							<!-- <li><a href="#"><i class="fa fa-cog"></i> Setting </a></li>
												<li><a href="#"><i class="fa fa-bookmark"></i> Bookmarks</a></li>
												<li><a href="#"><i class="fa fa-money"></i> Make a Deposit</a></li> -->
							<li class="divider"></li>
							<li>
								<a href="http://localhost/delyork/academy/web/students/login">
									<i class="fa fa-sign-out"></i> Signout </a>
							</li>
						</ul>
						<!-- //dropdown-menu-->
					</li>
					<li class="visible-lg">
						<a href="#" class="h-seperate fullscreen" data-toggle="tooltip" title="Full Screen" data-container="body" data-placement="left">
							<i class="fa fa-expand"></i>
						</a>
					</li>
				</ul>
			</div>
			<!-- //tools-bar-->

		</div>
		<!-- //header-->


		<!--
		/////////////////////////////////////////////////////////////////////////
		//////////     SLIDE LEFT CONTENT     //////////
		//////////////////////////////////////////////////////////////////////
		-->
		<div id="nav">
			<div id="nav-scroll">
				<div class="avatar-slide">

					<span class="easy-chart avatar-chart" data-color="theme-inverse" data-percent="69" data-track-color="rgba(255,255,255,0.1)"
					    data-line-width="5" data-size="118">
						<span class="percent"></span>

						<?= Html::img('@web/uploads/students/'.$info->photo, ['alt' => 'user', 'id' => 'uploadPreview', 'class' => 'circle']); ?>

					</span>
					<!-- //avatar-chart-->

					<div class="avatar-detail">
						<p>
							<?= $info->first_name.' '.$info->last_name; ?>
						</p>
						<p>
							<?= $info->state_id.', '.$info->country; ?>
						</p>
						<span>
							<label for="upload">
								<i class="fa fa-plus"></i> change profile
								<input type="file" id="upload" name="upload" onchange="UploadPreview();">
								<input type="hidden" value="<?= $info->id; ?>" id="getid">
							</label>

						</span>
					</div>
					<!-- //avatar-detail-->

					<div class="avatar-link btn-group btn-group-justified">
						<a class="btn" href="profile.html" title="Portfolio">
							<i class="fa fa-briefcase"></i>
						</a>
						<a class="btn" data-toggle="modal" href="#md-notification" title="Notification">
							<i class="fa fa-bell-o"></i>
							<em class="green"></em>
						</a>
						<a class="btn" data-toggle="modal" href="#md-messages" title="Messages">
							<i class="fa fa-envelope-o"></i>
							<em class="active"></em>
						</a>
						<a class="btn" href="#menu-right" title="Contact List">
							<i class="fa fa-book"></i>
						</a>
					</div>
					<!-- //avatar-link-->

				</div>
				<!-- //avatar-slide-->





			</div>
			<!-- //nav-scroller-->
		</div>
		<!-- //nav-->


		<!--
		/////////////////////////////////////////////////////////////////////////
		//////////     TOP SEARCH CONTENT     ///////
		//////////////////////////////////////////////////////////////////////
		-->
		<div class="widget-top-search">
			<span class="icon">
				<a href="#" class="close-header-search">
					<i class="fa fa-times"></i>
				</a>
			</span>
			<form id="top-search">
				<h2>
					<strong>Quick</strong> Search</h2>
				<div class="input-group">
					<input type="text" name="q" placeholder="Find something..." class="form-control" />
					<span class="input-group-btn">
						<button class="btn" type="button" title="With Sound">
							<i class="fa fa-microphone"></i>
						</button>
						<button class="btn" type="button" title="Visual Keyboard">
							<i class="fa fa-keyboard-o"></i>
						</button>
						<button class="btn" type="button" title="Advance Search">
							<i class="fa fa-th"></i>
						</button>
					</span>
				</div>
			</form>
		</div>
		<!-- //widget-top-search-->




		<!--
		/////////////////////////////////////////////////////////////////////////
		//////////     MAIN SHOW CONTENT     //////////
		//////////////////////////////////////////////////////////////////////
		-->
		<div id="main">

			<div id="overview">

				<div class="row">
					<div class="col-sm-9">
						<section class="profile-cover">
							<div class="profile-avatar">
								<div>


								</div>
								<a class="btn btn-theme" title="Add friends">
									<i class="fa fa-file"></i> Admission Status:
									<?= $info->approval_status; ?>
								</a>
								<a class="btn btn-theme-inverse">
									<i class="fa fa-money"></i> Payment Status:
									<?= $info->payment_status; ?>
								</a>
							</div>
							<div class="profile-status">
								<a class="btn btn-theme" title="Add friends">
									<i class="fa fa-money"></i> Pay Tuition Fee </a>
							</div>
						</section>
					</div>
					<!-- //content > row > col-sm-9 -->

					<div class="col-sm-3" style="margin-top:30px !important">
						<section class="profile-about">
							<h3>Purpose for Coming</h3>
							<hr>
							<p>
								<?= $info->reason; ?>
							</p>
						</section>
					</div>
					<!-- //content > row > col-lg-3 -->
				</div>
				<!-- //row-->
			</div>

			<div class="tabbable">
				<ul id="profile-tab" class="nav nav-tabs" data-provide="tabdrop">
					<li>
						<a href="#" id="prevtab" data-change="prev">
							<i class="fa fa-chevron-left"></i>
						</a>
					</li>
					<li>
						<a href="#" id="nexttab" class="change" data-change="next">
							<i class="fa fa-chevron-right"></i>
						</a>
					</li>
					<li class="active">
						<a href="#tab1" data-toggle="tab">Projects Uploaded </a>
					</li>
					<li>
						<a href="#tab2" data-toggle="tab" class="timeline-show">Course Applied</a>
					</li>
					<li>
						<a href="#tab3" data-toggle="tab" class="portfolio-show">Emails</a>
					</li>
					<li>
						<a href="#tab4" data-toggle="tab">Profile</a>
					</li>
				</ul>
				<div class="tab-content row">

					<div class="tab-pane fade in active col-lg-8" id="tab1">
						<?php if (count($projects) > 0): ?>
						<?php foreach ($courses_applied as $course): ?>


						<?php endforeach; ?>
						<?php else:?>
						<div class="alert alert-info">
							<p>
								No projects uploaded yet.
							</p>
						</div>

						<button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#uploadProject" id="uploadProjectBtn"
						    data-href="<?= Yii::$app->request->baseUrl.'/student-projects/create'; ?>">Click To Upload Project</button>
						<?php endif; ?>

					</div>
					<!-- /#tab1-->


					<div class="tab-pane fade col-lg-8" id="tab2">
						<div class="widget-timeline">
							<?php if (count($courses_applied) > 0): ?>
							<?php foreach ($courses_applied as $course): ?>
							<ul>
								<li class="history">
									<span>
										<?= date('Y'); ?>
									</span>
								</li>
								<li class="left">
									<section>
										<div class="mark bgimg" style="background-image: url(<?= Url::to('@web/uploads/courses/'.$course->photo); ?>)"></div>
										<div class="timeline-content">
											<time>
												<i class="fa fa-clock-o"></i>Duration :
												<?=$course->duration; ?>
											</time>
											<h3>
												<?=$course->name; ?>
											</h3>
											<p>
												<?= $course->description; ?>
											</p>
										</div>
									</section>
								</li>



							</ul>
							<?php endforeach; ?>
							<?php endif; ?>
						</div>
					</div>
					<!-- /#tab2-->


					<div class="tab-pane fade col-lg-8" id="tab3">
						<br>
						<!-- box Filter -->
						<!-- <div class="box-filter">
														<a href="#" class="btn btn-inverse active" data-filter="*"><i class="fa fa-th"></i></a>
														<a href="#" class="btn btn-theme " data-filter=".artwork">Artwork</a>
														<a href="#" class="btn btn-theme " data-filter=".photography">Photography</a>
														<a href="#" class="btn btn-theme " data-filter=".webdesign">Web Design</a>
												</div> -->
						<hr>
						<div class="row">
							<!-- box Feed -->
							<div class="box-feed  clearfix">
								<div class="col-sm-4 photography webdesign">
									<img alt="" src="assets/photos_preview/thumbs/1.jpg" class="img-preview">
								</div>
								<div class="col-sm-4 photography">
									<img alt="" src="assets/photos_preview/thumbs/3.jpg" class="img-preview">
								</div>
								<div class="col-sm-4  webdesign">
									<img alt="" src="assets/photos_preview/thumbs/5.jpg" class="img-preview">
								</div>
								<div class="col-sm-4 artwork">
									<img alt="" src="assets/photos_preview/thumbs/7.jpg" class="img-preview">
								</div>
								<div class="col-sm-4 artwork webdesign">
									<img alt="" src="assets/photos_preview/thumbs/9.jpg" class="img-preview">
								</div>
							</div>
							<!-- /box Feed -->
						</div>
						<!-- /row-->
					</div>
					<!-- /#tab3-->


					<div class="tab-pane fade col-lg-8" id="tab4">
						<div class="row">
							<div class="col-md-4 align-lg-center">
								<!-- <img alt="" src="../../web/images/avatar.png" class="circle" style="max-width:120px; border:5px #edece5 solid; margin:25px 0;"> -->
								<!-- <div class="progress progress-shine progress-sm tooltip-in">
																		<!-- <div class="progress-bar bg-warning" aria-valuetransitiongoal="69"></div>
																</div> -->
								<!-- <label class="progress-label">Account Complete</label> -->
							</div>
							<div class="col-md-8">
								<br>
								<h3>
									<strong>Account</strong> Setting</h3>
								<hr>
								<form>

									<div class="form-group row">
										<div class="col-md-6">
											<label class="control-label">First Name</label>
											<input type="text" class="form-control" id="fullname" parsley-required="true" placeholder="Your first name" value="<?= $info->first_name; ?>">
										</div>
										<div class="col-md-6">
											<label class="control-label">Last Name</label>
											<input type="text" class="form-control" placeholder="Your last name" value="<?= $info->last_name; ?>">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label">Email</label>
										<input type="text" class="form-control" id="email_address" parsley-trigger="keyup" parsley-required="true" placeholder=""
										    value="<?= $info->email_address; ?>">
									</div>


									<br>
									<h3>
										<strong>Address</strong> Info</h3>
									<hr>
									<div class="form-group">
										<label class="control-label">Address Line</label>
										<textarea class="form-control" parsley-trigger="keyup" rows="3" placeholder="Enter  your address">
											<?= $info->contact_address; ?>
										</textarea>
									</div>
									<div class="form-group row">
										<div class="col-md-4">
											<label class="control-label">City</label>
											<input class="form-control" parsley-required="true" placeholder="Current city" value="">
										</div>
										<div class="col-md-4">
											<label class="control-label">Country</label>
											<select class="selectpicker form-control">
												<option value="<?= $info->country; ?>">
													<?= $info->country; ?>
												</option>

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
						<!-- /#tab4-->

					</div>
					<div class="col-lg-4">
						<div class="widget-rating row">
							<div class="col-xs-12">
								<div class="well corner-flip flip-gray flip-bg-white bg-palevioletred-darken">
									<div class="row">
										<div class="col-xs-12 col-md-6 text-center">
											<h1 class="rating-num"> Ads</h1>

										</div>

										<!-- end xs-12 -->
									</div>
									<!-- end row -->
								</div>
								<!-- end well-->
							</div>
							<!-- end xs-12 -->
						</div>
						<!-- end widget-rating-->
						<h3>
							<strong>Ads</strong> List </h3>
						<hr>
						<div class="widget-friend">

						</div>
						<hr>
						<div class="tooltip-area">
							<a class="btn btn-inverse" title="more friends" href="#menu-right">
								<i class="fa fa-book"></i>
							</a>
							<button class="btn btn-inverse" title="unfriends">
								<i class="fa fa-trash-o"></i>
							</button>
						</div>
					</div>
					<!-- //content > row > col-lg-4 -->

				</div>
				<!-- //tab-content -->
			</div>

		</div>
		<!-- //main-->



		<!--
		///////////////////////////////////////////////////////////////////
		//////////     MODAL MESSAGES     //////////
		///////////////////////////////////////////////////////////////
		-->
		<!-- <div id="md-messages" class="modal fade md-slideUp bg-theme-inverse" tabindex="-1" data-width="450"> -->
		<div class="modal-header bd-theme-inverse-darken">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
				<i class="fa fa-times"></i>
			</button>
			<h4 class="modal-title">
				<i class="fa fa-inbox"></i> Inbox messages</h4>
		</div>
		<!-- //modal-header-->
		<div class="modal-body" style="padding:0">
			<div class="widget-im">
				<ul>
					<li>
						<section class="thumbnail-in">
							<div class="widget-im-tools tooltip-area pull-right">
								<span>
									<i class="fa fa-paperclip"></i>
								</span>
								<span>
									<i class="fa fa-reply-all"></i>
								</span>
								<span>
									<a href="javascript:void(0)" class="im-delete" data-toggle="tooltip" title="Delete">
										<i class="fa fa-trash-o"></i>
									</a>
								</span>
								<span>
									<time datetime="2013-11-16">1 : 52 am</time>
								</span>
							</div>
							<h4>
								<a href="javascript:void(0)">Edlado Holder</a>
							</h4>
							<div class="im-thumbnail">
								<img alt="" src="assets/img/avatar2.png" />
							</div>
							<label></label>
							<div class="pre-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. </div>
						</section>
						<div class="im-confirm-group">
							<div class=" btn-group btn-group-justified">
								<a class="btn btn-inverse im-confirm" href="javascript:void(0)" data-confirm="yes">YES.</a>
								<a class="btn btn-theme im-confirm" href="javascript:void(0)" data-confirm="no">NO.</a>
							</div>
						</div>
					</li>
					<li>
						<section class="thumbnail-in">
							<div class="widget-im-tools tooltip-area pull-right">
								<span>
									<i class="fa fa-paperclip"></i>
								</span>
								<span>
									<a href="javascript:void(0)" class="im-delete" data-toggle="tooltip" title="Delete">
										<i class="fa fa-trash-o"></i>
									</a>
								</span>
								<span>
									<time datetime="2013-11-16">12 : 00 pm</time>
								</span>
							</div>
							<h4>
								<a href="javascript:void(0)">Laine Franchi</a>
							</h4>
							<div class="im-thumbnail">
								<i class="glyphicon glyphicon-user"></i>
							</div>
							<div class="pre-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. </div>
						</section>
						<div class="im-confirm-group">
							<div class=" btn-group btn-group-justified">
								<a class="btn btn-inverse im-confirm" href="javascript:void(0)" data-confirm="yes">YES.</a>
								<a class="btn btn-theme im-confirm" href="javascript:void(0)" data-confirm="no">NO.</a>
							</div>
						</div>
					</li>
					<li>
						<section class="thumbnail-in">
							<div class="widget-im-tools tooltip-area pull-right">
								<span>
									<a href="javascript:void(0)" class="im-delete" data-toggle="tooltip" title="Delete">
										<i class="fa fa-trash-o"></i>
									</a>
								</span>
								<span>
									<time datetime="2013-11-16">4 : 45 pm</time>
								</span>
							</div>
							<h4>
								<a href="javascript:void(0)">Cinda Collar</a>
							</h4>
							<div class="im-thumbnail">
								<img alt="" src="assets/img/avatar.png" />
							</div>
							<label data-color="theme"></label>
							<div class="pre-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. </div>
						</section>
						<div class="im-confirm-group">
							<div class=" btn-group btn-group-justified">
								<a class="btn btn-inverse im-confirm" href="javascript:void(0)" data-confirm="yes">YES.</a>
								<a class="btn btn-theme im-confirm" href="javascript:void(0)" data-confirm="no">NO.</a>
							</div>
						</div>
					</li>
				</ul>
				<button class="btn btn-inverse btn-block btn-lg" title="See More">
					<i class="fa fa-plus"></i>
				</button>
			</div>
			<!-- //widget-im-->
		</div>
		<!-- //widget-im-->
	</div>
	<!-- //modal-body-->
	</div>
	<!-- //modal-->



	<!--
		//////////////////////////////////////////////////////////////////////////
		//////////     MODAL NOTIFICATION     //////////
		//////////////////////////////////////////////////////////////////////
		-->
	<!-- <div id="md-notification" class="modal fade md-stickTop bg-danger" tabindex="-1" data-width="500"> -->
	<div class="modal-header bd-danger-darken">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
			<i class="fa fa-times"></i>
		</button>
		<h4 class="modal-title">
			<i class="fa fa-bell-o"></i> Notification</h4>
	</div>
	<!-- //modal-header-->
	<div class="modal-body" style="padding:0">
		<div class="widget-im notification">
			<ul>
				<li>
					<section class="thumbnail-in">
						<div class="widget-im-tools tooltip-area pull-right">
							<span>
								<time class="timeago lasted" datetime="2014">when you opened the page</time>
							</span>
							<span>
								<a href="javascript:void(0)" class="im-action" data-toggle="tooltip" data-placement="left" title="Action">
									<i class="fa fa-keyboard-o"></i>
								</a>
							</span>
						</div>
						<h4>Your request approved</h4>
						<div class="im-thumbnail bg-theme-inverse">
							<i class="fa fa-check"></i>
						</div>
						<div class="pre-text">One Button (click to remove this)</div>
					</section>
					<div class="im-confirm-group">
						<div class=" btn-group btn-group-justified">
							<a class="btn btn-inverse im-confirm" href="javascript:void(0)" data-confirm="accept">Accept.</a>
						</div>
					</div>
				</li>
				<li>
					<section class="thumbnail-in">
						<div class="widget-im-tools tooltip-area pull-right">
							<span>
								<time class="timeago" datetime="2013-11-17T14:24:17Z">timeago</time>
							</span>
							<span>
								<a href="javascript:void(0)" class="im-action" data-toggle="tooltip" data-placement="left" title="Action">
									<i class="fa fa-keyboard-o"></i>
								</a>
							</span>
						</div>
						<h4>Dashboard new design!! you want to see now ? </h4>
						<div class="im-thumbnail bg-theme">
							<i class="fa fa-bell-o"></i>
						</div>
						<div class="pre-text">Two Button (with link and click to close this) Lorem ipsum dolor sit amet, consectetur adipisicing elit, </div>
					</section>
					<div class="im-confirm-group">
						<div class=" btn-group btn-group-justified">
							<a class="btn btn-inverse" href="dashboard.html">Go Now.</a>
							<a class="btn btn-theme im-confirm" href="javascript:void(0)" data-confirm="no">Later.</a>
						</div>
					</div>
				</li>
				<li>
					<section class="thumbnail-in">
						<div class="widget-im-tools tooltip-area pull-right">
							<span>
								<time class="timeago" datetime="2013-11-17T01:24:17Z">timeago</time>
							</span>
							<span>
								<a href="javascript:void(0)" class="im-action" data-toggle="tooltip" data-placement="left" title="Action">
									<i class="fa fa-keyboard-o"></i>
								</a>
							</span>
						</div>
						<h4>Error 404
							<small>( File not found )</small>
						</h4>
						<div class="im-thumbnail bg-warning">
							<i class="fa fa-exclamation-triangle"></i>
						</div>
						<div class="pre-text">Two Button (click to action and remove) </div>
					</section>
					<div class="im-confirm-group">
						<div class=" btn-group btn-group-justified">
							<a class="btn btn-inverse im-confirm" href="javascript:void(0)" data-confirm="accept">Accept.</a>
							<a class="btn btn-theme im-confirm" href="javascript:void(0)" data-confirm="actionNow">Fixed now.</a>
						</div>
					</div>
				</li>
				<li>
					<section class="thumbnail-in">
						<div class="widget-im-tools tooltip-area pull-right">
							<span>
								<time class="timeago" datetime="2013-09-17T09:24:17Z">timeago</time>
							</span>
							<span>
								<a href="javascript:void(0)" class="im-action" data-toggle="tooltip" data-placement="left" title="Action">
									<i class="fa fa-keyboard-o"></i>
								</a>
							</span>
						</div>
						<h4>Upgrade Premium ?</h4>
						<div class="im-thumbnail bg-inverse">
							<i class="fa fa-cogs"></i>
						</div>
						<div class="pre-text"> Three button (test action) </div>
					</section>
					<div class="im-confirm-group">
						<div class=" btn-group btn-group-justified">
							<a class="btn btn-inverse im-confirm" href="javascript:void(0)" data-confirm="actionNow">Now.</a>
							<a class="btn btn-theme im-confirm" href="javascript:void(0)" data-confirm="no">Later.</a>
							<a class="btn btn-danger im-confirm" href="javascript:void(0)" data-confirm="yes">Delete.</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- //widget-im-->
	</div>
	<!-- //widget-im-->
	</div>
	<!-- //modal-body-->
	</div>
	<!-- //modal-->



	<!--
		//////////////////////////////////////////////////////////////
		//////////     LEFT NAV MENU     //////////
		///////////////////////////////////////////////////////////
		-->
	<!-- <nav id="menu">
				<ul>
						<li><span><i class="icon  fa fa-laptop"></i> Dashboard</span>
								<ul>
										<li><a href="dashboard.html"><i class="icon  fa fa-rocket"></i> First Design </a></li>
										<li><a href="dashboard2.html"><i class="icon  fa fa-th"></i> Dashboard New </a></li>
								</ul>
						</li>
						<li><a href="front/index.html"><i class="icon  fa fa-rocket"></i> Front End </a></li>
						<li><span><i class="icon  fa fa-th-list"></i> Layout</span>
								<ul>
										<li class="Label label-lg">Main Layout</li>
										<li><a href="alwayMenu.html"> Alway Left  Menu </a></li>
										<li><a href="hideUserPanel.html"> Hide User Panel </a></li>
										<li><a href="hideUserPanelIn.html"> Show & Hide</a></li>
										<li class="Label label-lg">Other Layout</li>
										<li><a href="topMenu.html"> Top Menu</a></li>
										<li><a href="footerShow.html"> Footer Show</a></li>
										<li><a href="footerMenu.html"> Footer with menu</a></li>
								</ul>
						</li>
						<li><a href="mailBox.html"><i class="icon  fa fa-inbox"></i> Mail</a></li>
						<li><span><i class="icon  fa fa-briefcase"></i> UI Element</span>
								<ul>
										<li><a href="ui.html"> UI </a></li>
										<li><a href="ui_button.html"> Button </a></li>
										<li><a href="ui_icon.html"> Fonts Icon</a></li>
										<li><a href="ui_slide.html"> Slide</a></li>
										<li><a href="ui_panel.html"> Panel</a></li>
										<li><a href="ui_alert.html"> Alert</a></li>
										<li><a href="ui_typography.html"> Typography</a></li>
										<li><a href="ui_nestable.html"> Nestable</a></li>
								</ul>
						</li>
						<li><span><i class="icon  fa fa-bar-chart-o"></i> Chart </span>
								<ul>
										<li><a href="chartFlot.html"> Flot Chart</a></li>
										<li><a href="chartMorris.html"> Morris Chart</a></li>
										<li><a href="chartOther.html"> Other Chart</a></li>
								</ul>
						</li>
						<li><a href="calendar.html"><i class="icon  fa fa-calendar-o"></i> Calendar </a></li>
						<li><span><i class="icon  fa fa-align-right"></i>Off  Canvas  Menu</span>
								<ul>
										<li><a href="menu.html"> Position </a></li>
										<li><a href="menuOpen.html"> Touch to open</a></li>
										<li><a href="menuVertical.html"> Vertical Level</a></li>
										<li><span> Unlimited Level </span>
												<ul>
														<li><a href="#"> Level 3 </a></li>
														<li><a href="#"> Level 3 </a></li>
														<li><span> Level 4</span>
																<ul>
																		<li><a href="#"> Level 4 </a></li>
																		<li><a href="#"> Level 4 </a></li>
																</ul>
														</li>
												</ul>
										</li>
								</ul>
						</li>
						<li><span><i class="icon  fa fa-clipboard"></i> From</span>
								<ul>
										<li><a href="form.html">Form Basic</a></li>
										<li><a href="formComponents.html">Form Components</a></li>
										<li><a href="formValidate.html">Form Validate</a></li>
										<li><a href="formWizard.html">Form Wizard</a></li>
										<li><a href="formMutiselect.html">Form Mutiseletion</a></li>
										<li><a href="form_x_edit.html">Form x-edit</a></li>
										<li><a href="drop_upload.html">Drop Upload</a></li>
								</ul>
						</li>
						<li><a href="fileManager.html"><i class="icon  fa fa-file-text"></i> File Manager </a></li>
						<li><span><i class="icon  fa fa-fire"></i> Table</span>
								<ul>
										<li><a href="table.html">Table Basic</a></li>
										<li><a href="tableResponsive.html">Table Responsive</a></li>
										<li><a href="tableDynamic.html">Data Table</a></li>
								</ul>
						</li>
						<li><span><i class="icon  fa fa-folder-open-o"></i> Other Page</span>
								<ul>
										<li><a href="login.html"> login </a></li>
										<li><a href="lockscreen.html"> Lockscreen </a></li>
										<li><a href="images_manager.html"> Images Manager</a></li>
										<li><a href="gallery.html"> Gallery</a></li>
										<li><a href="timeline.html"> Timeline</a></li>
										<li><a href="profile.html"> Profile</a></li>
										<li><a href="blankPage.html"> Blank Page</a></li>
										<li><a href="page_invoice.html"> Invoice</a></li>
										<li><a href="page_search.html"> Search result</a></li>
										<li><a href="pages_pricing.html"> Pricing Table</a></li>
										<li><a href="register.html"> Register</a></li>
										<li><a href="page_chat.html"> Full Chat</a></li>
								</ul>
						</li>
						<li><a href="map.html"><i class="icon  fa fa-map-marker"></i> Maps</a></li>
						<li><a href="404.html"><i class="icon  fa fa-exclamation-triangle"></i> Error Pages</a></li>
						<li><a href="siteMap.html"><i class="icon  fa fa-sitemap"></i>Site Map</a></li>
				</ul>
		</nav> -->
	<!-- //nav left menu-->



	<!--
		/////////////////////////////////////////////////////////////////
		//////////     RIGHT NAV MENU     //////////
		/////////////////////////////////////////////////////////////
		-->
	<!-- <nav id="menu-right"> -->
	<ul>
		<li class="Label label-lg">Theme color</li>
		<li>
			<span class="text-center">
				<div id="style1" class="color-themes col1"></div>
				<div id="style2" class="color-themes col2"></div>
				<div id="style3" class="color-themes col3"></div>
				<div id="style4" class="color-themes col4"></div>
				<div id="none" class="color-themes col5"></div>
			</span>
		</li>
		<li class="Label label-lg">Contact Group</li>
		<li data-counter-color="theme">
			<span>
				<i class="icon fa fa-smile-o"></i> Friends</span>
			<ul>
				<li class="Label">A</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/1.jpg" /> Alexa
						<small>Johnson</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="busy">
						<img alt="" src="assets/photos_preview/50/people/2.jpg" /> Alexander
						<small>Brown</small>
					</a>
				</li>
				<li class="Label">F</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/3.jpg" /> Fred
						<small>Smith</small>
					</a>
				</li>
				<li class="Label">J</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/4.jpg" /> James
						<small>Miller</small>
					</a>
				</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/5.jpg" /> Jefferson
						<small>Jackson</small>
					</a>
				</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/6.jpg" /> Jordan
						<small>Lee</small>
					</a>
				</li>
				<li class="Label">K</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/7.jpg" /> Kim
						<small>Adams</small>
					</a>
				</li>
				<li class="Label">M</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/8.jpg" /> Meagan
						<small>Miller</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="busy">
						<img alt="" src="assets/photos_preview/50/people/9.jpg" /> Melissa
						<small>Johnson</small>
					</a>
				</li>
				<li class="Label">N</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/10.jpg" /> Nicole
						<small>Smith</small>
					</a>
				</li>
				<li class="Label">S</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/1.jpg" /> Samantha
						<small>Harris</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="block">
						<img alt="" src="assets/photos_preview/50/people/2.jpg" /> Scott
						<small>Thompson</small>
					</a>
				</li>
			</ul>
		</li>
		<li>
			<span>
				<i class="icon  fa fa-home"></i> Family</span>
			<ul>
				<li class="Label">A</li>
				<li class="img">
					<a href="#" class="busy">
						<img alt="" src="assets/photos_preview/50/people/3.jpg" /> Adam
						<small>White</small>
					</a>
				</li>
				<li class="Label">B</li>
				<li class="img">
					<a href="#" class="busy">
						<img alt="" src="assets/photos_preview/50/people/4.jpg" /> Ben
						<small>Robinson</small>
					</a>
				</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/5.jpg" /> Bruce
						<small>Lee</small>
					</a>
				</li>
				<li class="Label">E</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/6.jpg" /> Eddie
						<small>Williams</small>
					</a>
				</li>
				<li class="Label">J</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/7.jpg" /> Jack
						<small>Johnson</small>
					</a>
				</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/8.jpg" /> John
						<small>Jackman</small>
					</a>
				</li>
				<li class="Label">M</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/9.jpg" /> Martina
						<small>Thompson</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="busy">
						<img alt="" src="assets/photos_preview/50/people/10.jpg" /> Matthew
						<small>Watson</small>
					</a>
				</li>
				<li class="Label">O</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/1.jpg" /> Olivia
						<small>Taylor</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/2.jpg" /> Owen
						<small>Wilson</small>
					</a>
				</li>
			</ul>
		</li>
		<li data-counter-color="theme-inverse">
			<span>
				<i class="icon  fa fa-briefcase"></i> Work colleagues</span>
			<ul>
				<li class="Label">D</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/3.jpg" /> David
						<small>Harris</small>
					</a>
				</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/4.jpg" /> Dennis
						<small>King</small>
					</a>
				</li>
				<li class="Label">E</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/5.jpg" /> Eliza
						<small>Walker</small>
					</a>
				</li>
				<li class="Label">L</li>
				<li class="img">
					<a href="#" class="busy">
						<img alt="" src="assets/photos_preview/50/people/6.jpg" /> Larry
						<small>Turner</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/7.jpg" /> Lisa
						<br />
						<small>Wilson</small>
					</a>
				</li>
				<li class="Label">M</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/8.jpg" /> Michael
						<small>Jordan</small>
					</a>
				</li>
				<li class="Label">R</li>
				<li class="img">
					<a href="#">
						<img alt="" src="assets/photos_preview/50/people/9.jpg" /> Rachelle
						<small>Cooper</small>
					</a>
				</li>
				<li class="img">
					<a href="#" class="online">
						<img alt="" src="assets/photos_preview/50/people/10.jpg" /> Rick
						<small>James</small>
					</a>
				</li>
			</ul>
		</li>
		<li class="Label label-lg">Total week Earnings</li>
		<li>
			<span>
				<i class="icon  fa fa-bar-chart-o"></i> See This week</span>
			<ul>
				<li class="Label">themeforest</li>
				<li>
					<span>
						<i class="label label-warning pull-right">HTML</i> Earnings $395 </span>
				</li>
				<li>
					<span> Earnings $485 </span>
				</li>
				<li>
					<span>
						<i class="label label-info pull-right">Wordpress</i> Earnings $1,589 </span>
				</li>
				<li class="Label">codecanyon </li>
				<li>
					<span>
						<i class="label label-danger pull-right">Item 6537086</i> Earnings $897</span>
				</li>
				<li>
					<span>Sunday Earnings $395</span>
				</li>
				<li class="Label">Other</li>
				<li>
					<span>
						<i class="label label-success  pull-right">up 35%</i> Total Earnings $5,025</span>
				</li>
			</ul>
		</li>
		<li>
			<span>
				<div class="widget-mini-chart align-xs-right">
					<div class="pull-left">
						<div class="sparkline mini-chart" data-type="bar" data-color="warning" data-bar-width="10" data-height="45">2,3,7,5,4,6,6,3</div>
					</div>
					<p>This week Earnings</p>
					<h4>$11,987</h4>
				</div>
				<!-- //widget-mini-chart -->
			</span>
		</li>
		<li class="Label label-lg">Processing </li>
		<li>
			<span>
				<p>Server Processing</p>
				<div class="progress progress-dark progress-stripes progress-xs">
					<div class="progress-bar bg-danger" aria-valuetransitiongoal="37"></div>
				</div>
				<label class="progress-label">Today , CPU 37%</label>
				<!-- //progress-->
				<div class="progress progress-dark progress-xs">
					<div class="progress-bar bg-warning" aria-valuetransitiongoal="23"></div>
				</div>
				<label class="progress-label lasted">Today , Server load 22.85%</label>
				<!-- //progress-->
			</span>
		</li>
		<li class="Label label-lg">Quick Friends Chat </li>
		<li class="img">
			<a href="#" class="online">
				<img alt="" src="assets/photos_preview/50/people/1.jpg" /> Olivia
				<small>Taylor</small>
			</a>
		</li>
		<li class="img">
			<a href="#" class="online">
				<img alt="" src="assets/photos_preview/50/people/2.jpg" /> Owen
				<small>Wilson</small>
			</a>
		</li>
		<li class="img">
			<a href="#">
				<img alt="" src="assets/photos_preview/50/people/8.jpg" /> Meagan
				<small>Miller</small>
			</a>
		</li>
		<li class="img">
			<a href="#" class="busy">
				<img alt="" src="assets/photos_preview/50/people/9.jpg" /> Melissa
				<small>Johnson</small>
			</a>
		</li>
		<li class="img">
			<a href="#" class="online">
				<img alt="" src="assets/photos_preview/50/people/5.jpg" /> Samantha
				<small>Harris</small>
			</a>
		</li>
		<li class="Label label-lg">visitors Real Time</li>
		<li>
			<span>
				<div class="widget-chart">
					<div id="realtimeChart" class="demo-placeholder" style="height:150px"></div>
					<div id="realtimeChartCount" class="align-lg-center">
						<span>0</span> visitors on site </div>
				</div>
				<!-- // widget-chart -->
			</span>
		</li>
	</ul>
	</nav>
	<!-- //nav right menu-->


	</div>
	<!-- //wrapper-->


	<!--
////////////////////////////////////////////////////////////////////////
//////////     JAVASCRIPT  LIBRARY     //////////
/////////////////////////////////////////////////////////////////////
-->



	<?= Html::jsFIle('@web/js/profile/jquery.min.js'); ?>
		<?= Html::jsFIle('@web/js/profile/jquery.ui.min.js'); ?>
			<?= Html::jsFIle('@web/js/profile/plugins/bootstrap/bootstrap.min.js'); ?>
				<?= Html::jsFIle('@web/js/profile/modernizr/modernizr.js'); ?>
					<?= Html::jsFIle('@web/js/profile/plugins/mmenu/jquery.mmenu.js'); ?>
						<?= Html::jsFIle('@web/js/profile/styleswitch.js'); ?>
							<!-- <?= Html::jsFIle('@web/js/profile/myscript.js'); ?> -->
							<?= Html::jsFIle('@web/js/profile/plugins/form/form.js'); ?>
								<?= Html::jsFIle('@web/js/profile/plugins/datetime/datetime.js'); ?>
									<?= Html::jsFIle('@web/js/profile/plugins/chart/chart.js'); ?>
										<?= Html::jsFIle('@web/js/profile/plugins/pluginsForBS/pluginsForBS.js'); ?>
											<?= Html::jsFIle('@web/js/profile/plugins/miscellaneous/miscellaneous.js'); ?>
												<?= Html::jsFIle('@web/js/profile/caplet.custom.js'); ?>
												<?= Html::jsFIle('@web/js/profile/profile.js'); ?>

													<?= Html::jsFIle('@web/js/custom-script.js'); ?>
														<script>
															function UploadPreview() {
																var oFReader = new FileReader();
																var id = $('#getid').val();
																alert(id);
																oFReader.readAsDataURL(document.getElementById("upload").files[0]);
																oFReader.onload = function (oFREvent) {
																	document.getElementById("uploadPreview").src = oFREvent.target.result;
																	//document.getElementById("uploadPreview1").src = oFREvent.target.result;
																	$.ajax({
																		data: {
																			id: id,
																			img: oFREvent.target.result
																		},
																		url: 'change-picture',
																		method: 'POST',
																		success: function (data) {
																			alert(data);
																		},
																		error: {}
																	});
																};
															}

															$('#projectOpen').on('click', function () {

																//alert('click');
																var dataURL = $(this).attr('data-href');
																//alert(dataURL);
																// $('.modal-body').load(dataURL,function(){
																$('#projectModal').modal({
																	show: true
																});
																// });
															});
															//});
														</script>


</body>

</html>
