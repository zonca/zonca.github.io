
(function(doc, script) {
    //Async Social Buttons
    var js,
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        };

    // Twitter SDK
    add('//platform.twitter.com/widgets.js', 'twitter-wjs');

    // Google+ button
    add('https://apis.google.com/js/plusone.js');

    // Facebook SDK
    add('//connect.facebook.net/en_GB/all.js#xfbml=1&appId=205602882797935', 'facebook-jssdk');

    //Hacker News Button
    var hn_like = document.createElement('iframe');
    hn_like.frameborder="no";
    hn_like.scrolling="no";
    hn_like.height="28px";
    hn_like.width="110px";
    hn_like.src = "http://hnlike.com/upvote.php?link="
                + encodeURIComponent(document.location)
                + "&title="
                + encodeURIComponent("Implementation of Social Sharing into Jekyll");
    hn_like.innerHTML="iframes not supported by your browser";

    var where = document.getElementById("hnews");
    where.parentNode.insertBefore(
        hn_like,
        where
    );
}(document, 'script'));

/* DISQUS */
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'danielfrg'; // required: replace example with your forum shortname
/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
