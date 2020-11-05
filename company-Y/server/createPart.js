const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "parts_y";
exports.handler = (event, context, callback) => {
    var params = {
        TableName: tableName,
        Item: {
            "partName": event.partName,
            "partId": event.partId,
            "qoh": event.qoh
        }
    };
    docClient.put(params, function(err, data) {
        callback(err, data);
    });
};