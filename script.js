document.getElementById("task-form").addEventListener("submit", function(e){
    e.preventDefault();

    //Ambil nilai dari input
    const taskinput = document.getElementById("task-input").value;


    //Buat elemen <li> untuk tugas baru
    const li = document.createElement("li");
    li.textContent = taskinput;

    //buat tombol hapus 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    //Buat checkbox untuk menandai tugas selesai
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            li.classList.add("completed");
        } else{
            li.classList.remove("completed");
        }
    });

    //Tambahkan checkbox dan tombol hapus ke dalam <li>
    li.prepend(checkbox);
    li.appendChild(deleteBtn);

    //tambah <li> ke dalam <ul>
    document.getElementById("task-list").appendChild(li);

    //kosongkan input setelah menambah tugas
    document.getElementById("task-input").value = "";

});