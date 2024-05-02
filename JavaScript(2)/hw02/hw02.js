document.getElementById("name1").addEventListener("submit", function(event){
    event.preventDefault();
    var meme = document.getElementById("name").value;
    var meme1 = "Hello" + meme;
    document.getElementById("greeting").textContent = meme1;
    document.getElementById("name1").style.display = 'none';
});
    