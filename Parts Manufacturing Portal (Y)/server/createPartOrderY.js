const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "part_orders_y";
exports.handler = (event, context, callback) => {
    var params = {
        TableName: tableName,
        Item: {
            "partOrdersId": event.partOrdersId,
            "partId": event.partId,
            "qty": event.qty,
            "userId": event.userId,
            "jobName": event.jobName
        }
    };
    docClient.put(params, function(err, data) {
        callback(err, data);
    });
};