// === joblist.js ===

  // ==== Toggle Tampilan Grid / List ====
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");

  gridViewBtn.addEventListener("click", () => {
    jobsContainer.classList.remove("list-view");
    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
    renderJobs();
  });

  listViewBtn.addEventListener("click", () => {
    jobsContainer.classList.add("list-view");
    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
    renderJobs(); // re-render kartu dalam bentuk list
  });

// Menampilkan daftar lowongan magang dan interaksi modal

document.addEventListener("DOMContentLoaded", () => {
  const jobsContainer = document.getElementById("jobsContainer");
  const resultCount = document.getElementById("resultCount");

  // ==== DATA LOWONGAN MAGANG ====
  const jobs = [
    {
      id: 1,
      title: "Web Developer",
      dept: "IT Intern",
      level: "D3/S1",
      location: "Jakarta",
      quota: 2,
      deadline: "2025-11-30",
      description:
        "Bertanggung jawab dalam pengembangan dan pemeliharaan website instansi. Membantu tim dalam memperbarui konten, memperbaiki bug, dan mengoptimalkan performa website.",
      requirements: [
        "Mahasiswa aktif jurusan Informatika, Sistem Informasi, atau sejenis",
        "Menguasai HTML, CSS, JavaScript (Bootstrap menjadi nilai tambah)",
        "Memahami konsep dasar web hosting dan version control (Git)",
      ],
    },
    {
      id: 2,
      title: "Frontend Programmer",
      dept: "IT Intern",
      level: "D3/S1",
      location: "Jakarta",
      quota: 1,
      deadline: "2025-12-05",
      description:
        "Membantu tim IT dalam merancang tampilan antarmuka pengguna (UI) yang interaktif dan responsif untuk aplikasi internal instansi.",
      requirements: [
        "Mahasiswa aktif jurusan Informatika atau Desain UI/UX",
        "Menguasai HTML, CSS, JavaScript, dan framework seperti React atau Vue (nilai plus)",
        "Teliti terhadap detail tampilan dan pengalaman pengguna",
      ],
    },
    {
      id: 3,
      title: "Backend Engineer",
      dept: "IT Intern",
      level: "D3/S1",
      location: "Jakarta",
      quota: 1,
      deadline: "2025-12-10",
      description:
        "Bertugas merancang dan mengembangkan sisi server dari aplikasi internal, termasuk integrasi database dan API.",
      requirements: [
        "Mahasiswa aktif jurusan Informatika, Teknik Komputer, atau sejenis",
        "Menguasai bahasa pemrograman seperti PHP, Python, atau Node.js",
        "Memahami konsep REST API dan manajemen database MySQL/PostgreSQL",
      ],
    },
    {
      id: 4,
      title: "IT Support",
      dept: "IT Intern",
      level: "SMK/D3/S1",
      location: "Jakarta",
      quota: 3,
      deadline: "2025-11-25",
      description:
        "Memberikan dukungan teknis kepada pengguna internal, membantu troubleshooting perangkat keras dan perangkat lunak, serta melakukan instalasi jaringan sederhana.",
      requirements: [
        "Siswa/mahasiswa jurusan Teknik Komputer atau sejenis",
        "Memahami instalasi OS, software, dan jaringan LAN/Wi-Fi",
        "Mampu bekerja cepat dan memiliki komunikasi yang baik",
      ],
    },
    {
      id: 5,
      title: "Resepsionis",
      dept: "Resepsionis",
      level: "SMK/Sederajat",
      location: "Jakarta",
      quota: 2,
      deadline: "2025-11-20",
      description:
        "Bertugas menyambut tamu instansi, menerima telepon, mengatur jadwal tamu, serta membantu administrasi umum di bagian depan.",
      requirements: [
        "Siswa/mahasiswa jurusan Administrasi Perkantoran atau sejenis",
        "Berpenampilan rapi dan sopan, komunikatif",
        "Mampu menggunakan Microsoft Office dan alat kantor dasar",
      ],
    },
    {
      id: 6,
      title: "Data Entry",
      dept: "Data Engineer",
      level: "D3/S1",
      location: "Jakarta",
      quota: 2,
      deadline: "2025-12-15",
      description:
        "Melakukan entri dan pembaruan data ke dalam sistem instansi dengan akurasi tinggi serta mendukung kegiatan pengolahan data dasar.",
      requirements: [
        "Mahasiswa aktif jurusan Statistika, Informatika, atau Administrasi",
        "Teliti dan cepat dalam mengetik data",
        "Mampu mengoperasikan Excel dan Google Sheets",
      ],
    },
    {
      id: 7,
      title: "Data Analysis",
      dept: "Data Engineer",
      level: "S1",
      location: "Jakarta",
      quota: 2,
      deadline: "2025-12-20",
      description:
        "Menganalisis data operasional instansi, membuat laporan visualisasi, dan membantu pengambilan keputusan berbasis data.",
      requirements: [
        "Mahasiswa aktif jurusan Statistika, Data Science, atau Informatika",
        "Menguasai Excel tingkat lanjut, Power BI/Tableau, atau Python untuk analisis data",
        "Mampu menyusun laporan hasil analisis secara ringkas dan komunikatif",
      ],
    },
    {
      id: 8,
      title: "Accounting",
      dept: "Finance Intern",
      level: "S1",
      location: "Jakarta",
      quota: 5,
      deadline: "2025-12-25",
      description:
        "Membantu tim keuangan dalam pencatatan transaksi, penyusunan laporan keuangan, serta verifikasi dokumen administrasi.",
      requirements: [
        "Mahasiswa aktif jurusan Akuntansi atau Manajemen Keuangan",
        "Memahami dasar akuntansi dan penggunaan Microsoft Excel",
        "Disiplin, jujur, dan teliti dalam pengelolaan data keuangan",
      ],
    },
  ];

  // ==== Render daftar lowongan ====
  const renderJobs = () => {
    jobsContainer.innerHTML = "";

    jobs.forEach((job) => {
      const card = document.createElement("div");
      card.className = "col-md-6 col-lg-4";
      card.innerHTML = `
        <div class="card shadow-sm border-0 h-100 hover-card job-card">
          <div class="card-body">
            <h6 class="fw-semibold text-primary">${job.title}</h6>
            <p class="small text-muted mb-1"><i class="bi bi-building"></i> ${job.dept}</p>
            <p class="small text-muted mb-1"><i class="bi bi-geo-alt"></i> ${job.location}</p>
            <p class="small text-muted mb-1"><i class="bi bi-mortarboard"></i> ${job.level}</p>
            <p class="small text-muted mb-2"><i class="bi bi-people"></i> Kuota: ${job.quota} orang</p>
            <button class="btn btn-outline-primary btn-sm w-100 detail-btn" data-id="${job.id}">
              <i class="bi bi-info-circle me-1"></i> Detail
            </button>
          </div>
        </div>
      `;
      jobsContainer.appendChild(card);
    });

    resultCount.textContent = jobs.length;
  };

  renderJobs();

  // ==== Modal Detail ====
  const jobModal = new bootstrap.Modal(document.getElementById("jobModal"));
  const modalTitle = document.getElementById("jobModalTitle");
  const modalBody = document.getElementById("jobModalBody");
  const modalDept = document.getElementById("jobDept");
  const modalLevel = document.getElementById("jobLevel");
  const modalLoc = document.getElementById("jobLocation");
  const modalDeadline = document.getElementById("jobDeadline");
  const modalQuota = document.getElementById("jobQuota");
  const modalReqs = document.getElementById("jobReqs");
  const applyBtn = document.getElementById("applyBtn");

  jobsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".detail-btn")) {
      const id = e.target.closest(".detail-btn").dataset.id;
      const job = jobs.find((j) => j.id == id);

      modalTitle.textContent = job.title;
      modalBody.textContent = job.description;
      modalDept.textContent = job.dept;
      modalLevel.textContent = job.level;
      modalLoc.textContent = job.location;
      modalDeadline.textContent = job.deadline;
      modalQuota.textContent = job.quota;
      modalReqs.innerHTML = job.requirements.map((r) => `<li>${r}</li>`).join("");

      // Simpan posisi untuk bisa otomatis terisi di applyform
      localStorage.setItem("posisiDilamar", job.title);
      jobModal.show();
    }
  });

  // ==== Tombol Lamar Sekarang ====
  applyBtn.addEventListener("click", () => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "applyform.html";
    }, 500);
  });
});
