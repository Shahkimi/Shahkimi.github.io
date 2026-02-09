// Check authentication
if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "index.html";
}

// Dummy Data - 100 members (generated)
function generateMembersData() {
  const jabatans = [
    {
      name: "Jabatan Perubatan",
      jawatans: [
        "Pegawai Perubatan",
        "Juruteknik Perubatan",
        "Pembantu Perubatan",
      ],
    },
    {
      name: "Jabatan Kejururawatan",
      jawatans: ["Jururawat", "Jururawat Kanan", "Pembantu Jururawat"],
    },
    {
      name: "Jabatan Farmasi",
      jawatans: ["Pegawai Farmasi", "Pembantu Farmasi", "Juruteknik Farmasi"],
    },
    {
      name: "Jabatan Pentadbiran",
      jawatans: [
        "Penolong Pegawai Tadbir",
        "Pembantu Tadbir",
        "Pegawai Tadbir",
      ],
    },
  ];
  const statuses = [
    "Aktif",
    "Aktif",
    "Aktif",
    "Aktif",
    "Tidak Aktif",
    "Bersara",
    "Meninggal",
  ];
  const negeris = [
    "Kedah",
    "Pulau Pinang",
    "Perak",
    "Selangor",
    "Johor",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Kelantan",
    "Terengganu",
    "WP Kuala Lumpur",
    "Sabah",
    "Sarawak",
  ];
  const poskodByNegeri = {
    Kedah: "05000",
    "Pulau Pinang": "10000",
    Perak: "30000",
    Selangor: "40000",
    Johor: "80000",
    Melaka: "75000",
    "Negeri Sembilan": "70000",
    Pahang: "25000",
    Kelantan: "15000",
    Terengganu: "20000",
    "WP Kuala Lumpur": "50000",
    Sabah: "88000",
    Sarawak: "93000",
  };
  const jenisBayaran = ["Cash", "Online Banking", "Direct Transfer"];
  const statusBayaran = ["Success", "Success", "Pending", "Reject"];
  const names = [
    "Ahmad bin Abdullah",
    "Siti Nurhaliza binti Hassan",
    "Muhammad Hafiz bin Ismail",
    "Nurul Aina binti Mohd Ali",
    "Lim Siew Mei",
    "Rajesh Kumar a/l Subramaniam",
    "Fatimah binti Yusof",
    "Wong Kai Ling",
    "Mohd Firdaus bin Razak",
    "Nor Azlina binti Kamal",
    "Tan Wei Jie",
    "Kavitha a/p Raju",
    "Abdul Rahman bin Omar",
    "Zainab binti Ibrahim",
    "Lee Mei Ling",
    "Muthu a/l Siva",
    "Hassan bin Yusof",
    "Siti Aminah binti Ahmad",
    "Chan Soo Yin",
    "Devi a/p Krishnan",
    "Ismail bin Hashim",
    "Rohana binti Musa",
    "Ng Kok Wai",
    "Prem Kumar a/l Gopal",
    "Zulkifli bin Hassan",
    "Nurul Izzati binti Zainal",
    "Ooi Chien Hong",
    "Anand a/l Velu",
    "Razak bin Ali",
    "Mastura binti Halim",
    "Teh Lay Peng",
    "Suresh a/l Maniam",
    "Halim bin Osman",
    "Yusnita binti Jalil",
    "Koh Beng Seng",
    "Lakshmi a/p Devi",
    "Omar bin Kassim",
    "Farah Liyana binti Roslan",
    "Goh Ming Hui",
    "Ravi a/l Selvam",
    "Jamal bin Din",
    "Norshahida binti Saad",
    "Lau Siew Fong",
    "Vijay a/l Murugan",
    "Salleh bin Ahmad",
    "Hazwani binti Nordin",
    "Yap Chee Keong",
    "Malar a/p Ramasamy",
    "Zainal bin Tahir",
    "Nadia binti Fauzi",
    "Sim Ai Lee",
    "Raj a/l Kumar",
    "Fadzil bin Mahmud",
    "Intan Syafika binti Azman",
    "Tee Wei Lun",
    "Sharmila a/p Raj",
    "Rizal bin Hamid",
    "Amirah binti Zulkifli",
    "Phua Jia Min",
    "Dinesh a/l Raj",
    "Azman bin Bakar",
    "Safiyah binti Rashid",
    "Chong Mei Fong",
    "Kumar a/l Suresh",
    "Badrul bin Hisham",
    "Nur Fatin binti Nazri",
    "Lew Yee Ting",
    "Priya a/p Muniandy",
    "Shukri bin Abdullah",
    "Aina binti Hamdan",
    "Foo Keng Wah",
    "Arjun a/l Nathan",
    "Hamzah bin Yusoff",
    "Diana binti Kamaruddin",
    "Loh Siew Lin",
    "Meena a/p Sundram",
    "Ruslan bin Hassan",
    "Nurul Huda binti Mansor",
    "Quek Boon Chuan",
    "Santhi a/p Rama",
    "Fauzi bin Ibrahim",
    "Sakinah binti Rahman",
    "Ho Wai Ming",
    "Logan a/l Raj",
    "Hisham bin Jalil",
    "Zarina binti Omar",
    "Teng Wei Jie",
    "Kala a/p Selvam",
    "Zaki bin Ahmad",
    "Murni binti Hassan",
    "Pang Siew Yee",
    "Mano a/l Subra",
    "Nasir bin Rahman",
    "Siti Hajar binti Zain",
    "Yong Chee Keong",
    "Thilaga a/p Ramesh",
    "Aziz bin Musa",
    "Nurul Syuhada binti Aziz",
    "Boon Keng Lim",
    "Ramesh a/l Perumal",
    "Rashid bin Omar",
    "Hafizah binti Rashid",
    "Chia Wei Jie",
    "Geetha a/p Nair",
    "Kamal bin Yusof",
    "Nur Amira binti Shamsudin",
    "Lai Mei Kwan",
    "Bala a/l Murugan",
    "Zulfakar bin Ali",
    "Sara binti Zaki",
    "Wong Siew Cheng",
    "Indra a/l Prakash",
    "Rahim bin Hassan",
    "Nurul Ain binti Fadzil",
    "Tan Boon Hock",
    "Padmini a/p Shanmugam",
    "Shamsul bin Ahmad",
    "Aisyah binti Rizal",
    "Lim Poh Ling",
    "Saravanan a/l Muniandy",
  ];
  const catatans = [
    "",
    "",
    "",
    "Tiada",
    "Cuti tanpa gaji",
    "Bersara 2024",
    "Bertukar unit",
    "Penyelia baharu",
  ];

  const members = [];
  for (let i = 1; i <= 100; i++) {
    const noAhli = "A" + String(i).padStart(3, "0");
    const jIdx = (i - 1) % jabatans.length;
    const dept = jabatans[jIdx];
    const jawatanIdx = (i - 1) % dept.jawatans.length;
    const status = statuses[(i - 1) % statuses.length];
    const negeri = negeris[(i - 1) % negeris.length];
    const poskod = (poskodByNegeri[negeri] || "50000").slice(0, 5);
    const tahunDaftar = 2014 + (i % 11);
    const tarikhDaftar =
      tahunDaftar +
      "-" +
      String((i % 12) + 1).padStart(2, "0") +
      "-" +
      String((i % 28) + 1).padStart(2, "0");
    const yy = String(tahunDaftar).slice(2);
    const noKP =
      80 +
      (i % 20) +
      String((i % 12) + 1).padStart(2, "0") +
      String((i % 28) + 1).padStart(2, "0") +
      "-" +
      String((i % 24) + 1).padStart(2, "0") +
      "-" +
      String(1000 + i).slice(-4);
    // 5 years of payment per officer, with gaps and strong per-type spread so chart looks like real data
    const paymentYears = [2020, 2021, 2022, 2023, 2024];
    // Each year favours one payment type so the chart shows clear gaps between Cash / Online Banking / Direct Transfer
    // typeForYear[yearIndex] = dominant type index for that year (0=Cash, 1=Online Banking, 2=Direct Transfer)
    const typeForYear = [0, 1, 2, 0, 1]; // 2020 Cash, 2021 Online Banking, 2022 Direct Transfer, 2023 Cash, 2024 Online
    const payments = [];
    let receiptSeq = 0;
    for (let p = 0; p < paymentYears.length; p++) {
      const yr = paymentYears[p];
      // Gaps: skip ~14% of payments (member didn't pay this year)
      if ((i * 11 + yr) % 7 === 0) continue;
      receiptSeq += 1;
      // Assign type: ~60% follow the dominant type for this year, rest spread so lines are visible
      const dominant = typeForYear[p];
      const bucket = i % 10;
      const typeIndex =
        bucket < 6 ? dominant : (dominant + 1 + (bucket % 2)) % 3;
      const jenis = jenisBayaran[typeIndex];
      const statusIdx = (i + p) % statusBayaran.length;
      payments.push({
        tahun: yr,
        noResit: "R" + yr + String(i).padStart(3, "0") + String(receiptSeq),
        nilai: 100,
        jenisPembayaran: jenis,
        statusPembayaran: statusBayaran[statusIdx],
      });
    }
    members.push({
      noAhli,
      tarikhDaftar,
      tahunDaftar,
      nama: names[(i - 1) % names.length],
      noKP,
      jawatan: dept.jawatans[jawatanIdx],
      jabatan: dept.name,
      status,
      noHP: "01" + String((i % 9) + 2) + "-" + String(10000000 + i).slice(-7),
      officeNo:
        status === "Bersara" || status === "Meninggal"
          ? ""
          : "06-" + String(7654320 + i),
      alamat:
        "No " +
        i * 3 +
        ", " +
        (i % 2 ? "Jalan " : "Taman ") +
        [
          "Bahagia",
          "Harmoni",
          "Sejahtera",
          "Damai",
          "Indah",
          "Makmur",
          "Ria",
          "Merdeka",
        ][i % 8] +
        " " +
        (i % 5),
      poskod: String(parseInt(poskod, 10) + (i % 100))
        .padStart(5, "0")
        .slice(0, 5),
      negeri,
      catatan: catatans[(i - 1) % catatans.length],
      payments,
    });
  }
  return members;
}

