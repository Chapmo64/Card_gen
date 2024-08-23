function create() {

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const imgul = document.getElementById("imgul").value;
    const price = document.getElementById("price").value;

    const card = document.createElement("div");
    card.className = "pcard"

    const img1 = document.createElement("img");
    img1.src = imgul;
    img1.alt = title;
    card.appendChild(img1);

    const t1 = document.createElement("h2");//just creted and not in the document flow
    t1.innerText = "Title: " + title;
    card.appendChild(t1);

    const d1 = document.createElement("p");
    d1.innerText = "Date: " + date;
    card.appendChild(d1);

    const p1 = document.createElement("p");
    p1.innerText = "Price: $" + price;
    card.appendChild(p1);

    document.body.appendChild(card) //added this to the main DOm

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("imgul").value = "";
    document.getElementById("price").value = "";

}