document.getElementById("btn-add").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup-edit").style.display = "none";
  const idInput = document.querySelector("#id_edit");
  const namaInput = document.querySelector("#nama_edit");
  const emailInput = document.querySelector("#email_edit");
  const jabatanInput = document.querySelector("#jabatan_edit");
  const phoneInput = document.querySelector("#phone_edit");
  idInput.value = "";
  namaInput.value = "";
  emailInput.value = "";
  jabatanInput.value = "";
  phoneInput.value = "";
});

// URL JSON yang akan diambil data-nya
const url = "https://be-palembang-30.vercel.app/doctors";

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
                      <td>${item.jabatan}</td>
                      <td>${item.email}</td>
                      <td>${item.phone_number}</td>
                      <td>
                          <button class="btn-edit" onclick="panggilEditData(${item.id})">Edit</button>
                          <button class="btn-delete" onclick="deleteData(${item.id})">Delete</button>
                      </td>
                  `;
    tableBody.appendChild(row);
    index++;
  });
}

// FUNGSI UNTUK KONFIRMASI DAN MENAMPILKAN FORM INPUT EDIT DATA
async function panggilEditData(id) {
  //   const confirm = window.confirm(`edit data dengan id ${id}`);
  const confirm = await Swal.fire({
    title: `Edit Data dengan id ${id}?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cencelButtonText: "Batal",
    confirmButtonText: "Edit",
  });
  if (confirm.isConfirmed) {
    document.querySelector(".popup-edit").style.display = "flex";
    loadDataInput(id);
  }
}

// FUNGSI UNTUK MENGEDIT DATA _____(PUT)______
async function editData(id, value_editData) {
  const response = await fetch(
    `https://be-palembang-30.vercel.app/doctors/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value_editData),
    }
  );

  if (response.ok) {
    alert(`Data berhasil diupdate`);
    tampilData();
  } else {
    alert(`Gagal diupdate`);

    console.error("Gagal mengupdate data:", response.statusText);
  }
}

// FUNGSI UNTUK MENGAMBIL DATA BERDASARKAN ID _____(GET)______
async function fetchDataById(id) {
  try {
    const response = await fetch(
      `https://be-palembang-30.vercel.app/doctors/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// FUNGSI UNTUK MENAMPILKAN DATA DERDASARKAN ID UNTUK DI EDIT
async function loadDataInput(id) {
  const data = await fetchDataById(id);

  if (data) {
    const idInput = document.querySelector("#id_edit");
    const namaInput = document.querySelector("#nama_edit");
    const emailInput = document.querySelector("#email_edit");
    const jabatanInput = document.querySelector("#jabatan_edit");
    const phoneInput = document.querySelector("#phone_edit");
    idInput.value = data.id;
    namaInput.value = data.name;
    emailInput.value = data.email;
    jabatanInput.value = data.jabatan;
    phoneInput.value = data.phone_number;
  } else {
    alert(`Data tidak ${id} ditemukan`);
  }
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
      const url_delete = `https://be-palembang-30.vercel.app/doctors/${id}`;

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

// FUNGSI UNTUK MENGIRIM DATA _____(POST)______
async function postData(newData) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  if (response.ok) {
    // return response.json();
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Data berhasil ditambah",
    });
    tampilData();
  } else {
    console.error("Gagal mengirim data ke API");
  }
}

// HANDLE UNTUK MENGAMBIL DATA DARI INPUTAN UNTUK SIMPAN DATA _____(POST)______
const dataForm = document.querySelector("#btn-simpan");
dataForm.addEventListener("click", function (event) {
  event.preventDefault();
  const namaInput = document.querySelector("#nama");
  const emailInput = document.querySelector("#email");
  const jabatanInput = document.querySelector("#jabatan");
  const phoneInput = document.querySelector("#phone");

  const newData = {
    name: namaInput.value,
    email: emailInput.value,
    jabatan: jabatanInput.value,
    phone_number: phoneInput.value,
  };
  postData(newData);
  document.querySelector(".popup").style.display = "none";
});

// HENDLE UNTUK MENGAMBIL DATA DARI INPUTAN UNTUK EDIT DATA _____(PUT)______
const editForm = document.querySelector("#btn-edit-simpan");
editForm.addEventListener("click", async function (event) {
  event.preventDefault();
  const idInput1 = document.querySelector("#id_edit");
  const namaInput1 = document.querySelector("#nama_edit");
  const emailInput1 = document.querySelector("#email_edit");
  const jabatanInput1 = document.querySelector("#jabatan_edit");
  const phoneInput1 = document.querySelector("#phone_edit");

  const idToUpdate = idInput1.value;
  const value_editData = {
    name: namaInput1.value,
    email: emailInput1.value,
    jabatan: jabatanInput1.value,
    phone_number: phoneInput1.value,
  };
  editData(idToUpdate, value_editData);
  document.querySelector(".popup-edit").style.display = "none";
});

// MEMANGGIL FUNGSI UNTUK MENAMPILKAN DATA
tampilData();
