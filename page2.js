// ========== รายชื่อสำหรับหน้า 2 ==========
const members = [
    { name: "Cortez Soinueng", link: "facebook.com/Cxrtez.S1", img: "Cortez.jpg" },
    { name: "Modmax Soinueng", link: "facebook.com/Bossmax.S1", img: "Modmax.jpg" },
    { name: "Leo Soinueng", link: "facebook.com/profile.php?id=100091664167676", img: "Leo.jpg" },
    { name: "Yuri Soinueng", link: "facebook.com/yuri.soinueng", img: "Yuri.jpg" },
    { name: "Hades Soinueng", link: "facebook.com/hades.soinueng", img: "Hades.jpg" },
    { name: "Zacky Soinueng", link: "facebook.com/zacky.deen.2025", img: "Zacky.jpg" },
    { name: "Kissme Soinueng", link: "facebook.com/King.Soinueng", img: "Kissme.jpg" },
    { name: "Nainoi Soinueng", link: "facebook.com/Nainoi.MTC", img: "Nainoi.jpg" },
];

const list = document.getElementById("list");
const search = document.getElementById("search");

// ✔️ ฟังก์ชันแสดงรายชื่อ + รูปภาพ แบบเดียวกับหน้า 1
function render(data) {
    list.innerHTML = "";

    data.forEach(m => {
        list.innerHTML += `
        <div class="item">
            <div class="left">
                ${
                    m.img
                    ? `<img src="images/${m.img}" class="avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
                    : `<div class="icon">${m.name.charAt(0)}</div>`
                }
                <div class="icon" style="display:none;">${m.name.charAt(0)}</div>

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

// ระบบค้นหา
search.addEventListener("keyup", e => {
    const text = e.target.value.toLowerCase();
    const filter = members.filter(m => m.name.toLowerCase().includes(text));
    render(filter);
});
