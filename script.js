var readlineSync = require("readline-sync");






//CREATE RANDOM NUMBER 
//********************
//********************

var randomNumber = 0;
var randomNumberGenerator = function (min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
};




//RANDOM ENEMY PROBABILITY
//************************
//************************

var didRandomEnemyAppear = false;

var randomEnemyProbability = function () {
    randomNumberGenerator(0, 10000)
    if (randomNumber <= 1250) {
        didRandomEnemyAppear = true;
    } else if (randomNumber > 2500 && randomNumber <= 3750) {
        didRandomEnemyAppear = true;
    } else if (randomNumber > 5000 && randomNumber <= 6250) {
        didRandomEnemyAppear = true;
    } else if (randomNumber > 7500 && randomNumber <= 8750) {
        didRandomEnemyAppear = true;
    } else {
        didRandomEnemyAppear = false;
    }
    sceneryGenerator(didRandomEnemyAppear);
}





//SCENERY GENERATOR 
//*****************
//*****************



var sceneryGenerator = function (bool) {
    if (bool == false) {
        console.log("\nYou continue walking down the path, awaiting your next battle.");
    } else {
        randomEnemy();
        console.log("\nAs you walk you hear a noise.");
        console.log("Suddenly " + appearanceMethod);
        console.log(enemy);
    }
}






//CREATE RANDOM ENEMY
//*********************
//*********************


