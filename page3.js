// ========== รายชื่อสำหรับหน้า 3 ==========
const members = [
    { name: "Numnim Soinueng", link: "facebook.com/profile.php?id=61581449847582", img: "Numnim.jpg" },
    { name: "Youngguin Soinueng", link: "facebook.com/youngguinn", img: "teee.jpg" },
    { name: "Marco A. Deen ", link: "facebook.com/marco.a.deen", img: "Marco.jpg" },
    { name: "Hongyok Deen ", link: "facebook.com/hongyok.deen", img: "Hongyok.jpg" },
    { name: "Sharkk A. Soiton (Deen)", link: "facebook.com/sharkk.a.soiton", img: "Sharkk.jpg" },
    { name: "Angus Stars (Deen)", link: "facebook.com/profile.php?id=61553197393546", img: "Angus.jpg" },
    { name: "Reflect Stars (Deen)", link: "facebook.com/tanawat.chonpairoet", img: "Reflect.jpg" },
    { name: "Dekrich Stars (Deen)", link: "facebook.com/dekrich.stars", img: "Dekrich.jpg" },
];

const list = document.getElementById("list");
const search = document.getElementById("search");

// แสดงรายชื่อ + รูป
function render(data) {
    list.innerHTML = "";

    data.forEach(m => {
        list.innerHTML += `
        <div class="item">
            <div class="left">
                <div class="avatar-wrap">
                    <img src="images/${m.img}" class="avatar" alt="${m.name}"
                         onerror="this.style.display='none';
                                  this.parentElement.querySelector('.initial').style.display='flex'">
                    <div class="initial" style="display:none">${m.name.charAt(0)}</div>
                </div>

                <div>
                    <div class="name">${m.name}</div>
                    <div class="link">${m.link}</div>
                </div>
            </div>

            <a class="fb" href="https://${m.link}" target="_blank">f</a>
        </div>`;
    });
}


render(members);

// ค้นหา
search.addEventListener("keyup", e => {
    const text = e.target.value.toLowerCase();
    const filter = members.filter(m => m.name.toLowerCase().includes(text));
    render(filter);
});
