				
				const music=document.querySelector('audio');
				const img=document.querySelector('img');
				const play=document.getElementById('play_pause');
				const title=document.getElementById('title');
				const artist=document.getElementById('artist');
				const prev=document.getElementById('prev');
				const next=document.getElementById('next');
				let current_time=document.getElementById('current_time');
				let progress=document.getElementById('progress');
				let tot_duration=document.getElementById('duration');
				let progress_div=document.getElementById('progress_div');

				

				let isplaying=false;

				const songs=[
					{
						name:"03_-_Zaroorat(bossmobi)",
						title:"03_-_Zaroorat(bossmobi)",
						artist:"ankit tiwari",
						img:"img1"
					},{
						name:"(webmusic.in)_Sau-Dard",
						title:"(webmusic.in)_Sau-Dard",
						artist:"sonu nigam",
						img:"img2"
					},{
						name:"Abhi Mujh Mein Kahin(MyMp3Song)",
						title:"Abhi Mujh Mein Kahin(MyMp3Song)",
						artist:"sonu nigam",
						img:"img3"
					},
				];
				// for play the song
				
				const playMusic = ()=>{
					isplaying=true;
					img.classList.add("anime");
					music.play();
					play.classList.replace('fa-play','fa-pause');
				};
				//for pause the song
				const pauseMusic = ()=>{
					isplaying=false;
					img.classList.remove("anime");
					music.pause();
					play.classList.replace('fa-pause','fa-play');
				};

				play.addEventListener("click",()=>{
					if(isplaying){
						pauseMusic();
						}
						else
						{	playMusic();

					}
				})
				
				const loadsongs=(songs)=>{
					title.textContent=songs.title;
					artist.textContent=songs.artist;
					music.src="music/"+songs.name+".mp3";
					img.src="images/"+songs.img+".jpg";
				};
				songsIndex=0;
				// loadsongs(songs[songsIndex]);
				 const nextsongs=()=>{
				 	songsIndex=(songsIndex+1)% songs.length;
				 	loadsongs(songs[songsIndex]);
				 	playMusic();
				 };

				 const prevsongs=()=>{
				 	songsIndex=(songsIndex-1+songs.length)%songs.length;
				 	loadsongs(songs[songsIndex]);
				 	playMusic();
				 };

				 next.addEventListener("click",nextsongs);
				 prev.addEventListener("click",prevsongs);
				 music.addEventListener("timeupdate",(event)=>{
				 	const {currentTime,duration}=event.srcElement;
				 	
				 	let progress_time=(currentTime/duration)*100;
				 	
				 	progress.style.width =`${progress_time}%`;
				 	
				 	//total duration funcationality
				 	
				 	let min_duration=Math.floor(duration/60);
				 	let sec_duration=Math.floor(duration%60);
				 	
				
					if (sec_duration<10) {
				 	sec_duration=`0${sec_duration}`;	
					 }
				 if (min_duration<10) {
				 	min_duration=`0${min_duration}`;	
					 }	
					 let total_duration=`${min_duration}:${sec_duration}`;
				if (duration) {
					tot_duration.textContent=`${total_duration}`;
				}
				
				//current time functionality

				let min_current=Math.floor(currentTime/60);
				let sec_current=Math.floor(currentTime%60);
				 if (sec_current<10) {
				 	sec_current=`0${sec_current}`;	
					 }
				 if (min_current<10) {
				 	min_current=`0${min_current}`;	
					 }	
					 let total_current=`${min_current}:${sec_current}`;
				
				if (duration) {
					current_time.textContent=`${total_current}`;
				}
				


			 });
				 music.addEventListener("ended",nextsongs);

			progress_div.addEventListener("click",(event)=>{
				//console.log(event);
				const {duration}=music;
				let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
				console.log(move_progress);
				console.log(duration);
				music.currentTime=move_progress;


				// hihahahahiihaaahhaa has diya rinkiya papa hiihahaha hahaaha
			});
				//volume functionality
				function setVolume(){
				music.volume=volume_slider.value/100;
			}
			function muteVol(){
				
				music.volume=0.0;
				volume_slider.value=0;
			
			}
			function fullVol(){
				
				music.volume=1;
				volume_slider.value=100;
			}

