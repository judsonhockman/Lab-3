var friends = ["Rick", "Steven", "Stan", "Kevin", "Jack"];

function sing() {

    for (var i = 0; i < friends.length; i++) {
        var div = document.createElement("div");
        div.className = "friend";

        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode(friends[i]);
        h3.appendChild(h3Text);
        div.appendChild(h3);

        for (var j = 99, b = 98; j >= 2, b >= 1; j-- , b--) {
            // here I could have used (j-1) instead of creating a new variable b.
            var para = document.createElement('p');

            para.innerHTML = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + b + " lines of code in the file";
            div.appendChild(para);
         };
        for (var k = 2; k > 1; k--) {
            var para = document.createElement('p');
            para.innerHTML = k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file";
            div.appendChild(para);

        };
        for (var l = 1; l > 0; l--) {
            para.innerHTML = l + " line of code in the file, " + l + " line of code; " + friends[i] + " strikes it out, clears it all out, no more lines of code in the file";
            div.appendChild(para);
        };

     

   
    // then add that paragraph to the div from above
    document.body.appendChild(div);
}
};

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('sing-btn');
    btn.addEventListener('click', sing);
})
