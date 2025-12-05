// applyform.js
// Handle form submission, validation, and data from query string

document.addEventListener("DOMContentLoaded", () => {
const urlParams = new URLSearchParams(window.location.search);
const posisiParam = urlParams.get("posisi");
const posisiInput = document.getElementById("posisi");
if (posisiParam) posisiInput.value = decodeURIComponent(posisiParam);

const form = document.getElementById("applyForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validasi data diri
    const requiredFields = ["nama", "nim", "univ", "jurusan", "email", "telepon", "departemen", "mulai", "selesai", "durasi", "cv", "transkrip nilai", "surat pengantar/rekomendasi kampus", "KTP/kartu identitas", "pas foto"];
    let valid = true;

    requiredFields.forEach(id => {
    const field = document.getElementById(id);
    if (!field.value) {
        field.classList.add("is-invalid");
        valid = false;
    } else {
        field.classList.remove("is-invalid");
    }
    });

    if (!valid) {
    alert("Harap lengkapi semua kolom yang wajib diisi.");
    return;
    }

    // Simulasi kirim data
    const formData = new FormData(form);
    const dataObj = {};
    formData.forEach((value, key) => dataObj[key] = value.name || value);

    console.log("Data lamaran:", dataObj);

    // Simpan di localStorage untuk demo
    const submissions = JSON.parse(localStorage.getItem("magangApplications") || "[]");
    submissions.push({
    ...dataObj,
    tanggalKirim: new Date().toISOString()
    });
    localStorage.setItem("magangApplications", JSON.stringify(submissions));

    // Untuk tampilin modal sukses
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();

    // Reset form setelah submit
    form.reset();
});
});

