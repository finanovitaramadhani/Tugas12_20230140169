document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;

  const peminatanChecked = document.querySelector("input[name=peminatan]:checked");
  if (!peminatanChecked) {
    alert("Silakan pilih peminatan terlebih dahulu.");
    return;
  }
  const peminatan = peminatanChecked.value;

  if (!nama || !nim || !alamat || !tanggal) {
    alert("Mohon lengkapi semua data.");
    return;
  }

    alert(
    "Nama : " + nama +
    "\nNIM : " + nim +
    "\nPeminatan : " + peminatan +
    "\nAlamat : " + alamat +
    "\nAngkatan : " + angkatan +
    "\nTanggal Lahir : " + tanggal
  );

  // Tampilkan hasil
  const output = document.getElementById("output");
  output.innerHTML = `
    <hr>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>NIM:</strong> ${nim}</p>
    <p><strong>Peminatan:</strong> ${peminatan}</p>
    <p><strong>Alamat:</strong> ${alamat}</p>
    <p><strong>Angkatan:</strong> ${angkatan}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
  `;


});
