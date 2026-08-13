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

Theme:
Wuthering Waves convene tracker


notes:

local storage:
i did set the item and it worked i see it in the browser dev tools now i need to make it so it persits maybe in the function render logs i try it 
wrote it first at the submit button to save i see it in dev tools 
then i did set get item in the render logs but something dosent work i dont know what either way the saving seems to work even after reload but the data dosent stay on the screen i dont get any error message i will console log data form 
nothing gets console log i dont get it 