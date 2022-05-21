const { ApolloServer } = require("apollo-server");
const { ApolloGateway, IntrospectAndCompose } = require("@apollo/gateway");

const server = new ApolloServer({
  playground: {
    settings: {
      "editor.theme": "light",
    },
  },
  gateway: new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: "users", url: "http://localhost:3000/graphql" },
        { name: "comments", url: "http://localhost:3001/graphql" },
        // ...additional subgraphs...
      ],
    }),
  }),
});

server.listen(3020).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
