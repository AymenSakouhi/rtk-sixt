
# Sixt Coding Challenge

The app link to check is: https://sixt-challenge.herokuapp.com/ 

I used : Redux toolkit to fetch data from the json endpoint.

For the grid system and UI/UX, I used react-bootstrap as a framework to illustrate the offers in a grid of 3s(Desktop) and 1s (Mobile).

I also used Typescript for modeling all the data object to be used in the app.
For example any card that you see in the UI is actually coming from an object called offer which is passed as a key on the JSX Offer component.

![app image](https://i.imgur.com/fJM9JUZ.png)


- In case of no image in the card. I will summon a default one and you will find that in more details in the Offer component, under the components folder. Or as illustraded below in code itself:
```
<Card.Img data-testid='image'
          variant="top"
          src={offer.carGroupInfo.modelExample.imageUrl} // Change the value to "" empty string for a demonstration
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = carReplacementImage;
          }}
        />
```


- I used some error handlings in the App.tsx main component as shown below: 
```
return (
    <div className="App">
      <NavBar />
      <h1>Below are the list of offers</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>Something is wrong!!!</h2>}
      {error && <h2>Something is wrong!!!</h2>}
      {/* For most queries, it's usually sufficient to check for the isLoading state, then the isError state, then finally, assume that the data is available and render the successful state: */}
      {isSuccess && (
        <div>
          <Offers data={data} />
        </div>
      )}
    </div>
  );
```

And also you will find some unit testing in the folder: __test__ as an example: testing the existance of an image in the offer card here: 
```
it("Offer component has an image source", () => {
   setup();
   const displayedImage = document.querySelector("img") as HTMLImageElement;
   expect(displayedImage.src).not.toBe("");
  });
```