var hitPoints = 0;
var type = "";
var appearanceMethod = "";
var enemy = "";
var monstersFought = 0;
var enemyAttackPower = 0;
var enemyType = ["Skeleton", "Zombie", "Ninja", "Vampire", "Wizard", "Demon", "White Walker", "Satan Himself", "Chuck Norris"];
var randomEnemy = function () {

    var typeGenerator = function (num) {

        if (num == 0) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 5000) {
                type = enemyType[0];
            } else if (randomNumber >= 5000 && randomNumber < 9000) {
                type = enemyType[1];
            } else if (randomNumber >= 9000 && randomNumber < 12000) {
                type = enemyType[2];
            } else if (randomNumber >= 12000 && randomNumber < 14000) {
                type = enemyType[3];
            } else if (randomNumber >= 14000 && randomNumber < 15000) {
                type = enemyType[4];
            } else if (randomNumber >= 15000 && randomNumber < 15500) {
                type = enemyType[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                type = enemyType[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                type = enemyType[7];
            } else {
                type = enemyType[8];
            }
            hitPointsGenerator();
        } else if (num == 1) {
            randomNumberGenerator(0, 16600);
            if (randomNumber >= 0 && randomNumber < 4100) {
                type = enemyType[0];
            } else if (randomNumber >= 4100 && randomNumber < 7500) {
                type = enemyType[1];
            } else if (randomNumber >= 7500 && randomNumber < 10300) {
                type = enemyType[2];
            } else if (randomNumber >= 10300 && randomNumber < 12500) {
                type = enemyType[3];
            } else if (randomNumber >= 12500 && randomNumber < 14100) {
                type = enemyType[4];
            } else if (randomNumber >= 14100 && randomNumber < 15500) {
                type = enemyType[5];
            } else if (randomNumber >= 15500 && randomNumber < 16000) {
                type = enemyType[6];
            } else if (randomNumber >= 16000 && randomNumber < 16400) {
                type = enemyType[7];
            } else {
                type = enemyType[8];
            }
            hitPointsGenerator();
        } else if (num == 2) {
            randomNumberGenerator(0, 17100);
            if (randomNumber >= 0 && randomNumber < 3200) {
                type = enemyType[0];
            } else if (randomNumber >= 3200 && randomNumber < 6000) {
                type = enemyType[1];
            } else if (randomNumber >= 6000 && randomNumber < 8600) {
                type = enemyType[2];
            } else if (randomNumber >= 8600 && randomNumber < 11000) {
                type = enemyType[3];
            } else if (randomNumber >= 11000 && randomNumber < 13200) {
                type = enemyType[4];
            } else if (randomNumber >= 13200 && randomNumber < 15500) {
                type = enemyType[5];
            } else if (randomNumber >= 15500 && randomNumber < 16200) {
                type = enemyType[6];
            } else if (randomNumber >= 16200 && randomNumber < 16800) {
                type = enemyType[7];
            } else {
                type = enemyType[8];
            }
            hitPointsGenerator();
        } else if (num == 3) {
            randomNumberGenerator(0, 17600);
            if (randomNumber >= 0 && randomNumber < 2300) {
                type = enemyType[0];
            } else if (randomNumber >= 2300 && randomNumber < 4500) {
                type = enemyType[1];
            } else if (randomNumber >= 4500 && randomNumber < 6900) {
                type = enemyType[2];
            } else if (randomNumber >= 6900 && randomNumber < 9500) {
                type = enemyType[3];
            } else if (randomNumber >= 9500 && randomNumber < 12300) {
                type = enemyType[4];
            } else if (randomNumber >= 12300 && randomNumber < 15500) {
                type = enemyType[5];
            } else if (randomNumber >= 15500 && randomNumber < 16400) {
                type = enemyType[6];
            } else if (randomNumber >= 16400 && randomNumber < 17200) {
                type = enemyType[7];
            } else {
                type = enemyType[8];
            }
            hitPointsGenerator();
        } else if (num == 4) {
            randomNumberGenerator(0, 18100);
            if (randomNumber >= 0 && randomNumber < 1400) {
                type = enemyType[0];
            } else if (randomNumber >= 1400 && randomNumber < 3000) {
                type = enemyType[1];
            } else if (randomNumber >= 3000 && randomNumber < 5200) {
                type = enemyType[2];
            } else if (randomNumber >= 5200 && randomNumber < 8000) {
                type = enemyType[3];
            } else if (randomNumber >= 8000 && randomNumber < 11400) {
                type = enemyType[4];
            } else if (randomNumber >= 11400 && randomNumber < 15500) {
                type = enemyType[5];
            } else if (randomNumber >= 15500 && randomNumber < 16600) {
                type = enemyType[6];
            } else if (randomNumber >= 16600 && randomNumber < 17600) {
                type = enemyType[7];
            } else {
                type = enemyType[8];
            }
            hitPointsGenerator();
        } else if (num >= 5) {
            randomNumberGenerator(0, 18600);
            if (randomNumber >= 0 && randomNumber < 500) {
                type = enemyType[0];
            } else if (randomNumber >= 500 && randomNumber < 1500) {
                type = enemyType[1];
            } else if (randomNumber >= 1500 && randomNumber < 3500) {
                type = enemyType[2];
            } else if (randomNumber >= 3500 && randomNumber < 6500) {
                type = enemyType[3];
            } else if (randomNumber >= 6500 && randomNumber < 10500) {
                type = enemyType[4];
            } else if (randomNumber >= 10500 && randomNumber < 15500) {
                type = enemyType[5];
            } else if (randomNumber >= 15500 && randomNumber < 16800) {
                type = enemyType[6];
            } else if (randomNumber >= 16800 && randomNumber < 18000) {
                type = enemyType[7];
            } else {
                type = enemyType[8];
            }
            hitPointsGenerator();
        }
    };



    var hitPointsGenerator = function () {
        if (type == enemyType[0]) {
            randomNumberGenerator(1, 20);
        } else if (type == enemyType[1]) {
            randomNumberGenerator(20, 40);
        } else if (type == enemyType[2]) {
            randomNumberGenerator(40, 60);
        } else if (type == enemyType[3]) {
            randomNumberGenerator(60, 100);
        } else if (type == enemyType[4]) {
            randomNumberGenerator(100, 140);
        } else if (type == enemyType[5]) {
            randomNumberGenerator(140, 180);
        } else if (type == enemyType[6]) {
            randomNumberGenerator(250, 300);
        } else if (type == enemyType[7]) {
            randomNumberGenerator(500, 600);
        } else {
            randomNumberGenerator(1000, 1500);
        }
        hitPoints = randomNumber;
        appearanceGenerator(type);
    };

    var appearanceGenerator = function (str) {
        if (str == enemyType[0]) {
            appearanceMethod = "bones from the ground begin to come together to form a " + str + ".";
        } else if (str == enemyType[1]) {
            appearanceMethod = "a legless " + str + " crawls from the bushes.";
        } else if (str == enemyType[2]) {
            appearanceMethod = "the treetops begin to shake and a sneaky " + str + " decends in front of you.";
        } else if (str == enemyType[3]) {
            appearanceMethod = "1\,000 bats begin swirling in a circle in front of you and form a " + str + ".";
        } else if (str == enemyType[4]) {
            appearanceMethod = "wind and earth and water and fire begin to swirl violently and in a flash of light a " + str + " appears.";
        } else if (str == enemyType[5]) {
            appearanceMethod = "a dark shadow appears in front of you and takes the form of a " + str + ".";
        } else if (str == enemyType[6]) {
            appearanceMethod = "the zombie you killed earlier has returned, but something is different.\nHe has pale white skin and piercing blue eyes.\nYou remember a fable once told by your father about the land of Westeros.\nYou realize this can only be the creature of legend and myth.\nHe is now a " + str + ".";
        } else if (str == enemyType[7]) {
            appearanceMethod = "the ground begins to shake.\nAll the light around you disappears and you find yourself in complete darkness.\nA fiery red hole begins to open in the ground.\nYou can hear the scream of lamenting souls as it grows wider.\nAnd slowly from the deepest darkest depths of hell, you see " + str + " ascend before you.";
        } else if (str == enemyType[8]) {
            appearanceMethod = "the trees die all at once.\nThe rocks melt into a molten lava.\nFire spreads in a circle all around you.\nThe breath is taken from your lungs.\nYour legs buckle and you fall to your knees.\nAs you clutch your chest gasping for air you look up.\nStanding in front of you, forcing you to bow to him, is " + str + ".";
        }
        enemyAttackPowerGenerator(type);
    }

    var enemyAttackPowerGenerator = function (str) {
        if (str == enemyType[0]) {
            enemyAttackPower = 12;
        } else if (str == enemyType[1]) {
            enemyAttackPower = 13;
        } else if (str == enemyType[2]) {
            enemyAttackPower = 15;
        } else if (str == enemyType[3]) {
            enemyAttackPower = 17;
        } else if (str == enemyType[4]) {
            enemyAttackPower = 20;
        } else if (str == enemyType[5]) {
            enemyAttackPower = 25;
        } else if (str == enemyType[6]) {
            enemyAttackPower = 34;
        } else if (str == enemyType[7]) {
            enemyAttackPower = 50;
        } else if (str == enemyType[8]) {
            enemyAttackPower = 100;
        }

    }

    typeGenerator(monstersFought);
    enemy = "HP: " + hitPoints;
    monsterHealth = hitPoints;
    randomWeapon();
};





