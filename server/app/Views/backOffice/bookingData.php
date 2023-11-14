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
                                <a href="#">Booking</a>
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

<div id="alert" style="margin-left: 20px; margin-right: 20px;">

</div>


<div class="row m-t-10 p-4">
    <div class="col-md-12">
        <!-- DATA TABLE-->
        <div class="table-responsive m-b-40">
            <table class="table table-borderless table-data3">
                <thead>
                    <tr>
                        <th>no</th>
                        <th>no room</th>
                        <th>type room</th>
                        <th>atas nama</th>
                        <th>tanggal checkin</th>
                        <th>tanggal checkout</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $no = 1; ?>
                    <?php foreach ($booking as $key => $value): ?>

                    <tr>
                        <td><?= $no ?></td>
                        <td><?= $value['noRoom'] ?></td>
                        <td class="process"><?= $value['typeName'] ?></td>
                        <td><?= $value['userName'] ?></td>
                        <td><?= $value['startDate'] ?></td>
                        <td class="">
                            <?= $value['endDate'] ?>
                        </td>
                        <td><?= "Rp ". number_format($value['totalPrice'], 2, ',', '.'); ?></td>
                    </tr>
                    <?php $no++; ?>
                    <?php endforeach; ?>

                </tbody>
            </table>
        </div>
        <!-- END DATA TABLE-->
    </div>
</div>


<script>
//for alert endDate
const data = <?php echo json_encode($booking); ?>;
const sliceData = data.map((data) => {
    return {
        endDate: data.endDate,
        noRoom: data.noRoom,
        isFill: data.isFill
    }
});
const dateNow = new Date();
const endDate = [];

//change format Date 
sliceData.forEach((item) => {
    const tanggalString = item.endDate;
    const tanggalObjek = new Date(tanggalString);

    endDate.push({
        endDate: tanggalObjek,
        noRoom: item.noRoom,
        isFill: item.isFill

    })
})



for (let i = 0; i < endDate.length; i++) {
    if (endDate[i].endDate <= dateNow && endDate[i].isFill == 1) {
        let alertDiv = document.createElement('div');
        alertDiv.classList = "alert alert-danger";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `${endDate[i].noRoom} harus segera check-out`;

        document.getElementById('alert').appendChild(alertDiv)

    }
}
</script>


<?= $this->endSection() ?>