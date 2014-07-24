#pragma strict

var customGUIStyle:GUIStyle;

	var images : Texture2D[];
	var go: Texture2D;
	var ambient: Ambience;
	var reset: Texture2D;
	var kick: Kick;
	private var select: float;
	private var state : int;
	private var showImage : Texture2D;
	
	var clock : float;
	
	var clockSound : AudioClip;

function Start () {
	select = 0;
	state= 0;
}

public function setState(stat : int){
	state=stat;
}

function Update () {
	switch(state){
		case 0:
			if(Input.GetKeyDown("j")){
				select+=1;
				
			}	
				
			if(Input.GetKeyDown("k")){
				select-=1;
				
				}
			if(select>images.Length-1){
				select=0;
			}
			if(select<0)
				select = images.Length-1;
			if(Input.GetKeyDown("m")){
				selection(select);
				state=1;
				}
			showImage = images[select];
			break;
		case 1:
			showImage = go;
			if (Input.GetKeyDown("t")) {
				state = 2;
			}
			if(Input.GetKeyDown("m")){
				state=4;
			}
			break;
		case 2:
			clock = Time.time;
			startClock();
			break;	
		case 4:
			showImage = reset;
			if(Input.GetKeyDown("m")){
				kick.reset();
				ambient.stop();
				state=0;
			}
			break;	
	}
}

function selection(which: int){
	
	if(which==0)
		ambient.playSound(0);
	else if(which==1)
		ambient.playSound(1);
	
	
	else if(which==4)
		ambient.playSound(4);


}

public function kicked(){
	state =4;
}

function startClock() {
	AudioSource.PlayClipAtPoint(clockSound, transform.position);
	yield WaitForSeconds(0.5f);
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