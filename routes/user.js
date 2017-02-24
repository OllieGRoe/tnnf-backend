
/*
 * GET List of Users using search API
 */
var request = require('request');

exports.list = function(req, res){
    var title = req.body.title;
    var limit = 500;
    //var limit = req.body.limit;
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+encodeURI(title)+'&limit='+limit+'&namespace=0&format=json';
    request(url, function(err, response, data) {
      if (!err) {

        //console.console.log(data[3]);
        return res.json(JSON.parse(data));
      }
    });

    

};
