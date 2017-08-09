// This is a constructor ("Library()")
function Queue() {

    this.data = []; 

    this.enQueue = function(element) { 
        this.data.push(element);
    };
    
    this.deQueue = function() {
        var elementToRemove = this.data[0]; 
        this.data.splice(0, 1);
        return elementToRemove;
    };
};


function Library() {
    this.books = new Queue();
    this.likes = 0;
    this.dislike = 0;

    this.addBook = function(book) {
        this.books.enQueue(book);
    };

    this.like = function() {
        this.next();
        this.likes++;
    };

    this.dislike = function() {
        this.next();
        this.dislikes++;
        
    };

    this.booksLikes = function() {
        var totalLikes = 0;
        for(var i=0; i < this.books.length; i++) {
           totalLikes += this.books[i].likes; 
        };
    };
    
     
    this.next = function () {
        var actualBook = this.books.deQueue();
        actualBook.render();
    };
};


function Book(image, title, genre, link) {
    this.image = image;
    this.title = title;
    this.genre = genre;
    this.link = link;
    this.likes = 0;
    this.dislikes = 0;
    
    this.render = function() {
        $(".livro img").attr("src", this.image);
        $(".livro h1").html(this.title);
        $(".livro p").html(this.genre);
        $(".livro a").attr("href", this.link);
    };
};

/*Before this instantiation ("var library ="), the constructor ("Library()") is just a MODEL
and does nothing*/
var library = new Library();
var book = new Book();


var book1 = new Book("images/dragonfly.jpeg", 'Dragonfly', 'Novel', 'https://www.amazon.com/Outdoor-Decor-Evergreen-Enterprises-Dragonfly/dp/B00NWP2FKI');
library.addBook(book1);

var book2 = new Book("images/enchantment.jpeg", 'Enchantment', 'Business', 'https://www.amazon.com/Enchantment-Changing-Hearts-Minds-Actions/dp/1591845831/ref=sr_1_1?s=lawn-garden&ie=UTF8&qid=1500994055&sr=8-1&keywords=business+book+enchantment');
library.addBook(book2);

var book3 = new Book("images/making_short_films.jpeg", 'Making Short Films', 'Arts/Cinema', 'https://www.amazon.com/Making-Short-Films-Complete-Script/dp/1845208048/ref=sr_1_cc_9?s=aps&ie=UTF8&qid=1500994228&sr=1-9-catcorr&keywords=making+short+films');
library.addBook(book3);

library.next();


$(".btn-success, .btn-danger").click(function() {
    library.like();
    $("#clicks").html(library.likes);
});    

$(".btn-danger").click(function() {     
    library.dislike();
    $("#clicks").html(library.dislikes);
});




/*function completeBook() {
    var HTMLtoInsert = `
        <div class="livro col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
            <img alt="">
            <h1></h1>
            <p></p>
            <div class="link">
                <a target="_blank">buy</a>
            </div>
        </div>`;
    
    $.each(library,function(index,livro) {
        $("#bookContainer").append(HTMLtoInsert);
        $lastInserted = $(".livro:last-child");
        $("img", $lastInserted).attr("src",livro.image);
        $("h1", $lastInserted).html(livro.title);
        $("p", $lastInserted).html(livro.genre);
        $("a", $lastInserted).attr("href",livro.link);
    });        
    $(".livro:first-child").addClass("active");  
};
completeBook();*/

/*case 
    <a class="linkWikipedia">Wikipedia</a>
  (if we have an array of links)      
    $("a.linkWikipedia", $lastInserted).attr("href", livro1.links.linkWikipedia);
*/



/*function addLikes() {
    likes++;
    document.getElementById("clicks").innerText = likes;
}

function removeLikes() {
    likes--;
    document.getElementById("clicks").innerText = likes;
}
*/
//add likes
/*$('.like').click(function() {
    likes++;
    $('#clicks').text(likes);
});
//remove likes
$('.unlike').click(function() {
    likes--;
    $('#clicks').text(likes);
});
//make image draggable
/*$(document).ready(function() {
    $('img').draggable();
});*/

/*apple like mouse hover-zoom cursor (in the works)
$('img').bind('mouseenter', function () {
    $('img').addClass('over');
}).bind('mouseleave', function () {

    $('img').removeClass('over');

}).bind('mousemove', function (e) {

    $('img').css('top', e.clientY-40).css('left', e.clientX);

});*/

// make the elements with the class ".livro"
//when the tag "img" is clicked
/*var hiddenBox = $(".livro");
$("img").on("click", function( event ) {
    hiddenBox.show();
});*/


  




/*$('.like').click(function() {
    $likes.push("Gosto");
    showNext($(this));
});

$('.unlike').click(function() {
    $likes.push("Não Gosto");
    showNext($(this));
});*/

/*function showNext($button) {
    $livro = $button.parents(".livro").removeClass("active");
    $nextLivro = $livro.next();
    $nextLivro.addClass("active");
    if ($nextLivro.length <= 0) {
        $("#book_container").hide();
        $("label").hide();
        $(".without_books").show();
    }
    console.log(likes);
};*/

/*var likes = 0;

$('button[data-Opinion="Like"], button[data-Opinion="Dislike"]').click(function() {
    $currentLivro = $(".livro.active");
    $nextLivro = $currentLivro.next(".livro");
    
    var index = $(".livro").index($currentLivro);
    library[index].opinion = $(this).attr("data-Opinion");
    
    if($(this).attr("data-Opinion") == "Like"){
        likes++;
    }
    if($(this).attr("data-Opinion") == "Dislike"){
        likes--;
    }
        $("#clicks").text(likes);
    if($nextLivro.length > 0) {
        $currentLivro.removeClass("active");
        $nextLivro.addClass("active");
    }
    else {
        $currentLivro.show();
        $(".without_books").show();
        $("label").hide();
        $("button").hide();
    }
});*/



/* The function prior to this is the EVOLUTION of
this one.

$('button[data-Opinion="Like"]').click(function (){
    $currentLivro = $(".livro.active");
    var index = $(".livro").index($currentLivro);
    library[index].opinion = "Like";
});

$('button[data-Opinion="Dislike]').click(function(){
    $currentLivro = $(".livro.active");
    var index = $(".livro").index($currentLivro);
    library[index].opinion = "Disike";
});*/
