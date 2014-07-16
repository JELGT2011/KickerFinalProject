#pragma strict

var customGUIStyle:GUIStyle;

	var images : Texture2D[];

function Start () {

}

function Update () {

}

function OnGUI() {
	GUI.BeginGroup(Rect(Screen.width-210, 10, 200, 200));
	
	GUI.Box(Rect(0, 0, 200, 200), "");
	GUI.TextArea(Rect(0, 0, 200, 50), "Google Glass", customGUIStyle);
	GUI.TextArea(Rect(0, 20, 200, 50), "Wind Speed", customGUIStyle);
	GUI.TextArea(Rect(0, 40, 100, 50), "x: 10mph", customGUIStyle);
	GUI.TextArea(Rect(100, 40, 100, 50), "y: 12mph", customGUIStyle);
	GUI.TextArea(Rect(0, 60, 200, 50), "I'll format it later", customGUIStyle);
    GUI.EndGroup();
}