//CREATE RANDOM WEAPON
//********************
//********************


var firstWeaponDropped = "";
var firstWeaponPart = ["Broken", "Rusty", "Shiny", "Silver", "Fire", "Sparkling", "Magic", "Dragon Scale", "Heavenly"];
var secondWeaponDropped = "";
var secondWeaponPart = ["Dagger", "Nun-Chuck", "Mace", "Sword", "Spear", "Great Sword", "Staff", "Bow", "Laser"];
var randomWeaponDropped = "";

var randomWeapon = function () {




    //CREATE FIRST PART OF RANDOM WEAPON
    //**********************************
    //**********************************




    var randomFirstPartWeapon = function (str) {
        if (str == enemyType[0]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 5000) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 5000 && randomNumber < 9000) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 9000 && randomNumber < 12000) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 12000 && randomNumber < 14000) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 14000 && randomNumber < 15000) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 15000 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[1]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 4438) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 4438 && randomNumber < 8063) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 8063 && randomNumber < 10938) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 10938 && randomNumber < 13063) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 13063 && randomNumber < 14438) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 14438 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[2]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 3876) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 3876 && randomNumber < 7162) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 7162 && randomNumber < 9876) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 9876 && randomNumber < 12126) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 12126 && randomNumber < 13876) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 13876 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[3]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 3314) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 3314 && randomNumber < 6189) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 6189 && randomNumber < 8814) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 8814 && randomNumber < 11189) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 11189 && randomNumber < 13314) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 13314 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[4]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 2752) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 2752 && randomNumber < 5252) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 5252 && randomNumber < 7752) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 7752 && randomNumber < 10252) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 10252 && randomNumber < 12752) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 12752 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[5]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 2190) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 2190 && randomNumber < 4315) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 4315 && randomNumber < 6690) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 6690 && randomNumber < 9315) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 9315 && randomNumber < 12190) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 12190 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[6]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 1628) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 1628 && randomNumber < 3378) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 3378 && randomNumber < 5628) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 5628 && randomNumber < 8378) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 8378 && randomNumber < 11628) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 11628 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[7]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 1066) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 1066 && randomNumber < 2441) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 2441 && randomNumber < 4566) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 4566 && randomNumber < 7441) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 7441 && randomNumber < 11066) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 11066 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        } else if (str == enemyType[8]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 500) {
                firstWeaponDropped = firstWeaponPart[0];
            } else if (randomNumber >= 500 && randomNumber < 1500) {
                firstWeaponDropped = firstWeaponPart[1];
            } else if (randomNumber >= 1500 && randomNumber < 3500) {
                firstWeaponDropped = firstWeaponPart[2];
            } else if (randomNumber >= 3500 && randomNumber < 6500) {
                firstWeaponDropped = firstWeaponPart[3];
            } else if (randomNumber >= 6500 && randomNumber < 10500) {
                firstWeaponDropped = firstWeaponPart[4];
            } else if (randomNumber >= 10500 && randomNumber < 15500) {
                firstWeaponDropped = firstWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                firstWeaponDropped = firstWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                firstWeaponDropped = firstWeaponPart[7];
            } else {
                firstWeaponDropped = firstWeaponPart[8];
            }
        }
    }








    //CREATE SECOND PART OF RANDOM WEAPON
    //***********************************
    //***********************************




    var randomSecondPartWeapon = function (str) {




        if (str == enemyType[0]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 5000) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 5000 && randomNumber < 9000) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 9000 && randomNumber < 12000) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 12000 && randomNumber < 14000) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 14000 && randomNumber < 15000) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 15000 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[1]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 4438) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 4438 && randomNumber < 8063) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 8063 && randomNumber < 10938) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 10938 && randomNumber < 13063) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 13063 && randomNumber < 14438) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 14438 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[2]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 3876) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 3876 && randomNumber < 7162) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 7162 && randomNumber < 9876) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 9876 && randomNumber < 12126) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 12126 && randomNumber < 13876) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 13876 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[3]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 3314) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 3314 && randomNumber < 6189) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 6189 && randomNumber < 8814) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 8814 && randomNumber < 11189) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 11189 && randomNumber < 13314) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 13314 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[4]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 2752) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 2752 && randomNumber < 5252) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 5252 && randomNumber < 7752) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 7752 && randomNumber < 10252) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 10252 && randomNumber < 12752) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 12752 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[5]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 2190) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 2190 && randomNumber < 4315) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 4315 && randomNumber < 6690) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 6690 && randomNumber < 9315) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 9315 && randomNumber < 12190) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 12190 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[6]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 1628) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 1628 && randomNumber < 3378) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 3378 && randomNumber < 5628) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 5628 && randomNumber < 8378) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 8378 && randomNumber < 11628) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 11628 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[7]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 1066) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 1066 && randomNumber < 2441) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 2441 && randomNumber < 4566) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 4566 && randomNumber < 7441) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 7441 && randomNumber < 11066) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 11066 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        } else if (str == enemyType[8]) {
            randomNumberGenerator(0, 16100);
            if (randomNumber >= 0 && randomNumber < 500) {
                secondWeaponDropped = secondWeaponPart[0];
            } else if (randomNumber >= 500 && randomNumber < 1500) {
                secondWeaponDropped = secondWeaponPart[1];
            } else if (randomNumber >= 1500 && randomNumber < 3500) {
                secondWeaponDropped = secondWeaponPart[2];
            } else if (randomNumber >= 3500 && randomNumber < 6500) {
                secondWeaponDropped = secondWeaponPart[3];
            } else if (randomNumber >= 6500 && randomNumber < 10500) {
                secondWeaponDropped = secondWeaponPart[4];
            } else if (randomNumber >= 10500 && randomNumber < 15500) {
                secondWeaponDropped = secondWeaponPart[5];
            } else if (randomNumber >= 15500 && randomNumber < 15800) {
                secondWeaponDropped = secondWeaponPart[6];
            } else if (randomNumber >= 15800 && randomNumber < 16000) {
                secondWeaponDropped = secondWeaponPart[7];
            } else {
                secondWeaponDropped = secondWeaponPart[8];
            }
        }
    }
    randomFirstPartWeapon(type);
    randomSecondPartWeapon(type);
    randomWeaponDropped = firstWeaponDropped + " " + secondWeaponDropped;
    currentAttackPower();
    droppedAttackPower();
}









