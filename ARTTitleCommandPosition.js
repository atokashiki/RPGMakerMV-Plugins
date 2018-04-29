/*
ARTTitleCommandPosition
Easy to understand Title Command Position Plug-in for RPGMaker MV

Testing how to write a plug-in by making a more user-friendly version of the TitleCommandPosition plug-in

Alan Tokashiki 2018

*/
/*:
 * @plugindesc Changes the position of the title command window.
 * @author Alan Tokashiki
 *
 * @param right
 * @desc Moves title command to right.
 * @default 0
 *
 * @param left
 * @desc Moves title command to left.
 * @default 0
 *
 * @param up
 * @desc Moves title command up.
 * @default 0
 *
 * @param down
 * @desc Moves title command down.
 * @default 0
 *
 * @param width
 * @desc The width of the command window.
 * @default 300
 *
 * @param background
 * @desc The background type. 0: Normal, 1: Dim, 2: Transparent
 * @default 0
 *
 * @help This plugin does not provide plugin commands.
 */

(function () {
	
	var parameters = PluginManager.parameters('ARTTitleCommandPosition');
	
	var right = Number(parameters['right'] || 0);
	var left = Number(parameters['left'] || 0);
	
	var up = Number(parameters['up'] || 0);
	var down = Number(parameters['down'] || 0);
	
	var width = Number(parameters['width'] || 300);
	var background = Number(parameters['background'] || 0);
	
	var _Window_TitleCommand_updatePlacement = 
			Window_TitleCommand.prototype.updatePlacement;
	Window_TitleCommand.prototype.updatePlacement = function() {
		_Window_TitleCommand_updatePlacement.call(this);
		this.x = this.x + right - left;
		this.y = this.y - up + down;
		this.setBackgroundType(background);
	};
	
	Window_TitleCommand.prototype.windowWidth = function() {
		return width;
	};
}) ();

// END ARTTitleCommandPosition