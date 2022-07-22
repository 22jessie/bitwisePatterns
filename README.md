# Bitwise Patterns

This program shows different patterns made applying the xor operator to the  x  y positions.

---

The most simple pattern is just applying the xor operator.
<p align="center">
  ## $$\sum_{x=1}^r  \sum_{y=1}^c x  ⊕  y $$
  <img src="/images/500x500_simple.png" width="900" height="600">
<p>  

---

Some interesting patters emerge by applying the modulo operator
<p align="center">  

  ## $$\sum_{x=1}^r  \sum_{y=1}^c (x  ⊕  y) mod(n) $$
  
  <img src="/images/200x200_n_22.png" width="900" height="600">
  <img src="/images/300x300_n_237.png" width="900" height="600">
<p>

---

The following images show the results of executing the and and or operators respectively.
<p align="center">
  
  
## $$\sum_{x=1}^r  \sum_{y=1}^c (x  ⊕  y) mod (x \land y) $$  
  <img src="/images/500x500_and.png" width="900" height="600">
  
## $$\sum_{x=1}^r  \sum_{y=1}^c (x  ⊕  y) mod (x \lor y) $$  
  <img src="/images/500x500_or.png" width="900" height="600">
<p>
  



