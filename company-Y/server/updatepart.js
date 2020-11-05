const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "parts_y";
exports.handler = (event, context, callback) => {
    var params = {
        TableName: tableName,
        Key: {
            "partName": event.partName,
            "partId": event.partId
        },
        UpdateExpression: "set qoh=:q",
        ExpressionAttributeValues: {
            ":q": event.qoh
        }
    };
    docClient.update(params, function(err, data) {
        callback(err, data);
    });
};