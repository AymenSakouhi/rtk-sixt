export interface offer {
        id: string;
        carGroupInfo: {
          modelExample: {
            name: string;
            imageUrl: string;
          };
        };
        prices: {
          basePrice: {
            amount: {
              value: string;
              currency: string;
            };
          };
        };
}