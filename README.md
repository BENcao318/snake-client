# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["screenshot of the snek game with multiple players"](https://github.com/BENcao318/snake-client/blob/master/docs/multi-players%20screen.png?raw=true)
!["screenshot of the client terminal when multiple players in the server"](https://github.com/BENcao318/snake-client/blob/master/docs/multi-players%20terminal.png?raw=true)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## Introduction
1.  This game supports multi-player mode. When a player logs into the game, the server will announce 'A new player just joined in!!!!' and show the number of current players in the lobby. Players will also be notified when another player left the lobby. 
2.  Each player will have his/her own snake. If they hit each other, the one who hit into the other player will die. You can restart the game by typing ctrl^c and `node play.js`.