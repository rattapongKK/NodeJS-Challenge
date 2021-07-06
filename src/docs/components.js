module.exports = {
    components: {
        schemas: {
            // ReqEntity model
            ReqEntity: {
                type: "object", // data type
                description: "ReqEntity", // desc
                properties: {
                    0: {
                        type: "array", // data type
                        items: {
                            $ref: '#/components/schemas/Entity'
                        },
                        description: "First Entity" // desc
                    },
                    1: {
                        type: "array", // data type
                        items: {
                            $ref: '#/components/schemas/Entity'
                        },
                        description: "Second Entity" // desc
                    },
                    2: {
                        type: "array", // data type
                        items: {
                            $ref: '#/components/schemas/Entity'
                        },
                        description: "Third Entity" // desc
                    },

                }
            },
            Entity: {
                type: "object", // data type
                description: "Entity", // desc
                properties: {
                    id: {
                        type: "integer", // data type
                        description: "id" // desc
                    },
                    title: {
                        type: "string", // data type
                        description: "title" // desc
                    },
                    level: {
                        type: "integer", // data type
                        description: "level" // desc
                    },
                    children: {
                        type: "array", // data type
                        items: {
                            $ref: '#/components/schemas/Entity'
                        },
                        description: "children" // desc
                    },
                    parent_id: {
                        type: "integer", // data type
                        description: "parent_id" // desc
                    }

                }
            },
            RespEntity: {
                type: "array",
                items: {
                    $ref: '#/components/schemas/Entity'
                }
            }
        },
    },
};