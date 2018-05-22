!function(t){var r={};function e(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=4)}([function(t,r){t.exports=function(t){this.msg=t}},function(t,r,e){e(0);class n{constructor(){this.grid=n.makeGrid()}isEmptyPos(t){return n.isValidPos(t)||alert("Is not valid position!"),null===this.grid[t[0]][t[1]]}isOver(){if(null!=this.winner())return!0;for(let t=0;t<3;t++)for(let r=0;r<3;r++)if(this.isEmptyPos([t,r]))return!1;return!0}placeMark(t,r){this.isEmptyPos(t)||alert("Is not an empty position!"),this.grid[t[0]][t[1]]=r}print(){const t=[];for(let r=0;r<3;r++){const e=[];for(let t=0;t<3;t++)e.push(this.grid[r][t]?this.grid[r][t]:" ");t.push(`${e.join("|")}\n`)}console.log(t.join("-----\n"))}winner(){const t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let r=0;r<t.length;r++){const e=this.winnerHelper(t[r]);if(null!=e)return e}return null}winnerHelper(t){for(let r=0;r<n.marks.length;r++){const e=n.marks[r];let s=!0;for(let r=0;r<3;r++){const n=t[r];this.grid[n[0]][n[1]]!=e&&(s=!1)}if(s)return e}return null}static isValidPos(t){return 0<=t[0]&&t[0]<3&&0<=t[1]&&t[1]<3}static makeGrid(){const t=[];for(let r=0;r<3;r++){t.push([]);for(let e=0;e<3;e++)t[r].push(null)}return t}}n.marks=["x","o"],t.exports=n},function(t,r,e){const n=e(1),s=e(0);t.exports=class{constructor(){this.board=new n,this.currentPlayer=n.marks[0]}isOver(){return this.board.isOver()}playMove(t){this.board.placeMark(t,this.currentPlayer),this.swapTurn()}promptMove(t,r){this.board.print(),console.log(`Current Turn: ${this.currentPlayer}`),t.question("Enter rowIdx: ",e=>{const n=parseInt(e);t.question("Enter colIdx: ",t=>{const e=parseInt(t);r([n,e])})})}run(t,r){this.promptMove(t,e=>{try{this.playMove(e)}catch(t){if(!(t instanceof s))throw t;console.log(t.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(`${this.winner()} has won!`):console.log("NO ONE WINS!"),r()):this.run(t,r)})}swapTurn(){this.currentPlayer===n.marks[0]?this.currentPlayer=n.marks[1]:this.currentPlayer=n.marks[0]}winner(){return this.board.winner()}}},function(t,r){t.exports=class{constructor(t,r){this.game=t,this.$el=r,this.setupBoard(),this.bindEvents()}bindEvents(){this.$el.on("click","li",t=>{const r=$(t.currentTarget);this.makeMove(r)})}makeMove(t){let r=t.data("pos");this.game.playMove(r),t.text(this.game.currentPlayer),t.removeClass("square"),t.addClass("current-player-mark"),this.game.board.winner()&&alert(`${this.game.currentPlayer} wins!!`)}setupBoard(){const t=$("<ul>");$('<ul class="game-board"></ul>');for(var r=0;r<3;r++)for(var e=0;e<3;e++){let n=$('<li class="square">');n.data("pos",[r,e]),t.append(n),console.log("printed 1")}this.$el.append(t)}}},function(t,r,e){const n=e(3),s=e(2);$(()=>{let t=$("figure.ttt");const r=new s;new n(r,t)})}]);