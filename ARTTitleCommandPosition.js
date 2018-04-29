/*
ARTTitleCommandPosition
Easy to understand Title Command Position Plug-in for RPGMaker MV

Testing how to write a plug-in by making a more user-friendly version of the TitleCommandPosition plug-in

Alan Tokashiki 2018

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
		this.y = this.y + up - down;
		this.setBackgroundType(background);
	};
	
	Window_TitleCommand.prototype.windowWidth = function() {
		return width;
	};
}) ();

// END ARTTitleCommandPosition