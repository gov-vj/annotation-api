const fs = require('fs');
const path = require('path');

exports.getContent = (req, res, next) => {
  const contentPath = path.join(__dirname, '..', 'data', 'berlin-wall-press-conf.txt');
  fs.readFile(contentPath, {encoding: 'utf-8'}, (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).json({success: false, error});
    } else {
      res.json({content: data});
    }
  });
};