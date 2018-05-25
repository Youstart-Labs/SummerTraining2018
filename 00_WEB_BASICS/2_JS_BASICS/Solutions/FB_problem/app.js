console.log("assignment 3")

var feed = [];

for (var i = 0; i < 10; i++) {
    var post = {};
    post.name = "abhishek" + (i % 2);
    post.date = new Date();
    post.status = " this is an awesome post " + i;
    post.picture = "http://demo" + i + ".png";

    var likes = [];
    var r = Math.floor(Math.random() * 5)
    likes.push("abc" + r);
    likes.push("xyz" + i);

    post.likes = likes;


    feed.push(post);

}


function solution10a(author) {
    var count = 0;
    for (var i = 0; i < feed.length; i++) {
        if (feed[i].name == author) count++;
    }
    return count;
}

function solution10c(number) {
    var post = feed[number - 1];
    for (var i = 0; i < post.likes.length; i++) {
        console.log(post.likes[i]);
    }

}

function solution10f() {
    var likes = [];

    for (var i = 0; i < feed.length; i++) {
        likes = likes.concat(feed[i].likes)
    }

    var sorted = likes.sort()

    var prev = "";
    var max = 0;
    var liker = "";
    var count = 0;

    for (var i = 0; i < sorted.length; i++) {
        if (prev == sorted[i]) {
            count++
        } else {
            count = 1;
        }

        if (count > max) {
            max = count;
            liker = sorted[i];

        }

        prev = sorted[i];
    }
    console.log(max, liker);
    return likes;

}


var friendlist = [{
    "first": "Emmott",
    "last": "Semiras"
}, {
    "first": "Bette",
    "last": "Swinfen"
}, {
    "first": "Brady",
    "last": "Flipsen"
}, {
    "first": "Rhodie",
    "last": "Meaney"
}, {
    "first": "Vanessa",
    "last": "Dunbabin"
}, {
    "first": "Martynne",
    "last": "Doberer"
}, {
    "first": "Hirsch",
    "last": "Weaben"
}, {
    "first": "Donnie",
    "last": "Kasparski"
}, {
    "first": "Ike",
    "last": "Terbeek"
}, {
    "first": "Denney",
    "last": "Waldram"
}, {
    "first": "Janifer",
    "last": "D'Ambrogi"
}, {
    "first": "Scotti",
    "last": "Edinborough"
}, {
    "first": "Camilla",
    "last": "Moloney"
}, {
    "first": "Jephthah",
    "last": "Trotter"
}, {
    "first": "Patin",
    "last": "Strettell"
}, {
    "first": "Annnora",
    "last": "Clews"
}, {
    "first": "Caritta",
    "last": "Micklewright"
}, {
    "first": "Thornton",
    "last": "Grimshaw"
}, {
    "first": "Cariotta",
    "last": "Junkinson"
}, {
    "first": "Arnoldo",
    "last": "Gartshore"
}]


function solution11c() {
    friendlist.sort(function (a, b) {
        return a.first.length - b.first.length;
    });
    console.log(friendlist);
    return friendlist
}

function solution11d() {
    friendlist.sort(function (a, b) {
        return a.first.length - b.first.length;
    });
    console.log(friendlist);
    return friendlist
}