//ATTACK POWER GENERATOR 
//**********************
//**********************

var currentAttackPowerTotal = 0;

var currentAttackPower = function () {
    var attackPowerFirst = 0;
    var attackPowerSecond = 0;

    var attackPowerGeneratorFirst = function (str) {

        if (str == firstWeaponPart[0]) {
            attackPowerFirst = 6;
        } else if (str == firstWeaponPart[1]) {
            attackPowerFirst = 21
        } else if (str == firstWeaponPart[2]) {
            attackPowerFirst = 36
        } else if (str == firstWeaponPart[3]) {
            attackPowerFirst = 51
        } else if (str == firstWeaponPart[4]) {
            attackPowerFirst = 66
        } else if (str == firstWeaponPart[5]) {
            attackPowerFirst = 81
        } else if (str == firstWeaponPart[6]) {
            attackPowerFirst = 96;
        } else if (str == firstWeaponPart[7]) {
            attackPowerFirst = 500
        } else if (str == firstWeaponPart[8]) {
            attackPowerFirst = 1000
        } else {
            attackPowerFirst = 1;
        }
    }


    var attackPowerGeneratorSecond = function (str) {

        if (str == secondWeaponPart[0]) {
            attackPowerSecond = 20;
        } else if (str == secondWeaponPart[1]) {
            attackPowerSecond = 30
        } else if (str == secondWeaponPart[2]) {
            attackPowerSecond = 45
        } else if (str == secondWeaponPart[3]) {
            attackPowerSecond = 60
        } else if (str == secondWeaponPart[4]) {
            attackPowerSecond = 75
        } else if (str == secondWeaponPart[5]) {
            attackPowerSecond = 90
        } else if (str == secondWeaponPart[6]) {
            attackPowerSecond = 105;
        } else if (str == secondWeaponPart[7]) {
            attackPowerSecond = 500
        } else if (str == secondWeaponPart[8]) {
            attackPowerSecond = 1000
        } else {
            attackPowerSecond = 15;
        }
    }

    attackPowerGeneratorFirst(inventory[0]);
    attackPowerGeneratorSecond(inventory[1]);
    currentAttackPowerTotal = attackPowerFirst + attackPowerSecond;
}





var droppedAttackPowerTotal = 0;

