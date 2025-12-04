const members = [
    { name: "Billy Soinueng", link: "facebook.com/BillySoi1", img: "billy.jpg" },
    { name: "Theboss Soinueng", link: "facebook.com/profile.php?id=61558959127269", img: "boss.jpg" },
    { name: "Jacob Soinueng", link: "facebook.com/jacob.wyn.2024", img: "jacob.jpg" },
    { name: "Epson Soinueng", link: "facebook.com/Epson.AllDXY", img: "epson.jpg" },
    { name: "Rocky Soinueng", link: "facebook.com/RockstarS1.2K25", img: "rocky.jpg" },
    { name: "Verlin Soinueng", link: "facebook.com/vxrlinx", img: "verlin.jpg" },
    { name: "Wish Soinueng", link: "facebook.com/WishS1.2K25", img: "wish.jpg" },
    { name: "Nakarin Soinueng", link: "facebook.com/NKRS1.2K25", img: "nakarin.jpg" }
];

const list = document.getElementById("list");
const search = document.getElementById("search");

function render(data) {
  list.innerHTML = "";

  data.forEach(m => {
    list.innerHTML += `
      <div class="item">
        <div class="left">
          <img src="images/${m.img}" class="avatar">
          <div>
            <div class="name">${m.name}</div>
            <div class="link">${m.link}</div>
          </div>
        </div>

        <a class="fb" href="https://${m.link}" target="_blank">f</a>
      </div>
    `;
  });
}

render(members);

// filter search
search.addEventListener("input", () => {
  const kw = search.value.toLowerCase();
  const filtered = members.filter(m => m.name.toLowerCase().includes(kw));
  render(filtered);
});
