document.addEventListener('DOMContentLoaded', function(){
	//	on place le style dans le <head>, mais avant le style de l'utilisateur
	document.head.insertAdjacentHTML('afterbegin','<style>#visuLater{display:none;font-family:sans-serif;position:fixed;text-align:center;background:#fffe;padding:10pt;width:270px;max-height:255px;box-shadow:0 5pt 15pt #0002;border-radius:3pt;}#visuLater:hover{display:block;}#frameLater{width:270px;height:230px;border:1pt solid #bbb;border-radius:3pt;}#frameLater html,#frameLater body{width:200pt;overflow:hidden}#bookmarkLater{cursor:pointer;-webkit-user-select: none;height:55px;width:55px;color:#222;background:linear-gradient(#0aff8e,#00edff);border-radius:360px;display:block;line-height:55px;margin:0 auto;transition-duration:0.2s;box-shadow:0 5px 10px #0002}#bookmarkLater:active{box-shadow:2pt -2pt 10pt #0004;background:linear-gradient(#f00,#ffc600);width:65px;height:50px;line-height:50px;margin-top:2px;transition-duration:0s;}#bookmarkLater span{cursor:default;opacity:0;background:linear-gradient(90deg,#59b1f2,#b6fff2);position:absolute;padding:0 10px;height:20px;line-height:20px;border-radius:3px;color:#444;font-weight:100;font-size:13px;transition-delay:1s;transition-duration:1s;}#bookmarkLater:active span{opacity:1;transition-delay:0s;transition-duration:0s;}#windowLater{-webkit-user-select:none;user-select:none;position:fixed;box-shadow:0 5px 10px #0003;left:0;top:0;background:linear-gradient(90deg,#0aff8e,#00edff);border-radius:7px;text-align:right;}#listeLater{padding:10px;background:#fff;}#windowLater a{line-height:30px;}#windowLater .supprLater{color:#333;border-radius: 360px;display:inline-block;width:20px;height:20px; text-align:center;line-height:20px;font-size:13px;cursor:pointer;}#windowLater .supprLater:hover{background:#ff8181;color:#fff;}#windowLater .supprLater:active{background:#bbb;}#borderLater{height:20px;}</style>');
	//	la liste de lecture
	document.body.insertAdjacentHTML('beforeend','<div id="windowLater"><div id="borderLater"></div><div id="listeLater"></div></div>');
	//	la carte, cachée pour l'instant
	document.body.insertAdjacentHTML('beforeend','<div id="visuLater"><iframe id="frameLater"></iframe><a id="bookmarkLater" class="ignorePlease">Later!<span>Enregistré !</span></a></div>');



	//détection du passage sur un lien, il faut afficher la carte
	var LiensHover = document.querySelectorAll('a:not(.ignorePlease)');	//saleté de js natif peut pas observer plusieurs balises à la fois, donc on fait des boucles débiles
	for(var i=0; i<LiensHover.length; i++) {	//woohoo
		LiensHover[i].addEventListener('mouseover',function(e){
			document.getElementById('frameLater').src = e.currentTarget.href;//l'iframe pointe sur l'adresse du lien
			document.getElementById('visuLater').style.display = 'block';//plus caché
						
			if(e.currentTarget.offsetLeft+270 > document.body.clientWidth){	// la carte dépasse à droite de l'écran
				document.getElementById('visuLater').style.right = '0px';//	on cale la carte à droite pour lui eviter de dépasser
				document.getElementById('visuLater').style.left = '';
			}
			else{
				document.getElementById('visuLater').style.left = e.currentTarget.offsetLeft+'px';// sinon on la place vers le lien
			}

			if(e.currentTarget.offsetTop+e.currentTarget.offsetHeight+310 > window.innerHeight){//si la carte depasse en bas de l'ecran
				document.getElementById('visuLater').style.position = 'fixed';// par rapport au bords de l'ecran
				document.getElementById('visuLater').style.bottom = '30px';//	on cale la carte en bas pour lui eviter de dépasser
				document.getElementById('visuLater').style.top = '';
			}
			else{
				document.getElementById('visuLater').style.position = 'absolute';// par rapport au lien
				document.getElementById('visuLater').style.top = e.currentTarget.offsetTop+e.currentTarget.offsetHeight+'px';
				document.getElementById('visuLater').style.bottom = '';
			}	
		});
	}



	//cache la carte
	var LiensLeave = document.querySelectorAll('a');//saleté de js natif peut pas observer plusieurs balises à la fois, donc on fait des boucles débiles
	for(var i=0; i<LiensLeave.length; i++) {
		LiensLeave[i].addEventListener('mouseleave',function(){
			// setTimeout(function(){
				document.getElementById('visuLater').style.display = '';	//pouf! disparu!
			// },500);	//a garder eventuellement
		});
	}



	//ajout au bookmarks
	document.getElementById('bookmarkLater').addEventListener('click', function(){//impossible de mettre le listener dans la fonction d'affichage de la carte, il invente des clics
		var lien = document.getElementById('frameLater').src;//donc on redemande le lien à ajouter
		if(lien != null){
			if(localStorage.getItem('LaterPlease') == null){//première utilisation du plugin
				var ArrayURL = [];//on initialise la liste de liens
			}
			else{
				var ArrayURL = JSON.parse(localStorage.getItem('LaterPlease'));//arrays pas supportés dans localStorage, il faut parse comme du JSON
			}
			ArrayURL.push(lien);//ajout du lien dans la liste
			
			localStorage.setItem('LaterPlease', JSON.stringify(ArrayURL));//on place la liste de liens dans le LocalStorage
			buildListe();
		}
	});



	//construction de la liste
	buildListe();
	function buildListe(){
		if(localStorage.getItem('LaterPlease') != null){
			document.getElementById('listeLater').innerHTML = '';//vider les anciens elements
			var ArrayURL = JSON.parse(localStorage.getItem('LaterPlease'));//recuperation du localStorage

			for(var i=0;i<ArrayURL.length;i++){	//pour chaque élément de l'array, on ecrit dans la playlist
				document.getElementById('listeLater').insertAdjacentHTML('beforeend', '<a href="'+ArrayURL[i]+'">'+ArrayURL[i]+'</a> <span class="supprLater" title="'+i+'" href="'+i+'">✕</span><br>');//un lien avec un bouton pour le supprimer
			}
			Suppr();//on re-pose les EventListener sur les boutons qui viennent d'apparaitre
		}
	}



	//suppression d'un item de la liste
	function Suppr(){
		bouttonsSuppression = document.getElementsByClassName('supprLater');
		for(var i = 0; i < bouttonsSuppression.length; i++){
			bouttonsSuppression[i].addEventListener('click', function(e){
				var ArrayURL = JSON.parse(localStorage.getItem('LaterPlease'));//arrays pas supportés dans localStorage, il faut parse comme du JSON
				var Index = e.currentTarget.getAttribute("href");//l'index de l'objet à enlever de l'array
				ArrayURL.splice(Index, 1);//suppression dans l'array temporaire			

				localStorage.setItem('LaterPlease', JSON.stringify(ArrayURL));//réecriture dans le localStorage
				buildListe();//on reconstruit la liste
			});
		}
	}
	
	
	
	var deplacement;
	var offsetX,offsetY;
	//on appuie sur la bordure de la fenetre ?
	document.getElementById("borderLater").addEventListener('mousedown',function(e){
		//on garde en mémoire la position du curseur sur la fenêtre, important pour un vrai glisser-déposer
		offsetX = e.pageX - e.currentTarget.parentNode.offsetLeft;
		offsetY = e.pageY - e.currentTarget.parentNode.offsetTop;
		deplacement = true;//oui, on va bouger la fenetre
		//on couvre la page pour protéger les autres éléments pendant le déplacement
		//permet de bouger la fenêtre très vite sans sélectionner du texte ou sortir du cadre
		document.body.insertAdjacentHTML('beforeend','<div id="secureDrag" style="z-index:10;position:fixed;top:0;bottom:0;left:0;right:0;background:#f000"></div>');
	});

	
	
	//deplacement de la fenêtre
	document.body.addEventListener('mousemove',function(e){
		if(deplacement == true){
			//on déplace la fenêtre en fonction de la position initiale du curseur sur le cadre, avec "offset..."
			document.getElementById('windowLater').style.left = e.pageX-offsetX+'px';
			document.getElementById('windowLater').style.top = e.pageY-offsetY+'px';
		}
	});
	
	
	
	//on relache le bouton de la souris ?
	document.body.addEventListener('mouseup',function(e){
		deplacement = false;//non, on ne déplace plus rien
		if(document.getElementById('secureDrag') !== null){
			//on enlève la protection de la page
			document.getElementById('secureDrag').outerHTML = '';
		}
	});
	

});