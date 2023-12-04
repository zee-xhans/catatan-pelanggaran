const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.onclick = function() {
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
}

closeModalBtn.onclick = closeModal;

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};

document.onkeydown = function(event) {
    if (event.key === 'Escape') {
    closeModal();
    }
};

//to do list main
const a = document.getElementById("one");

a.addEventListener("click", () => {
  //nama
  const a = document.getElementById("namaSiswa");
  const input = document.getElementById("name").value;

  const d = document.createElement("li");
  a.appendChild(d);
  d.append(input);


  //tanggal 
  const tanggal = document.getElementById("date").value;
  const tmt = document.getElementById("tanggal");

  const li = document.createElement("li");
  tmt.appendChild(li);
  li.append(tanggal);

  //jam
  const jam = document.getElementById("time").value;
  const tempatJam = document.getElementById("jam");

  const liTwo = document.createElement("li");
  tempatJam.appendChild(liTwo);
  liTwo.append(jam);

  //keterangan
  const tempatKeterangan = document.getElementById("ket");
  const keterangan = document.getElementById("subject").value;
  const liFour = document.createElement("li");
  tempatKeterangan.appendChild(liFour);
  liFour.append(keterangan);

  //-

  const tempatHapus = document.getElementById("hapus");
  const btn = document.createElement("button");
  const buatList = document.createElement("li");
  tempatHapus.appendChild(buatList);
  tempatHapus.appendChild(btn);

  btn.textContent = "🗑";
  btn.style.height = "30px";
  btn.className = "buttons";

  const pencet = document.createElement("button");
  tempatHapus.appendChild(pencet);

  pencet.textContent = "😈";
  pencet.style.background = "none";
  pencet.style.border = "none";

  pencet.addEventListener("click", () => {
    d.style.background = "red";
    li.style.background = "red";
    liTwo.style.background = "red";
    liFour.style.background = "red";
  });


  

  btn.addEventListener("click", () => {
    d.remove();
    li.remove();
    liTwo.remove();
    liFour.remove();
    btn.remove();
    pencet.remove();
  }); //ini bisa karena sama line dan append nya juga

  modal.style.display = 'none';

  //hapus 

  if (input === "" || tanggal === "" || jam === "" || keterangan === ""){
    alert("harus di isi");

  }

  document.getElementById("name").value = ("");
  document.getElementById("date").value = ("");
  document.getElementById("time").value = ("");
  document.getElementById("subject").value = ("");

});

// to do text
const vlText = "WEB PELANGGARAN SISWA";

let idx = 1;
let o = 1.5;
let speed = 300 / o;

writeText();

function writeText() {
  document.getElementById("text").textContent = vlText.slice(0, idx);
  idx++;

  if (idx > vlText.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

const clr = document.getElementById("clearModalBtn");

clr.addEventListener("click", () => {
  document.getElementById("namaSiswa").textContent = "";
  document.getElementById("tanggal").textContent = "";
  document.getElementById("jam").textContent = "";
  document.getElementById("ket").textContent = "";
  document.getElementById("hapus").textContent = "";
});

// $(documment).ready(function(){
//   $("#openModalBtn").click(function(){
//     $(".popup").slideDown();
//   })
// })

