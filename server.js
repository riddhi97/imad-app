var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
    var PageFirst=
};
var first= {
    title: 'Game of Thrones | TV Series',
    heading: 'Game Of Thrones',
    time: '2010-present',
    content:  `<p>
        Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones <p>
        <p>It is filmed in Belfast and elsewhere in the United Kingdom, Canada, Croatia, Iceland, Malta, Morocco, Spain, and the United States. The series premiered on HBO in the United States on April 17, 2011, and its seventh season ended on August 27, 2017 The series will conclude with its eighth season in 2018 or 2019
    </p>`
    };

function createTemplate(data)  {  
    var title=data.title;
    var heading= data.heading;
    var time=data.time;
    var content=data.content;
    
var htmlTemplate=
   ` <!DOCTYPE html>
    <head>
            <title>
        ${title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    </head>
<body>
    <div class="container">
    <a href="/">HOME</a>
    <hr/>
    <div>
       ${heading} 
    </div>
     <div>
        ${time}
    </div>
    <hr/>
         ${content}
    </div>

</body>   
</html>`

    
;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.send(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/PageFirst', function (req, res) {
  res.send(createTemplate(PageFirst));
});

app.get('/PageSecond', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','sec.html'));
});




app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
