#pragma strict

var customGUIStyle:GUIStyle;

	var images : Texture2D[];
	var arrows : Texture2D[];
	var go: Texture2D;
	var ambient: Ambience;
	var xSign : Texture2D;
	var reset: Texture2D;
	var kick: Kick;
	private var select: float;
	var state : int;
	var showImage : Texture2D;
	
	var clock : float;
	
	var clockSound : AudioClip;
	
	var clockEnable : int;
	
	var buzzerSound : AudioClip;

function Start () {
	select = 0;
	state= 0;
	clockEnable = 0;
}

public function setState(stat : int){
	state=stat;
}

function Update () {
	switch(state){
		case 0:
			showImage = images[select];
			if(Input.GetKeyDown("j")){
				select+=1;
			}	
			if(Input.GetKeyDown("k")){
				select-=1;
			}
			
			if(select>images.Length-1){
				select=0;
			}
			if(select<0) {
				select = images.Length-1;
			}
			
			if (Input.GetKeyDown("t")) {
				if(clockEnable==1)
					clockEnable = 0;
				else if(clockEnable==0)
					clockEnable=1;
			}
			
			if (Input.GetKeyDown("1")) {
				kick.kickType = 1;
			}
			if (Input.GetKeyDown("2")) {
				kick.kickType = 2;
			}
			if (Input.GetKeyDown("3")) {
				kick.kickType = 3;
			}
			if (Input.GetKeyDown("4")) {
				kick.kickType = 4;
			}
			if (Input.GetKeyDown("5")) {
				kick.kickType = 5;
			}
			
			if(Input.GetKeyDown("m")){
				selection(select);
				state=1;
			}
			break;
		case 1:
			showImage = go;
			if (clockEnable == 1) {
				clock = Time.time;
				AudioSource.PlayClipAtPoint(clockSound, transform.position);
				clockEnable = 2;
			}
			if (clockEnable == 2 && (Time.time - clock > 3f)) {
				AudioSource.PlayClipAtPoint(buzzerSound, transform.position);
				showImage = xSign;
				state=2;
			}
			if(Input.GetKeyDown("m")){
				state=2;
			}
			break;
		case 2:
			if (Input.GetKeyDown("m")) {
				state = 4;
			}
			break;	
		case 4:
			kick.reset();
			ambient.stop();
			state = 0;
			break;	
	}
}

function selection(which: int){
	
	if(which==0)
		ambient.playSound(0);
	else if(which==1)
		ambient.playSound(1);
	else
		return;
}

function OnGUI() {

	GUI.BeginGroup(Rect(Screen.width-210, 10, 200, 200));
	GUI.Box(Rect(0, 0, 200, 200), "");
	GUI.TextArea(Rect(0, 0, 200, 50), "Google Glass", customGUIStyle);
	GUI.TextArea(Rect(0, 20, 200, 50), "Wind Speed", customGUIStyle);
	GUI.TextArea(Rect(0, 40, 100, 50), "x: " + Wind_script.windx, customGUIStyle);
	GUI.TextArea(Rect(100, 40, 100, 50), "y: " + Wind_script.windy, customGUIStyle);
	GUI.DrawTexture(Rect(25,100,100,50),showImage);
    GUI.EndGroup();
}