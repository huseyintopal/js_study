const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelector(".container.seat:not(.occupied)");
const count = document.getElementById("count")
const film = document.getElementById("film")
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

//önce localStorage sonra selectBox
// initial value == movieSelectBox.value
//movieSelectBox.options[movieSelectBox.selectedIndex].value == movieSelectBox.value sayfa yüklendiğinde en güncel seat price
let currentTicketPrice = localStorage.getItem
("selecteMoviePrice") ? localStorage.getItem
("selecteMoviePrice") : movieSelectBox.options
[movieSelectBox.selectedIndex].value;

//movieIndex (sayfa yüklendiğinde en güncel movie index)
let currentMovieIndex = localStorage.getItem
("selecteMovieIndex") ? localStorage.getItem
("selecteMovieIndex") : movieSelectBox.selectedIndex;

window.onload = () => {
    movieSelectBox.selectedIndex = currentMovieIndex;
    displaySeat();
    updateMovieInfo();

}

movieSelectBox.addEventListener("change", (e)=> {
    let ticketPrice = e.target.value;
    let movieIndex = e.target.selectedIndex;
    console.log(movieIndex);
    updateMovieInfo();
    setMovieDataToLocalStorage(ticketPrice, movieIndex);
})

const setMovieDataToLocalStorage = (ticketPrice, movieIndex)=>{
    localStorage.setItem("selectedMovieIndex" , movieIndex);
    localStorage.setItem("selectedMovieIndex" , ticketPrice);

}
container.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
        console.log(e.target.classList);    
    }
      // if(e.target.classList.contains("seat") && e.target.classList.contains("occupied")){
    //     alert("lütfen rezerve olmayan koltuk seçiniz!");
    // }
    updateMovieInfo();

});
const updateMovieInfo = () =>{
    let selectedSeats = document.querySelectorAll(".row .seat.selected"); //classı hem seat hemde && selected olan row demek
    // let selectedSeats2 = document.querySelectorAll(".row .seat .selected"); /! burda seatten sonra boşluk bıraktık yukardakınden farklı (seat altındakı classı selected olan demek)
    let selectedSeatsIndexArray = [...selectedSeats].map(seat => [...allSeats].indexOf(seat));
    // console.log(selectedSeatsIndexArray);
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndexArray));
    
    count.innerText = selectedSeatsIndexArray.length;
    total.innerText = selectedSeatsIndexArray.length *movieSelectBox.value;
    film.innerText = movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split("(")[0];
}

const displaySeat = () =>{
    let selectedSeatsFromStorage = JSON.parse(localStorage.getItem("selectedSeats"));
    console.log(selectedSeatsFromStorage);
    if(selectedSeatsFromStorage !== null && selectedSeatsFromStorage.length > 0){
        allSeats.forEach((seat, index) =>{
            // selectedSeats.indexOf(index) == -1 ==> false
            // selectedSeats.indexOf(index) > -1 ==> true

            if(selectedSeatsFromStorage.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        })
    }
}

