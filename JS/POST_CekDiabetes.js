const url = "https://backend-capstone-lessugar.vercel.app/diabetesChecks";
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
    Swal.fire({
      title: "Next",
      text: "Jawab 10 pertanyaan sesuai dengan kondisi anda sekarang",
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Next",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "soal_diabetes.html";
      }
    });
  } else {
    console.error("Gagal mengirim data ke API");
  }
}

// HANDLE UNTUK MENGAMBIL DATA DARI INPUTAN UNTUK SIMPAN DATA _____(POST)______
const dataForm = document.querySelector("#btn-kirim");
dataForm.addEventListener("click", function (event) {
  event.preventDefault();
  const namaInput = document.querySelector("#nama");
  const emailInput = document.querySelector("#email");
  const ageInput = document.querySelector("#age");
  const jkInput = document.querySelector("#jk");
  // const selectJk = document.querySelector('input[name="jk"]:checked').value;

  // const jenis_kelamin = { jk: selectJk };
  const newData = {
    name: namaInput.value,
    email: emailInput.value,
    age: ageInput.value,
    gender: jkInput.value,
  };
  postData(newData);
});
