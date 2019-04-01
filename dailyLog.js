function postArticle()
            {
steem.broadcast.comment (
document.getElementById('postingKey').value, //postig wif
'', //author, leave blank for new post
'blog', //first tag
document.getElementById('username').value, //username
'9737', //permlink
document.getElementById('title').value, //body of post
document.getElementById('article').value, //body of post
//json metadata (additional tags, app name)
    {tags: ['secondtag'], app: 'steemtest'},
    function (err, result) {
        if(err)
            alert('Failure! ' + err);
        else
            alert('Success!');
    }

                );
            }
/*https://www.birthdaycalculator.com/daysoldresults.php?month=1&day=1&year=2000

*/
