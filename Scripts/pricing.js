function first(){
    let h4review = document.getElementById("h4-review")
    h4review.innerText=null
    h4review.innerText='Thanks to monday.com, we are now able to budget the team’s time and efforts much more scientifically, leading to increased operational efficiency.'
    let h5review1 = document.getElementById('h5-review-1').innerText="Samyuktha Shivakumar"
    let h5review = document.getElementById('h5-review-2').innerText='| Global Marketing Operation Manager, Thoughtworks'
    let revimg = document.getElementById('review-img').src='https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/thoughtworks.png'
}

function second(){
    let h4review = document.getElementById("h4-review")
    h4review.innerText=null
    h4review.innerText='With monday.com, we’re 30% more efficient at delivering hundreds of campaigns seen by millions of customers.'

    let h5review1 = document.getElementById('h5-review-1').innerText="Tye Rapley-Hawkins"
    let h5review = document.getElementById('h5-review-2').innerText='| Head of Delivery at 02 Priority, Telefonica'

    let revimg = document.getElementById('review-img').src='https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/telefonica.png'
}

function third(){
    let h4review = document.getElementById("h4-review")
    h4review.innerText=null
    h4review.innerText='Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration for successful end-to-end campaign planning and execution.'

    let h5review1 = document.getElementById('h5-review-1').innerText="Sarah Pharr"
    let h5review = document.getElementById('h5-review-2').innerText='| AVP, Marketing, Genpact'

    let revimg = document.getElementById('review-img').src='https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/genpact.png'
}

total = ()=> {
    let selected = document.querySelector("#seats").value;

    document.querySelector("#total1").innerHTML = selected*8;
    document.querySelector("#total2").innerHTML = selected*10;
    document.querySelector("#total3").innerHTML = selected*16;
}