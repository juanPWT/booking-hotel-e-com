<?= $this->extend('backOffice/layout/index'); ?>
<?= $this->section('content') ?>


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
                                <a href="#">room</a>
                            </li>
                            <li class="list-inline-item seprate">
                                <span>/</span>
                            </li>
                            <li class="list-inline-item">Data</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- END BREADCRUMB-->

<!-- alert success  -->
<?php 
if (session()->has('success')):
?>
<div class="sufee-alert alert with-close alert-success alert-dismissible fade show m-x-5">
    <span class="badge badge-pill badge-success">Success</span>
    <?= session('success') ?>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>

<?php endif; ?>
<!-- end alert success  -->

<!-- alert error  -->
<?php 
if (session()->has('error')):
?>
<div class="sufee-alert alert with-close alert-danger alert-dismissible fade show m-x-5">
    <span class="badge badge-pill badge-danger">error</span>
    <?= session('error') ?>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>

<?php endif; ?>
<!-- end alert error  -->


<div class="row m-t-10 p-4">
    <!-- filter  -->
    <div class="container">
        <div class="row">
            <!-- Filter Dropdown -->
            <div class="col-md-4 mb-3">
                <select name="type" id="type" class="form-control" onchange="filterRoom(this)">
                    <option value="">Pilih tipe kamar</option>
                    <?php foreach($types as $key => $value): ?>
                    <option value=<?= $value["id"] ?>><?= $value["name"] ?></option>
                    <?php endforeach; ?>
                </select>
            </div>

            <!-- Search Input -->
            <div class="col-md-4 mb-3">
                <div class="input-group">
                    <input type="text" id="search" name="search" placeholder="Cari no room" class="form-control">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" onclick="searchRoom()">
                            <i class="fa fa-search"></i> Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12">

        <!-- DATA TABLE-->
        <div class="table-responsive m-b-40">
            <table class="table table-borderless table-data3">
                <thead>
                    <tr>
                        <td>No</td>
                        <th>no room</th>
                        <th>type room</th>
                        <th>terisi</th>
                        <th>option</th>

                    </tr>
                </thead>
                <tbody>
                    <?php $no = 1 ?>
                    <?php foreach ($room as $key => $value) :?>
                    <tr>
                        <td><?= $no ?></td>
                        <td><?= $value['noRoom'] ?></td>
                        <td><?=  $value['name']  ?></td>
                        <?= $value['isFill'] ==
                            1 ?  '<td class="denied">terisi</td>' :  '<td class="process">kosong</td>' ?>

                        <td class="justify-center items-center flex">
                            <?php if($value['isFill'] ==
                            1): ?>
                            <form action="<?= site_url("office/room/checkout/". $value['room_id']) ?>" method="post">
                                <button type="submit" class="btn btn-danger text-white">checkout

                                </button>
                            </form>
                            <?php else: ?>
                            <button type="button" disabled class="btn btn-outline-success ">KOSONG</button>
                            <?php endif; ?>

                        </td>

                    </tr>
                    <?php $no++ ?>
                    <?php endforeach; ?>

                </tbody>
            </table>
        </div>
        <!-- END DATA TABLE-->
    </div>
</div>




<script>
function filterRoom(type) {
    let typeId = type.value

    if (typeId !== '') {
        window.location.href = `<?= base_url("/office/room?type=") ?>${typeId}`;
    } else {
        window.location.href = `<?= base_url("/office/room") ?>`;

    }
}

function searchRoom() {
    let searchValue = document.getElementById("search").value;

    window.location.href = `<?= base_url("/office/room?search=")?>${searchValue}`;
}
</script>
<?= $this->endSection() ?>