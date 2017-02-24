var request = require('request');
var express = require('express');
var http = require('http');
var path = require('path');

//Create the AlchemyAPI object
var AlchemyAPI = require('./../alchemyapi');
var alchemyapi = new AlchemyAPI();

exports.entities = function example(req, res) {
	var output = {};

	//Start the analysis chain
	entities(req, res, output);
}


function entities(req, res, output) {
  var demo_url = req.body.url;
	alchemyapi.entities('url', demo_url,{ 'sentiment':1 }, function(response) {
		output['entities'] = { response:JSON.stringify(response,null,4), results:response['entities'] };
    //res.render('example',output);
	});
}
