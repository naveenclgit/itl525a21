const { app } = require('@azure/functions');

app.http('MyFunnyJoke', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';
        res = {
            body: `<html><body><h1>Hey ${name}</h1>` +
                  `<p>What do you call a detective who solves crimes` +
                  `by accident? Sheer Luck Holmes!</p>` +
                  `<p>Why did Mozart get rid of his chickens? Because` +
                  ` they keep saying Bach, Bach, Bach</p>` +
                  `<p>No matter how much we push the envelope, it's` +
                  ` still stationery.</p>` +
                  `</body></html>`,
            headers: {
              'Content-Type': 'text/html'
            }
          }
          return res;
    }
});
