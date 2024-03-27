const reviews = [
    {
      id: 1,
      name: 'Matthew Smith',
      img: 'https://cdn.pixabay.com/photo/2017/05/18/07/57/male-2322802_1280.jpg',

      text: "I recently acquired the XYZ Portable Blender, and I've been thoroughly impressed by its performance and convenience. As someone who leads a busy lifestyle and values health, having a reliable blender that can keep up with my on-the-go needs is essential. The XYZ Portable Blender has proven to be a game-changer in this regard. Right off the bat, the design of the XYZ Portable Blender stands out. Its compact and sleek design makes it easy to carry around, whether I'm traveling, heading to the gym, or simply running errands. The lightweight construction is a bonus, ensuring that it doesn't add unnecessary bulk to my bag.",
    },
    {
      id: 2,
      name: 'Feriha Naqvi',
      img: 'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_1280.jpg',
      text: 'I recently got my hands on the XYZ Portable Blender, and I have to say, its been a total game-changer for me. Living a fast paced lifestyle, I need appliances that can keep up with me, especially when it comes to staying healthy on the go. The XYZ Portable Blender has really stepped up to the plate. The design of the XYZ Portable Blender immediately caught my eye. Its sleek and compact, making it super easy to take with me wherever I go. Whether Im heading to work, the gym, or on a weekend trip, this blender fits effortlessly into my bag without weighing me down.',
    },
    {
      id: 3,
      name: 'Mary Jones',
      img: 'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg',
      text: 'The XYZ Portable Blender is a game-changer for busy individuals. Its sleek design and lightweight build make it perfect for on-the-go use. Despite its size, it boasts impressive blending power, effortlessly turning fruits and veggies into smooth concoctions. In summary, the XYZ Portable Blender is a must-have for anyone seeking a convenient and efficient way to stay healthy on the go. Its compact size, powerful performance, and user-friendly design make it a standout choice.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      img: 'https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_1280.jpg',
      text: 'The XYZ Portable Blender is a compact powerhouse, perfect for busy lifestyles. Its sleek design and lightweight build make it convenient for on-the-go use. With one-button operation and easy cleaning, it offers effortless blending. Its long-lasting battery ensures uninterrupted use, while USB charging adds convenience. Overall, its a top choice for those prioritizing health and convenience. Its compact size, powerful performance, and user-friendly design make it a standout choice.',
    },
  ];

// select item
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-button")
const nextBtn = document.querySelector(".next-button")

// set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    showPerson()
})

const showPerson = () =>{
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson()
})

// show previous person
prevBtn.addEventListener("click", ()=>{
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length-1
    }
    showPerson()
})