// Generate members data
const membersData = generateMembersData();
if (!membersData || membersData.length === 0) {
  console.error("Failed to generate members data");
} else {
  console.log("Members data generated:", membersData.length, "members");
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function toggleMobileMenu() {
  sidebar.classList.toggle("mobile-open");
  sidebarOverlay.classList.toggle("active");
  document.body.style.overflow = sidebar.classList.contains("mobile-open")
    ? "hidden"
    : "";
}

mobileMenuToggle?.addEventListener("click", toggleMobileMenu);
sidebarOverlay?.addEventListener("click", toggleMobileMenu);
document
  .getElementById("closeSidebarBtn")
  ?.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking nav links
function closeMobileMenu() {
  if (window.innerWidth < 1024) {
    sidebar.classList.remove("mobile-open");
    sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Navigation
document.querySelectorAll(".sidebar .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.id === "logoutBtn") return;
    e.preventDefault();

    document
      .querySelectorAll(".sidebar .nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    const page = this.dataset.page;
    document
      .querySelectorAll(".page-view")
      .forEach((view) => view.classList.add("hidden"));

    // Close mobile menu after navigation
    closeMobileMenu();

    switch (page) {
      case "dashboard":
        document.getElementById("dashboardView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent = "Dashboard";
        initDashboard();
        break;
      case "by-department":
        document.getElementById("byDepartmentView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent =
          "Senarai Mengikut Jabatan";
        loadDepartmentTable();
        break;
      case "by-member-no":
        document.getElementById("byMemberNoView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent =
          "Senarai Mengikut No Ahli";
        loadMemberNoTable();
        break;
      case "by-status":
        document.getElementById("byStatusView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent =
          "Senarai Mengikut Status";
        loadStatusTable();
        break;
      case "search":
        document.getElementById("searchView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent = "Carian & Kemaskini";
        break;
      case "add-member":
        document.getElementById("addMemberView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent = "Tambah Ahli Baru";
        initAddMemberForm();
        break;
      case "pending-payments":
        document.getElementById("pendingPaymentsView").classList.remove("hidden");
        document.getElementById("pageTitle").textContent = "Kelulusan Pembayaran";
        loadPendingPaymentsTable();
        break;
    }
  });
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Adakah anda pasti mahu log keluar?")) {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
  }
});

// Animate number counting up
function animateNumber(element, targetValue, duration = 1000) {
  if (!element) return;
  
  const startValue = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOut);
    
    element.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = targetValue;
    }
  }
  
  requestAnimationFrame(update);
}

// Dashboard
function initDashboard() {
  console.log("initDashboard called");
  console.log(
    "membersData length:",
    membersData ? membersData.length : "undefined"
  );

  if (!membersData || membersData.length === 0) {
    console.error("No members data available");
    return;
  }

  const counts = { Aktif: 0, "Tidak Aktif": 0, Bersara: 0, Meninggal: 0 };
  membersData.forEach((m) => {
    if (counts[m.status] !== undefined) counts[m.status]++;
  });

  console.log("Status counts:", counts);

  const statAktif = document.getElementById("statAktif");
  const statTidakAktif = document.getElementById("statTidakAktif");
  const statBersara = document.getElementById("statBersara");
  const statMeninggal = document.getElementById("statMeninggal");

  // Animate numbers counting up with staggered delays
  if (statAktif) {
    setTimeout(() => animateNumber(statAktif, counts.Aktif, 800), 200);
    console.log("Updated statAktif:", counts.Aktif);
  } else {
    console.error("statAktif element not found");
  }
  if (statTidakAktif) setTimeout(() => animateNumber(statTidakAktif, counts["Tidak Aktif"], 800), 300);
  if (statBersara) setTimeout(() => animateNumber(statBersara, counts.Bersara, 800), 400);
  if (statMeninggal) setTimeout(() => animateNumber(statMeninggal, counts.Meninggal, 800), 500);

  // Build Department Chart with filter (default to Aktif)
  const filterElement = document.getElementById("departmentChartFilter");
  const defaultFilter = filterElement?.value || "Aktif";
  console.log("Building chart with filter:", defaultFilter);
  buildDepartmentChart(defaultFilter);

  // Payment Method Chart (Stacked Line Chart)
  const paymentCtx = document.getElementById("paymentMethodChart");
  if (paymentCtx && paymentCtx.chart) {
    paymentCtx.chart.destroy();
  }

  if (paymentCtx) {
    const paymentDataByYear = {};
    membersData.forEach((member) => {
      member.payments.forEach((payment) => {
        if (payment.statusPembayaran === "Success") {
          const year = payment.tahun;
          const method = payment.jenisPembayaran || "Cash";
          if (!paymentDataByYear[year]) {
            paymentDataByYear[year] = {
              Cash: 0,
              "Online Banking": 0,
              "Direct Transfer": 0,
            };
          }
          paymentDataByYear[year][method] += 10;
        }
      });
    });

    const years = Object.keys(paymentDataByYear).sort(
      (a, b) => parseInt(a) - parseInt(b)
    );
    const cashData = years.map((year) => paymentDataByYear[year].Cash || 0);
    const onlineBankingData = years.map(
      (year) => paymentDataByYear[year]["Online Banking"] || 0
    );
    const directTransferData = years.map(
      (year) => paymentDataByYear[year]["Direct Transfer"] || 0
    );

    paymentCtx.chart = new Chart(paymentCtx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "Cash",
            data: cashData,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
          {
            label: "Online Banking",
            data: onlineBankingData,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
          {
            label: "Direct Transfer",
            data: directTransferData,
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        resize: true,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#52525b",
              font: { size: window.innerWidth < 640 ? 10 : 12 },
              padding: window.innerWidth < 640 ? 10 : 15,
              usePointStyle: true,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label + ": RM" + context.parsed.y.toFixed(2)
                );
              },
              footer: function (tooltipItems) {
                if (tooltipItems.length === 0) return "";
                const year = tooltipItems[0].label;
                const yearData = paymentDataByYear[year] || {
                  Cash: 0,
                  "Online Banking": 0,
                  "Direct Transfer": 0,
                };
                const total =
                  (yearData.Cash || 0) +
                  (yearData["Online Banking"] || 0) +
                  (yearData["Direct Transfer"] || 0);
                return "Jumlah Tahun " + year + ": RM" + total.toFixed(2);
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#71717a",
              font: { size: window.innerWidth < 640 ? 9 : 11 },
            },
            grid: { color: "rgba(228,228,231,0.5)", display: false },
            title: {
              display: true,
              text: "Tahun",
              color: "#71717a",
              font: { size: window.innerWidth < 640 ? 10 : 12 },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#71717a",
              font: { size: window.innerWidth < 640 ? 9 : 11 },
              callback: function (value) {
                return "RM" + value;
              },
            },
            grid: { color: "rgba(228,228,231,0.5)" },
            title: {
              display: window.innerWidth >= 640,
              text: "Jumlah Bayaran Diterima (RM)",
              color: "#71717a",
              font: { size: window.innerWidth < 640 ? 10 : 12 },
            },
          },
        },
      },
    });
  }
}

