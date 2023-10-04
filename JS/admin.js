// Fungsi untuk mengedit data
    function editData(rowNumber) {
      // Mengubah elemen menjadi input untuk diedit
      var namaElement = document.getElementById('nama-' + rowNumber);
      var emailElement = document.getElementById('email-' + rowNumber);
      var umurElement = document.getElementById('umur-' + rowNumber);
      var jeniskelaminElement = document.getElementById('jenis-kelamin-' + rowNumber);
      

      // Mengubah elemen menjadi input untuk diedit
      namaElement.innerHTML = '<input type="text" id="edit-nama-' + rowNumber + '" value="' + namaElement.innerHTML + '">';
      emailElement.innerHTML = '<input type="text" id="edit-email-' + rowNumber + '" value="' + emailElement.innerHTML + '">';
      umurElement.innerHTML = '<input type="text" id="edit-umur-' + rowNumber + '" value="' + umurElement.innerHTML + '">';
      jeniskelaminElement.innerHTML = '<input type="text" id="edit-jenis-kelamin-' + rowNumber + '" value="' + jeniskelaminElement.innerHTML + '">';
      emailElement.innerHTML = '<input type="text" id="edit-email-' + rowNumber + '" value="' + emailElement.innerHTML + '">';
      

      // Menambahkan tombol simpan
      var actionCell = document.querySelector('#data-table .data-row:nth-child(' + (rowNumber + 1) + ') .data-cell:last-child');
      actionCell.innerHTML = '<img src="asset/save.jpg" alt="Save" class="action-icon" onclick="saveData(' + rowNumber + ')">';
      var actionCell = document.querySelector('#data-table .data-row:nth-child(' + (rowNumber + 2) + ') .data-cell:last-child');
      actionCell.innerHTML = '<img src="asset/save.jpg" alt="Save" class="action-icon" onclick="saveData(' + rowNumber + ')">';
      var actionCell = document.querySelector('#data-table .data-row:nth-child(' + (rowNumber + 3) + ') .data-cell:last-child');
      actionCell.innerHTML = '<img src="asset/save.jpg" alt="Save" class="action-icon" onclick="saveData(' + rowNumber + ')">';
    }
    
    

    // Fungsi untuk menyimpan data yang diedit
    function saveData(rowNumber) {
      // Mendapatkan nilai dari input yang diedit
      var editedNama = document.getElementById('edit-nama-' + rowNumber).value;
      var editedEmail = document.getElementById('edit-email-' + rowNumber).value;
      var editedUmur = document.getElementById('edit-umur-' + rowNumber).value;
      var editedJenisKelamin = document.getElementById('edit-jenis-kelamin-' + rowNumber).value;

      // Mengganti elemen input dengan nilai yang diedit
      document.getElementById('nama-' + rowNumber).innerHTML = editedNama;
      document.getElementById('email-' + rowNumber).innerHTML = editedEmail;
      document.getElementById('umur-' + rowNumber).innerHTML = editedUmur;
      document.getElementById('jenis-kelamin-' + rowNumber).innerHTML = editedJenisKelamin;

      // Menambahkan kembali tombol edit dan delete
      var actionCell = document.querySelector('#data-table .data-row:nth-child(' + (rowNumber + 1) + ') .data-cell:last-child');
      actionCell.innerHTML = '<img src="asset/edit.jpg" alt="Edit" class="action-icon" onclick="editData(' + rowNumber + ')">';
      actionCell.innerHTML += '<img src="asset/delete.jpg" alt="Delete" class="action-icon" onclick="deleteData(' + rowNumber + ')">';

      var actionCell = document.querySelector('#data-table .data-row:nth-child(' + (rowNumber + 2) + ') .data-cell:last-child');
      actionCell.innerHTML = '<img src="asset/edit.jpg" alt="Edit" class="action-icon" onclick="editData(' + rowNumber + ')">';
      actionCell.innerHTML += '<img src="asset/delete.jpg" alt="Delete" class="action-icon" onclick="deleteData(' + rowNumber + ')">';
      var actionCell = document.querySelector('#data-table .data-row:nth-child(' + (rowNumber + 3) + ') .data-cell:last-child');
      actionCell.innerHTML = '<img src="asset/edit.jpg" alt="Edit" class="action-icon" onclick="editData(' + rowNumber + ')">';
      actionCell.innerHTML += '<img src="asset/delete.jpg" alt="Delete" class="action-icon" onclick="deleteData(' + rowNumber + ')">';
    }
    



    // Fungsi untuk menghapus data
    function deleteData(rowNumber) {
      // Hapus elemen baris dari tabel
      var table = document.getElementById("data-table");
      var row = table.querySelector('.data-row:nth-child(' + (rowNumber + 1) + ')');
      var row = table.querySelector('.data-row:nth-child(' + (rowNumber + 2) + ')');
      var row = table.querySelector('.data-row:nth-child(' + (rowNumber + 3) + ')');
      row.parentNode.removeChild(row);

      console.log("Hapus data baris ke-1" + rowNumber);
      console.log("Hapus data baris ke-2" + rowNumber);
      console.log("Hapus data baris ke-3" + rowNumber);
    }