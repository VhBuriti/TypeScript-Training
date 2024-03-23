
/*
    The Observer Pattern enables a subscription
    model where objects (observers) “listen”
    to events and get notified when events occur.
*/

const ChickenFeed = (() => {
    const hens = [];
    return {
      addHen: hen => hens.push(hen),
      removeHen: hen => {
        const index = hens.indexOf(hen);
        if (index > -1) hens.splice(index, 1);
      },
      feed: food => {
        for (const hen of hens) {
          hen.eat(food);
        }
      }
    };
  })();
