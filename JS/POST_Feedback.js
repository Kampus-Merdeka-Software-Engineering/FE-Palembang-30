const url = "https://be-palembang-30.vercel.app/feedbacks";
// FUNGSI UNTUK MENGIRIM DATA _____(POST)______
async function kirimData(newData) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  if (response.ok) {
    // return response.json();
    // Swal.fire("Sukses", "Berhasil simpan data", "success");
    alert("sukses");
  } else {
    console.error("Gagal mengirim data ke API");
  }
}

// HANDLE UNTUK MENGAMBIL DATA DARI INPUTAN UNTUK SIMPAN DATA _____(POST)______
const formFeedback = document.querySelector("#btn-send");
formFeedback.addEventListener("click", function (event) {
  event.preventDefault();
  const namaInput = document.querySelector("#nama1");
  const emailInput = document.querySelector("#email");
  const subjekInput = document.querySelector("#subjek");
  const pesanInput = document.querySelector("#pesan");

  const newData = {
    name: namaInput.value,
    email: emailInput.value,
    subject: subjekInput.value,
    feedback: pesanInput.value,
  };
  kirimData(newData);
  namaInput.value = "";
  emailInput.value = "";
  subjekInput.value = "";
  pesanInput.value = "";
});