// Function to build department chart with filter support
function buildDepartmentChart(filterStatus = "Aktif") {
  const ctx = document.getElementById("departmentChart");
  if (ctx && ctx.chart) {
    ctx.chart.destroy();
  }

  // Count all members by department
  const departmentCounts = {};
  const departmentStatusCounts = {};

  membersData.forEach((member) => {
    const dept = member.jabatan;
    const status = member.status;

    // Total count per department
    departmentCounts[dept] = (departmentCounts[dept] || 0) + 1;

    // Count by status per department
    if (!departmentStatusCounts[dept]) {
      departmentStatusCounts[dept] = {
        Aktif: 0,
        "Tidak Aktif": 0,
        Bersara: 0,
        Meninggal: 0,
      };
    }
    if (departmentStatusCounts[dept][status] !== undefined) {
      departmentStatusCounts[dept][status]++;
    }
  });

  // Get all departments in order
  const allDepartments = [
    "Jabatan Perubatan",
    "Jabatan Kejururawatan",
    "Jabatan Farmasi",
    "Jabatan Pentadbiran",
  ];
  const departmentLabels = allDepartments.filter(
    (dept) => departmentCounts[dept] > 0
  );

  // Prepare datasets based on filter
  let datasets = [];
  let chartTitle = "Ringkasan Ahli Mengikut Jabatan";

  if (filterStatus === "all") {
    // Show all statuses
    datasets = [
      {
        label: "Aktif",
        data: departmentLabels.map(
          (dept) => departmentStatusCounts[dept]?.Aktif || 0
        ),
        backgroundColor: "#22c55e",
        borderRadius: 8,
      },
      {
        label: "Tidak Aktif",
        data: departmentLabels.map(
          (dept) => departmentStatusCounts[dept]?.["Tidak Aktif"] || 0
        ),
        backgroundColor: "#ef4444",
        borderRadius: 8,
      },
      {
        label: "Bersara",
        data: departmentLabels.map(
          (dept) => departmentStatusCounts[dept]?.Bersara || 0
        ),
        backgroundColor: "#f59e0b",
        borderRadius: 8,
      },
      {
        label: "Meninggal",
        data: departmentLabels.map(
          (dept) => departmentStatusCounts[dept]?.Meninggal || 0
        ),
        backgroundColor: "#71717a",
        borderRadius: 8,
      },
    ];
  } else {
    // Show only selected status
    const statusColors = {
      Aktif: "#22c55e",
      "Tidak Aktif": "#ef4444",
      Bersara: "#f59e0b",
      Meninggal: "#71717a",
    };

    datasets = [
      {
        label: filterStatus,
        data: departmentLabels.map(
          (dept) => departmentStatusCounts[dept]?.[filterStatus] || 0
        ),
        backgroundColor: statusColors[filterStatus] || "#22c55e",
        borderRadius: 8,
      },
    ];
    chartTitle = `Ringkasan Ahli ${filterStatus} Mengikut Jabatan`;
  }

  if (!ctx) {
    console.error("Department chart canvas element not found");
    return;
  }

  if (ctx) {
    ctx.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: departmentLabels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        resize: true,
        plugins: {
          legend: {
            display: filterStatus === "all",
            position: "top",
            labels: {
              color: "#52525b",
              font: { size: window.innerWidth < 640 ? 10 : 12 },
              padding: window.innerWidth < 640 ? 10 : 15,
            },
          },
          tooltip: {
            callbacks: {
              footer: function (tooltipItems) {
                if (tooltipItems.length === 0) return "";
                const dept = tooltipItems[0].label;
                const total = departmentCounts[dept] || 0;
                if (filterStatus === "all") {
                  return "Jumlah: " + total + " ahli";
                } else {
                  const filteredCount =
                    departmentStatusCounts[dept]?.[filterStatus] || 0;
                  return `${filterStatus}: ${filteredCount} ahli (Jumlah: ${total} ahli)`;
                }
              },
            },
          },
        },
        scales: {
          x: {
            stacked: false,
            ticks: {
              color: "#71717a",
              font: { size: window.innerWidth < 640 ? 9 : 11 },
            },
            grid: { color: "rgba(228,228,231,0.5)", display: false },
          },
          y: {
            stacked: false,
            beginAtZero: true,
            ticks: {
              color: "#71717a",
              font: { size: window.innerWidth < 640 ? 9 : 11 },
              stepSize: 1,
            },
            grid: { color: "rgba(228,228,231,0.5)" },
          },
        },
      },
    });
  }
}

// Department Chart Filter Handler
document
  .getElementById("departmentChartFilter")
  ?.addEventListener("change", function (e) {
    const selectedStatus = e.target.value;
    buildDepartmentChart(selectedStatus);
  });

// Shared DataTables options (Malay)
const dataTablesMalay = {
  order: [[0, "asc"]],
  pageLength: 10,
  lengthMenu: [
    [5, 10, 25, 50, -1],
    [5, 10, 25, 50, "Semua"],
  ],
  scrollX: true,
  responsive: true,
  autoWidth: false,
  language: {
    search: "Cari:",
    lengthMenu: "Papar _MENU_ rekod",
    info: "Memaparkan _START_ hingga _END_ daripada _TOTAL_ rekod",
    paginate: {
      first: "Pertama",
      last: "Akhir",
      next: "Seterusnya",
      previous: "Sebelumnya",
    },
    emptyTable: "Tiada data",
    zeroRecords: "Tiada padanan rekod",
  },
  columnDefs: [{ orderable: false, targets: -1 }],
};

let departmentDataTable = null;
let memberNoDataTable = null;
let statusDataTable = null;
let pendingPaymentsDataTable = null;

function loadDepartmentTable(filterDept = "") {
  const tbody = document.getElementById("departmentTableBody");

  if (departmentDataTable) {
    departmentDataTable.destroy();
    departmentDataTable = null;
  }

  tbody.innerHTML = "";

  const filtered = membersData.filter(
    (m) => m.status === "Aktif" && (!filterDept || m.jabatan === filterDept)
  );

  filtered.forEach((member) => {
    const row = `
            <tr>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.jabatan}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.nama}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.noKP}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.jawatan}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.noAhli}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.tarikhDaftar}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.tahunDaftar}</td>
                <td class="px-4 py-3">
                    <button type="button" class="rounded-lg bg-primary-100 text-primary-700 hover:bg-primary-200 px-3 py-1.5 text-sm inline-flex items-center gap-1" onclick="viewMember('${member.noKP}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        Lihat
                    </button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
  });

  if (typeof $ !== "undefined" && $.fn.DataTable) {
    departmentDataTable = $("#departmentTable").DataTable(dataTablesMalay);
  }
}

document
  .getElementById("departmentFilter")
  .addEventListener("change", function () {
    loadDepartmentTable(this.value);
  });

// Member No Table (DataTables)
function loadMemberNoTable() {
  const tbody = document.getElementById("memberNoTableBody");

  if (memberNoDataTable) {
    memberNoDataTable.destroy();
    memberNoDataTable = null;
  }

  tbody.innerHTML = "";

  const filtered = membersData
    .filter((m) => m.status === "Aktif")
    .sort((a, b) => a.noAhli.localeCompare(b.noAhli));

  filtered.forEach((member) => {
    const row = `
            <tr>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.noAhli}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.tarikhDaftar}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.tahunDaftar}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.nama}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.noKP}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.jawatan}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.jabatan}</td>
                <td class="px-4 py-3"><span class="inline-flex rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">${member.status}</span></td>
                <td class="px-4 py-3">
                    <button type="button" class="rounded-lg bg-primary-100 text-primary-700 hover:bg-primary-200 px-3 py-1.5 text-sm inline-flex items-center gap-1" onclick="viewMember('${member.noKP}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        Lihat
                    </button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
  });

  if (typeof $ !== "undefined" && $.fn.DataTable) {
    memberNoDataTable = $("#memberNoTable").DataTable(dataTablesMalay);
  }
}

