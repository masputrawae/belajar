const ubah = document.getElementById('ubah');
const text = document.getElementById('ubah-text')

ubah.addEventListener('click', ()=>{
    document.getElementById("ubah-text").innerText = "DOM Sudah Berubah!";
})