// ARTPluginTemplate
// ART RPGMaker Plug-in Master Template

// Alan Tokashiki, 2018

/*:
 * @plugindesc The Plugin description from the RPGMaker Plugin menu
 * The Plugin description cuts off after two lines of text (autowraps)
 *
 * @author Alan Tokashiki
 *
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
 *
 *
 *
 *
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
	
	// ACCESSING A PARAMETER:
	// can access any parameters by name, stored in parameters variable
	// can store parameters in separate variables as well
	var param1 = parameters['param1'];
	var param2 = parameters['param2'];
	// These variables will be returned as STRINGS
}) ();

// END ARTPluginTemplate