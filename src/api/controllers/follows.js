const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const followsModel = require('../models/follow');

async function getFollowers(req, res, next){
  const followers = await followsModel.getFollowers(req.body.userId);

  if(followers == false)  res.send({"message": "something was wrong"});
  res.send(followers);
}

async function getFollowing(req, res){
  
  const following = await followsModel.getFollowing(req.body.userId);
  if(following == false) res.send({"message": "something was wrong"});
  res.send(following);
}

async function addFollow(req, res, next){

  const followerAdded = await followsModel.addFollow(req.body);
  if(followerAdded == false) res.send({"message": "something was wrong"});
  res.send(followerAdded);

}

async function deleteFollow(req, res, next){

    const unfollow = await followsModel.deleteFollow(req.body);

    if(!unfollow) res.status(404).send([{"message": "User not found in following"}]);
    res.status(200).send();
}

module.exports = {
    getFollowers,
    getFollowing,
    addFollow,
    deleteFollow

};