var droppedAttackPower = function () {
    var attackPowerFirst = 0;
    var attackPowerSecond = 0;

    var attackPowerGeneratorFirst = function (str) {

        if (str == firstWeaponPart[0]) {
            attackPowerFirst = 6;
        } else if (str == firstWeaponPart[1]) {
            attackPowerFirst = 21
        } else if (str == firstWeaponPart[2]) {
            attackPowerFirst = 36
        } else if (str == firstWeaponPart[3]) {
            attackPowerFirst = 51
        } else if (str == firstWeaponPart[4]) {
            attackPowerFirst = 66
        } else if (str == firstWeaponPart[5]) {
            attackPowerFirst = 81
        } else if (str == firstWeaponPart[6]) {
            attackPowerFirst = 96;
        } else if (str == firstWeaponPart[7]) {
            attackPowerFirst = 500
        } else if (str == firstWeaponPart[8]) {
            attackPowerFirst = 1000
        } else {
            attackPowerFirst = 1;
        }
    }


    var attackPowerGeneratorSecond = function (str) {

        if (str == secondWeaponPart[0]) {
            attackPowerSecond = 20;
        } else if (str == secondWeaponPart[1]) {
            attackPowerSecond = 30
        } else if (str == secondWeaponPart[2]) {
            attackPowerSecond = 45
        } else if (str == secondWeaponPart[3]) {
            attackPowerSecond = 60
        } else if (str == secondWeaponPart[4]) {
            attackPowerSecond = 75
        } else if (str == secondWeaponPart[5]) {
            attackPowerSecond = 90
        } else if (str == secondWeaponPart[6]) {
            attackPowerSecond = 105;
        } else if (str == secondWeaponPart[7]) {
            attackPowerSecond = 500
        } else if (str == secondWeaponPart[8]) {
            attackPowerSecond = 1000
        } else {
            attackPowerSecond = 15;
        }
    }

    attackPowerGeneratorFirst(firstWeaponDropped);
    attackPowerGeneratorSecond(secondWeaponDropped);
    droppedAttackPowerTotal = attackPowerFirst + attackPowerSecond;
}









//PROBABILTY OF ESCAPING GENERATOR 
//********************************
//********************************


var getAwayProbability = function (str) {
    if (str == enemyType[0] || str == enemyType[1] || str == enemyType[2] || str == enemyType[3] || str == enemyType[4] || str == enemyType[5]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 5000) {
            console.log("\nYou narrowly escaped with your life");
            didRandomEnemyAppear = false;
            triedToRun = false;
        } else {
            console.log("\nYou tripped attempting to run.\nThe " + str + " has blocked off your escape route.\nYou have no choice but to fight.");
        }
    } else if (str == enemyType[6]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 2000) {
            console.log("\nYou pull out your " + inventory.join(" ") + " and tell the white walker it is Valerian Steel.\nHe believes you and runs away.\nFortune has smiled down upon you.\nDon't expect to be as lucky every time.");
            didRandomEnemyAppear = false;
            triedToRun = false;
        } else {
            console.log("\nThe white walker has frozen off any escape.\nYou must stand and fight.");
        }
    } else if (str == enemyType[7]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 1000) {
            console.log("\nYou distract Satan by talking about his brother.\nWhile he is crying you slip past him.\nHe is not so easily distracted so count your lucky stars.");
            didRandomEnemyAppear = false;
            triedToRun = false;
        } else {
            console.log("\nSatan commands a ring of fire 10\,000 feet high to surround you two.\nYour only option is battle");
        }
    } else if (str == enemyType[8]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 100) {
            console.log("\nYou start talking about Alexandra Cahill and Chuck begins to reminisce.\nWhile he is dancing around you sneak past him.\nYou have done the impossible.\nYou have escaped Chuck Norris.\nHe will not be so foolish next time.");
            didRandomEnemyAppear = false;
            triedToRun = false;
        } else {
            console.log("\nAs you run Chuck reaches down and grabs the earth.\nWith a roar he rotates the entire planet and cuts off your escape.\nFool.\nNo mortal has ever escaped his clutches.");
        }
    }
}

var enemeyHitProbability = function (str) {
    if (str == enemyType[0] || str == enemyType[1] || str == enemyType[2] || str == enemyType[3] || str == enemyType[4] || str == enemyType[5]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 6000) {
            console.log("\nThe " + str + "\'s attack hit you!");
            myHealth -= enemyAttackPower;
        } else {
            console.log("\nThe " + str + " attack missed!");
        }
    } else if (str == enemyType[6]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 3000) {
            console.log("\nThe " + str + " slashes you with his frozen sword.");
            myHealth -= enemyAttackPower;
        } else {
            console.log("\nThe " + str + "\'s attack missed!");
        }
    } else if (str == enemyType[7]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 2000) {
            console.log("\n" + str + " pulls out his fiddle and begins to play. A band of demons arise and slash you with their razor claws");
            myHealth -= enemyAttackPower;
        } else {
            console.log("\n" + str + " missed his attack!");
        }
    } else if (str == enemyType[8]) {
        randomNumberGenerator(0, 10000)
        if (randomNumber <= 1000) {
            console.log("\n" + str + " bends over and picks up a boulder, with his pinkie.\nHe tosses it into the air and begins to spin around rapidly.\nHe roundhouse kicks the boulder shattering it into a million pieces.\nThe pieces hurl at your body shredding it into little scraps.");
            myHealth -= enemyAttackPower;
        } else {
            console.log("\n" + str + "\'s attack missed!");
        }
    }
}









//FIGHTING THE MONSTER 
//********************
//********************

var myHealth = 100;
var monsterHealth = 0;
var monsterIsAlive = true;
var iAmAlive = true;
var inTheFight = true;
var isMyTurn = true;