// Status Table (DataTables)
function loadStatusTable(status = "Aktif") {
  const tbody = document.getElementById("statusTableBody");

  if (statusDataTable) {
    statusDataTable.destroy();
    statusDataTable = null;
  }

  tbody.innerHTML = "";

  const filtered = membersData.filter((m) => m.status === status);

  filtered.forEach((member) => {
    const row = `
            <tr>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.noAhli}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.tarikhDaftar}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.tahunDaftar}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.nama}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.noKP}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.jawatan}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${member.jabatan}</td>
                <td class="px-4 py-3">
                    <button type="button" class="rounded-lg bg-primary-100 text-primary-700 hover:bg-primary-200 px-3 py-1.5 text-sm inline-flex items-center gap-1" onclick="viewMember('${member.noKP}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        Lihat
                    </button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
  });

  if (typeof $ !== "undefined" && $.fn.DataTable) {
    statusDataTable = $("#statusTable").DataTable(dataTablesMalay);
  }
}

document.getElementById("statusFilter").addEventListener("change", function () {
  loadStatusTable(this.value);
});

// Pending Payments Table (DataTables)
function loadPendingPaymentsTable() {
  const tbody = document.getElementById("pendingPaymentsTableBody");

  if (pendingPaymentsDataTable) {
    pendingPaymentsDataTable.destroy();
    pendingPaymentsDataTable = null;
  }

  tbody.innerHTML = "";

  // Collect all pending payments with member info
  const pendingPayments = [];
  membersData.forEach((member) => {
    member.payments.forEach((payment) => {
      if (payment.statusPembayaran === "Pending") {
        pendingPayments.push({
          memberNoAhli: member.noAhli,
          memberNama: member.nama,
          memberNoKP: member.noKP,
          memberJabatan: member.jabatan,
          paymentTahun: payment.tahun,
          paymentNoResit: payment.noResit,
          paymentNilai: payment.nilai,
          paymentJenis: payment.jenisPembayaran,
          paymentStatus: payment.statusPembayaran,
          memberId: member.noKP, // Use noKP as unique identifier
          paymentIndex: member.payments.indexOf(payment), // Index of payment in member's payments array
        });
      }
    });
  });

  // Sort by year (newest first), then by member name
  pendingPayments.sort((a, b) => {
    if (b.paymentTahun !== a.paymentTahun) {
      return b.paymentTahun - a.paymentTahun;
    }
    return a.memberNama.localeCompare(b.memberNama);
  });

  pendingPayments.forEach((item) => {
    const row = `
            <tr>
                <td class="px-4 py-3 text-sm text-zinc-700">${formatDateForTable(item.paymentTahun)}</td>
                <td class="px-4 py-3 text-sm text-zinc-700 font-medium">${item.memberNoAhli}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${item.memberNama}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${item.paymentNoResit}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${item.paymentTahun}</td>
                <td class="px-4 py-3 text-sm text-zinc-700 font-semibold">RM ${item.paymentNilai.toFixed(2)}</td>
                <td class="px-4 py-3 text-sm text-zinc-700">${item.paymentJenis}</td>
                <td class="px-4 py-3">
                    <div class="flex items-center gap-2">
                        <button type="button" 
                            class="approve-payment-btn rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-3 py-1.5 text-sm inline-flex items-center gap-1 transition-colors" 
                            data-member-id="${item.memberId}" 
                            data-payment-index="${item.paymentIndex}"
                            onclick="approvePayment('${item.memberId}', ${item.paymentIndex})">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Lulus
                        </button>
                        <button type="button" 
                            class="decline-payment-btn rounded-lg bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1.5 text-sm inline-flex items-center gap-1 transition-colors" 
                            data-member-id="${item.memberId}" 
                            data-payment-index="${item.paymentIndex}"
                            onclick="declinePayment('${item.memberId}', ${item.paymentIndex})">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Tolak
                        </button>
                    </div>
                </td>
            </tr>
        `;
    tbody.innerHTML += row;
  });

  if (typeof $ !== "undefined" && $.fn.DataTable) {
    pendingPaymentsDataTable = $("#pendingPaymentsTable").DataTable({
      ...dataTablesMalay,
      order: [[4, "desc"]], // Sort by year descending
    });
  }
}

// Helper function to format date for table display
function formatDateForTable(year) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  
  // Use current date if year matches current year, otherwise use year-end date
  if (year === currentYear) {
    return `${currentDay.toString().padStart(2, '0')}/${currentMonth.toString().padStart(2, '0')}/${year}`;
  } else {
    return `31/12/${year}`;
  }
}

// Approve payment function
function approvePayment(memberId, paymentIndex) {
  if (typeof Swal !== "undefined") {
    Swal.fire({
      title: "Luluskan Pembayaran?",
      text: "Adakah anda pasti mahu meluluskan pembayaran ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Luluskan",
      cancelButtonText: "Batal",
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#6b7280",
    }).then((result) => {
      if (result.isConfirmed) {
        // Find member and update payment status
        const member = membersData.find((m) => m.noKP === memberId);
        if (member && member.payments[paymentIndex]) {
          member.payments[paymentIndex].statusPembayaran = "Success";
          
          // Reload table
          loadPendingPaymentsTable();
          
          Swal.fire({
            icon: "success",
            title: "Berjaya",
            text: "Pembayaran telah diluluskan.",
            confirmButtonColor: "#22c55e",
            timer: 2000,
            timerProgressBar: true,
          });
        }
      }
    });
  } else {
    if (confirm("Adakah anda pasti mahu meluluskan pembayaran ini?")) {
      const member = membersData.find((m) => m.noKP === memberId);
      if (member && member.payments[paymentIndex]) {
        member.payments[paymentIndex].statusPembayaran = "Success";
        loadPendingPaymentsTable();
        alert("Pembayaran telah diluluskan.");
      }
    }
  }
}

// Decline payment function
function declinePayment(memberId, paymentIndex) {
  if (typeof Swal !== "undefined") {
    Swal.fire({
      title: "Tolak Pembayaran?",
      text: "Adakah anda pasti mahu menolak pembayaran ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Tolak",
      cancelButtonText: "Batal",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      input: "textarea",
      inputPlaceholder: "Sila masukkan sebab penolakan (pilihan)",
      inputAttributes: {
        "aria-label": "Sebab penolakan",
      },
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Find member and update payment status
        const member = membersData.find((m) => m.noKP === memberId);
        if (member && member.payments[paymentIndex]) {
          member.payments[paymentIndex].statusPembayaran = "Reject";
          if (result.value) {
            member.payments[paymentIndex].rejectionReason = result.value;
          }
          
          // Reload table
          loadPendingPaymentsTable();
          
          Swal.fire({
            icon: "success",
            title: "Ditolak",
            text: "Pembayaran telah ditolak.",
            confirmButtonColor: "#ef4444",
            timer: 2000,
            timerProgressBar: true,
          });
        }
      }
    });
  } else {
    const reason = prompt("Sila masukkan sebab penolakan (pilihan):");
    if (confirm("Adakah anda pasti mahu menolak pembayaran ini?")) {
      const member = membersData.find((m) => m.noKP === memberId);
      if (member && member.payments[paymentIndex]) {
        member.payments[paymentIndex].statusPembayaran = "Reject";
        if (reason) {
          member.payments[paymentIndex].rejectionReason = reason;
        }
        loadPendingPaymentsTable();
        alert("Pembayaran telah ditolak.");
      }
    }
  }
}

// --- Profil form: state & toast ---
let formInitialState = null;
let formDirty = false;
let formToastTimer = null;

function getFormState() {
  return {
    statusAhli: document.getElementById("statusAhli").value,
    tarikhDaftar: document.getElementById("tarikhDaftar").value,
    tahunDaftar: document.getElementById("tahunDaftar").value,
    namaAhli: document.getElementById("namaAhli").value,
    jawatan: document.getElementById("jawatan").value,
    noHP: document.getElementById("noHP").value,
    jabatan: document.getElementById("jabatan").value,
    officeNo: document.getElementById("officeNo").value,
    alamat: document.getElementById("alamat").value,
    poskod: document.getElementById("poskod").value,
    negeri: document.getElementById("negeri").value,
    catatan: document.getElementById("catatan").value,
  };
}

function isFormDirty() {
  if (!formInitialState) return false;
  const current = getFormState();
  return Object.keys(formInitialState).some(
    (k) => current[k] !== formInitialState[k]
  );
}

function setFormDirty(dirty) {
  formDirty = dirty;
  const el = document.getElementById("unsavedIndicator");
  if (el) el.classList.toggle("hidden", !dirty);
}

function showToast(type, title, message) {
  const toast = document.getElementById("formToast");
  const icon = document.getElementById("formToastIcon");
  const titleEl = document.getElementById("formToastTitle");
  const msgEl = document.getElementById("formToastMessage");
  if (!toast || !icon || !titleEl || !msgEl) return;
  if (formToastTimer) clearTimeout(formToastTimer);
  toast.classList.remove("hidden");
  titleEl.textContent = title;
  msgEl.textContent = message;
  icon.className =
    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ";
  if (type === "success") {
    icon.classList.add("bg-primary-100", "text-primary-600");
    icon.innerHTML =
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
    toast.className =
      "fixed top-4 right-4 z-50 max-w-sm rounded-xl shadow-lg border border-primary-200 bg-white p-4 flex items-start gap-3";
  } else {
    icon.classList.add("bg-red-100", "text-red-600");
    icon.innerHTML =
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
    toast.className =
      "fixed top-4 right-4 z-50 max-w-sm rounded-xl shadow-lg border border-red-200 bg-white p-4 flex items-start gap-3";
  }
  formToastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

document
  .getElementById("formToastClose")
  .addEventListener("click", function () {
    if (formToastTimer) clearTimeout(formToastTimer);
    document.getElementById("formToast").classList.add("hidden");
  });

// Section toggles (collapsible)
function initSectionToggle(btnId, contentId) {
  const btn = document.getElementById(btnId);
  const content = document.getElementById(contentId);
  if (!btn || !content) return;
  btn.addEventListener("click", function () {
    const expanded = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", expanded);
    content.classList.toggle("collapsed", !expanded);
  });
}
initSectionToggle("sectionKeahlianToggle", "sectionKeahlianContent");
initSectionToggle("sectionProfileToggle", "sectionProfileContent");
initSectionToggle("sectionPaymentToggle", "sectionPaymentContent");

// Form inputs: track dirty & clear inline errors on input
document.querySelectorAll(".updateFormInput").forEach((el) => {
  el.addEventListener("input", function () {
    setFormDirty(isFormDirty());
    this.classList.remove("input-error");
    const err = document.getElementById("error-" + this.id);
    if (err) err.classList.add("hidden");
  });
  el.addEventListener("change", function () {
    setFormDirty(isFormDirty());
  });
});

// Search
document.getElementById("searchBtn").addEventListener("click", function () {
  const kp = document.getElementById("searchKP").value.trim();
  const member = membersData.find((m) => m.noKP === kp);

  if (member) {
    populateForm(member);
    document.getElementById("searchResult").classList.remove("hidden");
    setFormDirty(false);
    formInitialState = getFormState();
    const card = document.getElementById("searchResultCard");
    if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    showToast(
      "error",
      "Rekod tidak dijumpai",
      "Sila semak No Kad Pengenalan dan cuba lagi."
    );
    document.getElementById("searchResult").classList.add("hidden");
  }
});

function formatDateDisplay(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  const months = [
    "Jan",
    "Feb",
    "Mac",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ogo",
    "Sep",
    "Okt",
    "Nov",
    "Dis",
  ];
  return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

function populateForm(member) {
  document.getElementById("statusAhli").value = member.status;
  document.getElementById("noAhli").value = member.noAhli;
  document.getElementById("tarikhDaftar").value = member.tarikhDaftar;
  document.getElementById("tahunDaftar").value = member.tahunDaftar;
  document.getElementById("namaAhli").value = member.nama;
  document.getElementById("noKP").value = member.noKP;
  document.getElementById("jawatan").value = member.jawatan;
  document.getElementById("noHP").value = member.noHP;
  document.getElementById("jabatan").value = member.jabatan;
  document.getElementById("officeNo").value = member.officeNo;
  document.getElementById("alamat").value = member.alamat;
  document.getElementById("poskod").value = member.poskod;
  document.getElementById("negeri").value = member.negeri;
  document.getElementById("catatan").value = member.catatan;

  // Left column profile summary
  const nameEl = document.getElementById("profileName");
  const noKPEl = document.getElementById("profileNoKP");
  const jawatanBadge = document.getElementById("profileJawatanBadge");
  const statusBadge = document.getElementById("profileStatusBadge");
  const cardJabatan = document.getElementById("profileCardJabatan");
  const cardJawatan = document.getElementById("profileCardJawatan");
  const cardNoAhli = document.getElementById("profileCardNoAhli");
  const cardTarikh = document.getElementById("profileCardTarikhDaftar");
  if (nameEl) nameEl.textContent = member.nama || "—";
  if (noKPEl) noKPEl.textContent = member.noKP || "—";
  if (jawatanBadge) {
    jawatanBadge.textContent = member.jawatan || "—";
    jawatanBadge.className =
      "inline-flex rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800";
  }
  if (statusBadge) {
    statusBadge.textContent = member.status || "—";
    statusBadge.className =
      "inline-flex rounded-lg px-2.5 py-1 text-xs font-medium " +
      (member.status === "Aktif"
        ? "bg-emerald-100 text-emerald-800"
        : "bg-gray-200 text-zinc-700");
  }
  if (cardJabatan) cardJabatan.textContent = member.jabatan || "—";
  if (cardJawatan) cardJawatan.textContent = member.jawatan || "—";
  if (cardNoAhli) cardNoAhli.textContent = member.noAhli || "—";
  if (cardTarikh)
    cardTarikh.textContent = formatDateDisplay(member.tarikhDaftar);

  loadPayments(member.payments);
  formInitialState = getFormState();
}

function showRejectPaymentAlert() {
  if (typeof Swal !== "undefined") {
    Swal.fire({
      icon: "warning",
      title: "Status Pembayaran: Ditolak",
      text: "Tiada maklumat pembayaran diterima, sila kemukakan kembali.",
      confirmButtonText: "OK",
      confirmButtonColor: "#2563eb",
    });
  } else {
    alert("Tiada maklumat pembayaran diterima, sila kemukakan kembali.");
  }
}

function showDownloadInvoice(noResit, tahun, nilai) {
  const namaAhli = document.getElementById("namaAhli")
    ? document.getElementById("namaAhli").value
    : "";
  const noAhli = document.getElementById("noAhli")
    ? document.getElementById("noAhli").value
    : "";
  const noKP = document.getElementById("noKP")
    ? document.getElementById("noKP").value
    : "";
  const jabatan = document.getElementById("jabatan")
    ? document.getElementById("jabatan").value
    : "";
  const today = new Date();
  const dateStr =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const invoiceNo =
    "INV-" +
    tahun +
    "-" +
    (noResit ? noResit.replace(/\D/g, "").slice(-4) : "0001");

  const invoiceHtml = `
<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <title>Invois - ${invoiceNo}</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 800px; margin: 0 auto; padding: 24px; color: #1f2937; }
    .header { border-bottom: 2px solid #22c55e; padding-bottom: 16px; margin-bottom: 24px; }
    .header h1 { margin: 0; font-size: 24px; color: #166534; }
    .header p { margin: 4px 0 0; font-size: 14px; color: #4b5563; }
    .meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 24px; margin-bottom: 24px; }
    .meta-box { flex: 1; min-width: 200px; }
    .meta-box h3 { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin: 0 0 6px; }
    .meta-box p { margin: 0; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin: 24px 0; }
    th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #e5e7eb; }
    th { background: #f9fafb; font-size: 12px; text-transform: uppercase; color: #6b7280; }
    .amount-row { font-weight: 600; font-size: 18px; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
    .no-print { margin-top: 24px; text-align: center; }
    .btn { display: inline-block; padding: 10px 20px; background: #22c55e; color: white; border: none; border-radius: 8px; font-size: 14px; cursor: pointer; }
    .btn:hover { background: #16a34a; }
    @media print { .no-print { display: none !important; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Sistem Keahlian</h1>
    <p>Invois Bayaran Yuran Keahlian</p>
  </div>
  <div class="meta">
    <div class="meta-box">
      <h3>Bill To</h3>
      <p><strong>${namaAhli || "—"}</strong><br>No Ahli: ${
    noAhli || "—"
  }<br>No KP: ${noKP || "—"}<br>${jabatan ? "Jabatan: " + jabatan : ""}</p>
    </div>
    <div class="meta-box">
      <h3>Invois</h3>
      <p>No Invois: <strong>${invoiceNo}</strong><br>Tarikh: ${dateStr}<br>No Resit: ${
    noResit || "—"
  }</p>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Perkara</th>
        <th>Tahun</th>
        <th>No Resit</th>
        <th style="text-align:right">Jumlah (RM)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yuran Keahlian</td>
        <td>${tahun}</td>
        <td>${noResit || "—"}</td>
        <td style="text-align:right">${nilai}.00</td>
      </tr>
      <tr class="amount-row">
        <td colspan="3" style="text-align:right">Jumlah Keseluruhan</td>
        <td style="text-align:right">RM ${nilai}.00</td>
      </tr>
    </tbody>
  </table>
  <div class="footer">
    <p>Ini adalah invois sampel. Terima kasih atas pembayaran anda.</p>
    <p>Sistem Keahlian &copy; ${today.getFullYear()}</p>
  </div>
  <div class="no-print">
    <button class="btn" onclick="window.print()">Muat turun / Cetak (Save as PDF)</button>
  </div>
  <script>window.onload=function(){window.focus();}<\/script>
</body>
</html>`;

  const w = window.open("", "_blank", "width=800,height=700,scrollbars=yes");
  if (w) {
    w.document.write(invoiceHtml);
    w.document.close();
  } else {
    alert("Sila benarkan pop-up untuk memaparkan invois.");
  }
}

function getStatusBadgeClass(status) {
  const s = (status || "").toLowerCase();
  if (s === "success") return "bg-emerald-100 text-emerald-800";
  if (s === "pending") return "bg-amber-100 text-amber-800";
  if (s === "reject") return "bg-red-100 text-red-800";
  return "bg-gray-100 text-gray-700";
}

function loadPayments(payments) {
  const section = document.getElementById("paymentSection");
  section.innerHTML = "";

  payments.forEach((payment, index) => {
    const jenis = payment.jenisPembayaran || "Cash";
    const status = payment.statusPembayaran || "Pending";
    const statusClass = getStatusBadgeClass(status);
    const isReject = status === "Reject";
    const isSuccess = status === "Success";
    const noResitEsc = (payment.noResit || "").replace(/'/g, "\\'");
    const rejectBtn = isReject
      ? `<button type="button" onclick="showRejectPaymentAlert()" class="mt-2 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-200 transition-colors">Lihat maklumat</button>`
      : "";
    const invoiceBtn = isSuccess
      ? `<button type="button" onclick="showDownloadInvoice('${noResitEsc}', ${payment.tahun}, ${payment.nilai})" class="mt-2 rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-200 transition-colors inline-flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> Download Invoice</button>`
      : "";
    const paymentHtml = `
            <div class="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                        <label class="block text-xs font-medium text-zinc-500 mb-1">Tahun Bayar</label>
                        <input type="number" class="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm text-zinc-700 cursor-not-allowed" value="${payment.tahun}" readonly>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-zinc-500 mb-1">No Resit</label>
                        <input type="text" class="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm text-zinc-700 cursor-not-allowed" value="${payment.noResit}" readonly>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-zinc-500 mb-1">Nilai (RM)</label>
                        <input type="number" class="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm text-zinc-700 cursor-not-allowed" value="${payment.nilai}" readonly>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-zinc-500 mb-1">Jenis Pembayaran</label>
                        <input type="text" class="w-full rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm text-zinc-700 cursor-not-allowed" value="${jenis}" readonly>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-zinc-500 mb-1">Status Pembayaran</label>
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="inline-flex rounded-lg px-2.5 py-1.5 text-xs font-semibold ${statusClass}">${status}</span>
                            ${rejectBtn}
                            ${invoiceBtn}
                        </div>
                    </div>
                </div>
            </div>
        `;
    section.innerHTML += paymentHtml;
  });
}

document.getElementById("addPaymentBtn").addEventListener("click", function () {
  const section = document.getElementById("paymentSection");
  const paymentHtml = `
        <div class="rounded-xl bg-gray-50 border border-gray-200 p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                    <label class="block text-xs font-medium text-zinc-500 mb-1">Tahun Bayar</label>
                    <input type="number" class="w-full rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 focus:border-primary-500 focus:outline-none" placeholder="2026">
                </div>
                <div>
                    <label class="block text-xs font-medium text-zinc-500 mb-1">No Resit</label>
                    <input type="text" class="w-full rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 focus:border-primary-500 focus:outline-none" placeholder="R2026001">
                </div>
                <div>
                    <label class="block text-xs font-medium text-zinc-500 mb-1">Nilai (RM)</label>
                    <input type="number" class="w-full rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 focus:border-primary-500 focus:outline-none" placeholder="100">
                </div>
                <div>
                    <label class="block text-xs font-medium text-zinc-500 mb-1">Jenis Pembayaran</label>
                    <select class="w-full rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm text-zinc-800 focus:border-primary-500 focus:outline-none">
                        <option value="Cash">Cash</option>
                        <option value="Online Banking">Online Banking</option>
                        <option value="Direct Transfer">Direct Transfer</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-medium text-zinc-500 mb-1">Status Pembayaran</label>
                    <select class="w-full rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm text-zinc-800 focus:border-primary-500 focus:outline-none">
                        <option value="Success">Success</option>
                        <option value="Pending">Pending</option>
                        <option value="Reject">Reject</option>
                    </select>
                </div>
            </div>
        </div>
    `;
  section.innerHTML += paymentHtml;
});

// Inline validation helpers
function showFieldError(id, message) {
  const input = document.getElementById(id);
  const errEl = document.getElementById("error-" + id);
  if (input) input.classList.add("input-error");
  if (errEl) {
    errEl.textContent = message || "Ruangan ini wajib diisi.";
    errEl.classList.remove("hidden");
  }
}
function clearAllFormErrors() {
  document
    .querySelectorAll(".updateFormInput")
    .forEach((el) => el.classList.remove("input-error"));
  document
    .querySelectorAll(".form-error")
    .forEach((el) => el.classList.add("hidden"));
}

function validateUpdateForm() {
  clearAllFormErrors();
  let valid = true;
  const required = [
    "statusAhli",
    "tarikhDaftar",
    "tahunDaftar",
    "namaAhli",
    "jawatan",
    "noHP",
    "jabatan",
    "alamat",
    "poskod",
    "negeri",
  ];
  required.forEach((id) => {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      showFieldError(id, "Ruangan ini wajib diisi.");
      valid = false;
    }
  });
  const poskod = document.getElementById("poskod");
  if (poskod && poskod.value && !/^\d{5}$/.test(poskod.value.trim())) {
    showFieldError("poskod", "Poskod mesti 5 digit nombor.");
    valid = false;
  }
  const tahun = document.getElementById("tahunDaftar");
  if (tahun && tahun.value) {
    const y = parseInt(tahun.value, 10);
    if (y < 1900 || y > 2100) {
      showFieldError("tahunDaftar", "Tahun mesti antara 1900–2100.");
      valid = false;
    }
  }
  return valid;
}

document.getElementById("updateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateUpdateForm()) {
    showToast(
      "error",
      "Sila betulkan ralat",
      "Semak ruangan yang diserlahkan."
    );
    document
      .querySelector(".input-error")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const btn = document.getElementById("submitUpdateBtn");
  const textSpan = document.getElementById("submitUpdateText");
  const loadingSpan = document.getElementById("submitUpdateLoading");
  btn.disabled = true;
  textSpan.classList.add("hidden");
  loadingSpan.classList.remove("hidden");
  setTimeout(() => {
    btn.disabled = false;
    textSpan.classList.remove("hidden");
    loadingSpan.classList.add("hidden");
    setFormDirty(false);
    formInitialState = getFormState();
    showToast("success", "Berjaya", "Rekod ahli telah dikemaskini.");
  }, 800);
});

document.getElementById("cancelBtn").addEventListener("click", function () {
  if (
    formDirty &&
    !confirm("Ada perubahan belum disimpan. Adakah anda pasti mahu batal?")
  )
    return;
  document.getElementById("searchResult").classList.add("hidden");
  document.getElementById("searchKP").value = "";
  setFormDirty(false);
  clearAllFormErrors();
});

function viewMember(noKP) {
  document
    .querySelectorAll(".sidebar .nav-link")
    .forEach((l) => l.classList.remove("active"));
  document.querySelectorAll(".sidebar .nav-link")[4].classList.add("active");

  document
    .querySelectorAll(".page-view")
    .forEach((view) => view.classList.add("hidden"));
  document.getElementById("searchView").classList.remove("hidden");
  document.getElementById("pageTitle").textContent = "Carian & Kemaskini";

  document.getElementById("searchKP").value = noKP;
  document.getElementById("searchBtn").click();
}

// Add Member Form - Multistep
let currentStep = 1;
const totalSteps = 3;
let newMemberPayments = [];

function initAddMemberForm() {
  currentStep = 1;
  newMemberPayments = [];
  updateStepDisplay();
  clearAddMemberForm();

  // Defaults: Status = Aktif, No Ahli = auto-increment from existing data
  document.getElementById("newStatusAhli").value = "Aktif";
  generateNewMemberNo();
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("newTarikhDaftar").value = today;
  document.getElementById("newTahunDaftar").value = new Date().getFullYear();
}

function generateNewMemberNo() {
  const maxNo = membersData.reduce((max, m) => {
    const num = parseInt(m.noAhli.replace("A", ""));
    return num > max ? num : max;
  }, 0);
  const nextNo = maxNo + 1;
  document.getElementById("newNoAhli").value =
    "A" + String(nextNo).padStart(3, "0");
}

function clearAddMemberForm() {
  document.getElementById("addMemberForm").reset();
  document.getElementById("newPaymentSection").innerHTML = "";
  document.querySelectorAll(".addMemberInput").forEach((input) => {
    input.classList.remove("input-error");
    const errorEl = document.getElementById("error-" + input.id);
    if (errorEl) errorEl.classList.add("hidden");
  });
}

function updateStepDisplay() {
  // Update step indicators
  for (let i = 1; i <= totalSteps; i++) {
    const indicator = document.querySelector(`[data-step="${i}"]`);
    if (i < currentStep) {
      indicator.classList.remove(
        "bg-gray-200",
        "text-gray-600",
        "bg-primary-500",
        "text-white"
      );
      indicator.classList.add("bg-primary-600", "text-white");
      indicator.innerHTML =
        '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
    } else if (i === currentStep) {
      indicator.classList.remove(
        "bg-gray-200",
        "text-gray-600",
        "bg-primary-600",
        "text-white"
      );
      indicator.classList.add("bg-primary-500", "text-white");
      indicator.textContent = i;
    } else {
      indicator.classList.remove(
        "bg-primary-500",
        "text-white",
        "bg-primary-600",
        "text-white"
      );
      indicator.classList.add("bg-gray-200", "text-gray-600");
      indicator.textContent = i;
    }
  }

  // Update progress bars
  document.getElementById("progressBar1").style.width =
    currentStep > 1 ? "100%" : "0%";
  document.getElementById("progressBar2").style.width =
    currentStep > 2 ? "100%" : currentStep > 1 ? "100%" : "0%";

  // Show/hide step content
  for (let i = 1; i <= totalSteps; i++) {
    const stepEl = document.getElementById(`step${i}`);
    if (i === currentStep) {
      stepEl.classList.add("active");
    } else {
      stepEl.classList.remove("active");
    }
  }

  // Update navigation buttons
  document
    .getElementById("prevStepBtn")
    .classList.toggle("hidden", currentStep === 1);
  document
    .getElementById("nextStepBtn")
    .classList.toggle("hidden", currentStep === totalSteps);
  document
    .getElementById("submitAddMemberBtn")
    .classList.toggle("hidden", currentStep !== totalSteps);
}

function validateStep(step) {
  let isValid = true;
  const stepFields = {
    1: ["newTarikhDaftar", "newTahunDaftar"],
    2: [
      "newNamaAhli",
      "newNoKP",
      "newJawatan",
      "newNoHP",
      "newJabatan",
      "newAlamat",
      "newPoskod",
      "newNegeri",
    ],
    3: [],
  };

  const fields = stepFields[step] || [];
  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById("error-" + fieldId);

    if (field.hasAttribute("required") && !field.value.trim()) {
      isValid = false;
      field.classList.add("input-error");
      if (errorEl) {
        errorEl.textContent = "Medan ini diperlukan";
        errorEl.classList.remove("hidden");
      }
    } else {
      field.classList.remove("input-error");
      if (errorEl) errorEl.classList.add("hidden");
    }

    // Special validations
    if (fieldId === "newNoKP" && field.value) {
      // Remove dashes for validation (accept both formatted and unformatted)
      const cleanKP = field.value.replace(/-/g, "");
      if (cleanKP.length !== 12 || !/^\d{12}$/.test(cleanKP)) {
        isValid = false;
        field.classList.add("input-error");
        if (errorEl) {
          errorEl.textContent = "No KP mesti mengandungi 12 digit";
          errorEl.classList.remove("hidden");
        }
      } else {
        // Format: YYMMDD-PB-GGGG
        const formattedKP =
          cleanKP.slice(0, 6) +
          "-" +
          cleanKP.slice(6, 8) +
          "-" +
          cleanKP.slice(8, 12);
        // Check for duplicate No KP (check both formatted and unformatted)
        const duplicate = membersData.find((m) => {
          const mClean = m.noKP.replace(/-/g, "");
          return mClean === cleanKP || m.noKP === formattedKP;
        });
        if (duplicate) {
          isValid = false;
          field.classList.add("input-error");
          if (errorEl) {
            errorEl.textContent = "No KP ini sudah wujud dalam sistem";
            errorEl.classList.remove("hidden");
          }
        }
      }
    }

    if (fieldId === "newPoskod" && field.value) {
      if (!/^\d{5}$/.test(field.value)) {
        isValid = false;
        field.classList.add("input-error");
        if (errorEl) {
          errorEl.textContent = "Poskod mesti 5 digit";
          errorEl.classList.remove("hidden");
        }
      }
    }

    if (fieldId === "newTahunDaftar" && field.value) {
      const year = parseInt(field.value);
      if (year < 1900 || year > 2100) {
        isValid = false;
        field.classList.add("input-error");
        if (errorEl) {
          errorEl.textContent = "Tahun mesti antara 1900 dan 2100";
          errorEl.classList.remove("hidden");
        }
      }
    }
  });

  return isValid;
}

// Step navigation
document.getElementById("nextStepBtn")?.addEventListener("click", function () {
  if (validateStep(currentStep)) {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStepDisplay();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
});

document.getElementById("prevStepBtn")?.addEventListener("click", function () {
  if (currentStep > 1) {
    currentStep--;
    updateStepDisplay();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Add payment row
document
  .getElementById("addNewPaymentBtn")
  ?.addEventListener("click", function () {
    const paymentId = Date.now();
    const paymentRow = document.createElement("div");
    paymentRow.className = "border border-gray-200 rounded-lg p-4 bg-gray-50";
    paymentRow.id = `payment-${paymentId}`;
    paymentRow.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1.5">Tahun</label>
        <input type="number" class="newPaymentInput w-full rounded-lg border border-gray-300 px-3 py-2 text-zinc-800" placeholder="2024" min="2000" max="2100" data-payment-id="${paymentId}" data-field="tahun">
      </div>
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1.5">No Resit</label>
        <input type="text" class="newPaymentInput w-full rounded-lg border border-gray-300 px-3 py-2 text-zinc-800" placeholder="R2024001" data-payment-id="${paymentId}" data-field="noResit">
      </div>
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1.5">Nilai (RM)</label>
        <input type="number" class="newPaymentInput w-full rounded-lg border border-gray-300 px-3 py-2 text-zinc-800" placeholder="100" min="0" step="0.01" data-payment-id="${paymentId}" data-field="nilai">
      </div>
      <div>
        <label class="block text-sm font-medium text-zinc-700 mb-1.5">Jenis Pembayaran</label>
        <select class="newPaymentInput w-full rounded-lg border border-gray-300 px-3 py-2 text-zinc-800" data-payment-id="${paymentId}" data-field="jenisPembayaran">
          <option value="Cash">Cash</option>
          <option value="Online Banking">Online Banking</option>
          <option value="Direct Transfer">Direct Transfer</option>
        </select>
      </div>
      <div class="md:col-span-4 flex justify-end">
        <button type="button" class="removePaymentBtn text-red-600 hover:text-red-700 text-sm font-medium" data-payment-id="${paymentId}">
          <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Buang
        </button>
      </div>
    </div>
  `;
    document.getElementById("newPaymentSection").appendChild(paymentRow);

    // Remove payment handler
    paymentRow
      .querySelector(".removePaymentBtn")
      .addEventListener("click", function () {
        document.getElementById(`payment-${paymentId}`).remove();
      });
  });

// Form submission
document
  .getElementById("addMemberForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    const submitBtn = document.getElementById("submitAddMemberBtn");
    const submitText = document.getElementById("submitAddMemberText");
    const submitLoading = document.getElementById("submitAddMemberLoading");

    submitBtn.disabled = true;
    submitText.classList.add("hidden");
    submitLoading.classList.remove("hidden");

    // Collect payment data
    const payments = [];
    document.querySelectorAll(".newPaymentInput").forEach((input) => {
      const paymentId = input.dataset.paymentId;
      const field = input.dataset.field;
      if (paymentId && field && input.value) {
        let payment = payments.find((p) => p.id === paymentId);
        if (!payment) {
          payment = { id: paymentId };
          payments.push(payment);
        }
        if (field === "tahun" || field === "nilai") {
          payment[field] = parseFloat(input.value);
        } else {
          payment[field] = input.value;
        }
      }
    });

    // Create new member object
    const newMember = {
      noAhli: document.getElementById("newNoAhli").value,
      tarikhDaftar: document.getElementById("newTarikhDaftar").value,
      tahunDaftar: parseInt(document.getElementById("newTahunDaftar").value),
      nama: document.getElementById("newNamaAhli").value,
      noKP: document.getElementById("newNoKP").value,
      jawatan: document.getElementById("newJawatan").value,
      jabatan: document.getElementById("newJabatan").value,
      status: document.getElementById("newStatusAhli").value,
      noHP: document.getElementById("newNoHP").value,
      officeNo: document.getElementById("newOfficeNo").value || "",
      alamat: document.getElementById("newAlamat").value,
      poskod: document.getElementById("newPoskod").value,
      negeri: document.getElementById("newNegeri").value,
      catatan: document.getElementById("newCatatan").value || "",
      payments: payments.map((p) => ({
        tahun: p.tahun,
        noResit: p.noResit,
        nilai: p.nilai,
        jenisPembayaran: p.jenisPembayaran,
        statusPembayaran: "Success",
      })),
    };

    // Simulate API call
    setTimeout(() => {
      membersData.push(newMember);

      submitBtn.disabled = false;
      submitText.classList.remove("hidden");
      submitLoading.classList.add("hidden");

      showAddMemberToast(
        "success",
        "Berjaya",
        "Ahli baru telah ditambah dengan jayanya."
      );

      setTimeout(() => {
        clearAddMemberForm();
        initAddMemberForm();
        // Navigate to dashboard
        document.querySelector('[data-page="dashboard"]').click();
      }, 2000);
    }, 1000);
  });

// Cancel button
document
  .getElementById("cancelAddMemberBtn")
  ?.addEventListener("click", function () {
    if (
      confirm(
        "Adakah anda pasti mahu membatalkan? Semua data yang dimasukkan akan hilang."
      )
    ) {
      clearAddMemberForm();
      initAddMemberForm();
      document.querySelector('[data-page="dashboard"]').click();
    }
  });

// Toast for add member
function showAddMemberToast(type, title, message) {
  const toast = document.getElementById("addMemberToast");
  const icon = document.getElementById("addMemberToastIcon");
  const titleEl = document.getElementById("addMemberToastTitle");
  const messageEl = document.getElementById("addMemberToastMessage");

  titleEl.textContent = title;
  messageEl.textContent = message;

  if (type === "success") {
    icon.className =
      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-green-100";
    icon.innerHTML =
      '<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
    toast.className =
      "fixed top-4 right-4 z-50 max-w-sm rounded-xl shadow-lg border border-green-200 bg-white p-4 flex items-start gap-3";
  } else {
    icon.className =
      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-red-100";
    icon.innerHTML =
      '<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
    toast.className =
      "fixed top-4 right-4 z-50 max-w-sm rounded-xl shadow-lg border border-red-200 bg-white p-4 flex items-start gap-3";
  }

  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}

document
  .getElementById("addMemberToastClose")
  ?.addEventListener("click", function () {
    document.getElementById("addMemberToast").classList.add("hidden");
  });

// Format No KP input automatically (12 digits -> xxxxxx-xx-xxxx)
document.getElementById("newNoKP")?.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

  // Limit to 12 digits
  if (value.length > 12) {
    value = value.slice(0, 12);
  }

  // Format: YYMMDD-PB-GGGG
  if (value.length > 6) {
    value = value.slice(0, 6) + "-" + value.slice(6);
  }
  if (value.length > 9) {
    value = value.slice(0, 9) + "-" + value.slice(9);
  }

  e.target.value = value;

  // Clear error
  e.target.classList.remove("input-error");
  const errorEl = document.getElementById("error-newNoKP");
  if (errorEl) errorEl.classList.add("hidden");
});

// Clear errors on input (event delegation)
document
  .getElementById("addMemberForm")
  ?.addEventListener("input", function (e) {
    if (
      e.target.classList.contains("addMemberInput") ||
      e.target.classList.contains("newPaymentInput")
    ) {
      e.target.classList.remove("input-error");
      const errorEl = document.getElementById("error-" + e.target.id);
      if (errorEl) errorEl.classList.add("hidden");
    }
  });

// Window resize handler for responsive charts
let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    const activeView = document.querySelector(".page-view:not(.hidden)");
    if (activeView && activeView.id === "dashboardView") {
      initDashboard();
    }
  }, 250);
});

// Initialize dashboard after scripts are loaded
// Since scripts are loaded at bottom of HTML, DOM should be ready
// But Chart.js might need a moment to initialize
(function initializeDashboard() {
  if (typeof Chart === "undefined") {
    // Chart.js not loaded yet, wait and retry
    setTimeout(initializeDashboard, 50);
    return;
  }

  // Check if required DOM elements exist
  const dashboardView = document.getElementById("dashboardView");
  if (!dashboardView) {
    console.error("Dashboard view not found");
    return;
  }

  console.log("Initializing dashboard...");
  initDashboard();
})();
