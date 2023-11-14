<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">
    <link rel="icon" type="image/x-icon" href=<?= base_url("favicon.svg") ?>>

    <!-- Title Page-->
    <title>YOO Office</title>

    <!-- Fontfaces CSS-->
    <link href=<?= base_url("/template/ca/css/font-face.css") ?> rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/font-awesome-4.7/css/font-awesome.min.css") ?> rel="stylesheet"
        media="all">
    <link href=<?= base_url("/template/ca/vendor/font-awesome-5/css/fontawesome-all.min.css") ?> rel="stylesheet"
        media="all">
    <link href=<?= base_url("/template/ca/vendor/mdi-font/css/material-design-iconic-font.min.css") ?> rel="stylesheet"
        media="all">

    <!-- Bootstrap CSS-->
    <link href=<?= base_url("/template/ca/vendor/bootstrap-4.1/bootstrap.min.css") ?> rel="stylesheet" media="all">

    <!-- Vendor CSS-->
    <link href=<?= base_url("/template/ca/vendor/animsition/animsition.min.css") ?> rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css") ?>
        rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/wow/animate.css") ?> rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/css-hamburgers/hamburgers.min.css") ?> rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/slick/slick.css") ?> rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/select2/select2.min.css") ?> rel="stylesheet" media="all">
    <link href=<?= base_url("/template/ca/vendor/perfect-scrollbar/perfect-scrollbar.css") ?> rel="stylesheet"
        media="all">

    <!-- Main CSS-->
    <link href=<?= base_url("/template/ca/css/theme.css") ?> rel="stylesheet" media="all">

</head>

<body class="animsition">
    <div class="page-wrapper">
        <!-- header  -->
        <?= $this->include("backOffice/layout/header"); ?>
        <!-- end of header -->


        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">
            <!-- content  -->
            <?= $this->renderSection('content'); ?>
            <!-- end of content  -->

            <!-- footer  -->
            <?= $this->include("backOffice/layout/footer"); ?>
            <!-- end of footer  -->
        </div>

    </div>

    <!-- Jquery JS-->
    <script src=<?= base_url("/template/ca/vendor/jquery-3.2.1.min.js") ?>></script>
    <!-- Bootstrap JS-->
    <script src=<?= base_url("/template/ca/vendor/bootstrap-4.1/popper.min.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/bootstrap-4.1/bootstrap.min.js") ?>></script>
    <!-- Vendor JS       -->
    <script src=<?= base_url("/template/ca/vendor/slick/slick.min.js") ?>>
    </script>
    <script src=<?= base_url("/template/ca/vendor/wow/wow.min.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/animsition/animsition.min.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js") ?>>
    </script>
    <script src=<?= base_url("/template/ca/vendor/counter-up/jquery.waypoints.min.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/counter-up/jquery.counterup.min.js") ?>>
    </script>
    <script src=<?= base_url("/template/ca/vendor/circle-progress/circle-progress.min.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/perfect-scrollbar/perfect-scrollbar.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/chartjs/Chart.bundle.min.js") ?>></script>
    <script src=<?= base_url("/template/ca/vendor/select2/select2.min.js") ?>>
    </script>

    <!-- Main JS-->
    <script src=<?= base_url("/template/ca/js/main.js") ?>></script>

</body>

</html>
<!-- end document-->