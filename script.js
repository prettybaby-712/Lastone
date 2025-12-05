const letters = [('The Beginning', 'My love, Happy 18th Birthday🫶🏻...'), ('The Distance', 'Baby, Some days the distance hits me...'), ('The Attachment', 'I don’t know when it happened, but you became...'), ('The 6 Months Gone', 'My sweetheart✨️, Six months have passed...'), ('The 6 Months Left', 'Love, Six months more until I get to see you...'), ('Your Voice', 'My love, There’s something about your voice...'), ('Your Smile', 'Baby, Your smile is honestly one of my favourite things...'), ('The Bite Marks', 'You know I’m going to talk about this one😭🤌🏻...'), ('Your Patience with Me', 'My sweetheart, I know I have my moments...'), ('Your Support', 'Love, Thank you for always being there...'), ('Your Little Habits', 'My love, There are so many small things...'), ('When I Miss You', 'Baby, When I miss you, it hits differently...'), ('The Way You Make Me Feel', 'There’s this feeling I get only with you...'), ('Our Future', 'My sweetheart, Sometimes I imagine the future...'), ('Why I Choose You', 'Love, There are a lot of people in this world...'), ('The Day I See You Again', 'My love, I think about the moment I’ll finally see you again...'), ('What You Are to Me', 'Baby, You’re not just my boyfriend...'), ('My Birthday Wish for You', 'Sweetheart🎀, On your 18th birthday, I just want...')];

let index = 0;
document.getElementById("next-btn").onclick = function(){
  if(index < letters.length){
    document.getElementById("letter-title").innerText = letters[index][0];
    document.getElementById("letter-content").innerText = letters[index][1];
    index++;
  } else {
    alert('All letters done ❤️');
  }
};

// GALLERY — you will add GitHub RAW links
const galleryImages = [
  // "https://raw.githubusercontent.com/USERNAME/REPO/main/images/photo1.jpg"
];

let g = document.getElementById('gallery');
galleryImages.forEach(url=>{
  let img = document.createElement('img');
  img.src = url;
  g.appendChild(img);
});
