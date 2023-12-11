// filename: sophisticated_code.js
// Description: This code generates a complex maze using a recursive backtracking algorithm

// function to create a two-dimensional maze grid
function createMaze(rows, columns) {
    var maze = new Array(rows);

    // initialize maze with walls
    for (var i = 0; i < rows; i++) {
        maze[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            maze[i][j] = {
                topWall: true,
                rightWall: true,
                bottomWall: true,
                leftWall: true,
                visited: false
            };
        }
    }

    // function to randomly visit unvisited neighbors
    function visitNeighbors(row, column) {
        maze[row][column].visited = true;

        // Shuffle the directions array for random selection
        var directions = ["top", "right", "bottom", "left"];
        for (var i = directions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [directions[i], directions[j]] = [directions[j], directions[i]];
        }

        // Recursive backtracking
        for (var i = 0; i < directions.length; i++) {
            var neighborRow = row;
            var neighborColumn = column;
            var direction = directions[i];

            if (direction === "top" && row > 0 && !maze[row - 1][column].visited) {
                maze[row][column].topWall = false;
                maze[row - 1][column].bottomWall = false;
                visitNeighbors(row - 1, column);
            } else if (direction === "right" && column < columns - 1 && !maze[row][column + 1].visited) {
                maze[row][column].rightWall = false;
                maze[row][column + 1].leftWall = false;
                visitNeighbors(row, column + 1);
            } else if (direction === "bottom" && row < rows - 1 && !maze[row + 1][column].visited) {
                maze[row][column].bottomWall = false;
                maze[row + 1][column].topWall = false;
                visitNeighbors(row + 1, column);
            } else if (direction === "left" && column > 0 && !maze[row][column - 1].visited) {
                maze[row][column].leftWall = false;
                maze[row][column - 1].rightWall = false;
                visitNeighbors(row, column - 1);
            }
        }
    }

    // start the recursive backtracking algorithm
    visitNeighbors(0, 0);

    return maze;
}

// function to print the maze grid
function printMaze(maze) {
    var output = "";

    // print the top walls of the maze
    for (var j = 0; j < maze[0].length; j++) {
        output += "__";
    }
    output += "\n";

    for (var i = 0; i < maze.length; i++) {
        output += "|";
        for (var j = 0; j < maze[i].length; j++) {
            if (maze[i][j].bottomWall) output += "_";
            else output += " ";
            if (maze[i][j].rightWall) output += "|";
            else output += " ";
        }
        output += "\n";
    }

    console.log(output);
}

// generate a 25x25 maze
var maze = createMaze(25, 25);

// print the maze
printMaze(maze);