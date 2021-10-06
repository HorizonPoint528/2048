document.addEventListener('DOMContentLoaded', () =>  {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    let squares = []
    const width = 4
    let score = 0
  
    //create the playing board
    function createBoard() {
      for (let i=0; i < width*width; i++) {
        square = document.createElement('div')
        square.innerHTML = 0
        gridDisplay.appendChild(square)
        squares.push(square)
      }
      generate()
      generate()
    }
    createBoard()

    function generate(){
      let randomNumber = Math.floor(Math.random() * squares.length);
      if(squares[randomNumber].innerHTML == 0){
        squares[randomNumber].innerHTML = 2;
      }
      else{
        generate()
      }
    }

    function swipeRight(){
      for(let i=0; i < 16; i++){
        if(i % 4 === 0){
          let totalOne = squares[i].innerHTML
          let totalTwo = squares[i+1].innerHTML
          let totalThree = squares[i+2].innerHTML
          let totalFour = squares[i+3].innerHTML
          let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          let filterRow = row.filter(num => num)
          let missing = 4 - filterRow.length
          let zeroes = Array(missing).fill(0)
          let newRow = zeroes.concat(filterRow)


          squares[i].innerHTML = newRow[0]
          squares[i+1].innerHTML = newRow[1]
          squares[i+2].innerHTML = newRow[2]
          squares[i+3].innerHTML = newRow[3]
        }
      }
    }


    function swipeDown(){
      for(i = 0; i < 4; i++){
        let totalOne = squares[i].innerHTML
          let totalTwo = squares[i + width].innerHTML
          let totalThree = squares[i+ (width * 2)].innerHTML
          let totalFour = squares[i+ (width * 3)].innerHTML
          let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          let filterColumn = column.filter(num => num)
          let missing = 4 - filterColumn.length
          let zeroes = Array(missing).fill(0)
          let newColumn = zeroes.concat(filterColumn)

          squares[i].innerHTML = newColumn[0]
          squares[i + width].innerHTML = newColumn[1]
          squares[i+ (width * 2)].innerHTML = newColumn[2]
          squares[i+ (width * 3)].innerHTML = newColumn[3]
      }
    }


    function swipeUp(){
      for(i = 0; i < 4; i++){
        let totalOne = squares[i].innerHTML
          let totalTwo = squares[i + width].innerHTML
          let totalThree = squares[i+ (width * 2)].innerHTML
          let totalFour = squares[i+ (width * 3)].innerHTML
          let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          let filterColumn = column.filter(num => num)
          let missing = 4 - filterColumn.length
          let zeroes = Array(missing).fill(0)
          let newColumn = filterColumn.concat(zeroes)

          squares[i].innerHTML = newColumn[0]
          squares[i + width].innerHTML = newColumn[1]
          squares[i+ (width * 2)].innerHTML = newColumn[2]
          squares[i+ (width * 3)].innerHTML = newColumn[3]
      }
    }

    function swipeLeft(){
      for(let i=0; i < 16; i++){
        if(i % 4 === 0){
          let totalOne = squares[i].innerHTML
          let totalTwo = squares[i+1].innerHTML
          let totalThree = squares[i+2].innerHTML
          let totalFour = squares[i+3].innerHTML
          let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          let filterRow = row.filter(num => num)
          let missing = 4 - filterRow.length
          let zeroes = Array(missing).fill(0)
          let newRow = filterRow.concat(zeroes)


          squares[i].innerHTML = newRow[0]
          squares[i+1].innerHTML = newRow[1]
          squares[i+2].innerHTML = newRow[2]
          squares[i+3].innerHTML = newRow[3]
        }
      }
    }

    function combineRow(){
      for (let i = 0; i < 15; i++){
        if(squares[i].innerHTML === squares[i+1].innerHTML){
          let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
          squares[i].innerHTML = combineTotal
          squares[i+1].innerHTML = 0
        }
      }
    }

    function combineColumn(){
      for (let i = 0; i < 12; i++){
        if(squares[i].innerHTML === squares[i+width].innerHTML){
          let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
          squares[i].innerHTML = combineTotal
          squares[i+width].innerHTML = 0
        }
      }
    }

    //assign control
    function control(e){
      if(e.keyCode === 39){
          keyRight()
      }
      else if (e.keyCode === 37){
        keyLeft()
      }
      else if (e.keyCode == 38){
        keyUp()
      }
      else if (e.keyCode == 40){
        keyDown()
      }
    }

    document.addEventListener('keyup', control)

    function keyRight(){
      swipeRight()
      combineRow()
      swipeRight()
      generate()
    }
    
    function keyLeft(){
      swipeLeft()
      combineRow()
      swipeLeft()
      generate()
    }

    function keyDown(){
      swipeDown()
      combineColumn()
      swipeDown()
      generate()
    }

    function keyUp(){
      swipeUp()
      combineColumn()
      swipeUp()
      generate()
    }
})