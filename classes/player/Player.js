var plaLvl = 0,
    plaMaxXp = 0,
    plaXp = 0,
    plaMaxHealth = 0,
    plaHealth = 0,
    plaStr = 0,
    plaInt = 0, //We scrapped the skill system therefore intelligence is no longer needed. This needs to be changed to Vitality. If I don't end up going through everything to change the variables then it does at some point need to be changed.
    plaAgi = 0,
    plaMoney = 0,
    
    //[x, y]
    plaCurrCell = [0, 0],
    plaPrevCell = [0, 0],
    
    plaMaxInv = 0,
    plaInv = [],
    
    plaName = '',
    plaRace = '',
    plaBg = [],

    plaWeapon = [],
    plaArmor = [],
    plaShield = [],
    plaDefense = plaArmor[2] + plaShield[2] + Math.floor((plaAgi - 10) / 2);

function plaConstruct() {
    //the following while + if statements will ensure that the player's stats, at creation, will not dip below 8. This is in the favor of the player, of course, but the negatives you'd get from having a strength of 3, for       example, would literally be crippling to the point where you might as well refresh the page.
    var str = 0,
        agi = 0,
        int = 0,
        checker = false;
    while (checker === false) {
        str = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if (str > 8) {
            plaStr = str;
            checker = true;
        }
    }//end of 1st while loop
    checker = false;
    while (checker === false) {
        int = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if (int > 8) {
            plaInt = int;
            checker = true;
        }
    }//end of 2nd while loop
    checker = false; 
    while (checker === false) {
        agi = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if (agi > 8) {
            plaAgi = agi;
            checker = true;
        }
    }//end of 3rd while loop
    
    plaLvl = 1;
    
    plaMaxXp = 200;
    
    plaHealth = 100;
    plaMaxHealth = 100;
}

function plaLvlUp() {
    if (plaXp >= plaMaxXp) {
        plaXp = plaXp - plaMaxXp;
        plaMaxXp += Math.floor(plaMaxXp * 0.75);
        plaLvl += 1;
    }
}

//dir - take direction of movement
function plaMove(dir) {
    plaPrevCell = plaCurrCell;
    
}