# design UI :
{
// Head
// Body
// Sidebar
// MenuItems
// MainContainer
// ButtonList
// VideoContainer
// VideoCart
//
}
==============
<!-- Debouncing : -->

typing slow : 200ms
typing fast : 30ms

# performance :

- iphone pro max - 14 latter \* 1000 = 140000
- With debouncing - 3 API calls \* 1000 = 3000

Debuoncing with 200ms

- if difference between two key stroke is < 200ms - Decline api call
- < 200ms make an api call

 -make an api call after ever key press
 -but if the difference between 2 API calls is greate that (<) 200ms
 -decline the api call