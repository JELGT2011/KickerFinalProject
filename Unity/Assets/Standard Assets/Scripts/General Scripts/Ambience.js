#pragma strict

	public var stadium : AudioSource;
	public var annoyance: AudioSource ;
	
	// Use this for initialization
	function Start () {
	
	}
	
	// Update is called once per frame
	function Update () {
	
	}
	
	function stop(){
		annoyance.Stop();
		stadium.Stop();
	}

	public function playSound(which: int){
		if(which==0)
			stadium.Play();
		else if(which==1)
			annoyance.Play ();
			stadium.Play();
}