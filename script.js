function exchange___Containers() {
    let c1 = document.querySelector(".container")
    let c2 = document.querySelector(".container2")
    let c3 = document.querySelector(".container3")
    let c4 = document.querySelector(".container4")
    let c5 = document.querySelector(".container5")
    let c6 = document.querySelector(".container6")


    let news = document.querySelectorAll("#newsLink");
    let head = document.querySelectorAll("#head");
    let map = document.querySelectorAll("#maps");
    let payments = document.querySelectorAll("#payments");
    let passengers = document.querySelectorAll("#passengers");
    let contacts = document.querySelectorAll("#contacts");

    news.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="block"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
        })
    })
    head.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="block"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
        })
    })
    map.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="block"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="none"
        })
    })
    payments.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="block"
            c5.style.display="none"
            c6.style.display="none"
        })
    })
    passengers.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="block"
            c6.style.display="none"
        })
    })
    contacts.forEach((e, i) => {
        e.addEventListener("click", () => {
            c1.style.display="none"
            c2.style.display="none"
            c3.style.display="none"
            c4.style.display="none"
            c5.style.display="none"
            c6.style.display="block"
        })
    })

    



}
exchange___Containers()

function counter() {
    let count = document.querySelector(".count")
    let i = 0,j=0,k=0;
    const it1 = setInterval(() => {
        i += 951106;
        count.textContent = `${i} nafar`;
        if (i % 14 == 0) {
            count.style.textShadow = "0 8px 12px blue";
        } else {
            count.style.textShadow = "none";
        }
        if (i >= 167251156) {
            clearInterval(it1)
        }
    }, 50);
}
counter()
// window.addEventListener("scroll", counter)