var fightingMonster = function () {

        
        monstersFought++;

        while (inTheFight == true) {
            if (isMyTurn == true) {
                randomNumberGenerator(0, 10000)
                if (randomNumber <= 6000) {
                    console.log("\nYour attack strikes your enemy!");
                    monsterHealth -= currentAttackPowerTotal;
                    if (monsterHealth <= 0) {
                        console.log("Monster HP: 0");
                        monsterIsAlive = false;
                        inTheFight = false;
                    } else {
                        console.log("Monster HP: " + monsterHealth);
                        isMyTurn = false;
                    }
                } else {
                    console.log("\nYour attack narrowly missed your enemy!");
                    console.log("Monster HP: " + monsterHealth);
                    isMyTurn = false;
                }
            }else {
                    enemeyHitProbability(type);
                    if (myHealth <= 0) {
                        console.log("My HP: 0")
                        iAmAlive = false;
                        inTheFight = false;
                    } else {
                        console.log("My HP: " + myHealth);
                    }
                    isMyTurn = true;
                }
            }
        }






        var inventory = [];
        var softAttacks = ["punch", "hit", "slap", "kick"];
        var hardAttacks = ["kill", "shoot", "stab"];
        var movement = ["go", "move", "walk", "travel", "run", "leave", "get away"];
        var takeOptions = ["grab", "take", "retrieve", "pickup", "pick-up", "pick up", "get"];
        var clipObjects = ["clip", "magazine"];
        var gunObjects = ["gun", "pistol", "firearm"];
        var gunLoadOptions = ["load", "cock", "jack", "rack"];
        var isGunTaken = false;
        var isClipTaken = false;
        var isGameActive = true;
        var isFirstAreaActive = true;
        var isGunLoaded = false;
        var triedToRun = false;
        var hasChosenReplaceOrKeep = false;


        console.log("Welcome to The Trials!!!!")
        var userName = readlineSync.question("What is your name? ");
        var howMany = readlineSync.question("How many monsters would you like to fight? ");
        console.log("\nWell hello there " + userName + "!!!!");
        console.log("Lets go over the rules real quick!\n");
        console.log("You will be dropped into The Trials Canyon!");
        console.log("The Trials Canyon has only one direction in which you can move! Use the command \"Walk\" to move forward!");
        console.log("As you progress forward, random enemies will confront you!");
        console.log("Defeat " + howMany + " enemies to reach the end of the canyon and pass The Trials!");
        console.log("Luckily for you, you do not have to fight bare handed!");
        console.log("Each enemy will drop a weapon, which you will then have the choice to replace your current weapon, or keep\nyour current weapon!");
        console.log("But beware!!!!");
        console.log("With each enemy you fight the chances of fighting a more powerful enemy grow!!!\n")
        console.log("Are you ready to begin The Trials??");
        console.log("Type \"Start\" when ready!");
        var readyOrNot = readlineSync.question(">");
        var readyTwo = readyOrNot.toLowerCase();
        while (!readyTwo.includes("start")) {
            console.log("Type \"Start\" when ready!");
            readyOrNot = readlineSync.question(">");
            readyTwo = readyOrNot.toLowerCase();
        }



        console.log("\nYou wake up.");
        console.log("Standing over you is a zombie with a knife.");
        console.log("You look to the left and see a pistol clip.");
        console.log("You look to the right and see an empty gun.");
        console.log("What do you do?");

        while (isGameActive == true) {
            while (isFirstAreaActive == true) {
                var beginningMove = readlineSync.question(">");
                var beginningMoveLowerCase = beginningMove.toLowerCase();
                var beginningMoveArr = beginningMoveLowerCase.split(" ");
                if (softAttacks.indexOf(beginningMoveArr[0]) >= 0) {
                    console.log("\nYour weak " + beginningMoveArr[0] + " doesnt affect his undead form.");
                } else if (hardAttacks.indexOf(beginningMoveArr[0]) >= 0) {
                    if (isGunLoaded == false && isGunTaken == false || isClipTaken == false) {
                        console.log("\nWith what? Freakin rookie");
                    } else if (isGunLoaded == false && isGunTaken == true && isClipTaken == true) {
                        console.log("\nYou might want to load the gun first? Do they not teach this stuff where your'e from?");
                    } else if (isGunLoaded == true) {
                        console.log("\nYou aim your gun at the zombies head and pull the trigger. The zombies head explodes and he crumples to the ground\nnext to you.");
                        console.log("You survived. For now.\n");
                        console.log("You check your gun and realize that was your last bullet.");
                        console.log("You drop the gun and pick up the knife the zombie had");
                        inventory.push("Knife");
                        console.log("You can check your inventory by typing \"inventory\"\n");
                        console.log("You also notice he has a health potion.");
                        console.log("You drink it and your HP rises to 100\n");
                        console.log("You stand up and look around.");
                        console.log("You are surrounded by cliffs to all sides except to the north.\n")
                        console.log("Above you is a huge sign that reads.")
                        console.log("WELCOME TO THE TRIALS!")
                        console.log("Use the command \"Walk\" to start your journey!");
                        isFirstAreaActive = false;
                    }
                } else if (movement.indexOf(beginningMoveArr[0]) >= 0) {
                    console.log("\nThere is still a zombie with a knife standing over you genius. Remember him?");
                } else if (takeOptions.indexOf(beginningMoveArr[0]) >= 0) {
                    if (beginningMoveArr.includes("clip")) {
                        console.log("\nClip Taken");
                        isClipTaken = true;
                    } else if (beginningMoveArr.includes("gun")) {
                        console.log("\nGun Taken");
                        isGunTaken = true;
                    } else if (beginningMoveArr.includes("knife")) {
                        console.log("\nYou try to take the zombies knife and accidentaly slice your hand open. You try with your other hand and slice it open too. You are really bad at disarming people, and the undead I guess. He stabs you to death and begins feasting on your brains.");
                        isFirstAreaActive = false;
                        iAmAlive = false;
                    } else {
                        console.log("\nThere isn't one of those around.");
                    }
                } else if (gunLoadOptions.indexOf(beginningMoveArr[0]) >= 0) {
                    if (isGunLoaded == true) {
                        console.log("\nYou already loaded the gun remember?");
                    } else if (isGunTaken == true && isClipTaken == true) {
                        console.log("\nThe gun is loaded");
                        isGunLoaded = true;
                    } else if (isGunTaken == false && isClipTaken == false) {
                        console.log("\nWhat are you trying to load? You don't have anything. I hope this zombie eats you.");
                    } else if (isGunTaken == false) {
                        console.log("\nYou can't load a clip into a gun that you don't have.");
                    } else if (isClipTaken == false) {
                        console.log("\nYou can't load a gun without a clip.");
                    }
                } else if (beginningMoveArr.includes("nothing")) {
                    console.log("\nYou did nothing and the zombie stabbed you to death. He is now feasting on your brains.");
                    isFirstAreaActive = false;
                    iAmAlive = false;
                } else if (beginningMoveArr.includes("look")) {
                    console.log("\nThe zombie is still standing over you. For some reason he hasn\'t killed you yet. Maybe take this opportunity to kill him?");
                } else {
                    console.log("\nI don\'t understand that command");
                }
            }

            while (monstersFought < howMany && iAmAlive == true) {
                var gameMove = readlineSync.question(">");
                var gameMoveLowerCase = gameMove.toLowerCase();
                if (gameMoveLowerCase.includes("inventory")) {
                    console.log(inventory.join(" "));
                } else if (gameMoveLowerCase.includes("look")) {
                    console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.")
                } else if (gameMoveLowerCase.includes("walk")) {
                    randomEnemyProbability();
                    while (didRandomEnemyAppear == true && iAmAlive == true) {
                        if (triedToRun == false) {
                            console.log("\nDo you want to try to run away? Or would you prefer to stand and fight?");
                            console.log("Monsters Killed: " + monstersFought)
                            var runAwayOrFight = readlineSync.question(">");
                            var runAwayLowerCase = runAwayOrFight.toLowerCase();
                            if (runAwayLowerCase.includes("run")) {
                                triedToRun = true;
                                getAwayProbability(type);
                            } else if (runAwayLowerCase.includes("fight") || runAwayLowerCase.includes("attack")) {
                                triedToRun = true;
                            } else if (runAwayLowerCase.includes("inventory")) {
                                console.log(inventory.join(" "));
                            } else if (runAwayLowerCase.includes("look")) {
                                console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.");
                            } else {
                                console.log("\nI don\'t understand that command");
                            }
                        } else {
                            console.log("\nYour current Weapon is a " + inventory.join(" ") + ".");
                            console.log("It has an attack power of " + currentAttackPowerTotal);
                            triedToRun = false;
                            console.log("To attack use command \"Attack\"\n");
                            while (monsterIsAlive == true && iAmAlive == true) {
                                var fighting = readlineSync.question(">");
                                var fightingLowerCase = fighting.toLowerCase();
                                if (fightingLowerCase.includes("run")) {
                                    console.log("\nYou already tried to run, now you must fight.")
                                } else if (fightingLowerCase.includes("look")) {
                                    console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.");
                                } else if (fightingLowerCase.includes("inventory")) {
                                    console.log(inventory.join(" "));
                                } else if (fightingLowerCase.includes("attack")) {
                                    fightingMonster();
                                } else {
                                    console.log("\nI don\'t understand that command");
                                }
                            }
                            if (monsterIsAlive == false) {
                                if (enemyType[0] || enemyType[1] || enemyType[2] || enemyType[3] || enemyType[4] || enemyType[5]) {
                                    console.log("\nYou have successfully defeated your enemy");
                                    if (monstersFought == howMany || iAmAlive == false) {
                                        break;
                                    }
                                    console.log("\nThey have dropped a " + randomWeaponDropped + " with a power of " + droppedAttackPowerTotal);
                                    console.log("Your current weapon is a " + inventory.join(" ") + " with a power of " + currentAttackPowerTotal);
                                    console.log("\nType \"Replace\" to replace your current weapon");
                                    console.log("Type \"Keep\" to keep your current weapon");
                                    while (hasChosenReplaceOrKeep == false) {
                                        var keepWeapon = readlineSync.question(">");
                                        var keepWeaponLowerCase = keepWeapon.toLowerCase();
                                        if (keepWeaponLowerCase.includes("replace")) {
                                            inventory.splice(0, 1, firstWeaponDropped);
                                            inventory.splice(1, 1, secondWeaponDropped);
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if (keepWeaponLowerCase.includes("keep")) {
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if(keepWeaponLowerCase.includes("inventory")){
                                            console.log(inventory.join(" "));
                                        } else if(keepWeaponLowerCase.includes("look")){
                                            console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.");
                                        } else {
                                            console.log("I don\'t understand that command");
                                        }
                                    }
                                } else if (enemyType[6]) {
                                    console.log("\nYou have shown great strength in defeating a white walker.\nNot something to be overlooked");
                                    if (monstersFought == howMany || iAmAlive == false) {
                                        break;
                                    }
                                    console.log("\nThe white walker dropped a " + randomWeaponDropped + " with a power of " + droppedAttackPowerTotal);
                                    console.log("Your current weapon is a " + inventory.join(" ") + " with a power of " + currentAttackPowerTotal);
                                    console.log("\nType \"Replace\" to replace your current weapon");
                                    console.log("Type \"Keep\" to keep your current weapon");
                                    while (hasChosenReplaceOrKeep == false) {
                                        var keepWeapon = readlineSync.question(">");
                                        var keepWeaponLowerCase = keepWeapon.toLowerCase();
                                        if (keepWeaponLowerCase.includes("replace")) {
                                            inventory.splice(0, 1, firstWeaponDropped);
                                            inventory.splice(1, 1, secondWeaponDropped);
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if (keepWeaponLowerCase.includes("keep")) {
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if(keepWeaponLowerCase.includes("inventory")){
                                            console.log(inventory.join(" "));
                                        } else if(keepWeaponLowerCase.includes("look")){
                                            console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.");
                                        } else {
                                            console.log("I don\'t understand that command");
                                        }
                                    }
                                } else if (enemyType[7]) {
                                    console.log("\nYou have defeated Satan Himself.\nSongs will be written of this moment.\nYou will live on forever.");
                                    if (monstersFought == howMany || iAmAlive == false) {
                                        break;
                                    }
                                    console.log("\nHe dropped a " + randomWeaponDropped + " with a power of " + droppedAttackPowerTotal);
                                    console.log("Your current weapon is a " + inventory.join(" ") + " with a power of " + currentAttackPowerTotal);
                                    console.log("\nType \"Replace\" to replace your current weapon");
                                    console.log("Type \"Keep\" to keep your current weapon");
                                   while (hasChosenReplaceOrKeep == false) {
                                        var keepWeapon = readlineSync.question(">");
                                        var keepWeaponLowerCase = keepWeapon.toLowerCase();
                                        if (keepWeaponLowerCase.includes("replace")) {
                                            inventory.splice(0, 1, firstWeaponDropped);
                                            inventory.splice(1, 1, secondWeaponDropped);
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if (keepWeaponLowerCase.includes("keep")) {
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if(keepWeaponLowerCase.includes("inventory")){
                                            console.log(inventory.join(" "));
                                        } else if(keepWeaponLowerCase.includes("look")){
                                            console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.");
                                        } else {
                                            console.log("I don\'t understand that command");
                                        }
                                    }

                                } else if (enemyType[8]) {
                                    console.log("\nYou have achieved something no other human could.\nAll humanity will remember your name.\nNo one will ever transcend your glory");
                                    if (monstersFought == howMany || iAmAlive == false) {
                                        break;
                                    }
                                    console.log("\nHe has dropped a " + randomWeaponDropped + " with a power of " + droppedAttackPowerTotal);
                                    console.log("Your current weapon is a " + inventory.join(" ") + " with a power of " + currentAttackPowerTotal);
                                    console.log("\nType \"Replace\" to replace your current weapon");
                                    console.log("Type \"Keep\" to keep your current weapon");
                                    while (hasChosenReplaceOrKeep == false) {
                                        var keepWeapon = readlineSync.question(">");
                                        var keepWeaponLowerCase = keepWeapon.toLowerCase();
                                        if (keepWeaponLowerCase.includes("replace")) {
                                            inventory.splice(0, 1, firstWeaponDropped);
                                            inventory.splice(1, 1, secondWeaponDropped);
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if (keepWeaponLowerCase.includes("keep")) {
                                            console.log("\nYou find a health potion on them and drink it taking your health to 100");
                                            myHealth = 100;
                                            didRandomEnemyAppear = false;
                                            monsterIsAlive = true;
                                            inTheFight = true;
                                            hasChosenReplaceOrKeep = true;
                                        } else if(keepWeaponLowerCase.includes("inventory")){
                                            console.log(inventory.join(" "));
                                        } else if(keepWeaponLowerCase.includes("look")){
                                            console.log("\nYou look around and see cliffs on both sides, the only way to go is forward.");
                                        } else {
                                            console.log("I don\'t understand that command");
                                        }
                                    }

                                }
                            }
                        }
                        hasChosenReplaceOrKeep = false;
                    }
                } else {
                    console.log("\nI don\'t understand that command");
                }
            }
            if (iAmAlive == false) {
                console.log("\nYou have bravely tried to pass The Trials, yet you have failed.\nWe congratulate you on your attempt.\nBetter luck next time.");
                isGameActive = false;
            } else {
                console.log("\nYou have passed the trials!!!!\nMany ballads will be written about your great heroics!!!\nCongratulations on your victories!");
                isGameActive = false;
            }
        }

