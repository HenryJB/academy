<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Student */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Students', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="">

    <div class="main-content">
        <div class="container-fluid">
            <div class="panel panel-profile">
                <div class="clearfix">
                    <!-- LEFT COLUMN -->
                    <div class="profile-left">
                        <!-- PROFILE HEADER -->
                        <div class="profile-header">
                            <div class="overlay"></div>
                            <div class="profile-main">
                                <?= Html::img('@web/images/user-medium.png', ['alt'=>'user', 'class'=>'img-circle'])?>
                                <h3 class="name"><?= $model->first_name; ?> <?= $model->last_name; ?></h3>
                                <span class="online-status status-available">Admitted</span>
                            </div>
                            <div class="profile-stat">
                                <div class="row">
                                    <div class="col-md-4 stat-item">
                                        45 <span>Projects</span>
                                    </div>
                                    <div class="col-md-4 stat-item">
                                        15 <span>Awards</span>
                                    </div>
                                    <div class="col-md-4 stat-item">
                                        2174 <span>Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END PROFILE HEADER -->
                        <!-- PROFILE DETAIL -->
                        <div class="profile-detail">
                            <div class="profile-info">
                                <h4 class="heading">Basic Info</h4>
                                <ul class="list-unstyled list-justify">
                                    <li>Birthdate <span><?= date('Y', strtotime($model->date_of_birth)); ?>&nbsp;&nbsp;</span>
                                            <span><?=date('M', strtotime($model->date_of_birth)); ?>&nbsp;&nbsp;</span>
                                        <span>&nbsp;&nbsp;<?= date('d', strtotime($model->date_of_birth)); ?>&nbsp;&nbsp;</span></li>
                                    <li>Mobile <span><?= $model->contact_address; ?></span></li>
                                    <li>Email <span><?= $model->email_address; ?></span></li>
                                    <li>Gender <span><?= $model->gender; ?></span></li>
                                    <li>Country <span><?= $model->country; ?></span></li>
                                </ul>
                            </div>
                            <div class="profile-info">
                                <h4 class="heading">Social</h4>
                                <ul class="list-inline social-icons">
                                    <li><a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#" class="google-plus-bg"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" class="github-bg"><i class="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                            <div class="profile-info">
                                <h4 class="heading">About</h4>
                                <p>Interactively fashion excellent information after distinctive outsourcing.</p>
                            </div>
                            <div class="text-center">
                                <?= Html::a('Edit Profile', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
                                <?= Html::a('Delete', ['delete', 'id' => $model->id], [
                                    'class' => 'btn btn-danger',
                                    'data' => [
                                        'confirm' => 'Are you sure you want to delete this item?',
                                        'method' => 'post',
                                    ],
                                ]) ?>
                            </div>
                        </div>
                        <!-- END PROFILE DETAIL -->
                    </div>
                    <!-- END LEFT COLUMN -->
                    <!-- RIGHT COLUMN -->
                    <div class="profile-right">
                        <h4 class="heading"><?= $model->first_name; ?>'s Awards</h4>
                        <!-- AWARDS -->
                        <div class="awards">
                            <div class="row">
                                <div class="col-md-3 col-sm-6">
                                    <div class="award-item">
                                        <div class="hexagon">
                                            <span class="lnr lnr-sun award-icon"></span>
                                        </div>
                                        <span>Most Bright Idea</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="award-item">
                                        <div class="hexagon">
                                            <span class="lnr lnr-clock award-icon"></span>
                                        </div>
                                        <span>Most On-Time</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="award-item">
                                        <div class="hexagon">
                                            <span class="lnr lnr-magic-wand award-icon"></span>
                                        </div>
                                        <span>Problem Solver</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="award-item">
                                        <div class="hexagon">
                                            <span class="lnr lnr-heart award-icon"></span>
                                        </div>
                                        <span>Most Loved</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <?php
                                    if($model->approval_status != 'not approved'){
                                        Html::a('Approved', ['upda', 'id' => 1], ['class' => 'btn btn-default']);
                                    }
                                    else{
                                        Html::a('Not Approved', ['upda', 'id' => 1], ['class' => 'btn btn-default']);
                                    }
                                ?>
                            </div>
                        </div>
                        <!-- END AWARDS -->
                        <!-- TABBED CONTENT -->
                        <div class="custom-tabs-line tabs-line-bottom left-aligned">
                            <ul class="nav" role="tablist">
                                <li class="active"><a href="#tab-bottom-left1" role="tab" data-toggle="tab">Projects <span class="badge">7</a></li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade in active" id="tab-bottom-left1">
                                <div class="table-responsive">
                                    <table class="table project-table">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Progress</th>
                                            <th>Leader</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><a href="#">Spot Media</a></td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                                        <span>60% Complete</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <?= Html::img('@web/images/user-1.png', ['alt'=>'user', 'class'=>'avatar img-circle'])?>
                                                <a href="#">Michael</a></td>
                                            <td><span class="label label-success">ACTIVE</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">E-Commerce Site</a></td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;">
                                                        <span>33% Complete</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <?= Html::img('@web/images/user-1.png', ['alt'=>'user', 'class'=>'avatar img-circle'])?>
                                                <a href="#">Antonius</a></td>
                                            <td><span class="label label-warning">PENDING</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Project 123GO</a></td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;">
                                                        <span>68% Complete</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <?= Html::img('@web/images/user-1.png', ['alt'=>'user', 'class'=>'avatar img-circle'])?>
                                                <a href="#">Antonius</a></td>
                                            <td><span class="label label-success">ACTIVE</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Wordpress Theme</a></td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                                                        <span>75%</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <?= Html::img('@web/images/user-1.png', ['alt'=>'user', 'class'=>'avatar img-circle'])?>
                                                <a href="#">Michael</a></td>
                                            <td><span class="label label-success">ACTIVE</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Project 123GO</a></td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
                                                        <span>100%</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <?= Html::img('@web/images/user-1.png', ['alt'=>'user', 'class'=>'avatar img-circle'])?>
                                                <a href="#">Antonius</a></td>
                                            <td><span class="label label-default">CLOSED</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Redesign Landing Page</a></td>
                                            <td>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
                                                        <span>100%</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <?= Html::img('@web/images/user-1.png', ['alt'=>'user', 'class'=>'avatar img-circle'])?>
                                                <a href="#">Jason</a></td>
                                            <td><span class="label label-default">CLOSED</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- END TABBED CONTENT -->
                    </div>
                    <!-- END RIGHT COLUMN -->
                </div>
            </div>
        </div>
    </div>

</div>
