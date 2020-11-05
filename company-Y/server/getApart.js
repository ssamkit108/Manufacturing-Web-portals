const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "parts_y";
exports.handler = (event, context, callback) => {
    var params = {
        TableName: tableName,
        KeyConditionExpression: "#partId = :partId",
        ExpressionAttributeNames: {
            "#partId": "partId"
        },
        ExpressionAttributeValues: {
            ":partId": event.partId
        }
    };
    docClient.query(params, function(err, data) {
        callback(err, data);
    });
};