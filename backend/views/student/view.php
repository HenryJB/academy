<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Student */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Students', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<style>
    .img-circle{
        height: 80px;
        width: 80px;
    }
    #upload{
        display: none;
    }
</style>
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
                                <?php
                                $path = '@web/uploads/student/'.$model->photo;
                                ?>
                                <?= Html::img($path, ['alt'=>'user','id'=>'uploadPreview', 'class'=>'img-circle'])?>
                                <br><br>
                                <label for="upload">
                                    <i class="fa fa-plus"></i> change profile
                                    <input type="file" id="upload" name="upload" onchange="UploadPreview1();" >
                                </label>
                                <input type="text" id="userid" value="<?= $model->id; ?>" hidden >
                                <h3 class="name"><?= $model->first_name; ?> <?= $model->last_name; ?></h3>
                                <span class="online-status status-available">Admitted</span>
                            </div>
                            <!-- <div class="profile-stat">
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
                            </div> -->
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
                        <h4 class="heading">Projects Uploaded <span class="badge"><?php echo count($projects);?> </h4>
                        <!-- AWARDS -->

                        <!-- END AWARDS -->
                        <!-- TABBED CONTENT -->
                        <div class="custom-tabs-line tabs-line-bottom left-aligned">
                          
                        </div>
                        <div class="tab-content"  style="height: 600px;">
                            <div class="tab-pane fade in active" id="tab-bottom-left1">
                                <div class="table-responsive">
                                    <table class="table project-table">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Decription</th>
                                            <th>Type</th>
                                        </tr>
                                        </thead>
                                        <tbody >
                                        <?php if(count($projects)>0):?>

                                            <?php if(count($projects)==1):?>
                                                <tr>
                                                    <td><a href="#"><?php echo $project->title; ?></a></td>
                                                    <td>
                                                        <span><?php echo $project->date; ?></span>
                                                    </td>
                                                    <td>
                                                        <a href="#"><?php echo $project->description; ?></a></td>
                                                    <td><span class="label label-success"><?=$project->type?></span></td>
                                                </tr>

                                            <?php elseif(count($projects)>1):?>
                                                <?php foreach($projects as $project): ?>
                                                    <tr>
                                                        <td><a href="#"><?php echo $project->title; ?></a></td>
                                                        <td>
                                                            <span><?php echo $project->date; ?></span>
                                                        </td>
                                                        <td>
                                                            <a href="#"><?php echo $project->description; ?></a></td>
                                                        <td><span class="label label-success"><?=$project->type?></span></td>
                                                    </tr>

                                                <?php endforeach; ?>

                                            <?php endif; ?>
                                        <?php endif; ?>

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

<script>

</script>
