// ARTPluginTemplate
// ART RPGMaker Plug-in Master Template

// Alan Tokashiki, 2018

// Plugins can modify/replace existing functions in ANY of the .js files in GameProjectName/js
// Probably not a great idea to mess with main.js or plugins.js
// Thoroughly read through relevant code and understand functions before creating a plugin
/* Source Code Files

rpg_core.js:
rpg_managers.js:
rpg_objects.js:
rpg_scenes.js:
rpg_sprites.js:
rpg_windows.js:

*/ 

/*:
 * @plugindesc The Plugin description from the RPGMaker Plugin menu
 * The Plugin description cuts off after two lines of text (autowraps)
 *
 * @author Alan Tokashiki
 *
 *
 * ___________________BASIC_PARAMETERS_________________________
 * @param param1
 * @desc parameter's description, provided in the Plugin menu
 * The parameter description cuts off after two lines of text
 * @default parameter's default value
 *
 * @param param2
 * @desc another parameter! values are stored as strings, even if numbers!
 * @default 0 (but as a string)
 *
 *
 * ___________________BASIC_DATATYPES_________________________
 * @param String Parameter
 * @desc I'm a string
 * text outline color of game title (HTML color names)
 * @default green
 * 
 * @param Number Parameter
 * @desc I'm a number (but must be converted in function)
 * text outline width of game title
 * @default 10
 * 
 * @param Array Parameter
 * @desc Input members of an array, separated by a delimiter (like a comma)
 * @default 1,2,3,4,10
 *
 * @param Boolean Parameter 
 * @desc I'm a boolean (set to either true or false)
 * @default true
 *
 *
 * ___________________ADVANCED_PARAMETERS_____________________
 * @param Code Parameter
 * @desc Evaluate a parameter as JavaScript code 
 * @default alert('hello world')
 *
 *
 * ___________________TEMPLATE________________________________
 * @param 
 * @desc 
 * @default 
 *
 * @help Any plugin commands you want to tell the user about
 */

 // Plugin's function here
 // This is an anonymous function (has no name, just 'function')
 // The final two parentheses make this a Self-Executing Anonymous Function
 // Everything in the previous set of parentheses will be executed automatically!
(function () {
	
	// LOADING PARAMETERS INTO PLUGIN:
	// must return an instance of the parameters and store in a variable
	// Use the PluginManager's parameters() function, with the title of THIS pluging as argument
	var parameters = PluginManager.parameters('ARTPluginTemplate');
	// parameters is basically an array storing all plugin's parameters(from above)
	
	// ACCESSING PARAMETERS:
	// can access any parameters by name, stored in parameters variable
	// can store parameters in separate variables as well
	var param1 = parameters['param1'];
	var param2 = parameters['param2'];
	// These variables will be returned as STRINGS
	
	
	// Sample: change how the Game's Title (the text) is drawn
	// Relevant source code is under rpg_scenes.js -> Scene_Title.prototype.drawGameTitle()
	
	// USING PARAMETERS
	// JavaScript has functions that will convert between variable types
	// Keep in mind that parameters are automatically treated as Strings
	var color = String(parameters['String Parameter']);
	var width = Number(parameters['Number Parameter']); // Number(): JavaScript conversion to Number
	var bool = parameters['Boolean Parameter'].trim() == "true"; // converts the string input to a boolean value
	
	// OVERWRITING FUNCTIONS
	// While this plugin is active, RPGMaker will use this version of the function
	// instead of the original function defined in rpg_scenes.js
	Scene_Title.prototype.drawGameTitle = function() {
		var x = 20;
		var y = Graphics.height / 4;
		var maxWidth = Graphics.width - x * 2;
		var text = $dataSystem.gameTitle;
		
		// using String Parameter to change the text outline color
		// use Boolean Parameter to activate custom color (default color is black)
		if(bool == true)
		{
			this._gameTitleSprite.bitmap.outlineColor = color;
		}
		else
		{
			this._gameTitleSprite.bitmap.outlineColor = 'black';
		}
		// using Number Parameter to change the text outline width
		this._gameTitleSprite.bitmap.outlineWidth = width;
		
		this._gameTitleSprite.bitmap.fontSize = 72;
		this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
	};
	
	// ARRAY PARAMETERS
	// parameters are stored as strings, but can use delimiters to effectively make an array
	// use String.split('?') function: ? is a chosen delimiting char (commas, spaces, semicolons, etc.)
	var maps = String(parameters['Array Parameter']).split(',');
	// can use all array functions on maps
	// REMEMBER: maps is an array of STRINGS
	
	// CODE PARAMETERS
	// Evaluate the parameter (string) as JavaScript code
	// use eval(code) to evaluate parameter
	var code = String(parameters['Code Parameter']);
	eval(code);
	
	
}) ();

// END ARTPluginTemplate