### P3 · A page that remembers

**What you're building:** a convene / pull tracker. You log each pull — character
or weapon name, rarity, date. The list persists. Pity is computed, never stored.

Deliverables — all of P2 still applies, plus:
- State survives a full page reload.
- Items can be edited in place, not just added and deleted.
- Items can be filtered or sorted by at least two different criteria.
- A count or summary that is **computed from the items every time it's shown** —
  never stored alongside them. Here that's **pity**: pulls since the last 5★.
  If it's stored, it can drift. If it's derived, it can't.
- Clearing all data is possible and asks first.

New concept in this project: the browser can persist strings for you, and your
array is not a string.

Steps:
- html structure css basic styling conncect js and css with html DONE
- write the form in html name date rarity and submit DONE
- grab dom elements DONE
- on submit push elements in array and console log it DONE
- after log pull button make it so a log is showed DONE
- clear input fields after submit DONE
- local storage DONE
- add a delete button and make it work DONE
- inline editing


Theme:
Wuthering Waves convene tracker


notes:

### local storage:
i did set the item and it worked i see it in the browser dev tools now i need to make it so it persits maybe in the function render logs i try it 
wrote it first at the submit button to save i see it in dev tools 
then i did set get item in the render logs but something dosent work i dont know what either way the saving seems to work even after reload but the data dosent stay on the screen i dont get any error message i will console log data form 
nothing gets console log i dont get it 

### delete button
- create delete button 
i tried to put the event listener outside of  render logs reference error
when i put it after the foreach i get the same ? why? 
apperantly i put it inside the foreach last time looked at old code but i dont understand why probably because the del button is inside the foreach and isnt reachable otherwise
- put index in foreach so js knows which object needs deletion
- use filter to delete an item
- remove item from local storage
problem is removeitem takes key which is my whole array i need to target only one item in the array i use the same set item command i used in the add button.
- style button

### inline edit:

- give each pull an edit button just like with delete button
- when button is clicked replace current pull with an input modal
- modal has same name date and rarity fields like the main input form and a save button
- clicking save changes the array into the new values
