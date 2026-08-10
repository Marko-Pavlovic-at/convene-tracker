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
- (yours — write them here like you did for teambuilder)

Theme:
Wuthering Waves convene tracker
