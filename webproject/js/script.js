document.addEventListener('DOMContentLoaded', function() {
    const tombolBaca = document.getElementById('btnBaca');
    const areaDeskripsi = document.getElementById('deskripsiTeks');

    tombolBaca.addEventListener('click', function() {
        // 1. Sembunyikan tombol
        this.classList.add('d-none');

        // 2. Tampilkan teks deskripsi
        areaDeskripsi.classList.remove('d-none');
        
        // Opsional: Log ke konsol
        console.log("Deskripsi ditampilkan secara inline.");
    });
});
