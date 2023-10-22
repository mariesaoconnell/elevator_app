## Prompt

### Live Link: https://mariesas-elevator-simulation.netlify.app/


Overall, this definitely took a bit more than the recommended time to take listed, BUT my explanations above fell within that time frame! The prompts inspired me to build the simulation and my justification is that that I would be able to more thoroughly explain the thoughts / trials / tribulations that I dealt with in the building process. I'm definitely going to keep working to add in the changes I feel are necessary to handle where my program falls short, but I do want to go ahead and get these in so it doesn't seem like I waited until the last minute!

___

```
In the near future a fictional company is opening a new building named "East" with 4 floors (East 1-4) and 2 elevators.

How would you describe your design for the control program for those elevators? As in: when someone pushes the button, your program runs - what does it do?
```
  > The press of a button would be attached to a sort of 'event listener', so that when the button is pushed it triggers the movement of the elevator. In my app I created, I used state to keep track of 'requests', which is what I used to refer to the button push. This took information like the floor number the button is correlated with and added it to my requests array/state.
  >
  > The act of adding a request to my 'requests' array/state triggers another 'event listener', in this case I used a useEffect hook, which is listening for changes in the 'requests' state. When the useEffect is triggered, it runs my logic that simulates the actual moving of the elevator.
  >
  > Inside of the useEffect, we're determining whether or not we have any requests left in the array/state, if they're no requests in the array, then we're staying put. If there are requests in the 'requests' array/state, then we're going to grab that first request using requests.shift(), then we're going to determine what direction we need to move in order to get the elevator to that requested floor. I chose to use 0 to represent stopping/no movement, 1 to move the elevator up a floor and -1 to move the elevator down a floor. Inside of this conditional block we're updating a piece of state that tracks the direction the elevator is moving. The other mechanism at work inside of the useEffect is the setInterval, which is checking if the current floor is or is not equal to the requested floor. If it is, we're moving up or down a single floor. Once the current floor and requested floor match, we clear the interval and call our move function to process the next request in the array.
  >
  > I would think that the overall logic of the program would be a great starting place, especially as I read ahead and look at what's to come.

```
6 months after opening East building, construction will be complete on the totally detached West building with 10 floors (West 1-10) and 4 new elevators dedicated to West.
Would you augment your original design to handle the opening of the new structure? If so, how?
```
> Absolutely, right now I can select how many buildings I want and how many floors and elevators I want in each building. Right now my program only allows for the multiple buildings to have the same # of floors and elevators.
```
Finally, 6 months after opening West building, an additional 20 floors will be added to East building (to make East 1-24) but with NO new elevators. (I hope I don't work there)
```
> Additional modifications would allow users to update the floors and elevators per building, which would be able to easily accommodate building renovations.
```
Would you augment your original East elevator design to handle the opening of the new structure? If so, how?
```
> I may not fully understand the question, but I feel that adding the ability to add buildings with their own # of floors and elevators per that building would solve this.
```
Given all you thought through, how would you analyze the need for elevators in the future?
```
> I feel that I worked backwards when coming up with my own simulation and proposed structure for the program, which will definitely was and will be a pain for the modifications I made and will have to make to truly be able to handle the above prompts. I should have focused from 'big' to 'small'. Work on the ability to add a building and give the user the ability to add the necessary elevators and floors. Once able to create and update, move on to the elevator properties- movement / buttons / etc.

___
