// URL JSON yang akan diambil data-nya
// const url = "https://be-palembang-30.vercel.app/diabetesChecks"
const url = "https://backend-capstone-lessugar.vercel.app/diabetesChecks";

// FUNGSI UNTUK MENGAMBIL DATA JSON DARI URL _____(GET)______
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// FUNGSI UNTUK MENAMPILKAN DATA KEDALAM TABEL
async function tampilData() {
  const data = await fetchData();
  const tableBody = document.querySelector("#data-table tbody");

  tableBody.innerHTML = "";
  let index = 1;

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                      <td>${index}</td>
                      <td>${item.name}</td>
                      <td>${item.email}</td>
                      <td>${item.age}</td>
                      <td>${item.gender}</td>
                      <td>
                          <button class="btn-delete" onclick="deleteData(${item.id})">Delete</button>
                      </td>
                  `;
    tableBody.appendChild(row);
    index++;
  });
}

// FUNGSI UNTUK MENGHAPUS DATA _____(DELETE)______
async function deleteData(id) {
  //   const confirmation = window.confirm("yakin ingin manghapus ini?");
  const confirm = await Swal.fire({
    title: "Anda Yakin?",
    text: "Ingin menghapus data ini!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cencelButtonText: "Batal",
    confirmButtonText: "Ya, Hapus",
  });

  if (confirm.isConfirmed) {
    try {
      const url_delete = `https://backend-capstone-lessugar.vercel.app/diabetesChecks/${id}`;

      const response = await fetch(url_delete, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        Swal.fire("Deleted!", "Data berhasil di hapus.", "success");
        tampilData();
      } else {
        console.error("Gagal menghapus data: ", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
tampilData();
