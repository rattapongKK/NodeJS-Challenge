module.exports = {
    // method of operation
    post: {
        tags: ["Todo pomelofashion NodeJS Challenge"], // operation's tag.
        description: "Sorting Entity", // operation's desc.
        operationId: "sorting", // unique operation id.
        parameters: [], // expected params.
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ReqEntity", // todo input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Todos were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: '#/components/schemas/RespEntity'
                        },
                    },
                },
            },
        },
    },
};