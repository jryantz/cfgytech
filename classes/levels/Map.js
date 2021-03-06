//map index 0 = 1st column, 1 = 2nd column, 2 = 3rd column, 3 = 4th column, 4 = 5th column
// = each column = 5x[ability to enter,is an exit(1 to previous,2 to nextlvl), enemy in cell,item in cell, array of enemy and item ids?]
var currentLvl = 1,
	nextLvl = 2,
	prevLvl = 0,
    highestLvl = 1,
    lvl = [[[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]]];

//sets everything 0 and removes items/enemies from array in each cell
function resetLvl() {
    for(i = 0; i <= 4; i++) {
        for(j = 0; j <= 4; j++) {
            lvl[i][j] = [0, 0, 0, 0, [null, null, null]];
        }
    }
}

//checks to see if the cell has an exit and whether the exit goes to the next or previous levels
function checkExit(cell) {
    x = cell[0];
	y = cell[1];
    
    plaPrevCell = [0, 0];
    
	if(lvl[x][y][1] > 0) {
		if(lvl[x][y][1] == 1) {
            makeLvl(prevLvl);
            canMove(plaCurrCell);
		} else if(lvl[x][y][1] == 2) {
            makeLvl(nextLvl);
            canMove(plaCurrCell);
		} else {}
	}

}

//checks which level the map is creating
function makeLvl(whichLvl) {
	switch(whichLvl) {
        case 5:
            currentLvl = 5;
            nextLvl = 6;
            prevLvl = 4;
            if(currentLvl > highestLvl) {
                highestLvl = currentLvl;
            }
            addMain('You have entered level 5.', 'generic');
            showMain();
            createLvl5();
            break;
        case 4:
            currentLvl = 4;
            nextLvl = 5;
            prevLvl = 3;
            if(currentLvl > highestLvl) {
                highestLvl = currentLvl;
            }
            addMain('You have entered level 4.', 'generic');
            showMain();
            createLvl4();
            break;
        case 3:
            currentLvl = 3;
            nextLvl = 4;
            prevLvl = 2;
            if(currentLvl > highestLvl) {
                highestLvl = currentLvl;
            }
            addMain('You have entered level 3.', 'generic');
            showMain();
            createLvl3();
            break;
        case 2:
            currentLvl = 2;
            nextLvl = 3;
            prevLvl = 1;
            if(currentLvl > highestLvl) {
                highestLvl = currentLvl;
            }
            addMain('You have entered level 2.', 'generic');
            showMain();
            createLvl2();
            break;
        case 1:
            currentLvl = 1;
            nextLvl = 2;
            prevLvl = 0;
            if(currentLvl > highestLvl) {
                highestLvl = currentLvl;
            }
            addMain('You have entered level 1.', 'generic');
            showMain();
            createLvl1();
            break;
        default:
            break;
	}
}

//first array collumn 0-4, second array row 0-4, third array (look at line 2 for what each index is)

//creates base
//entrance 2,2
function createBase() {
    resetLvl();
    plaCurrCell = [2, 2];
    plaPrevCell = [0, 0];
    
    lvl[1][2][0] = 1;
    
    lvl[2][1][0] = -1;
    lvl[2][2][0] = 1;
    lvl[2][3][0] = -1;
}

//creates level1 - julian's level
//entrance 1,2
//exit 4,2
function createLvl1() {
    resetLvl();
    
    lvl[1][2][0] = 1;
    lvl[1][2][1] = 1;
    lvl[1][3][0] = 1;
    
    lvl[2][3][0] = 1;
    lvl[2][4][0] = 1;
    
    lvl[3][0][0] = 1;
    lvl[3][1][0] = 1;
    lvl[3][2][0] = 1;
    lvl[3][3][0] = 1;
    
    lvl[4][0][0] = 1;
    lvl[4][2][0] = 1;
    lvl[4][2][1] = 2;
    
	placeEntities();
}

//creates level2 - jon's level
//entrance 4,2
//exit 3,4
function createLvl2() {
    resetLvl();
    
    lvl[0][1][0] = 1;
    lvl[0][3][0] = 1;
    lvl[0][4][0] = 1;
    
    lvl[1][0][0] = 1;
    lvl[1][1][0] = 1;
    lvl[1][2][0] = 1;
    lvl[1][3][0] = 1;
    
    lvl[2][1][0] = 1;
    lvl[2][3][0] = 1;
    lvl[2][4][0] = 1;
    
    lvl[3][0][0] = 1;
    lvl[3][1][0] = 1;
    lvl[3][2][0] = 1;
    lvl[3][4][0] = 1;
    lvl[3][4][1] = 2;
    
    lvl[4][0][0] = 1;
    lvl[4][2][0] = 1;
    lvl[4][2][1] = 1;
    
    placeEntities();
}

