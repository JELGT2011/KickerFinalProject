﻿#pragma strict

	public var stadium : AudioSource;
	public var music: AudioSource ;
	public var heartBeat: AudioSource;
	// Use this for initialization
	function Start () {
	
	}
	
	// Update is called once per frame
	function Update () {
	
	}
	
	function stop(){
		audio.Stop();
	}

	public function playSound(which: int){
		if(which==0)
			stadium.Play();
		else if(which==1)
			music.Play ();
		else if(which==4)
			heartBeat.Play();
			}
