// ARTBattleRewardsMultiplier
// RPG Maker MV Plugin

// Alan Tokashiki, 2018

/*
Concept: Allow certain items or special abilities to affect the rewards from battle victories
		Apply some trigger or condition that will add a multiplier to EXP or Money? Or even items?
		Hopefully also create some visual indicator that rewards have been boosted by multiplier when announcing rewards?
		
For future: Change Rewards Multiplier based on party leader? The leader's "command style" will affect
		party in various ways
		
Relevant source code: Check BattleManager under rpg_managers.js
*/

/* REWARD CREATION

Upon battle victory, BattleManager calls makeRewards() and displayRewards()
makeRewards will be altered to dynamically change based on in-game settings

BattleManager.processVictory = function() {
    $gameParty.removeBattleStates();
    $gameParty.performVictory();
    this.playVictoryMe();
    this.replayBgmAndBgs();
    this.makeRewards();
    this.displayVictoryMessage();
    this.displayRewards();
    this.gainRewards();
    this.endBattle(0);
};

BattleManager.makeRewards = function() {
    this._rewards = {};
    this._rewards.gold = $gameTroop.goldTotal();
    this._rewards.exp = $gameTroop.expTotal();
    this._rewards.items = $gameTroop.makeDropItems();
};

INITIAL VALUE for relevant variable
BattleManager._rewards = {};
*/
/* REWARDS DISPLAY

BattleManager displays rewards in text post battle
Display messages should change dynamically based on in-game settings

BattleManager.displayRewards = function() {
    this.displayExp();
    this.displayGold();
    this.displayDropItems();
};

BattleManager.displayExp = function() {
    var exp = this._rewards.exp;
    if (exp > 0) {
        var text = TextManager.obtainExp.format(exp, TextManager.exp);
        $gameMessage.add('\\.' + text);
    }
};

BattleManager.displayGold = function() {
    var gold = this._rewards.gold;
    if (gold > 0) {
        $gameMessage.add('\\.' + TextManager.obtainGold.format(gold));
    }
};

BattleManager.displayDropItems = function() {
    var items = this._rewards.items;
    if (items.length > 0) {
        $gameMessage.newPage();
        items.forEach(function(item) {
            $gameMessage.add(TextManager.obtainItem.format(item.name));
        });
    }
};
*/

/*:
 * @plugindesc Adds a battle rewards multiplier
 *
 * @author Alan Tokashiki
 *
 * @param 
 * @desc 
 * @default 
 *
 * @help 
 */
 
(function () {
	
}) ();

// END ARTBattleRewardsMultiplier