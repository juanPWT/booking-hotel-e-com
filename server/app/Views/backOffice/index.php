<?= $this->extend('backOffice/layout/index'); ?>
<?= $this->section('content'); ?>

<!-- BREADCRUMB-->
<section class="au-breadcrumb2">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="au-breadcrumb-content">
                    <div class="au-breadcrumb-left">
                        <span class="au-breadcrumb-span">You are here:</span>
                        <ul class="list-unstyled list-inline au-breadcrumb__list">
                            <li class="list-inline-item active">
                                <a href="#">Home</a>
                            </li>
                            <li class="list-inline-item seprate">
                                <span>/</span>
                            </li>
                            <li class="list-inline-item">Dashboard</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- END BREADCRUMB-->

<!-- WELCOME-->
<section class="welcome p-t-10">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="title-4">Welcome back
                    <span>John!</span>
                </h1>
                <hr class="line-seprate">
            </div>
        </div>
    </div>
</section>
<!-- END WELCOME-->

<!-- STATISTIC-->
<section class="statistic statistic2">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="statistic__item statistic__item--red">
                    <h2 class="number"><?= $booking ?></h2>
                    <span class="desc">Jumlah Booking</span>
                    <div class="icon">
                        <i class="fa fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="statistic__item statistic__item--green">
                    <h2 class="number"><?= $roomKosong ?></h2>
                    <span class="desc">Room Kosong</span>
                    <div class="icon">
                        <i class="fas  fa-arrow-up"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="statistic__item statistic__item--orange">
                    <h2 class="number"><?= $roomIsi ?></h2>
                    <span class="desc">Room Terisi</span>
                    <div class="icon">
                        <i class="fa fa-minus-square"></i>
                    </div>
                </div>
            </div>


            <div class="col-md-2 col-lg-10">

            </div>

        </div>
    </div>
</section>
<!-- END STATISTIC-->


</script>



<?= $this->endSection(); ?>