//creates level3 - x's level
//entrance 3,4
//exit 2,0
function createLvl3() {
    resetLvl();
    
    lvl[0][3][0] = 1;
    lvl[0][4][0] = 1;
    
    lvl[1][0][0] = 1;
    lvl[1][1][0] = 1;
    lvl[1][2][0] = 1;
    lvl[1][3][0] = 1;
    lvl[1][4][0] = 1;
    
    lvl[2][0][0] = 1;
    lvl[2][0][1] = 2;
    lvl[2][3][0] = 1;
    
    lvl[3][1][0] = 1;
    lvl[3][3][0] = 1;
    lvl[3][4][0] = 1;
    lvl[3][4][1] = 1;
    
    lvl[4][1][0] = 1;
    lvl[4][2][0] = 1;
    lvl[4][3][0] = 1;
    
    placeEntities();
}

//creates level4 - x's level
//entrance 2,0
//exit 0,2
function createLvl4() {
    resetLvl();
    
    lvl[0][0][0] = 1;
    lvl[0][2][0] = 1;
    lvl[0][2][1] = 2;
    
    lvl[1][0][0] = 1;
    lvl[1][2][0] = 1;
    lvl[1][3][0] = 1;
    lvl[1][4][0] = 1;
    
    lvl[2][0][0] = 1;
    lvl[2][0][1] = 1;
    lvl[2][4][0] = 1;
    
    lvl[3][0][0] = 1;
    lvl[3][2][0] = 1;
    lvl[3][3][0] = 1;
    lvl[3][4][0] = 1;
    
    lvl[4][0][0] = 1;
    lvl[4][1][0] = 1;
    lvl[4][2][0] = 1;
    
    placeEntities();
}

//creates level5 - x's level
//entrance 0,4
//exit x,x
function createLvl5() {
    resetLvl();
    
    
    
    placeEntities();
}

//randomly sets if an enemy and/or an item is in the cell only if the cell is accessable to the player
function placeEntities() {
    randomEnemies(currentLvl);
    //first for loop goes through the columns of the lvl
	for(column = 0; column < 5; column++) {
        //second for loop goes through the rows
        for(row = 0; row < 5; row++) {
            //checks if the current cell is accessable to player
            if(lvl[column][row][0] == 1 && lvl[column][row][1] == 0) {
                //generates if there is an enemy
                if((Math.round(Math.random() * 8) + 1) > 4) {
                    lvl[column][row][2] = 1;
                } else {
                    lvl[column][row][2] = 0;
                }
                
                //generates if there is an item
                if((Math.round(Math.random() * 8) + 1) < 5 && lvl[column][row][2] == 0) {
                    lvl[column][row][3] = 1;
                } else {
                    lvl[column][row][3] = 0;
                }
                
                //checks if enemy in cell and adds enemy to array
                if(lvl[column][row][2] == 1) {
                    random = Math.round(Math.random() * 14);
                    lvl[column][row][4][0] = enemies[random];
                    
                    console.log(lvl[column][row][4][0]);
                } else {
                    lvl[column][row][4][0] = null;  
                }

                //checks if item in cell and adds item to array
                if(lvl[column][row][3] == 1) {
                    switch(currentLvl) {
                        case 1:
                            lvl[column][row][4][1] = randomItemTier1();
                            break;
                        case 2:
                            lvl[column][row][4][1] = randomItemTier2();
                            break;
                        case 3:
                            lvl[column][row][4][1] = randomItemTier3();
                            break;
                        case 4:
                            lvl[column][row][4][1] = randomItemTier4();
                            break;
                        case 5:
                            lvl[column][row][4][1] = randomItemTier5();
                            break;
                        default:
                            break;
                    }
                } else {
                    lvl[column][row][4][1] = null;
                }
            }
        }
    }
}

function canMove(currCell) {
    current = currCell;
    
    current[0]--;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('up').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('up').className = 'button key';
        } else {
            document.getElementById('up').className = 'button key disabled';
        }
    }

    current[0] += 2;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('do').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('do').className = 'button key';
        } else {
            document.getElementById('do').className = 'button key disabled';
        }
    }
    
    current[0]--;
    current[1]--;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('le').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('le').className = 'button key';
        } else {
            document.getElementById('le').className = 'button key disabled';
        }
    }
    
    current[1] += 2;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('ri').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('ri').className = 'button key';
        } else {
            document.getElementById('ri').className = 'button key disabled';
        }
    }
    
    current[1]--;
}

function checkContents(currCell) {
    if(lvl[currCell[0]][currCell[1]][2] == 1 && lvl[currCell[0]][currCell[1]][3] == 1) {
        //enemy and item
        //enemyItemButtons(currCell[0], currCell[1]);
    } else if(lvl[currCell[0]][currCell[1]][2] == 1 && lvl[currCell[0]][currCell[1]][3] == 0) {
        //enemy
        enemyButtons(currCell[0], currCell[1]);
        addMain('You came across a violent ' + lvl[plaCurrCell[0]][plaCurrCell[1]][4][0][1] + '.', 'npc');
        showMain();
    } else if(lvl[currCell[0]][currCell[1]][2] == 0 && lvl[currCell[0]][currCell[1]][3] == 1) {
        //item
        itemButtons(currCell[0], currCell[1]);
    }
}