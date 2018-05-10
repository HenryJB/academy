<?php

/* @var $this yii\web\View */
use yii\helpers\Html;

$this->title = 'Del-York Creative Agency';
?>
<div class="site-index">

  <section id="banner">
		<div class="intro-box">
			<div class="welcome">

			</div>
			<div class="company-name">Del-York</div>

		  <div class="motto"> we are a
				<span style="display:inline !important; width:400px !important; overflow:hidden" class="typer"   id="main" data-words="creative agency"> </span>
				 <span style="display:inline !important; width:400px !important; overflow:hidden" class="cursor" data-owner="main"> </span>

			</div>

		</div>


		<!-- <p class="typer power os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.4s" id="main" data-words="Disruptive thinkers, Excellent storytellers, limitless creativity, yuppifying, optimistic in approach, resilient, kinetic"
				data-colors="#dad7d7" data-delay="180" data-deleteDelay="1">
			<span class="cursor" data-owner="main"></span>

		</p> -->
		<div id="home-container" class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

					<span class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s">Scroll Down</span>
					<span>



					</span>
					<!-- <a href="#agency" data-scroll class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s"><i class="fa fa-angle-down fa-2x" aria-hidden="true"></i></a> -->
				</div>
			</div>
		</div>
	</section>

	<section id="agency">
		<div class="container">
			<div class="row">
        <?php if (count($aboutModel) > 0): ?>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <?=Html::img('img/about.png', ['class' => 'os-animation',  'data-os-animation' => 'zoomIn', 'data-os-animation-delay' => '0.3s',  'align' => 'left']); ?>
					<!-- <img src="img/about.png" alt="" id="" data-os-animation="zoomIn" data-os-animation-delay="0.3s"  align="left" width="1400px" height="auto" /> -->
					<div id="skew-filler-box" class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="" >
						<img src="img/scroller-about.jpg" />
					</div>

				</div>

				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
					<br />
					<br />
					<article class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s">

						<h4><?= $aboutModel->title; ?></h4>
              <?=  $aboutModel->body; ?>



					</article>
				</div>
        <?php endif; ?>
			</div>
		</div>
	</section>
  <!-- Agency -->

  <section id="features" style="padding-left:60px;">
  <div class="container-fluid">
  	<div class="row">

  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">

  <article class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s">
  	<h3 style="text-align:left">Services</h3>
  	<div class="innersmall">

  		<div class="panel-group" id="accordion">
        <?php if (count($services) > 0):?>

            <?php $c = 1; ?>
            <?php foreach ($services as $service):?>

        			<div class="panel panel-default">
        				<div class="panel-heading">
        					<h4 data-toggle="collapse" data-parent="#accordion" href="#collapse<?=$c; ?>" class="panel-title expand">
        							<div class="right-arrow pull-right">+</div>
        						<a href="#"><?= $service->title; ?></a>
        					</h4>
        				</div>
        				<div id="collapse<?= $c; ?>" class="panel-collapse collapse">
        					<div class="panel-body">
                    <?=html_entity_decode($service->content); ?>
        					</div>
        				</div>
        			</div>
              <?php ++$c; ?>
            <?php endforeach; ?>
          <?php endif; ?>

   </div>
   <!-- new tab -->


  		</div>

  	</article>

  </div>
      <div class="col-lg-8 col-md-6 col-sm-6 col-xs-12">
        <img src="img/services1.png" alt="" class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s" width="600" height="651" align="right"/>
          <div class="col-lg-12">
              <div id="scroll-box"  class="os-animation" data-os-animation="slideIn" data-os-animation-delay="" >
                <img src="img/scroller-services.jpg" class="os-animation" />
              </div>
          </div>
      </div>
  			</div>
  		</div>
  </section>
  <!-- features -->


  <section id="client">
        <div class="container">
            <div class="row">
                <h3 class="text-center">Clients</h3>
                <div class="col-lg-12  col-md-12 col-sm-12 col-xs-12">
                    <!-- Single clients -->
                    <?php if (count($clients) > 0):?>

                        <?php $c = 1; ?>
                        <?php foreach ($clients as $client):?>
                      <div class="col-lg-2 col-xs-12 col-md-12 col-sm-12 client-logo">
                        <a href="#">
                            <?= Html::img('uploads/clients/'.$client->logo, ['']); ?>
                        </a>
                    </div>
                    <?php ++$c; ?>
                  <?php endforeach; ?>
                <?php endif; ?>
                </div>
            </div>
        </div>

  </section>


  <!-- <section id="newblog">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<h2 class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s"> BLOG</h2>
				 <img src="img/b.png" alt="" class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s"/>
					<h3 class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay="0.4s">BLOG</h3>
				</div>
			</div>
			<div class="row">
        <?php if (count($blogs) > 0) : ?>
          <?php foreach ($blogs as $blog): ?>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<article class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.5s">
						<a href="#"><?=Html::img('img/'.$blog->photo, ['alt' => '']); ?></a>
						<a href="#"><h4><?=$blog->title; ?></h4></a>
						<p class="innersmall"><?=$blog->post; ?></p>
					</article>
				</div>
      <?php endforeach; ?>
    <?php endif; ?>
			</div>
		</div>
	</section> -->


  <section class="no-padding wow fadeIn" id="portfolios">
    <div class="container">
      <div class="row">
        <h3>Portfolios</h3>
        <div class="container-fluid no-padding">
          <div class="row no-margin">
            <div class="filter-content overflow-hidden">
              <ul class="portfolio-grid work-4col hover-option2">
                <li class="grid-sizer"></li>
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-13.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Herbal Beauty Salon</span>
                              <p class="text-white text-uppercase text-extra-small">Branding and Brochure</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->

                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-15.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Pixflow Studio</span>
                              <p class="text-white text-uppercase text-extra-small">Branding and Brochure</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-18.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Kaya Skin Care</span>
                              <p class="text-white text-uppercase text-extra-small">Branding and Identity</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-21.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Third Eye Glasses</span>
                              <p class="text-white text-uppercase text-extra-small">Logo and Identity</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-16.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Rubber Studio</span>
                              <p class="text-white text-uppercase text-extra-small">Branding and Brochure</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-17.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">RedDot Media</span>
                              <p class="text-white text-uppercase text-extra-small">Branding and Identity</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-20.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Black and White</span>
                              <p class="text-white text-uppercase text-extra-small">Branding and Brochure</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-22.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Banana Design</span>
                              <p class="text-white text-uppercase text-extra-small">Logo and Identity</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-19.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Design Blast</span>
                              <p class="text-white text-uppercase text-extra-small">Web and Photography</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
                <!-- start portfolio item -->
                <li class="grid-item wow fadeInUp">
                  <a href="detail_portfolio.html">
                    <figure>
                      <div class="portfolio-img bg-deep-pink">
                        <img src="img/mansory/masonary-img-14.jpg" alt="" />
                      </div>
                      <figcaption>
                        <div class="portfolio-hover-main text-left">
                          <div class="portfolio-hover-box vertical-align-bottom">
                            <div class="portfolio-hover-content position-relative last-paragraph-no-margin">
                              <div class="bg-black margin-six-bottom separator-line-horrizontal-medium-light2"></div>
                              <span class="line-height-normal alt-font text-white text-uppercase margin-one-half-bottom display-block font-weight-600">Kaya Skin Care</span>
                              <p class="text-white text-uppercase text-extra-small">Logo and Identity</p>
                            </div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <!-- end portfolio item -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- <section id="ourteam"> -->
    <div class="container">
      <!-- <div class="row">

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s">OUR TEAM</h2>
          <img src="img/t.png" alt="" class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s" />
          <h3 class="os-animation" data-os-animation="fadeIn" data-os-animation-delay="0.4s">sales long tail influencer pitch release niche market.</h3>
        </div>
      </div>
     -->
      <div class="row">
        <!-- team -->
        <div class="jarallax team" id="team">
          <div class="team-dot">
            <div class="container">
              <div class="team-heading">
                <h3>Meet Our Team</h3>
              </div>
              <div class="agileits-team-grids">
                <div class="col-md-3 agileits-team-grid">
                  <div class="team-info">
                    <img src="img/team/linus.jpg" alt="">
                    <div class="team-caption">
                      <h4>Mr Linus Idahosa</h4>
                      <p>CEO/President</p>
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 agileits-team-grid">
                  <div class="team-info">
                    <img src="img/team/killian.jpg" alt="">
                    <div class="team-caption">
                      <h4>Killian Mayua</h4>
                      <p>Chief Strategy Officer</p>
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 agileits-team-grid">
                  <div class="team-info">
                    <img src="img/team/emma.jpg" alt="">
                    <div class="team-caption">
                      <h4>Emmanuel Idahosa </h4>
                      <p>Research Officer</p>
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 agileits-team-grid">
                  <div class="team-info">
                    <img src="img/team/david.jpg" alt="">
                    <div class="team-caption">
                      <h4>David  Nnaji</h4>
                      <p>Director Of Operations</p>
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //team -->
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s">WE'D LOVE TO HEAR ABOUT YOUR PROJECT.</h2>
          <img src="img/c.png" alt="" class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.3s" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <form class="os-animation" data-os-animation="zoomIn" data-os-animation-delay="0.4s">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="name" placeholder="Email" />
            <input type="text" name="name" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  </section>


  <div id="google-maps" class="wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s"></div>

</div>
