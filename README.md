### Controls

# Processing Text
The text box in the top left is the full processed text that becomes the music the Strudel interface interperets and plays.

Any changes to this will be made instantly to the running program, though do be cautious as this text also holds the variables allowing the other controls' functionality.

# Save and Load
These buttons are intended to Save all current settings as a JSON object and be able to load them thereafter from local storage, but the functionality is subpar at this time.

# Play and Stop
Play and Stop are somewhat self explanitory, allowing the user to play and stop the music. Some control changes will only execute after playing the music.

# CPM
This field refers to the cycles per minute and relates to the tempo of the music. This will only update on play.

# Volume
This is the volume slider, adjusting in real time how loud or quiet the song will play across all instruments.

# Instrument Checks
These checkboxes refer to the audibility of the instruments and whether they are muted. A checked box means the instrument is still playing.

# Drum Types
These radio controls switch the main drum type of the two drum sets in the current song. The initally checked type is the original.

# Spectre Visualisation
In the processed text, under the Bass and Arp are Spectre visuals, showing musical patterns as they play. These are the only two the visual looked interesting under.



### Video Link
Here is the demo of the page

https://youtu.be/MvT3qZKz62c



### AI Usage
In this assignment I used AI for the first time to help me with a functionality problem. I'm not sure how to use it efficiently yet.

# Sean
i'm working on a react js assignment. how do i check for a checked checkbox in a seperate checkbox component?

# AI
To check if a checkbox is checked in a separate checkbox component in React, you can lift the state up to a parent component and then pass the necessary state down to both checkbox components.
Here's a step-by-step guide to handling this:
1. Create the Parent Component:
In the parent component, you’ll manage the state that tracks whether the checkbox is checked or not.
import React, { useState } from 'react';
import Checkbox from './Checkbox'; // Import the Checkbox component

const ParentComponent = () => {
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Update the state based on checkbox status
  };

  return (
    <div>
      <h1>Checkbox State: {isChecked ? "Checked" : "Unchecked"}</h1>
      <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
    </div>
  );
};

export default ParentComponent;

2. Create the Checkbox Component:
This component will accept isChecked and onChange as props from the parent component. The isChecked prop will control whether the checkbox is checked, and onChange will handle the change event when the user interacts with the checkbox.
import React from 'react';

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked} // Controlled checkbox
        onChange={onChange} // Trigger parent change handler
      />
      <label>Check me!</label>
    </div>
  );
};

export default Checkbox;

Explanation:


ParentComponent:


It holds the state isChecked to track whether the checkbox is checked.


The handleCheckboxChange function updates the state when the checkbox status changes.




Checkbox:


This component receives isChecked to control the checked state of the checkbox.


The onChange event handler is passed down, so when the checkbox is clicked, the ParentComponent's state is updated.




Key Points:


The state (isChecked) is managed in the parent component.


The Checkbox component is a controlled component because its value is determined by isChecked.


Whenever the checkbox is clicked, the parent component's state is updated via the onChange function.


This is a basic way to handle communication between separate components in React through "lifting state up". Does that help with your assignment, or do you need a more complex setup?

# Sean
can i do step one using useEffect rather than an event function?

# AI
Yes, you can certainly use useEffect to update the state in the parent component without using an explicit event handler. However, using useEffect would typically be more appropriate for scenarios where you want to react to changes in other data or lifecycle events, rather than handling a user-triggered action directly.

If you still want to use useEffect for this purpose, you could pass the isChecked prop down to the Checkbox component, and then use useEffect to observe changes in this prop and update the state accordingly.

Here’s how you can achieve that:

1. Using useEffect in the Parent Component:

In this setup, useEffect will listen for changes in the isChecked state and handle updates accordingly.

import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';

const ParentComponent = () => {
  const [isChecked, setIsChecked] = useState(false); // Initial checkbox state
  
  // Using useEffect to track checkbox state changes
  useEffect(() => {
    // Whenever isChecked changes, do something
    console.log(`Checkbox state is now: ${isChecked ? 'Checked' : 'Unchecked'}`);
  }, [isChecked]); // Effect runs when isChecked changes

  return (
    <div>
      <h1>Checkbox State: {isChecked ? "Checked" : "Unchecked"}</h1>
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default ParentComponent;

2. Modify the Checkbox Component:

In this case, the Checkbox component will still need to update the state using the setIsChecked function (passed as a prop), but you don’t need to handle the change directly within the Checkbox component. The state change can still be observed by useEffect.

import React, { useEffect } from 'react';

const Checkbox = ({ isChecked, setIsChecked }) => {
  useEffect(() => {
    // Whenever isChecked changes, you can do something else if needed
    console.log(`Checkbox component: ${isChecked ? 'Checked' : 'Unchecked'}`);
  }, [isChecked]);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked} // Controlled by parent
        onChange={() => setIsChecked(!isChecked)} // Toggle state when clicked
      />
      <label>Check me!</label>
    </div>
  );
};

export default Checkbox;

Explanation:

Parent Component:

useEffect listens for changes in isChecked and runs whenever it changes, allowing you to react to the updated state without using an explicit event handler.

setIsChecked is passed down to the Checkbox component as a prop.

Checkbox Component:

The onChange handler toggles the checkbox state, but we don’t need to do anything else in the Checkbox component since useEffect in the parent takes care of responding to the state change.

useEffect in the Checkbox component will log a message every time isChecked changes.

Key Points:

In this example, the state is still managed by the parent component, and useEffect in both the parent and child components is used to track and react to changes.

useEffect is useful for observing and reacting to side effects or state changes but is not required for event-driven updates, which is still more naturally handled by an event handler (onChange).

This approach would be more relevant if you had external dependencies or side effects you wanted to run when isChecked changes, and it removes the explicit event handler in the Checkbox component.

Does this approach fit your use case?