const url = "https://backend-capstone-lessugar.vercel.app/feedbacks";
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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank You For The Feedback",
      showConfirmButton: false,
      timer: 2000,
    });
  } else {
    console.error("Gagal mengirim data ke API");
  }
}

// HANDLE UNTUK MENGAMBIL DATA DARI INPUTAN UNTUK SIMPAN DATA _____(POST)______
const formFeedback = document.getElementById("btn-send");
formFeedback.addEventListener("click", function (event) {
  event.preventDefault();
  const namaInput = document.getElementById("nama1");
  const emailInput = document.getElementById("email");
  const subjekInput = document.getElementById("subjek");
  const pesanInput = document.getElementById("pesan");

  console.log(namaInput);
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

// UNTUK MEMANGGIL DATA UNTUK DITAMPILKAN KE USER TESTIMONIAL _____(POST)_____
const ambilData = async () => {
  const response = await fetch(
    "https://backend-capstone-lessugar.vercel.app/feedbacks"
  );
  const feedbacks = await response.json();
  console.log(feedbacks);

  const h = "text/html";
  let parser = new DOMParser();

  feedbacks.forEach((feedback) => {
    let feedbackStr = `
          <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                <img src="asset/user1.jpg" alt="" class="card-img" />
              </div>
            </div>

            <div class="card-content">
              <h4 class="name">${feedback.name}</h4>
              <p class="description">
              ${feedback.feedback}
              </p>
            </div>
          </div>
                `;
    let el = parser.parseFromString(feedbackStr, h);
    let root = document.querySelector("div.card-wrapper");
    root.appendChild(el.body.firstChild);
  });
};

ambilData();
